import type { HoldingArticle } from '@/lib/holding';
import { tocFromMarkdown } from '@/lib/markdown';
import type { Post } from '@/data/posts';

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
    .map((href) => ({
      label: href === '/' ? 'Accueil →' : `${href.replace(/\/$/, '').split('/').pop() || href} →`,
      href: href.endsWith('/') || href.startsWith('http') ? href : `${href}/`,
    }));
  return links.length > 0 ? links : undefined;
}

/** Mappe un article Holding vers le modèle UI `Post`. */
export function mapHoldingArticleToPost(
  article: HoldingArticle,
  allSlugs: string[] = []
): Post {
  const { category, categorySlug } = inferCategory(article);
  const { src: image, alt: imageAlt } = firstImage(article);
  const date = article.published_at?.slice(0, 10) || article.published_at;
  const relatedSlugs = allSlugs.filter((s) => s !== article.slug).slice(0, 3);

  return {
    slug: article.slug,
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
    bodyMarkdown: article.body_markdown,
    faq: article.faq?.length ? article.faq : undefined,
    primaryKeyword: article.primary_keyword,
    toc: tocFromMarkdown(article.body_markdown || ''),
    usefulLinks: usefulLinks(article),
    relatedSlugs: relatedSlugs.length ? relatedSlugs : undefined,
    sections: [],
  };
}

export function mapHoldingArticlesToPosts(articles: HoldingArticle[]): Post[] {
  const slugs = articles.map((a) => a.slug);
  const posts = articles.map((a) => mapHoldingArticleToPost(a, slugs));
  // Premier article = featured (listing)
  if (posts[0]) posts[0].featured = true;
  return posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
