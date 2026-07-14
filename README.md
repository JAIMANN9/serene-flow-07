# Peace Code 🕊️

> India's leading free mental health platform built exclusively for college students.

Peace Code is a stigma-free digital mental health platform providing college students with anonymous peer support, AI-powered wellness tools, licensed therapist access, guided journaling, breathing exercises, and validated clinical screenings.

## 🚀 Tech Stack

This project is built with modern web technologies:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Data Fetching:** [TanStack React Query](https://tanstack.com/query/latest)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/) (built on [Radix UI](https://www.radix-ui.com/))
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Charts:** [Recharts](https://recharts.org/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## 📂 Project Structure

```text
├── public/             # Static assets (images, icons, manifest)
├── scripts/            # Utility scripts (e.g., env validation)
├── src/
│   ├── app/            # Next.js App Router routes (pages, layouts)
│   │   ├── (auth)/     # Authentication routes (login, etc.)
│   │   ├── (student)/  # Student dashboard & authenticated routes
│   │   ├── api/        # API endpoints
│   │   └── ...         # Public pages (breathe, journal, psychologist, etc.)
│   ├── assets/         # Project-specific internal assets
│   ├── components/     # Reusable React components (UI, layout, features)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and shared logic
│   └── styles.css      # Global styles
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## ✨ Key Features

- **AI Wellness Chatbot (Peace Bot):** 24/7 AI-powered mental wellness companion using cognitive behavioral framing.
- **Anonymous Peer Support (Peace Buddies):** Moderated rooms for students to connect over shared challenges.
- **Licensed Therapist Counseling:** Stigma-free access to clinical psychologists.
- **Guided Journaling & Mood Tracking:** Private spaces for emotional processing and habit building.
- **Breathing Exercises:** Interactive tools for box breathing, 4-7-8, and physiological sighs.
- **Clinical Screenings:** Validated assessments (e.g., PHQ-9, GAD-7) processed entirely on-device for privacy.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd serene-flow-07-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy your environment variables based on the project requirements (often `.env` or `.env.local`).

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to catch potential issues.
- `npm run format`: Formats code using Prettier.
- `npm run validate:env`: Validates environment variables (`scripts/validate-env.ts`).

## 🎨 Component Development

We use `shadcn/ui` for building customizable UI components.
- Existing components can be found in `src/components`.
- If you need to add a new component from shadcn, use their CLI or manually copy the components into your component folder.
- Ensure that you adhere to the existing design system tokens and Tailwind classes.

## 🤝 Contributing

When contributing to Peace Code, please ensure you:
1. Create a new branch for your feature or bugfix.
2. Follow the existing code style and formatting (`npm run format`).
3. Ensure no linting errors are introduced (`npm run lint`).
4. Write meaningful commit messages.

## 📄 License

Peace Code
