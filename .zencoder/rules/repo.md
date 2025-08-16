---
description: Repository Information Overview
alwaysApply: true
---

# SaaS App Information

## Summary
This is a Next.js project bootstrapped with `create-next-app`. It appears to be a SaaS application for educational companions/tutors, where users can interact with AI companions specialized in different subjects like Science, Mathematics, and Language.

## Structure
- **app/**: Next.js app directory containing pages and routes
  - **companions/**: Routes for companion-related pages
  - **my-journey/**: User journey tracking page
  - **sign-in/**: Authentication page
  - **subscription/**: Subscription management page
- **components/**: React components including UI elements
  - **ui/**: Shadcn UI components
- **constants/**: Application constants and data
- **lib/**: Utility functions and shared code
- **public/**: Static assets including icons and images
- **types/**: TypeScript type definitions

## Language & Runtime
**Language**: TypeScript
**Version**: TypeScript 5.x
**Framework**: Next.js 15.4.6
**React Version**: 19.1.0
**Build System**: Next.js build system with Turbopack
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- next: 15.4.6
- react: 19.1.0
- react-dom: 19.1.0
- @radix-ui/react-slot: ^1.2.3
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1
- lucide-react: ^0.539.0
- tailwind-merge: ^3.3.1

**Development Dependencies**:
- typescript: ^5
- eslint: ^9
- eslint-config-next: 15.4.6
- tailwindcss: ^4
- @tailwindcss/postcss: ^4
- @types/node: ^20
- @types/react: ^19
- @types/react-dom: ^19
- @eslint/eslintrc: ^3
- tw-animate-css: ^1.3.6

## UI Framework
**UI Library**: Shadcn UI
**CSS Framework**: TailwindCSS 4.x
**Icon Library**: Lucide

## Build & Installation
```bash
# Install dependencies
npm install

# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Main Entry Points
**Application Entry**: app/page.tsx
**Layout**: app/layout.tsx
**Global Styles**: app/globals.css
**Component Aliases**:
- @/components: UI components
- @/lib/utils: Utility functions
- @/components/ui: UI components
- @/lib: Library functions
- @/hooks: React hooks

## Configuration Files
**TypeScript**: tsconfig.json
**Next.js**: next.config.ts
**PostCSS**: postcss.config.mjs
**ESLint**: eslint.config.mjs
**UI Components**: components.json (Shadcn UI configuration)