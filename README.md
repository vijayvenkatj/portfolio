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

## Static Site Generation (SSG) & Best Practices

This portfolio is built using Next.js with the `/app` directory, which leverages Static Site Generation (SSG) by default for all pages and components unless dynamic or client-only logic is introduced.

### How SSG Works Here
- The main page (`src/app/page.tsx`) and the `HomePage` component are stateless and do not fetch data at runtime, ensuring the site is fully static and fast.
- All content is rendered at build time, optimizing SEO and load speed.

### Client Components
Some sections, such as `Projects` and `Skills`, are marked as client components (`"use client"`) because they use React state, refs, or interactivity that requires JavaScript on the client side. All other major sections are server components and are statically rendered.

### Best Practices Implemented
- **No client-only code in the main page or HomePage**: Ensures SSG compatibility.
- **Client components are isolated**: Only interactive sections use `"use client"`.
- **No runtime data fetching**: All data is static or imported at build time.
- **Accessibility and SEO**: Semantic HTML, meta tags, and structured data are included.

### Keeping the Site Static
- Avoid adding `"use client"` to page or layout files unless necessary.
- Do not fetch data in client components using `fetch` or `axios` unless it is for interactive, non-SEO-critical features.
- Pass static data as props from server components/pages to client components if needed.

---

For any dynamic or API-driven features, consider using Incremental Static Regeneration (ISR) or Server-Side Rendering (SSR) as needed, but for a portfolio, SSG is the best for speed and SEO.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
