<div align="center">

<br/>

<img src="https://raw.githubusercontent.com/harshdwivediiiii/pathfinder-ai/main/public/pathfinder-ai.gif" alt="PathFinder AI" width="100%" />

<br/>

# 🧭 PathFinder AI

### *Your AI-Powered Career Coach — Resumes · Cover Letters · Interview Prep · Industry Insights*

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-pathfinder--ai.vercel.app-000000?style=for-the-badge)](https://pathfinder-ai.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)
[![GSSoC'26](https://img.shields.io/badge/Open_Source-GSSoC'26-8b5cf6?style=for-the-badge)](https://gssoc.girlscript.tech)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-f97316?style=for-the-badge)](CONTRIBUTING.md)
[![Stars](https://img.shields.io/github/stars/harshdwivediiiii/pathfinder-ai?style=for-the-badge&logo=github)](https://github.com/harshdwivediiiii/pathfinder-ai/stargazers)

<br/>

[**🚀 Try It Live**](https://pathfinder-ai.vercel.app) · [**📖 Documentation**](#-getting-started) · [**🤝 Contribute**](#-contributing) · [**🐛 Report Bug**](https://github.com/harshdwivediiiii/pathfinder-ai/issues)

<br/>

</div>

---

## 📌 Table of Contents

- [What is PathFinder AI?](#-what-is-pathfinder-ai)
- [Core Features](#-core-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Authentication Setup](#-authentication-setup)
- [Database Setup](#-database-setup)
- [Deployment](#-deployment)
- [UI/UX Highlights](#-uiux-highlights)
- [Performance](#-performance)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Contributors](#-contributors)
- [License](#-license)

---

## 🌟 What is PathFinder AI?

**PathFinder AI** is an intelligent, full-stack career platform built for students, developers, and professionals navigating today's competitive job market. It combines the power of **Gemini AI** with a modern, production-grade interface to deliver a truly personalized career companion.

Whether you're chasing your first internship, making a career pivot, or leveling up to a senior role — PathFinder AI gives you the tools to get there faster.

### Who is it for?

| Audience | Use Case |
|---|---|
| 🎓 **Students & Graduates** | Build first resumes, prep for campus placements |
| 💻 **Developers** | Craft ATS-optimized tech resumes, prep for system design interviews |
| 🔄 **Career Switchers** | Reframe experience for new industries with AI guidance |
| 📈 **Professionals** | Stay ahead of market trends, salary benchmarks, in-demand skills |

---

## ✨ Core Features

### 📄 AI Resume Builder
Generate ATS-friendly, role-tailored resumes in minutes. The AI analyzes your background and the target job description to produce bullet points that actually get past screening systems.

### ✉️ Cover Letter Generator
Stop staring at a blank page. PathFinder AI writes tone-matched, personalized cover letters for each application — sounding like *you*, not a template.

### 🎯 Interview Prep
Practice with adaptive, role-based interview questions. Get AI-powered feedback on your answers, identify gaps, and walk into every interview with confidence.

### 📊 Industry Insights Dashboard
Real-time trends, salary data, and in-demand skill tracking across industries — so you always know where the market is heading.

### 🗺️ Career Roadmap Generation
Receive a personalized, step-by-step career roadmap based on your current skills, goals, and target role.

### 🔐 Secure Authentication
Full session management, social login, and user profile handling via **Clerk** — zero-config auth that just works.

### 🎨 Premium UI/UX
Smooth Framer Motion animations, responsive layouts, dark mode, and a polished design system built with TailwindCSS and ShadCN UI.

---

## 📸 Screenshots

> Replace placeholder paths with actual screenshots from your `/public` directory.

| Page | Preview |
|---|---|
| 🏠 Landing Page | ![Landing](public/screenshots/landing.png) |
| 🧭 Dashboard | ![Dashboard](public/screenshots/dashboard.png) |
| 🤖 AI Assistant | ![AI Chat](public/screenshots/ai-assistant.png) |
| 🗺️ Roadmap | ![Roadmap](public/screenshots/roadmap.png) |
| 🔄 Onboarding | ![Onboarding](public/screenshots/onboarding.png) |
| 📊 Analytics | ![Analytics](public/screenshots/analytics.png) |

---

## 🛠️ Tech Stack

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS_3-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion)
[![Gemini API](https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev)
[![Prisma](https://img.shields.io/badge/Prisma_ORM-3982CE?style=for-the-badge&logo=prisma)](https://prisma.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.dev)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

<br/>

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Full-stack React framework with server components |
| **Language** | TypeScript | Type-safe development across the entire codebase |
| **Styling** | TailwindCSS + ShadCN UI | Utility-first styling with accessible component primitives |
| **Animations** | Framer Motion | Page transitions, scroll effects, micro-interactions |
| **AI Engine** | Gemini API (Google AI) | Resume generation, cover letters, interview questions |
| **Authentication** | Clerk.dev | Session management, social login, user profiles |
| **ORM** | Prisma | Type-safe database access and migrations |
| **Database** | PostgreSQL | Persistent storage for user data and generated content |
| **Deployment** | Vercel | Edge-optimized hosting with CI/CD |

---

## 📂 Project Structure

```
pathfinder-ai/
│
├── app/                        # Next.js 15 App Router
│   ├── (auth)/                 # Auth routes (sign-in, sign-up)
│   ├── (main)/                 # Protected app routes
│   │   ├── dashboard/          # User dashboard
│   │   ├── resume/             # AI resume builder
│   │   ├── cover-letter/       # Cover letter generator
│   │   ├── interview/          # Interview prep module
│   │   ├── insights/           # Industry insights & analytics
│   │   └── onboarding/         # New user onboarding flow
│   ├── api/                    # API route handlers
│   │   └── [...]/              # Server-side endpoints
│   ├── layout.tsx              # Root layout with providers
│   └── page.tsx                # Landing page
│
├── components/                 # Reusable UI components
│   ├── ui/                     # ShadCN base components
│   └── [...]/                  # Feature-specific components
│
├── lib/                        # Utility libraries
│   ├── prisma.ts               # Prisma client singleton
│   ├── gemini.ts               # Gemini AI configuration
│   └── utils.ts                # Shared utility functions
│
├── hooks/                      # Custom React hooks
├── constants/                  # App-wide constants & config
├── utils/                      # Helper functions
│
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Migration history
│
├── public/                     # Static assets
├── styles/                     # Global CSS
│
├── .env.local                  # Local environment variables (gitignored)
├── .env.example                # Environment variable template
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `v18.17+` — [Download](https://nodejs.org)
- **npm** `v9+` or **pnpm** `v8+`
- **PostgreSQL** database (local or cloud via [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Railway](https://railway.app))

---

### 1. Clone the Repository

```bash
git clone https://github.com/harshdwivediiiii/pathfinder-ai.git
cd pathfinder-ai
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Configure Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

See the full [Environment Variables](#-environment-variables) section below for details on each variable.

### 4. Set Up the Database

Generate the Prisma client and run migrations:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Optionally seed the database with initial data:

```bash
npx prisma db seed
```

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **💡 Keyless Mode:** When developing locally without Clerk keys configured, the app runs in keyless mode — auth routes redirect safely and protected dashboards won't crash. Great for UI-only development.

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# ─────────────────────────────────────────────
# DATABASE
# ─────────────────────────────────────────────
# PostgreSQL connection string
# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL="postgresql://user:password@localhost:5432/pathfinder"

# ─────────────────────────────────────────────
# CLERK AUTHENTICATION
# ─────────────────────────────────────────────
# Get these from https://dashboard.clerk.dev
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Auth redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# ─────────────────────────────────────────────
# AI ENGINE
# ─────────────────────────────────────────────
# Get your API key from https://ai.google.dev
GEMINI_API_KEY=AIza...

# ─────────────────────────────────────────────
# APP (OPTIONAL)
# ─────────────────────────────────────────────
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ | PostgreSQL connection string for Prisma |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | ✅ | Clerk public key (safe to expose) |
| `CLERK_SECRET_KEY` | ✅ | Clerk secret key (server-side only) |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | ✅ | Route for the sign-in page |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | ✅ | Route for the sign-up page |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | ✅ | Redirect after successful sign-in |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | ✅ | Redirect after successful sign-up |
| `GEMINI_API_KEY` | ✅ | Google Gemini API key for AI features |
| `NEXT_PUBLIC_APP_URL` | ⚪ | Base URL for the app (used in production) |

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start the dev server with hot reload at `localhost:3000` |
| Production Build | `npm run build` | Create an optimized production build |
| Production Server | `npm run start` | Serve the production build locally |
| Lint | `npm run lint` | Run ESLint across the codebase |
| Type Check | `npm run type-check` | Run TypeScript type checking |
| Prisma Studio | `npx prisma studio` | Open a visual database browser at `localhost:5555` |
| Generate Client | `npx prisma generate` | Regenerate the Prisma client after schema changes |
| Migrate | `npx prisma migrate dev` | Apply pending migrations in development |
| Reset DB | `npx prisma migrate reset` | Reset the database and re-run all migrations |

---

## 🔐 Authentication Setup

PathFinder AI uses **[Clerk](https://clerk.dev)** for authentication — handling sign-up, sign-in, session management, and user profiles with zero boilerplate.

### Setup Steps

1. Create a free account at [clerk.dev](https://clerk.dev)
2. Create a new application in the Clerk Dashboard
3. Copy your **Publishable Key** and **Secret Key**
4. Add them to your `.env.local` file
5. Configure allowed redirect URLs in the Clerk Dashboard to match your `NEXT_PUBLIC_CLERK_*` variables

### Clerk Features Used

- Email/password authentication
- Social OAuth (Google, GitHub)
- Session tokens (automatically forwarded to API routes)
- `<UserButton />` component for the profile menu
- `auth()` / `currentUser()` helpers in Server Components
- Middleware-based route protection

### Protected Routes

Route protection is handled by Clerk middleware in `middleware.ts`. All routes under `/(main)/` require authentication and redirect unauthenticated users to `/sign-in`.

---

## 🗄️ Database Setup

PathFinder AI uses **PostgreSQL** with **Prisma ORM** for all database operations.

### Recommended Providers

| Provider | Free Tier | Notes |
|---|---|---|
| [Neon](https://neon.tech) | ✅ 512MB | Serverless PostgreSQL, great for Vercel |
| [Supabase](https://supabase.com) | ✅ 500MB | Full Postgres with extras |
| [Railway](https://railway.app) | ✅ $5 credit | Simple setup |
| Local PostgreSQL | N/A | Full control, requires local install |

### Setup Steps

```bash
# 1. Add your DATABASE_URL to .env.local

# 2. Generate the Prisma client
npx prisma generate

# 3. Push schema to the database (first time)
npx prisma migrate dev --name init

# 4. (Optional) Open Prisma Studio to browse your data
npx prisma studio
```

### After Schema Changes

Whenever you modify `prisma/schema.prisma`:

```bash
npx prisma migrate dev --name describe_your_change
npx prisma generate
```

---

## ☁️ Deployment

PathFinder AI is optimized for **[Vercel](https://vercel.com)** deployment.

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/harshdwivediiiii/pathfinder-ai)

**Or manually:**

1. Fork this repository
2. Import it into [vercel.com/new](https://vercel.com/new)
3. Add all environment variables from `.env.example` in the Vercel project settings
4. Deploy — Vercel will auto-detect Next.js and configure the build

### Production Checklist

- [ ] All environment variables added to Vercel project settings
- [ ] `DATABASE_URL` points to a production-ready PostgreSQL database
- [ ] Prisma migrations have been run against the production database
- [ ] Clerk application configured with production keys and correct redirect URLs
- [ ] `NEXT_PUBLIC_APP_URL` set to your production domain
- [ ] Custom domain configured (optional)

### Run Migrations in Production

After deploying, run Prisma migrations against your production database:

```bash
# Using the Vercel CLI or a direct connection
DATABASE_URL="your_prod_db_url" npx prisma migrate deploy
```

---

## 🎨 UI/UX Highlights

PathFinder AI features a premium, production-grade interface designed for clarity and delight.

### Framer Motion Animations
- Smooth page transitions between routes
- Staggered list and card reveals on mount
- Scroll-triggered animations for landing sections
- Hover micro-interactions on interactive elements
- Loading skeleton states during async operations

### Design System
Built on **ShadCN UI** primitives with a custom TailwindCSS theme:
- Consistent spacing, typography, and color scales
- Full dark mode support with `next-themes`
- Accessible components (ARIA labels, keyboard navigation, focus rings)
- Responsive layouts for desktop, tablet, and mobile

### Component Architecture
- Modular, reusable components in `/components`
- Server Components used where possible for performance
- Client Components isolated to interactive UI islands
- Suspense boundaries with meaningful loading states

---

## ⚡ Performance

PathFinder AI is built with performance as a first-class concern.

### Next.js App Router Optimizations
- **React Server Components** for zero-JS data-fetching components
- **Streaming** with `<Suspense>` for incremental page rendering
- **Route-level code splitting** — only load what each page needs
- **`next/image`** for automatic image optimization and lazy loading
- **`next/font`** for optimized, zero-layout-shift font loading

### Database & API
- Prisma query optimization with selective `select` fields
- API routes use edge-compatible patterns where applicable
- Efficient re-fetching patterns to minimize redundant AI API calls

### Caching Strategy
- Next.js `fetch` caching for stable AI-generated content
- Revalidation strategies tuned per data type (insights vs. user data)

---

## 🗺️ Roadmap

The following improvements are planned for future releases:

- [ ] **Job Board Integration** — Pull live job listings and auto-match to your resume
- [ ] **LinkedIn Import** — Parse LinkedIn profiles to auto-populate resume builder
- [ ] **Resume Scoring** — Real-time ATS score with improvement suggestions
- [ ] **AI Chat Assistant** — Conversational career guidance with streaming responses
- [ ] **Multi-language Support** — Internationalization (i18n) for global users
- [ ] **Portfolio Generator** — AI-generated personal portfolio pages
- [ ] **Team / Organization Mode** — HR teams can manage candidate pipelines
- [ ] **Mobile App** — React Native companion app
- [ ] **Slack / Discord Integration** — Daily career tips and job alerts

---

## 🤝 Contributing

PathFinder AI is actively participating in **GirlScript Summer of Code 2026 (GSSoC'26)** ❤️ and we welcome all contributors.

### Quick Start

```bash
# 1. Fork the repository, then clone your fork
git clone https://github.com/YOUR_USERNAME/pathfinder-ai.git
cd pathfinder-ai

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes, commit following Conventional Commits
git commit -m "feat: add resume analytics dashboard"

# 4. Push and open a Pull Request
git push origin feature/your-feature-name
```

### Commit Message Format

```
feat:     new feature
fix:      bug fix
docs:     documentation only
style:    formatting, no logic change
refactor: code restructure, no behavior change
test:     adding or updating tests
chore:    build process or tooling
```

### PR Checklist

Before opening a pull request:

- [ ] Code tested locally and working as expected
- [ ] UI changes are responsive across screen sizes
- [ ] TypeScript types are correct (no `any` shortcuts)
- [ ] Existing code conventions followed
- [ ] Documentation updated if behavior changed
- [ ] Screenshots attached for UI changes
- [ ] Branch synced with latest `main`, conflicts resolved

### Getting Assigned an Issue (GSSoC'26)

1. Browse [open issues](https://github.com/harshdwivediiiii/pathfinder-ai/issues)
2. Comment with your planned approach
3. Wait for maintainer approval before starting
4. Begin work only after official assignment

**Example comment:**
```
Hi team 👋 I'd like to work on this issue under GSSoC'26.

My approach:
- [Describe what you'll change]
- [Mention any libraries or patterns you'll use]

Could you please assign it to me?
```

### Good First Issues

Look for issues tagged:

- `good first 
## 📌 Table of Contents

- [What is PathFinder AI?](#-what-is-pathfinder-ai)
- [Core Features](#-core-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Authentication Setup](#-authentication-setup)
- [Database Setup](#-database-setup)
- [Deployment](#-deployment)
- [UI/UX Highlights](#-uiux-highlights)
- [Performance](#-performance)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Contributors](#-contributors)
- [License](#-license)

---

## 🌟 What is PathFinder AI?

**PathFinder AI** is an intelligent, full-stack career platform built for students, developers, and professionals navigating today's competitive job market. It combines the power of **Gemini AI** with a modern, production-grade interface to deliver a truly personalized career companion.

Whether you're chasing your first internship, making a career pivot, or leveling up to a senior role — PathFinder AI gives you the tools to get there faster.

### Who is it for?

| Audience | Use Case |
|---|---|
| 🎓 **Students & Graduates** | Build first resumes, prep for campus placements |
| 💻 **Developers** | Craft ATS-optimized tech resumes, prep for system design interviews |
| 🔄 **Career Switchers** | Reframe experience for new industries with AI guidance |
| 📈 **Professionals** | Stay ahead of market trends, salary benchmarks, in-demand skills |

---

## ✨ Core Features

### 📄 AI Resume Builder
Generate ATS-friendly, role-tailored resumes in minutes. The AI analyzes your background and the target job description to produce bullet points that actually get past screening systems.

### ✉️ Cover Letter Generator
Stop staring at a blank page. PathFinder AI writes tone-matched, personalized cover letters for each application — sounding like *you*, not a template.

### 🎯 Interview Prep
Practice with adaptive, role-based interview questions. Get AI-powered feedback on your answers, identify gaps, and walk into every interview with confidence.

### 📊 Industry Insights Dashboard
Real-time trends, salary data, and in-demand skill tracking across industries — so you always know where the market is heading.

### 🗺️ Career Roadmap Generation
Receive a personalized, step-by-step career roadmap based on your current skills, goals, and target role.

### 🔐 Secure Authentication
Full session management, social login, and user profile handling via **Clerk** — zero-config auth that just works.

### 🎨 Premium UI/UX
Smooth Framer Motion animations, responsive layouts, dark mode, and a polished design system built with TailwindCSS and ShadCN UI.

---

## 📸 Screenshots

> Replace placeholder paths with actual screenshots from your `/public` directory.

| Page | Preview |
|---|---|
| 🏠 Landing Page | ![Landing](public/screenshots/landing.png) |
| 🧭 Dashboard | ![Dashboard](public/screenshots/dashboard.png) |
| 🤖 AI Assistant | ![AI Chat](public/screenshots/ai-assistant.png) |
| 🗺️ Roadmap | ![Roadmap](public/screenshots/roadmap.png) |
| 🔄 Onboarding | ![Onboarding](public/screenshots/onboarding.png) |
| 📊 Analytics | ![Analytics](public/screenshots/analytics.png) |

---

## 🛠️ Tech Stack

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS_3-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion)
[![Gemini API](https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev)
[![Prisma](https://img.shields.io/badge/Prisma_ORM-3982CE?style=for-the-badge&logo=prisma)](https://prisma.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.dev)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

<br/>

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Full-stack React framework with server components |
| **Language** | TypeScript | Type-safe development across the entire codebase |
| **Styling** | TailwindCSS + ShadCN UI | Utility-first styling with accessible component primitives |
| **Animations** | Framer Motion | Page transitions, scroll effects, micro-interactions |
| **AI Engine** | Gemini API (Google AI) | Resume generation, cover letters, interview questions |
| **Authentication** | Clerk.dev | Session management, social login, user profiles |
| **ORM** | Prisma | Type-safe database access and migrations |
| **Database** | PostgreSQL | Persistent storage for user data and generated content |
| **Deployment** | Vercel | Edge-optimized hosting with CI/CD |

---

## 📂 Project Structure

```
pathfinder-ai/
│
├── app/                        # Next.js 15 App Router
│   ├── (auth)/                 # Auth routes (sign-in, sign-up)
│   ├── (main)/                 # Protected app routes
│   │   ├── dashboard/          # User dashboard
│   │   ├── resume/             # AI resume builder
│   │   ├── cover-letter/       # Cover letter generator
│   │   ├── interview/          # Interview prep module
│   │   ├── insights/           # Industry insights & analytics
│   │   └── onboarding/         # New user onboarding flow
│   ├── api/                    # API route handlers
│   │   └── [...]/              # Server-side endpoints
│   ├── layout.tsx              # Root layout with providers
│   └── page.tsx                # Landing page
│
├── components/                 # Reusable UI components
│   ├── ui/                     # ShadCN base components
│   └── [...]/                  # Feature-specific components
│
├── lib/                        # Utility libraries
│   ├── prisma.ts               # Prisma client singleton
│   ├── gemini.ts               # Gemini AI configuration
│   └── utils.ts                # Shared utility functions
│
├── hooks/                      # Custom React hooks
├── constants/                  # App-wide constants & config
├── utils/                      # Helper functions
│
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/             # Migration history
│
├── public/                     # Static assets
├── styles/                     # Global CSS
│
├── .env.local                  # Local environment variables (gitignored)
├── .env.example                # Environment variable template
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `v18.17+` — [Download](https://nodejs.org)
- **npm** `v9+` or **pnpm** `v8+`
- **PostgreSQL** database (local or cloud via [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Railway](https://railway.app))

---

### 1. Clone the Repository

```bash
git clone https://github.com/harshdwivediiiii/pathfinder-ai.git
cd pathfinder-ai
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Configure Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

See the full [Environment Variables](#-environment-variables) section below for details on each variable.

### 4. Set Up the Database

Generate the Prisma client and run migrations:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Optionally seed the database with initial data:

```bash
npx prisma db seed
```

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **💡 Keyless Mode:** When developing locally without Clerk keys configured, the app runs in keyless mode — auth routes redirect safely and protected dashboards won't crash. Great for UI-only development.

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# ─────────────────────────────────────────────
# DATABASE
# ─────────────────────────────────────────────
# PostgreSQL connection string
# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL="postgresql://user:password@localhost:5432/pathfinder"

# ─────────────────────────────────────────────
# CLERK AUTHENTICATION
# ─────────────────────────────────────────────
# Get these from https://dashboard.clerk.dev
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Auth redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# ─────────────────────────────────────────────
# AI ENGINE
# ─────────────────────────────────────────────
# Get your API key from https://ai.google.dev
GEMINI_API_KEY=AIza...

# ─────────────────────────────────────────────
# APP (OPTIONAL)
# ─────────────────────────────────────────────
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ | PostgreSQL connection string for Prisma |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | ✅ | Clerk public key (safe to expose) |
| `CLERK_SECRET_KEY` | ✅ | Clerk secret key (server-side only) |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | ✅ | Route for the sign-in page |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | ✅ | Route for the sign-up page |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | ✅ | Redirect after successful sign-in |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | ✅ | Redirect after successful sign-up |
| `GEMINI_API_KEY` | ✅ | Google Gemini API key for AI features |
| `NEXT_PUBLIC_APP_URL` | ⚪ | Base URL for the app (used in production) |

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start the dev server with hot reload at `localhost:3000` |
| Production Build | `npm run build` | Create an optimized production build |
| Production Server | `npm run start` | Serve the production build locally |
| Lint | `npm run lint` | Run ESLint across the codebase |
| Type Check | `npm run type-check` | Run TypeScript type checking |
| Prisma Studio | `npx prisma studio` | Open a visual database browser at `localhost:5555` |
| Generate Client | `npx prisma generate` | Regenerate the Prisma client after schema changes |
| Migrate | `npx prisma migrate dev` | Apply pending migrations in development |
| Reset DB | `npx prisma migrate reset` | Reset the database and re-run all migrations |

---

## 🔐 Authentication Setup

PathFinder AI uses **[Clerk](https://clerk.dev)** for authentication — handling sign-up, sign-in, session management, and user profiles with zero boilerplate.

### Setup Steps

1. Create a free account at [clerk.dev](https://clerk.dev)
2. Create a new application in the Clerk Dashboard
3. Copy your **Publishable Key** and **Secret Key**
4. Add them to your `.env.local` file
5. Configure allowed redirect URLs in the Clerk Dashboard to match your `NEXT_PUBLIC_CLERK_*` variables

### Clerk Features Used

- Email/password authentication
- Social OAuth (Google, GitHub)
- Session tokens (automatically forwarded to API routes)
- `<UserButton />` component for the profile menu
- `auth()` / `currentUser()` helpers in Server Components
- Middleware-based route protection

### Protected Routes

Route protection is handled by Clerk middleware in `middleware.ts`. All routes under `/(main)/` require authentication and redirect unauthenticated users to `/sign-in`.

---

## 🗄️ Database Setup

PathFinder AI uses **PostgreSQL** with **Prisma ORM** for all database operations.

### Recommended Providers

| Provider | Free Tier | Notes |
|---|---|---|
| [Neon](https://neon.tech) | ✅ 512MB | Serverless PostgreSQL, great for Vercel |
| [Supabase](https://supabase.com) | ✅ 500MB | Full Postgres with extras |
| [Railway](https://railway.app) | ✅ $5 credit | Simple setup |
| Local PostgreSQL | N/A | Full control, requires local install |

### Setup Steps

```bash
# 1. Add your DATABASE_URL to .env.local

# 2. Generate the Prisma client
npx prisma generate

# 3. Push schema to the database (first time)
npx prisma migrate dev --name init

# 4. (Optional) Open Prisma Studio to browse your data
npx prisma studio
```

### After Schema Changes

Whenever you modify `prisma/schema.prisma`:

```bash
npx prisma migrate dev --name describe_your_change
npx prisma generate
```

---

## ☁️ Deployment

PathFinder AI is optimized for **[Vercel](https://vercel.com)** deployment.

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/harshdwivediiiii/pathfinder-ai)

> 🌐 **Live Demo:** [pathfinder-ai-auta.vercel.app](https://pathfinder-ai-auta.vercel.app)

**Or manually:**

1. Fork this repository
2. Import it into [vercel.com/new](https://vercel.com/new)
3. Add all environment variables from `.env.example` in the Vercel project settings
4. Deploy — Vercel will auto-detect Next.js and configure the build

### Production Checklist

- [ ] All environment variables added to Vercel project settings
- [ ] `DATABASE_URL` points to a production-ready PostgreSQL database
- [ ] Prisma migrations have been run against the production database
- [ ] Clerk application configured with production keys and correct redirect URLs
- [ ] `NEXT_PUBLIC_APP_URL` set to your production domain
- [ ] Custom domain configured (optional)

### Run Migrations in Production

After deploying, run Prisma migrations against your production database:

```bash
# Using the Vercel CLI or a direct connection
DATABASE_URL="your_prod_db_url" npx prisma migrate deploy
```

---

## 🎨 UI/UX Highlights

PathFinder AI features a premium, production-grade interface designed for clarity and delight.

### Framer Motion Animations
- Smooth page transitions between routes
- Staggered list and card reveals on mount
- Scroll-triggered animations for landing sections
- Hover micro-interactions on interactive elements
- Loading skeleton states during async operations

### Design System
Built on **ShadCN UI** primitives with a custom TailwindCSS theme:
- Consistent spacing, typography, and color scales
- Full dark mode support with `next-themes`
- Accessible components (ARIA labels, keyboard navigation, focus rings)
- Responsive layouts for desktop, tablet, and mobile

### Component Architecture
- Modular, reusable components in `/components`
- Server Components used where possible for performance
- Client Components isolated to interactive UI islands
- Suspense boundaries with meaningful loading states

---

## ⚡ Performance

PathFinder AI is built with performance as a first-class concern.

### Next.js App Router Optimizations
- **React Server Components** for zero-JS data-fetching components
- **Streaming** with `<Suspense>` for incremental page rendering
- **Route-level code splitting** — only load what each page needs
- **`next/image`** for automatic image optimization and lazy loading
- **`next/font`** for optimized, zero-layout-shift font loading

### Database & API
- Prisma query optimization with selective `select` fields
- API routes use edge-compatible patterns where applicable
- Efficient re-fetching patterns to minimize redundant AI API calls

### Caching Strategy
- Next.js `fetch` caching for stable AI-generated content
- Revalidation strategies tuned per data type (insights vs. user data)

---

## 🗺️ Roadmap

The following improvements are planned for future releases:

- [ ] **Job Board Integration** — Pull live job listings and auto-match to your resume
- [ ] **LinkedIn Import** — Parse LinkedIn profiles to auto-populate resume builder
- [ ] **Resume Scoring** — Real-time ATS score with improvement suggestions
- [ ] **AI Chat Assistant** — Conversational career guidance with streaming responses
- [ ] **Multi-language Support** — Internationalization (i18n) for global users
- [ ] **Portfolio Generator** — AI-generated personal portfolio pages
- [ ] **Team / Organization Mode** — HR teams can manage candidate pipelines
- [ ] **Mobile App** — React Native companion app
- [ ] **Slack / Discord Integration** — Daily career tips and job alerts

---

## 🤝 Contributing

PathFinder AI is actively participating in **GirlScript Summer of Code 2026 (GSSoC'26)** ❤️ and we welcome all contributors.

### Quick Start

```bash
# 1. Fork the repository, then clone your fork
git clone https://github.com/YOUR_USERNAME/pathfinder-ai.git
cd pathfinder-ai

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes, commit following Conventional Commits
git commit -m "feat: add resume analytics dashboard"

# 4. Push and open a Pull Request
git push origin feature/your-feature-name
```

### Commit Message Format

```
feat:     new feature
fix:      bug fix
docs:     documentation only
style:    formatting, no logic change
refactor: code restructure, no behavior change
test:     adding or updating tests
chore:    build process or tooling
```

### PR Checklist

Before opening a pull request:

- [ ] Code tested locally and working as expected
- [ ] UI changes are responsive across screen sizes
- [ ] TypeScript types are correct (no `any` shortcuts)
- [ ] Existing code conventions followed
- [ ] Documentation updated if behavior changed
- [ ] Screenshots attached for UI changes
- [ ] Branch synced with latest `main`, conflicts resolved

### Getting Assigned an Issue (GSSoC'26)

1. Browse [open issues](https://github.com/harshdwivediiiii/pathfinder-ai/issues)
2. Comment with your planned approach
3. Wait for maintainer approval before starting
4. Begin work only after official assignment

**Example comment:**
```
Hi team 👋 I'd like to work on this issue under GSSoC'26.

My approach:
- [Describe what you'll change]
- [Mention any libraries or patterns you'll
