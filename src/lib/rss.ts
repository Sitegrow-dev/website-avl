import { getBlogRoutedPosts, getPostHref, type Post } from '@/data/posts';
import { siteConfig } from '@/config/site';

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toRfc822(input: string): string {
  const d = new Date(input);
  if (isNaN(d.getTime())) return '';
  return d.toUTCString();
}

type FeedOptions = {
  /** Préfixe de chemin : '' pour FR, '/en' pour EN */
  langPrefix: string;
  /** Code de langue RSS (fr-CA, en-CA) */
  language: string;
  /** URL du flux lui-même (pour atom:link rel="self") */
  selfUrl: string;
  /** Titre du channel RSS (défaut : siteConfig.siteName) */
  title?: string;
  /** Description du channel RSS (défaut : siteConfig.defaultDescription) */
  description?: string;
  /** Filtre les posts selon la langue (par défaut : tous : pas encore de traduction EN) */
  filterPosts?: (posts: Post[]) => Post[];
};

/**
 * Génère le XML d'un flux RSS 2.0. Utilisé par /rss.xml.ts (FR) et /en/rss.xml.ts (EN).
 */
export function buildRssFeed(site: URL | undefined, opts: FeedOptions): string {
  const base = (site?.href.replace(/\/$/, '') ?? siteConfig.url).replace(/\/$/, '');
  // Par défaut : posts FR (le filtre EN est passé explicitement).
  const allPosts = getBlogRoutedPosts(opts.langPrefix === '/en' ? 'en' : 'fr');
  const posts = opts.filterPosts ? opts.filterPosts(allPosts) : allPosts;
  const channelTitle = opts.title ?? siteConfig.siteName;
  const channelDescription = opts.description ?? siteConfig.defaultDescription;

  const items = posts
    .map((p) => {
      const url = `${base}${getPostHref(p)}`;
      const pub = toRfc822(p.date);
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>${pub ? `\n      <pubDate>${pub}</pubDate>` : ''}
      <description>${escapeXml(p.summary)}</description>
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(channelTitle)}</title>
    <link>${base}${opts.langPrefix}/</link>
    <description>${escapeXml(channelDescription)}</description>
    <language>${opts.language}</language>
    <atom:link xmlns:atom="http://www.w3.org/2005/Atom" href="${opts.selfUrl}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}
