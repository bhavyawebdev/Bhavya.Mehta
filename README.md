# Portfolio — Bhavya

Production-ready personal portfolio. MERN stack developer, dark editorial / Linear-leaning aesthetic.

## Stack

- **Vite + React 19 + TypeScript** — fast dev, fast build
- **Tailwind CSS v4** (`@tailwindcss/vite`, no PostCSS plugin)
- **Motion** (`motion/react`) — declarative React animations
- **GSAP + ScrollTrigger** — available for advanced timelines (used via motion primarily)
- **Phosphor Icons** — `@phosphor-icons/react`
- **Resend** — transactional email via Vercel serverless function
- **Vercel** — static frontend + `/api/*` serverless

## Local development

```bash
cp .env.example .env.local       # fill values
npm install
npm run dev                       # http://localhost:5173
npm run build                     # type-check + production build
npm run preview                   # serve dist/
npm run lint                      # oxlint
```

## Environment variables

Two classes of variables, both defined in `.env.example`:

| Variable | Scope | Purpose |
| --- | --- | --- |
| `VITE_PROFILE_EMAIL` | public | Email shown in the UI |
| `VITE_PROFILE_GITHUB` / `VITE_PROFILE_LINKEDIN` / `VITE_PROFILE_TWITTER` | public | Social links |
| `VITE_SITE_URL` | public | Canonical site URL used in sitemap/OG |
| `RESEND_API_KEY` | **server only** | Resend API key — never reaches the browser |
| `CONTACT_TO_EMAIL` | server | Where contact-form submissions land |
| `CONTACT_FROM_EMAIL` | server | Verified sender on your domain (`"Portfolio <noreply@yourdomain.com>"`) |

Anything prefixed with `VITE_` is bundled into the client. Anything else stays server-side and is only read inside `api/*.ts` serverless functions. Inspect the deployed bundle — the Resend key is never shipped.

## Contact form

```
[ React form ] ──POST /api/contact──▶ [ Vercel serverless fn ]
                                          │
                                          ├─ validates input
                                          ├─ reads RESEND_API_KEY from env
                                          ├─ calls Resend API
                                          └─ returns { ok: true }
```

The browser only talks to your own domain. The Resend key is never accessible from devtools.

## Deploy (Vercel)

1. Push to GitHub.
2. Vercel → Import repo. Framework auto-detected as Vite.
3. Project Settings → Environment Variables, add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` = `bhavyamehta2819@gmail.com`
   - `CONTACT_FROM_EMAIL` = `Portfolio <noreply@yourdomain.com>` (sender must be verified in Resend)
4. Deploy. Frontend is static; `/api/contact` is a serverless function.

## Conventions

- Components in `src/components`, content in `src/data/content.ts`.
- All sections respect `prefers-reduced-motion`.
- Single accent (`--color-acid-400`) used across the page.
- Hero placeholder imagery is `picsum.photos` — swap to real assets in `/public` when ready.

## License

MIT — feel free to fork and adapt.
