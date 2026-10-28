import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Fully static export: `next build` writes plain HTML/CSS/JS to `out/`,
   * deployable to Vercel, Netlify, GitHub Pages or any static host.
   * No Node.js server, database or PHP required.
   */
  output: 'export',

  /** Emit `/projects/slug/index.html` so plain static hosts resolve routes. */
  trailingSlash: true,

  /** The default image loader needs a server; static export requires this. */
  images: {
    unoptimized: true,
  },

  turbopack: {
    /** This app lives in a subfolder of a repo that has its own lockfile. */
    root: import.meta.dirname,
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;
