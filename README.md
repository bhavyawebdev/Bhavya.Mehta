# Bhavya Mehta — Portfolio

A modern, responsive portfolio website for **Bhavya Mehta**, Full Stack Developer.  
Built with React 19, TypeScript, Vite 6, and Tailwind CSS v4.

🔗 **Live site:** [bhavyawebdev.github.io](https://bhavyawebdev.github.io) *(after deployment)*

---

## ✨ Features

- 🌓 **Dark / Light mode** — auto-detects system preference, persists in `localStorage`
- 📱 **Fully responsive** — mobile-first design for all viewports
- ⚡ **Blazing fast** — Vite production bundle (~78 KB gzipped JS)
- 🎨 **Premium design** — Playfair Display serif headings + Inter sans-serif body, subtle grid backgrounds, glassmorphic cards
- 📄 **Resume modal** — printable, downloadable `.txt` resume generated from live data
- 💌 **Contact form** — pre-fills `mailto:` for zero-backend messaging
- 🏅 **Certificate viewer** — modal overlay for internship certificates
- 🚀 **Auto-deploy to GitHub Pages** — via included GitHub Actions workflow

---

## 🗂 Project Structure

```
portfolio-super-prompt/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions → GitHub Pages
├── src/
│   ├── App.tsx              # Root layout, theme, scrollspy
│   ├── main.tsx             # React entry point
│   ├── index.css            # Tailwind v4 + design tokens
│   ├── types.ts             # Shared TypeScript interfaces
│   ├── data/
│   │   └── portfolioData.ts # ← ALL content lives here (edit this!)
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── CertificateModal.tsx
│       └── ResumeModal.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── .env.example
```

---

## 🚀 Local Development

**Prerequisites:** Node.js 18+ (Node 20 LTS recommended)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:3000)
npm run dev
```

---

## 🏗 Production Build

```bash
npm run build    # emits to dist/
npm run preview  # preview the production bundle locally
```

---

## 🌐 Deploy to GitHub Pages

1. **Push** this repo to GitHub (`main` branch).
2. Go to **Settings → Pages** in your repo.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Every push to `main` will trigger the workflow at `.github/workflows/deploy.yml` which:
   - Installs dependencies via `npm ci`
   - Builds with `VITE_BASE_PATH=/<repo-name>/`
   - Deploys the `dist/` folder to GitHub Pages

> **Note:** If you push to a **user/org site** (`<username>.github.io` repo), the base path is `/` by default — no changes needed.  
> For a **project site** (`<username>.github.io/<repo>`), the workflow handles `VITE_BASE_PATH` automatically from `${{ github.event.repository.name }}`.

---

## ✏️ Customizing Content

**All portfolio content is centralized in one file:**

```
src/data/portfolioData.ts
```

Edit the following exports to update the site:

| Export | What it controls |
|---|---|
| `personalData` | Name, role, bio, email, phone, GitHub, LinkedIn, location, education |
| `skillCategories` | Skills grid (Frontend, Backend, Databases, Tools) |
| `projectsData` | Projects section (title, description, tags, URLs) |
| `experienceData` | Internship experience and certificate info |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Icons | lucide-react |
| Fonts | Inter (body), Playfair Display (headings) — Google Fonts |
| CI/CD | GitHub Actions → GitHub Pages |

---

## 📝 License

MIT — feel free to fork and adapt for your own portfolio.
