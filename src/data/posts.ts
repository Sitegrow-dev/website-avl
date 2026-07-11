import { fetchHoldingArticles, hasHoldingApiKey } from '@/lib/holding';
import { mapHoldingArticlesToPosts } from '@/lib/holding-map';

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
  /** Corps Holding (Markdown) — rendu HTML côté site. */
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

async function loadPostsFromHolding(): Promise<Post[]> {
  if (!hasHoldingApiKey()) {
    if (process.env.NODE_ENV !== 'test') {
      console.warn(
        '[posts] HOLDING_API_KEY absent — blog vide jusqu’à liaison Holding (https://holding.sitegrow.ca/docs).'
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

/** Articles publiés depuis Holding (vide tant que la clé / le site ne sont pas branchés). */
export const posts: Post[] = await loadPostsFromHolding();

export function getPostHref(post: Pick<Post, 'slug' | 'published'>): string {
  return post.published ? `/blog/${post.slug}/` : '#';
}

export function getPostBySlug(slug: string): Post | undefined {
  const post = posts.find((item) => item.slug === slug);
  if (!post?.published) return undefined;
  const hasBody = Boolean(post.bodyMarkdown?.trim()) || post.sections.length > 0;
  if (!hasBody) return undefined;
  return post;
}

export function getPublishedPosts(): Post[] {
  return posts.filter((item) => {
    if (!item.published) return false;
    return Boolean(item.bodyMarkdown?.trim()) || item.sections.length > 0;
  });
}

export function getFeaturedPost(): Post | undefined {
  return getPublishedPosts().find((p) => p.featured) ?? getPublishedPosts()[0];
}

export function getRelatedPosts(slugs: string[]): Post[] {
  return slugs.map((slug) => getPostBySlug(slug)).filter((p): p is Post => p !== undefined);
}
