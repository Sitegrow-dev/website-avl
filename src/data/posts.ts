import { fetchHoldingArticles, hasHoldingApiKey } from '@/lib/holding';
import { mapHoldingArticlesToPosts } from '@/lib/holding-map';
import { setBlogSlugPairs, type Lang } from '@/lib/i18n';
import { localPosts } from '@/data/local-posts';

export type TimelineItem = {
  step: string;
  label: string;
  timing: string;
};

export type PostSection = {
  heading?: string;
  id?: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
  timeline?: TimelineItem[];
  link?: { label: string; href: string };
};

export type PostFaq = {
  question: string;
  answer: string;
};

export type Post = {
  slug: string;
  /** Langue du contenu (défaut fr). Les miroirs EN ont leur propre entrée + slug. */
  lang?: Lang;
  /** Slug de la version dans l’autre langue (hreflang / sélecteur). */
  alternateSlug?: string;
  title: string;
  date: string;
  updated?: string;
  category: string;
  categorySlug: string;
  summary: string;
  chapo?: string;
  readingTimeMinutes?: number;
  published: boolean;
  featured?: boolean;
  image?: string;
  /** Image pour les cartes / listing (si différente du hero article). */
  listingImage?: string;
  imageAlt?: string;
  metaTitle?: string;
  /** Corps Holding (Markdown) : rendu HTML côté site. */
  bodyMarkdown?: string;
  faq?: PostFaq[];
  primaryKeyword?: string;
  author?: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
  toc?: { id: string; label: string }[];
  usefulLinks?: { label: string; href: string }[];
  relatedSlugs?: string[];
  /** Legacy sections (vide pour les articles Holding). */
  sections: PostSection[];
};

export const blogCategories = [
  { slug: 'all', label: 'Tout' },
  { slug: 'demarches', label: 'Démarches' },
  { slug: 'destinations', label: 'Destinations' },
  { slug: 'budget', label: 'Budget' },
  { slug: 'voyage', label: 'Voyage & pèlerinage' },
  { slug: 'patrimoine', label: 'Patrimoine' },
] as const;

export const postUi = {
  backLink: 'Retour au blog',
  listEyebrow: 'Blog',
  listTitle: 'Guides & ressources',
  listSubtitle:
    'Conseils pratiques, démarches, destinations et inspirations pour votre mariage catholique en Italie.',
  readArticle: "Lire l'article",
  comingSoon: 'Bientôt disponible',
} as const;

export const postUiEn = {
  backLink: 'Back to blog',
  listEyebrow: 'Blog',
  listTitle: 'Guides & resources',
  listSubtitle:
    'Practical advice, procedures, destinations and inspiration for your Catholic wedding in Italy.',
  readArticle: 'Read the article',
  comingSoon: 'Coming soon',
} as const;

function postKey(post: Pick<Post, 'slug' | 'lang'>): string {
  return `${post.lang ?? 'fr'}:${post.slug}`;
}

function mergePosts(holding: Post[], local: Post[]): Post[] {
  const map = new Map<string, Post>();
  for (const post of local) map.set(postKey(post), post);
  // Holding gagne en cas de collision (CMS = source de vérité).
  for (const post of holding) map.set(postKey(post), post);
  return Array.from(map.values()).sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );
}

function registerAlternates(all: Post[]): void {
  const pairs: Array<{ fr: string; en: string }> = [];
  for (const post of all) {
    if ((post.lang ?? 'fr') !== 'fr' || !post.alternateSlug) continue;
    pairs.push({ fr: post.slug, en: post.alternateSlug });
  }
  setBlogSlugPairs(pairs);
}

async function loadPostsFromHolding(): Promise<Post[]> {
  if (!hasHoldingApiKey()) {
    if (process.env.NODE_ENV !== 'test') {
      console.warn(
        '[posts] HOLDING_API_KEY absent : articles locaux uniquement (https://holding.sitegrow.ca/docs).'
      );
    }
    return [];
  }

  try {
    const articles = await fetchHoldingArticles();
    return mapHoldingArticlesToPosts(articles);
  } catch (err) {
    console.error('[posts] Échec Holding API:', err);
    return [];
  }
}

const holdingPosts = await loadPostsFromHolding();

/** Tous les articles (Holding + locaux), FR et EN. */
export const posts: Post[] = mergePosts(holdingPosts, localPosts);
registerAlternates(posts);

function hasRenderableBody(post: Post): boolean {
  return Boolean(post.bodyMarkdown?.trim()) || post.sections.length > 0;
}

export function getPostHref(post: Pick<Post, 'slug' | 'published' | 'lang'>): string {
  if (!post.published) return '#';
  return (post.lang ?? 'fr') === 'en' ? `/en/blog/${post.slug}/` : `/blog/${post.slug}/`;
}

export function getPostBySlug(slug: string, lang: Lang = 'fr'): Post | undefined {
  const post = posts.find((item) => item.slug === slug && (item.lang ?? 'fr') === lang);
  if (!post?.published) return undefined;
  if (!hasRenderableBody(post)) return undefined;
  return post;
}

export function getPublishedPosts(lang: Lang = 'fr'): Post[] {
  return posts.filter((item) => {
    if (!item.published) return false;
    if ((item.lang ?? 'fr') !== lang) return false;
    return hasRenderableBody(item);
  });
}

export function getFeaturedPost(lang: Lang = 'fr'): Post | undefined {
  const published = getPublishedPosts(lang);
  return published.find((p) => p.featured) ?? published[0];
}

export function getRelatedPosts(slugs: string[], lang: Lang = 'fr'): Post[] {
  return slugs
    .map((slug) => getPostBySlug(slug, lang))
    .filter((p): p is Post => p !== undefined);
}
