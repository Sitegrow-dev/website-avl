import type { APIRoute } from 'astro';
import { getGuidePosts, getPostHref, getPublishedPosts } from '@/data/posts';
import { siteConfig } from '@/config/site';
import { gitLastmod } from '@/lib/git-lastmod';
import { alternatePath, hasEnAlternate, isEnOnlyPath } from '@/lib/i18n';

export const prerender = true;

/**
 * Fichiers source par route : servent à calculer un <lastmod> RÉEL via git
 * (date du dernier commit touchant la page ou ses données). Voir lib/git-lastmod.
 */
const PAGE_SOURCES: Record<string, string[]> = {
  '/': ['src/pages/index.astro', 'src/data/home.ts'],
  '/about.htm': ['src/pages/about/index.astro', 'src/data/about.ts'],
  '/photos.htm': ['src/pages/photos/index.astro', 'src/data/photos.ts'],
  '/blog/': ['src/pages/blog/index.astro', 'src/data/posts.ts'],
  '/contact/': ['src/pages/contact/index.astro', 'src/data/contact.ts'],
  '/recherche/': [
    'src/pages/recherche/index.astro',
    'src/data/search.ts',
    'src/lib/search-index.ts',
  ],
  '/en/': ['src/pages/en/index.astro', 'src/data/home.ts'],
  '/en/blog/': ['src/pages/en/blog/index.astro', 'src/data/posts.ts'],
  '/en/contact/': ['src/pages/en/contact/index.astro', 'src/data/contact.ts'],
  '/en/search/': [
    'src/pages/en/search/index.astro',
    'src/data/search.ts',
    'src/lib/search-index.ts',
  ],
};

/**
 * Pages statiques FR (+ pages EN-only à la racine).
 * Guides exclus (listés via getGuidePosts). Blog = Holding uniquement.
 */
const FR_STATIC_PAGES = [
  '/',
  '/about.htm',
  '/photos.htm',
  '/blog/',
  '/contact/',
  '/recherche/',
];

/**
 * Miroirs EN : pages réelles sous src/pages/en/ (URLs publiques).
 */
const EN_STATIC_PAGES = [
  '/en/',
  '/en/blog/',
  '/en/contact/',
  '/en/search/',
];

type Alternate = { hreflang: string; href: string };

function buildAlternates(path: string, base: string): Alternate[] {
  if (isEnOnlyPath(path)) {
    const href = `${base}${enOnlyPublicHref(path)}`;
    return [
      { hreflang: 'en-CA', href },
      { hreflang: 'x-default', href },
    ];
  }

  const frPath = alternatePath(path, 'fr');
  const alts: Alternate[] = [{ hreflang: 'fr-CA', href: `${base}${frPath}` }];
  if (siteConfig.enIndexable && hasEnAlternate(frPath)) {
    alts.push({ hreflang: 'en-CA', href: `${base}${alternatePath(frPath, 'en')}` });
  }
  alts.push({ hreflang: 'x-default', href: `${base}${frPath}` });
  return alts;
}

/** Canonical public path for EN-only legacy pages. */
function enOnlyPublicHref(path: string): string {
  if (path === '/about/' || path === '/about.htm') return '/about.htm';
  if (path === '/photos/' || path === '/photos.htm') return '/photos.htm';
  return path;
}

function renderAlternates(alts: Alternate[]): string {
  return alts
    .map((a) => `      <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`)
    .join('\n');
}

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href.replace(/\/$/, '') ?? siteConfig.url).replace(/\/$/, '');

  type Entry = {
    loc: string;
    lastmod?: string;
    alts: Alternate[];
  };

  const entries: Entry[] = [];

  for (const p of FR_STATIC_PAGES) {
    entries.push({
      loc: `${base}${p}`,
      lastmod: gitLastmod(PAGE_SOURCES[p] ?? []),
      alts: buildAlternates(p, base),
    });
  }

  if (siteConfig.enIndexable) {
    for (const p of EN_STATIC_PAGES) {
      entries.push({
        loc: `${base}${p}`,
        lastmod: gitLastmod(PAGE_SOURCES[p] ?? []),
        alts: buildAlternates(p, base),
      });
    }
  }

  for (const post of getGuidePosts('fr')) {
    const path = getPostHref(post);
    entries.push({
      loc: `${base}${path}`,
      lastmod: post.updated || post.date || undefined,
      alts: buildAlternates(path, base),
    });
  }

  for (const post of getPublishedPosts('fr')) {
    const path = getPostHref(post);
    entries.push({
      loc: `${base}${path}`,
      lastmod: post.updated || post.date || undefined,
      alts: buildAlternates(path, base),
    });
  }

  if (siteConfig.enIndexable) {
    for (const post of getGuidePosts('en')) {
      const path = getPostHref(post);
      entries.push({
        loc: `${base}${path}`,
        lastmod: post.updated || post.date || undefined,
        alts: buildAlternates(path, base),
      });
    }
    for (const post of getPublishedPosts('en')) {
      const path = getPostHref(post);
      entries.push({
        loc: `${base}${path}`,
        lastmod: post.updated || post.date || undefined,
        alts: buildAlternates(path, base),
      });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    (e) =>
      `  <url>
    <loc>${e.loc}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''}
${renderAlternates(e.alts)}
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
