/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROFILE_EMAIL?: string;
  readonly VITE_PROFILE_GITHUB?: string;
  readonly VITE_PROFILE_LINKEDIN?: string;
  readonly VITE_PROFILE_TWITTER?: string;
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
