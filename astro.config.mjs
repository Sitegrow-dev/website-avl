import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

import { unified } from '@astrojs/markdown-remark';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from './rehype-external-links.js';
import externalLinksIntegration from './astro-external-links.js';

import tailwindcss from '@tailwindcss/vite';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** SITE_URL explicite, sinon URL Vercel (preview / production .vercel.app). */
function resolveSiteUrl() {
  const explicit = process.env.SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, '');

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, '');
    return `https://${host}`;
  }

  return 'https://exemple.com';
}

const siteUrl = resolveSiteUrl();

// Hors Vercel : exiger SITE_URL au build pour éviter des canoniques/OG incorrects.
// Sur Vercel, VERCEL_URL est toujours fourni → preview .vercel.app OK sans config.
if (
  process.argv[1]?.includes('astro') &&
  process.argv[2] === 'build' &&
  !process.env.SITE_URL &&
  !process.env.VERCEL_URL
) {
  throw new Error(
    '[astro.config] SITE_URL manquant. Définissez SITE_URL (ex. https://exemple.com) ou buildez sur Vercel (VERCEL_URL).'
  );
}

export default defineConfig({
  site: siteUrl,
  // Astro v5+ : 'hybrid' a fusionné avec 'static'. Les routes dynamiques
  // (middleware, /rss.xml, etc.) fonctionnent toujours via l'adaptateur.
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'always',
  // Redirections build-time (preview local + static) — complètent middleware / vercel.json
  redirects: {
    '/about': '/about.htm',
    '/photos': '/photos.htm',
    '/a-propos': '/about.htm',
    '/a-propos/': '/about.htm',
    '/services': '/',
    '/services/': '/',
    '/en/about': '/en/about.htm',
    '/en/photos': '/en/photos.htm',
    '/en/services': '/en/',
    '/en/services/': '/en/',
    '/en/plan-du-site': '/en/site-map/',
    '/en/plan-du-site/': '/en/site-map/',
    '/en/blog/marier-a-la-basilique-saint-pierre':
      '/en/blog/getting-married-st-peters-basilica/',
    '/en/blog/marier-a-la-basilique-saint-pierre/':
      '/en/blog/getting-married-st-peters-basilica/',
  },
  compressHTML: 'jsx',
  build: {
    /** Réduit les feuilles externes bloquantes quand le CSS reste sous le seuil */
    inlineStylesheets: 'auto',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeSlug, rehypeExternalLinks],
    }),
  },
  server: {
    port: parseInt(process.env.PORT || '4325', 10),
    host: true,
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  env: {
    schema: {
      // Variables publiques (exposées au client)
      PUBLIC_FORMSPREE_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      // Variables serveur publiques (pas de secret, mais inutiles côté client)
      SITE_URL: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
        url: true,
      }),
      SITE_DOMAIN: envField.string({ context: 'server', access: 'public', optional: true }),
      CONTACT_EMAIL: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
      }),
      HOLDING_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      HOLDING_API_URL: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
        url: true,
      }),
      // Optionnel : serveur de dev
      PORT: envField.number({ context: 'server', access: 'public', optional: true, default: 4325 }),
      DEV_HTTPS: envField.boolean({ context: 'server', access: 'public', optional: true }),
    },
  },
  integrations: [externalLinksIntegration()],
  vite: {
    plugins: [tailwindcss(), process.env.DEV_HTTPS === 'true' ? basicSsl() : []],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@components': resolve(__dirname, './src/components'),
        '@layouts': resolve(__dirname, './src/layouts'),
      },
    },
  },
});
