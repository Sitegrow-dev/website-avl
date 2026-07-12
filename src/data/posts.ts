import { fetchHoldingArticles, hasHoldingApiKey } from '@/lib/holding';
import { mapHoldingArticlesToPosts } from '@/lib/holding-map';
import { setBlogSlugPairs, type Lang } from '@/lib/i18n';
import { localPosts } from '@/data/local-posts';
import {
  BASILIQUE_EN_SLUG,
  BASILIQUE_FR_SLUG,
} from '@/data/local-post-basilique';
import { COUT_EN_SLUG, COUT_FR_SLUG } from '@/data/local-post-cout';
import {
  DOCUMENTS_EN_SLUG,
  DOCUMENTS_FR_SLUG,
} from '@/data/local-post-documents';
import {
  WEDDING_PLANNER_EN_SLUG,
  WEDDING_PLANNER_FR_SLUG,
} from '@/data/local-post-wedding-planner';
import {
  VOYAGE_ITALIE_EN_SLUG,
  VOYAGE_ITALIE_FR_SLUG,
} from '@/data/local-post-voyage-italie';
import {
  VISITER_VATICAN_EN_SLUG,
  VISITER_VATICAN_FR_SLUG,
} from '@/data/local-post-visiter-vatican';
import {
  MUSEES_VATICAN_EN_SLUG,
  MUSEES_VATICAN_FR_SLUG,
} from '@/data/local-post-musees-vatican';
import {
  BASILIQUE_VISITE_EN_SLUG,
  BASILIQUE_VISITE_FR_SLUG,
} from '@/data/local-post-basilique-visite';
import {
  PELERINAGE_EN_SLUG,
  PELERINAGE_FR_SLUG,
} from '@/data/local-post-pelerinage';
import {
  LUNE_DE_MIEL_EN_SLUG,
  LUNE_DE_MIEL_FR_SLUG,
} from '@/data/local-post-lune-de-miel';
import {
  ITINERAIRE_ROME_EN_SLUG,
  ITINERAIRE_ROME_FR_SLUG,
} from '@/data/local-post-itineraire-rome';

/**
 * Paires de slugs blog connues (locales + Holding).
 * Appliquées après fusion pour :
 * - câbler alternateSlug même si Holding écrase l’entrée FR locale
 * - renommer un éventuel miroir EN Holding encore publié sous le slug FR
 */
const KNOWN_BLOG_SLUG_PAIRS: Array<{ fr: string; en: string }> = [
  {
    fr: 'se-marier-eglise-catholique-italie',
    en: 'getting-married-catholic-church-italy',
  },
  { fr: BASILIQUE_FR_SLUG, en: BASILIQUE_EN_SLUG },
  { fr: DOCUMENTS_FR_SLUG, en: DOCUMENTS_EN_SLUG },
  { fr: COUT_FR_SLUG, en: COUT_EN_SLUG },
  { fr: WEDDING_PLANNER_FR_SLUG, en: WEDDING_PLANNER_EN_SLUG },
  { fr: VOYAGE_ITALIE_FR_SLUG, en: VOYAGE_ITALIE_EN_SLUG },
  { fr: VISITER_VATICAN_FR_SLUG, en: VISITER_VATICAN_EN_SLUG },
  { fr: MUSEES_VATICAN_FR_SLUG, en: MUSEES_VATICAN_EN_SLUG },
  { fr: BASILIQUE_VISITE_FR_SLUG, en: BASILIQUE_VISITE_EN_SLUG },
  { fr: PELERINAGE_FR_SLUG, en: PELERINAGE_EN_SLUG },
  { fr: LUNE_DE_MIEL_FR_SLUG, en: LUNE_DE_MIEL_EN_SLUG },
  { fr: ITINERAIRE_ROME_FR_SLUG, en: ITINERAIRE_ROME_EN_SLUG },
];

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

/** `root` = URL pilier `/slug/` ; `blog` = article sous `/slug/`. */
export type PostRoute = 'root' | 'blog';

export type Post = {
  slug: string;
  /** Langue du contenu (défaut fr). Les miroirs EN ont leur propre entrée + slug. */
  lang?: Lang;
  /**
   * Préfixe d’URL publique.
   * - `root` : `/slug/` et `/en/slug/` (guides / piliers)
   * - `blog` : `/slug/` (défaut, Holding)
   */
  route?: PostRoute;
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
  /** Titre meta spécifique à la variante AMP (si différent). */
  ampMetaTitle?: string;
  /** Description meta spécifique à la variante AMP (si différente). */
  ampMetaDescription?: string;
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
  metaTitle: 'Guides & ressources - Mariage catholique en Italie',
  metaDescription:
    'Découvrez conseils pratiques, démarches et inspirations pour organiser votre mariage catholique en Italie, de Rome aux plus beaux diocèses.',
  readArticle: "Lire l'article",
  comingSoon: 'Bientôt disponible',
} as const;

export const postUiEn = {
  backLink: 'Back to blog',
  listEyebrow: 'Blog',
  listTitle: 'Guides & resources',
  listSubtitle:
    'Practical advice, procedures, destinations and inspiration for your Catholic wedding in Italy.',
  metaTitle: 'Catholic Wedding in Italy: Guides & Resources - AFVL',
  metaDescription:
    'Explore practical guides on Catholic weddings in Italy: canonical steps, required documents, church destinations, and tips to plan your ceremony with',
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

function applyKnownBlogSlugPairs(all: Post[]): Post[] {
  const map = new Map<string, Post>();
  for (const post of all) map.set(postKey(post), post);

  for (const pair of KNOWN_BLOG_SLUG_PAIRS) {
    const wrongEnKey = postKey({ slug: pair.fr, lang: 'en' });
    const rightEnKey = postKey({ slug: pair.en, lang: 'en' });
    const wrongEn = map.get(wrongEnKey);
    if (wrongEn && !map.has(rightEnKey)) {
      wrongEn.slug = pair.en;
      map.delete(wrongEnKey);
      map.set(rightEnKey, wrongEn);
    }

    const fr = map.get(postKey({ slug: pair.fr, lang: 'fr' }));
    const en = map.get(postKey({ slug: pair.en, lang: 'en' }));
    if (fr) fr.alternateSlug = pair.en;
    if (en) en.alternateSlug = pair.fr;
  }

  return Array.from(map.values()).sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0
  );
}

function registerAlternates(all: Post[]): void {
  const pairs: Array<{ fr: string; en: string }> = [];
  const seen = new Set<string>();
  const byFrSlug = new Map(
    all
      .filter((p) => (p.lang ?? 'fr') === 'fr')
      .map((p) => [p.slug, p] as const),
  );

  const toPaths = (frSlug: string, enSlug: string): { fr: string; en: string } => {
    const route = getPostRoute(byFrSlug.get(frSlug) ?? { route: 'blog' });
    if (route === 'root') {
      return { fr: `/${frSlug}/`, en: `/en/${enSlug}/` };
    }
    return { fr: `/blog/${frSlug}/`, en: `/en/blog/${enSlug}/` };
  };

  for (const pair of KNOWN_BLOG_SLUG_PAIRS) {
    const key = `${pair.fr}→${pair.en}`;
    if (seen.has(key)) continue;
    seen.add(key);
    pairs.push(toPaths(pair.fr, pair.en));
  }

  for (const post of all) {
    if ((post.lang ?? 'fr') !== 'fr' || !post.alternateSlug) continue;
    const key = `${post.slug}→${post.alternateSlug}`;
    if (seen.has(key)) continue;
    seen.add(key);
    pairs.push(toPaths(post.slug, post.alternateSlug));
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
export const posts: Post[] = applyKnownBlogSlugPairs(
  mergePosts(holdingPosts, localPosts)
);
registerAlternates(posts);

function hasRenderableBody(post: Post): boolean {
  return Boolean(post.bodyMarkdown?.trim()) || post.sections.length > 0;
}

export function getPostRoute(post: Pick<Post, 'route'>): PostRoute {
  return post.route ?? 'blog';
}

/** URL publique de l’article (racine pour les guides, /blog/ pour le reste). */
export function getPostHref(
  post: Pick<Post, 'slug' | 'published' | 'lang' | 'route'>,
): string {
  if (!post.published) return '#';
  const isEn = (post.lang ?? 'fr') === 'en';
  if (getPostRoute(post) === 'root') {
    return isEn ? `/en/${post.slug}/` : `/${post.slug}/`;
  }
  return isEn ? `/en/blog/${post.slug}/` : `/blog/${post.slug}/`;
}

export function getRootPosts(lang: Lang = 'fr'): Post[] {
  return getPublishedPosts(lang).filter((p) => getPostRoute(p) === 'root');
}

export function getBlogRoutedPosts(lang: Lang = 'fr'): Post[] {
  return getPublishedPosts(lang).filter((p) => getPostRoute(p) === 'blog');
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
  /** Featured réservé au vrai blog (/blog/), pas aux guides racine. */
  const published = getBlogRoutedPosts(lang);
  return published.find((p) => p.featured) ?? published[0];
}

/** Guides publiés à l’URL racine (hors listing blog). */
export function getGuidePosts(lang: Lang = 'fr'): Post[] {
  return getRootPosts(lang);
}

export function getRelatedPosts(slugs: string[], lang: Lang = 'fr'): Post[] {
  return slugs
    .map((slug) => getPostBySlug(slug, lang))
    .filter((p): p is Post => p !== undefined);
}
