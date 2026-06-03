import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { respondError, ERROR_CODES } from "@/lib/api/error-handler";
import { messageCreateSchema } from "@/lib/schemas/forms";
import { validateId } from "@/lib/validate";

export async function POST(request, context) {
  const params = await context.params;
  const idValidation = validateId(params.id);

  if (!idValidation.success) {
    return respondError(ERROR_CODES.VALIDATION_ERROR, "Conversation ID is required", idValidation.errors);
  }

  try {
    const { userId } = await auth();

    if (!userId) {
      return respondError(ERROR_CODES.UNAUTHORIZED);
    }

    const user = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (!user) {
      return respondError(ERROR_CODES.USER_NOT_FOUND);
    }

    const conversation = await db.conversation.findFirst({
      where: {
        id: idValidation.data,
        userId: user.id,
      },
    });

    if (!conversation) {
      return respondError(ERROR_CODES.RESOURCE_NOT_FOUND, "Conversation not found");
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return respondError(ERROR_CODES.VALIDATION_ERROR, "Invalid request body");
    }

    const validation = messageCreateSchema.safeParse(body);

    if (!validation.success) {
      return respondError(
        ERROR_CODES.VALIDATION_ERROR,
        "Invalid message payload",
        validation.error.flatten().fieldErrors
      );
    }

    const { role, content } = validation.data;

    const message = await db.message.create({
      data: {
        conversationId: idValidation.data,
        role,
        content,
      },
    });

    await db.conversation.updateMany({
      where: {
        id: idValidation.data,
        userId: user.id,
      },
      data: {
        updatedAt: new Date(),
      },
    });

    return Response.json(message);
  } catch (error) {
    console.error("POST message error:", error);
    return respondError(ERROR_CODES.INTERNAL_SERVER_ERROR, "Failed to save message");
  }
}