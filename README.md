# Bontu Dereje — Portfolio

A fully static personal portfolio built with **Next.js (App Router)**, **React**, **TypeScript** and **Tailwind CSS v4**. There is no backend, database or PHP — all content lives in typed data files and the site exports to plain HTML/CSS/JS.

## Requirements

- Node.js 20+
- npm

## Commands

```bash
npm run dev      # local dev server (http://localhost:3000)
npm run build    # production build → static site in out/
npm run lint     # eslint
npx tsc --noEmit # type check
```

Preview the exported site locally:

```bash
npx serve out
```

## Editing content

Everything is content-driven — you normally never touch a component to update the site.

| What | Where |
| --- | --- |
| Name, title, tagline, about, contact details, socials, CV | `src/data/site.ts` |
| Projects and case studies | `src/data/projects.ts` |
| Work experience timeline | `src/data/experiences.ts` |
| Services data (not currently rendered on the homepage) | `src/data/services.ts` |
| Images and CV file | `public/` |

### Projects

Each entry in `src/data/projects.ts` renders a card on the homepage and a case study at `/projects/<slug>/`. Only sections with content are shown, so `problem`, `solution`, `my_role`, `highlights`, `architecture_notes`, `github_url` and `live_url` are all optional.

Screenshots belong in `public/images/projects/`. Without one, a generated preview is rendered.

### Case study routes

Static case-study pages are generated from `PROJECTS` via `generateStaticParams`, and `dynamicParams = false` means unknown slugs return the 404 page. Add a project to the data file and its route is built automatically.

## Contact form

The site is static, so the form posts to a hosted endpoint instead of a backend:

1. Create a free form at [Formspree](https://formspree.io).
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.
3. Rebuild.

When the endpoint is not configured, the form validates the fields and then opens the visitor's email client with the message pre-filled — it never fails silently.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL used for canonical/Open Graph tags, `sitemap.xml` and `robots.txt`. Required for production. |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Contact form endpoint. Optional. |

Without `NEXT_PUBLIC_SITE_URL` the site still builds; canonical tags and the sitemap are simply omitted.

## Deployment

`next.config.ts` uses `output: 'export'` and `trailingSlash: true`, so `npm run build` writes a self-contained `out/` directory.

- **Vercel**: import the repo, set the environment variables, deploy. No extra configuration needed.
- **Netlify / Cloudflare Pages / GitHub Pages / any static host**: publish the `out/` directory.

## SEO

- Per-page titles, descriptions, canonical URLs and Open Graph metadata
- Generated `sitemap.xml` and `robots.txt`
- Semantic headings, one `h1` per page, descriptive image alt text
- Custom 404 page
- Statically rendered HTML — all text is present without JavaScript

## Theme

Dark is the default. The stored preference is applied by a small inline script before first paint, so there is no flash of the wrong theme. Toggle state persists in `localStorage` under `portfolio-theme`.
