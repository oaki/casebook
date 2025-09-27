This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Development Guidelines

**Note for AI Assistants:** Always follow these guidelines when making code changes or suggestions for this project. These rules should be applied consistently to all TypeScript, React, and Next.js code.

### TypeScript & React Best Practices

#### Component Development

- Always use TypeScript for type safety and better code management
- Strictly avoid using type `any` (exception: `prevState: any` for form actions when specifically required)
- Define components using TypeScript's specific syntax and features

#### Testing

- Write test cases using Jest for each React component
- Ensure components behave as expected and catch bugs early

#### Type Definitions

- Always use `type` instead of `interface` for type definitions
- Place all types at the end of files
- This aligns with TypeScript best practices

#### Import Practices

- Use specific imports: `import { FC } from 'react'` instead of `import React from 'react'`
- Makes imports more explicit and helps with tree shaking for smaller bundle sizes

#### Styled Components (EmotionJs)

- Prefix styled component names with `Styled`, e.g., `StyledWrapper`
- Place styled components after the component definition
- Avoid using comments like `// Styled component`

#### Export Strategy

- Use named exports instead of default exports
- Provides clarity and easier identification in code editors

#### Internationalization

- Always use global translations via i18n
- Import: `import i18n from '@/lib/i18n'`
- Usage: `const t = i18n.t.bind(i18n)`

#### Authentication & Security

- Use JWT tokens for magic links with 15-minute expiry
- Store secrets in environment variables
- Extract email templates to separate components for modularity

#### General Rules

- Keep server actions clean and modular
- Maintain consistent code structure across the project
- Follow the established patterns for form handling and validation
- Try to avoid using type `any` whenever possible
