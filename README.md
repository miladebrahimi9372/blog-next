# Blog Next

A modern, full-stack blogging platform built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. This application demonstrates server-side rendering, API integration, and best practices for scalable web applications.

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running the Project](#running-the-project)
- [Development Guide](#development-guide)
- [Troubleshooting](#troubleshooting)

## Overview

**Blog Next** is a full-featured blogging platform that allows users to:

- View a collection of blog articles
- Read individual article details
- Create new blog posts with title and description
- Persistent data storage via JSON Server backend

### Key Features

- **Server-Side Rendering (SSR)** – Optimized performance with Next.js App Router
- **Type-Safe** – Full TypeScript support with strict type checking
- **Component-Based Architecture** – Modular, reusable React components
- **Responsive Design** – Tailwind CSS for mobile-first UI
- **Data Persistence** – JSON Server for mock backend API
- **Modern React** – React 19 with hooks and async components

## Tech Stack

| Layer              | Technology                |
| ------------------ | ------------------------- |
| **Framework**      | Next.js 15                |
| **Runtime**        | React 19                  |
| **Language**       | TypeScript 5+             |
| **Styling**        | Tailwind CSS              |
| **Backend**        | JSON Server (development) |
| **Build Tool**     | Webpack (via Next.js)     |
| **Linting**        | ESLint                    |
| **CSS Processing** | PostCSS                   |

## Project Structure

```
blog-next/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout wrapper
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── blogs/
│   │   ├── page.tsx             # Blogs listing page (server component)
│   │   └── [id]/
│   │       └── page.tsx         # Individual blog detail page (dynamic route)
│   └── create-blog/
│       └── page.tsx             # Create blog post page
│
├── components/                   # Reusable React components
│   ├── index.ts                 # Component barrel exports
│   ├── article/
│   │   ├── article.tsx          # Article card component
│   │   ├── _types.ts            # Article type definitions
│   │   └── index.ts             # Barrel export
│   ├── container/
│   │   ├── container.tsx        # Layout wrapper component
│   │   ├── _types.ts            # Container prop types
│   │   └── index.ts             # Barrel export
│   ├── create-blog-form/
│   │   ├── create-blog-form.tsx # Blog creation form (client component)
│   │   └── index.ts             # Barrel export
│   └── navbar/
│       ├── navbar.tsx           # Navigation component
│       └── index.ts             # Barrel export
│
├── data-access/                  # Data fetching & API layer
│   ├── index.ts                 # Barrel exports
│   ├── get-articles/
│   │   ├── get-articles.ts      # Fetch articles (with overloads)
│   │   ├── _types.ts            # Response type definitions
│   │   └── index.ts             # Barrel export
│   └── post-articles/
│       ├── post-articles.ts     # Create new article
│       ├── _type.ts             # Request/response types
│       └── index.ts             # Barrel export
│
├── json-server/
│   └── db.json                  # JSON Server database (development)
│
├── public/                       # Static assets
│
├── Configuration Files
│   ├── next.config.ts           # Next.js configuration
│   ├── tsconfig.json            # TypeScript configuration
│   ├── tailwind.config.ts        # Tailwind CSS configuration
│   ├── postcss.config.mjs        # PostCSS configuration
│   ├── eslint.config.mjs         # ESLint configuration
│   └── package.json             # Dependencies & scripts
│
└── README.md                     # This file

```

### Key Directory Descriptions

- **`app/`** – Next.js App Router pages. Each folder/file maps to a route.
- **`components/`** – Reusable UI components with type definitions and barrel exports for clean imports.
- **`data-access/`** – Centralized API layer with typed request/response handling and overloaded functions.
- **`json-server/`** – Mock backend database (development only).

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** ≥ 18.17 (or higher)
- **npm** ≥ 9 or **yarn** ≥ 1.22

Check versions:

```bash
node --version
npm --version
```

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/miladebrahimi9372/blog-next.git
   cd blog-next
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

4. **Verify the installation**
   ```bash
   npm run build
   ```

## Running the Project

### Development Mode

**Terminal 1 – Start the JSON Server (backend):**

```bash
npm run json-server
```

This starts the mock API server on `http://localhost:3001`.

**Terminal 2 – Start the Next.js development server:**

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production Build

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

### Available Scripts

| Script                | Purpose                                  |
| --------------------- | ---------------------------------------- |
| `npm run dev`         | Start development server with hot reload |
| `npm run build`       | Create optimized production build        |
| `npm start`           | Start production server                  |
| `npm run json-server` | Start JSON Server on port 3001           |
| `npm run lint`        | Run ESLint to check code quality         |

## Development Guide

### Coding Standards

- **TypeScript** – All files should use TypeScript (`.ts`, `.tsx`). Avoid `any` types; use proper type definitions.
- **Component Structure** – Functional components with hooks; prefer server components where data fetching is needed.
- **Naming Conventions**:
  - Components: PascalCase (e.g., `CreateBlogForm`)
  - Utilities/hooks: camelCase (e.g., `getArticles`)
  - Files/folders: kebab-case (e.g., `create-blog-form.tsx`, get-articles)
  - Types/interfaces: PascalCase (e.g., `BlogsPageProps`, `GetArticlesResponse`)
  - Private types/files: Prefix with underscore (e.g., `_types.ts`)
- **Imports** – Use absolute imports with `@/` alias for cleaner code.
- **Styling** – Use Tailwind CSS utility classes; avoid inline styles.

### Component Best Practices

- **Server Components** – Use for data fetching and static content (default in `app/`).
- **Client Components** – Add `"use client"` directive for interactive features (forms, state management).
- **Barrel Exports** – Use `index.ts` files in component folders for cleaner imports:
  ```typescript
  // Instead of: import { Article } from "@/components/article/article"
  // Use: import { Article } from "@/components"
  ```

### Type Safety

Use function overloads for conditional return types:

```typescript
export function getArticles(
  articleId: string | number
): Promise<GetArticlesResponse>
export function getArticles(
  articleId?: undefined
): Promise<GetArticlesResponse[]>
export async function getArticles(articleId?: string | number) {
  // Implementation
}
```

### Branching Strategy

- **`main`** – Production-ready code. All commits must be tested.
- **`develop`** – Integration branch for features.
- **`feature/*`** – Feature branches (e.g., `feature/comment-system`).
- **`bugfix/*`** – Bug fix branches (e.g., `bugfix/article-loading`).

**Branch naming:** `<type>/<description>` (e.g., `feature/dark-mode`, `bugfix/404-page`)

### Contribution Guidelines

1. Create a feature branch from `develop`:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes with clear, descriptive commits:

   ```bash
   git commit -m "feat: add comment system to articles"
   ```

3. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a pull request to `develop` with:

   - Clear description of changes
   - Related issue numbers (if applicable)
   - Verification that code passes linting

5. Address review feedback and merge after approval.

### Commit Message Format

Follow conventional commits:

```
<type>(<scope>): <description>

[optional body]
[optional footer]
```

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Example:**

```
feat(articles): add search functionality
fix(navbar): resolve mobile menu bug
docs(readme): update setup instructions
```

## Troubleshooting

### Known Limitations

- **JSON Server** – Not suitable for production; use a real database
- **Authentication** – Currently no user authentication; add with NextAuth.js or similar
- **Rate Limiting** – Consider implementing rate limiting for API endpoints
- **Error Handling** – Global error boundaries and logging not yet implemented

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [JSON Server Documentation](https://github.com/typicode/json-server)

---

**Maintained by:** [miladebrahimi9372](https://github.com/miladebrahimi9372)  
**Last Updated:** November 2025
