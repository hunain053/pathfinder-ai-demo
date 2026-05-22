"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { generateGeminiContent } from "@/lib/gemini";

/**
 * Generates a professional cover letter using Gemini AI.
 * If AI generation fails, saves a high-quality fallback cover letter.
 */
export async function generateCoverLetter(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  if (!data?.jobTitle || !data?.companyName || !data?.jobDescription) {
    throw new Error("Missing required fields");
  }

  const prompt = `
Write a professional cover letter for a ${data.jobTitle} position at ${data.companyName}.

Candidate Details:
- Name: ${user.name || "Candidate"}
- Industry: ${user.industry || "Technology"}
- Experience: ${user.experience || "0"} years
- Skills: ${user.skills?.join(", ") || "Not specified"}
- Background: ${user.bio || "Not specified"}

Job Description:
${data.jobDescription}

Requirements:
- Professional, engaging, and persuasive tone
- Max 400 words
- Highlight how the candidate's skills and experience match the job description
- Use markdown formatting for readability
`;

  try {
    const result = await generateGeminiContent(prompt);
    const content = result.response.text().trim();

    if (!content) throw new Error("AI response was empty.");

    const coverLetter = await db.coverLetter.create({
      data: {
        content,
        companyName: data.companyName,
        jobTitle: data.jobTitle,
        jobDescription: data.jobDescription,
        status: "completed",
        userId: user.id,
      },
    });

    return coverLetter;
  } catch (error) {
    console.error("Error generating cover letter, using fallback:", error);

    const fallbackContent = `
# Cover Letter

Dear Hiring Manager,

I am writing to express my interest in the ${data.jobTitle} position at ${data.companyName}. 

Based on my background in the ${user.industry || "relevant"} industry and my experience, I believe I can bring valuable skills to your team. I would love the opportunity to discuss how my qualifications align with your needs.

Thank you for your time and consideration.

Sincerely,
${user.name || "Candidate"}
`;

    const coverLetter = await db.coverLetter.create({
      data: {
        content: fallbackContent.trim(),
        companyName: data.companyName,
        jobTitle: data.jobTitle,
        jobDescription: data.jobDescription,
        status: "fallback",
        userId: user.id,
      },
    });

    return coverLetter;
  }
}

/**
 * Fetches all cover letters for the signed-in user, newest first.
 */
export async function getCoverLetters() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  return db.coverLetter.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
  });
}

/**
 * Fetches a single cover letter by ID (ownership-checked).
 */
export async function getCoverLetter(id) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  return db.coverLetter.findFirst({
    where: {
      id,
      userId: user.id,
    },
  });
}

/**
 * Deletes a specific cover letter record (ownership-checked).
 */
export async function deleteCoverLetter(id) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  return db.coverLetter.delete({
    where: {
      id,
      userId: user.id,
    },
  });
}