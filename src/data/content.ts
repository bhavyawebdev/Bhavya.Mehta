const env = import.meta.env;

const read = (key: string, fallback: string): string => {
  const v = env[key as keyof ImportMetaEnv];
  return typeof v === "string" && v.trim() !== "" ? v.trim() : fallback;
};

export const profile = {
  name: "Bhavya",
  role: "MERN Stack Developer",
  location: "India",
  status: "Open to opportunities",
  email: read("VITE_PROFILE_EMAIL", "bhavyamehta2819@gmail.com"),
  phone: "+91 XXXXX XXXXX",
  initials: "BV",
  intro:
    "I build fast, considered web products on the MERN stack — clean APIs, sharp UIs, and the kind of performance that survives a Lighthouse audit.",
  about:
    "MERN developer focused on shipping production-grade interfaces. Most of my work sits at the seam between a Node/Express backend and a React frontend where the small details decide whether a product feels cheap or trustworthy.",
  experienceYears: 2,
  projectsShipped: 14,
};

export type Skill = { name: string; level: number; group: string };
export const skills: Skill[] = [
  { name: "React", level: 92, group: "Frontend" },
  { name: "Next.js", level: 78, group: "Frontend" },
  { name: "TypeScript", level: 84, group: "Frontend" },
  { name: "Tailwind CSS", level: 90, group: "Frontend" },
  { name: "Redux Toolkit", level: 76, group: "Frontend" },
  { name: "Node.js", level: 88, group: "Backend" },
  { name: "Express", level: 86, group: "Backend" },
  { name: "MongoDB", level: 82, group: "Backend" },
  { name: "PostgreSQL", level: 70, group: "Backend" },
  { name: "REST APIs", level: 90, group: "Backend" },
  { name: "JWT / OAuth", level: 78, group: "Backend" },
  { name: "Docker", level: 64, group: "DevOps" },
  { name: "Vercel / Render", level: 82, group: "DevOps" },
  { name: "GitHub Actions", level: 70, group: "DevOps" },
];

export type Project = {
  title: string;
  tagline: string;
  stack: string[];
  bullets: string[];
  href?: string;
  repo?: string;
  cover?: string;
};
export const projects: Project[] = [
  {
    title: "Ledgerly",
    tagline: "Personal finance dashboard with live sync",
    stack: ["React", "Node", "MongoDB", "Chart.js"],
    bullets: [
      "Built a dashboard that aggregates 4 bank APIs into one income/spend view",
      "Reduced time-to-first-paint from 3.1s to 0.9s by code-splitting routes",
      "JWT + refresh token auth, role-based middleware on Express",
    ],
    repo: "https://github.com/bhavya/ledgerly",
  },
  {
    title: "Crate",
    tagline: "Inventory + order tooling for D2C brands",
    stack: ["Next.js", "Postgres", "Prisma", "Tailwind"],
    bullets: [
      "Multi-tenant SKU + order pipeline handling ~12k events/day",
      "Server actions + optimistic UI for sub-100ms interaction feel",
      "Role-aware sidebar + audit log shipped in week 1",
    ],
    href: "https://example.com",
  },
  {
    title: "Hush",
    tagline: "End-to-end encrypted notes with share links",
    stack: ["React", "Express", "MongoDB", "WebCrypto"],
    bullets: [
      "Client-side AES-GCM encryption, server only stores ciphertext",
      "Share-link tokens that auto-revoke when read",
      "0 known data leaks across 2k+ users since launch",
    ],
  },
  {
    title: "Trekka",
    tagline: "Trail maps + offline-first trip planner",
    stack: ["React Native", "Node", "MongoDB", "Mapbox"],
    bullets: [
      "Offline tile cache with delta sync on reconnect",
      "GPX import/export, elevation + distance overlays",
      "Published on Play Store, 4.6★ over 800 reviews",
    ],
    href: "https://example.com",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};
export const experience: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Freelance / Contract",
    period: "2024 — Present",
    location: "Remote",
    bullets: [
      "Shipped 6 MERN products for D2C and SaaS clients, 3 are in production today",
      "Cut a client's TTFB by 60% by rewriting a monolith into a thin BFF in front of MongoDB",
      "Run a small CI workflow on GitHub Actions for staging + production deploys",
    ],
  },
  {
    role: "MERN Stack Intern → Developer",
    company: "Product Studio, Bengaluru",
    period: "2023 — 2024",
    location: "Hybrid",
    bullets: [
      "Owned the React + Tailwind redesign of a B2B dashboard used by 1.2k daily actives",
      "Built a server-side pagination pattern reused across 4 internal tools",
      "Wrote the team's first accessible component library (60+ primitives)",
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};
export const certifications: Certification[] = [
  { name: "Meta Front-End Developer", issuer: "Coursera", year: "2024" },
  { name: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", year: "2023" },
  { name: "MongoDB Developer Associate", issuer: "MongoDB University", year: "2023" },
];

export const socials = {
  github: read("VITE_PROFILE_GITHUB", "https://github.com/bhavya"),
  linkedin: read("VITE_PROFILE_LINKEDIN", "https://linkedin.com/in/bhavya"),
  twitter: read("VITE_PROFILE_TWITTER", "https://twitter.com/bhavya"),
};

export const siteUrl = read("VITE_SITE_URL", "https://bhavya.dev");
