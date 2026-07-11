import { siteConfig } from '@/config/site';
import type { HoldingArticle } from '@/lib/holding';
import { stripLeadingH1, tocFromMarkdown } from '@/lib/markdown';
import type { Post } from '@/data/posts';

/**
 * Hôtes de déploiement / preview à traiter comme le site lui-même.
 * Holding génère parfois des liens absolus vers le domaine Vercel au lieu du domaine canonique.
 */
function ownSiteHosts(): Set<string> {
  const hosts = new Set<string>();
  const add = (raw?: string) => {
    if (!raw?.trim()) return;
    try {
      const withProto = raw.includes('://') ? raw : `https://${raw}`;
      hosts.add(new URL(withProto).hostname.replace(/^www\./, '').toLowerCase());
    } catch {
      /* ignore */
    }
  };
  add(siteConfig.domain);
  add(siteConfig.url);
  add(process.env.SITE_DOMAIN);
  add(process.env.SITE_URL);
  add(process.env.VERCEL_URL);
  // Preview / alias Vercel historiques du projet
  add('website-avl.vercel.app');
  return hosts;
}

/** Convertit une URL absolue du site (ou preview) en chemin relatif ; laisse le reste intact. */
export function toSiteRelativeHref(href: string): string {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }
  if (!/^https?:\/\//i.test(href) && !href.startsWith('//')) {
    return href;
  }
  try {
    const url = new URL(href.startsWith('//') ? `https:${href}` : href);
    const host = url.hostname.replace(/^www\./, '').toLowerCase();
    if (!ownSiteHosts().has(host)) return href;
    const path = `${url.pathname}${url.search}${url.hash}` || '/';
    return path.startsWith('/') ? path : `/${path}`;
  } catch {
    return href;
  }
}

/** Réécrit les URLs absolues du site dans le Markdown Holding en chemins relatifs. */
export function rewriteOwnSiteUrlsInMarkdown(markdown: string): string {
  if (!markdown) return markdown;
  return markdown.replace(
    /\[([^\]]*)]\((https?:\/\/[^)\s]+)\)/gi,
    (full, label: string, href: string) => {
      const next = toSiteRelativeHref(href);
      return next === href ? full : `[${label}](${next})`;
    }
  );
}

const CATEGORY_FROM_KEYWORD: Record<string, { category: string; categorySlug: string }> = {
  demarche: { category: 'Démarches', categorySlug: 'demarches' },
  demarches: { category: 'Démarches', categorySlug: 'demarches' },
  dossier: { category: 'Démarches', categorySlug: 'demarches' },
  canonique: { category: 'Démarches', categorySlug: 'demarches' },
  budget: { category: 'Budget', categorySlug: 'budget' },
  rome: { category: 'Destinations', categorySlug: 'destinations' },
  toscane: { category: 'Destinations', categorySlug: 'destinations' },
  destination: { category: 'Destinations', categorySlug: 'destinations' },
  eglise: { category: 'Destinations', categorySlug: 'destinations' },
  pelerinage: { category: 'Voyage & pèlerinage', categorySlug: 'voyage' },
  voyage: { category: 'Voyage & pèlerinage', categorySlug: 'voyage' },
  vatican: { category: 'Patrimoine', categorySlug: 'patrimoine' },
  bibliotheque: { category: 'Patrimoine', categorySlug: 'patrimoine' },
  patrimoine: { category: 'Patrimoine', categorySlug: 'patrimoine' },
};

function inferCategory(article: HoldingArticle): { category: string; categorySlug: string } {
  const haystack = [article.primary_keyword, ...article.secondary_keywords, article.slug]
    .join(' ')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  for (const [needle, value] of Object.entries(CATEGORY_FROM_KEYWORD)) {
    if (haystack.includes(needle)) return value;
  }
  return { category: 'Blog', categorySlug: 'all' };
}

function readingMinutes(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / 200));
}

function firstImage(article: HoldingArticle): { src?: string; alt?: string } {
  const sorted = [...(article.images ?? [])].sort((a, b) => a.position - b.position);
  const withUrl = sorted.find((img) => img.url);
  if (!withUrl?.url) return {};
  // ResponsiveImage attend un chemin sans extension si local ; URLs absolues passent telles quelles.
  const src = withUrl.url.replace(/\.(avif|webp|jpe?g|png)$/i, '');
  return { src, alt: withUrl.alt_fr || article.h1_title };
}

function usefulLinks(article: HoldingArticle): Post['usefulLinks'] {
  const links = (article.internal_links ?? [])
    .filter(Boolean)
    .slice(0, 6)
    .map((raw) => {
      const href = toSiteRelativeHref(raw);
      const normalized =
        href.endsWith('/') || href.startsWith('http') || href.startsWith('#') ? href : `${href}/`;
      return {
        label:
          normalized === '/'
            ? 'Accueil →'
            : `${normalized.replace(/\/$/, '').split('/').pop() || normalized} →`,
        href: normalized,
      };
    });
  return links.length > 0 ? links : undefined;
}

function rewriteFaq(faq: HoldingArticle['faq'] | undefined): Post['faq'] {
  if (!faq?.length) return undefined;
  return faq.map((item) => ({
    question: item.question,
    answer: rewriteOwnSiteUrlsInMarkdown(item.answer),
  }));
}

/** Mappe un article Holding vers le modèle UI `Post`. */
export function mapHoldingArticleToPost(
  article: HoldingArticle,
  allSlugs: string[] = []
): Post {
  const { category, categorySlug } = inferCategory(article);
  const { src: image, alt: imageAlt } = firstImage(article);
  const date = article.published_at?.slice(0, 10) || article.published_at;
  const lang = article.language?.toLowerCase().startsWith('en') ? 'en' : 'fr';
  const relatedSlugs = allSlugs.filter((s) => s !== article.slug).slice(0, 3);
  const bodyMarkdown = rewriteOwnSiteUrlsInMarkdown(
    stripLeadingH1(article.body_markdown || '')
  );

  return {
    slug: article.slug,
    lang,
    title: article.h1_title || article.meta_title,
    date,
    updated: date,
    category,
    categorySlug,
    summary: article.summary || article.meta_description,
    chapo: article.meta_description || article.summary,
    readingTimeMinutes: readingMinutes(article.word_count || 0),
    published: true,
    featured: false,
    image,
    imageAlt,
    metaTitle: article.meta_title,
    bodyMarkdown,
    faq: rewriteFaq(article.faq),
    primaryKeyword: article.primary_keyword,
    toc: tocFromMarkdown(bodyMarkdown),
    usefulLinks: usefulLinks(article),
    relatedSlugs: relatedSlugs.length ? relatedSlugs : undefined,
    sections: [],
  };
}

export function mapHoldingArticlesToPosts(articles: HoldingArticle[]): Post[] {
  const slugs = articles.map((a) => a.slug);
  const posts = articles.map((a) => mapHoldingArticleToPost(a, slugs));
  // Premier article FR = featured (listing)
  const firstFr = posts.find((p) => (p.lang ?? 'fr') === 'fr');
  if (firstFr) firstFr.featured = true;
  return posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
