# CodeCraft - Online Code Editor

A cloud-based code editor SaaS application where developers can write, run, and share code snippets in multiple programming languages.

## Tech Stack

- **Frontend:** Next.js 15, TypeScript, Tailwind CSS
- **Backend/Database:** Convex
- **Authentication:** Clerk
- **Code Editor:** Monaco Editor
- **State Management:** Zustand

## Features

- Online IDE supporting 10 languages: JavaScript, TypeScript, Python, Java, C++, C#, Go, Rust, Ruby, Swift
- 5 customizable VSCode themes
- Real-time code execution with Success and Error output
- Free and Pro pricing plans
- Community code sharing system
- Search and filter snippets
- Personal profile with execution history
- Statistics dashboard
- Customizable font size

## Getting Started

### 1. Clone the repository

git clone https://github.com/saran772/code-craft.git
cd code-craft

### 2. Install dependencies

npm install

### 3. Add environment variables

Create a .env.local file and add:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

### 4. Run the app

npx convex dev
npm run dev

Open http://localhost:3000

## Project Structure

code-craft/
├── convex/         Backend - database schema, queries, mutations
├── src/
│   ├── app/
│   │   ├── (root)/      Main editor page
│   │   ├── pricing/     Pricing page
│   │   ├── profile/     User profile and history
│   │   └── snippets/    Community snippets
│   ├── components/      Shared components
│   ├── hooks/           Custom React hooks
│   ├── store/           Zustand state management
│   └── types/           TypeScript types
└── public/              Static assets

## License

MIT
