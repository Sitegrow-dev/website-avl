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
import {
  BIBLIOTHEQUE_VATICANE_EN_SLUG,
  BIBLIOTHEQUE_VATICANE_FR_SLUG,
} from '@/data/local-post-bibliotheque-vaticane';
import {
  PATRIMOINE_ROME_EN_SLUG,
  PATRIMOINE_ROME_FR_SLUG,
} from '@/data/local-post-patrimoine-catholique-rome';
import {
  ROME_EN_SLUG,
  ROME_FR_SLUG,
} from '@/data/local-post-destination-rome';
import {
  TOSCANE_EN_SLUG,
  TOSCANE_FR_SLUG,
} from '@/data/local-post-destination-toscane';
import {
  VENISE_EN_SLUG,
  VENISE_FR_SLUG,
} from '@/data/local-post-destination-venise';
import {
  LAC_COME_EN_SLUG,
  LAC_COME_FR_SLUG,
} from '@/data/local-post-destination-lac-de-come';
import {
  COTE_AMALFI_EN_SLUG,
  COTE_AMALFI_FR_SLUG,
} from '@/data/local-post-destination-cote-amalfitaine';

/**
 * Paires de slugs guides FR ↔ EN (pages pilier à l’URL racine + destinations).
 * Ne concerne pas le blog Holding.
 */
const KNOWN_GUIDE_SLUG_PAIRS: Array<{ fr: string; en: string }> = [
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
  { fr: BIBLIOTHEQUE_VATICANE_FR_SLUG, en: BIBLIOTHEQUE_VATICANE_EN_SLUG },
  { fr: PATRIMOINE_ROME_FR_SLUG, en: PATRIMOINE_ROME_EN_SLUG },
  { fr: ROME_FR_SLUG, en: ROME_EN_SLUG },
  { fr: TOSCANE_FR_SLUG, en: TOSCANE_EN_SLUG },
  { fr: VENISE_FR_SLUG, en: VENISE_EN_SLUG },
  { fr: LAC_COME_FR_SLUG, en: LAC_COME_EN_SLUG },
  { fr: COTE_AMALFI_FR_SLUG, en: COTE_AMALFI_EN_SLUG },
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

/** `root` = URL pilier `/slug/` ; `blog` = article sous `/blog/slug/` ; `destinations` = `/destinations/slug/`. */
export type PostRoute = 'root' | 'blog' | 'destinations';

export type Post = {
  slug: string;
  /** Langue du contenu (défaut fr). Les miroirs EN ont leur propre entrée + slug. */
  lang?: Lang;
  /**
   * Préfixe d’URL publique.
   * - `root` : `/slug/` et `/en/slug/` (guides / piliers)
   * - `blog` : `/blog/slug/` (défaut, Holding)
   * - `destinations` : `/destinations/slug/` et `/en/destinations/slug/`
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
  listTitle: 'Blog',
  listSubtitle:
    'Articles et actualités depuis notre rédaction, distincts des guides mariage et voyage.',
  metaTitle: 'Blog - AFVL Amor Fides Via Lux',
  metaDescription:
    'Lisez les articles du blog AFVL sur le mariage catholique, le patrimoine et le voyage en Italie.',
  readArticle: "Lire l'article",
  comingSoon: 'Les articles du blog arriveront bientôt.',
} as const;

export const postUiEn = {
  backLink: 'Back to blog',
  listEyebrow: 'Blog',
  listTitle: 'Blog',
  listSubtitle:
    'Articles and updates from our editorial team — separate from the wedding and travel guides.',
  metaTitle: 'Blog - AFVL Amor Fides Via Lux',
  metaDescription:
    'Read AFVL blog articles on Catholic weddings, heritage, and travel in Italy.',
  readArticle: 'Read the article',
  comingSoon: 'Blog articles coming soon.',
} as const;

function postKey(post: Pick<Post, 'slug' | 'lang'>): string {
  return `${post.lang ?? 'fr'}:${post.slug}`;
}

function applyKnownGuideSlugPairs(all: Post[]): Post[] {
  const map = new Map<string, Post>();
  for (const post of all) map.set(postKey(post), post);

  for (const pair of KNOWN_GUIDE_SLUG_PAIRS) {
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
    if (route === 'destinations') {
      return {
        fr: `/destinations/${frSlug}/`,
        en: `/en/destinations/${enSlug}/`,
      };
    }
    return { fr: `/blog/${frSlug}/`, en: `/en/blog/${enSlug}/` };
  };

  for (const pair of KNOWN_GUIDE_SLUG_PAIRS) {
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
        '[posts] HOLDING_API_KEY absent : aucun article blog Holding (https://holding.sitegrow.ca/docs).'
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

/**
 * Guides locaux (mariage, voyage, Vatican…) — URL racine, PAS le blog.
 * Ne jamais fusionner dans `posts`.
 */
export const guides: Post[] = applyKnownGuideSlugPairs(localPosts);

/**
 * Vrais articles de blog (Holding CMS uniquement), sous `/blog/`.
 */
export const posts: Post[] = holdingPosts
  .map((post) => ({ ...post, route: 'blog' as const }))
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

registerAlternates([...guides, ...posts]);

function hasRenderableBody(post: Post): boolean {
  return Boolean(post.bodyMarkdown?.trim()) || post.sections.length > 0;
}

export function getPostRoute(post: Pick<Post, 'route'>): PostRoute {
  return post.route ?? 'blog';
}

/** URL publique : guide → `/slug/` ; destination → `/destinations/slug/` ; blog → `/blog/slug/`. */
export function getPostHref(
  post: Pick<Post, 'slug' | 'published' | 'lang' | 'route'>,
): string {
  if (!post.published) return '#';
  const isEn = (post.lang ?? 'fr') === 'en';
  const route = getPostRoute(post);
  if (route === 'root') {
    return isEn ? `/en/${post.slug}/` : `/${post.slug}/`;
  }
  if (route === 'destinations') {
    return isEn
      ? `/en/destinations/${post.slug}/`
      : `/destinations/${post.slug}/`;
  }
  return isEn ? `/en/blog/${post.slug}/` : `/blog/${post.slug}/`;
}

/** Guides racine + destinations. */
export function getGuidePosts(lang: Lang = 'fr'): Post[] {
  return guides.filter((item) => {
    if (!item.published) return false;
    if ((item.lang ?? 'fr') !== lang) return false;
    return hasRenderableBody(item);
  });
}

/** Guides à l’URL racine uniquement (hors `/destinations/`). */
export function getRootPosts(lang: Lang = 'fr'): Post[] {
  return getGuidePosts(lang).filter((p) => getPostRoute(p) === 'root');
}

/** Guides destination sous `/destinations/{slug}/`. */
export function getDestinationPosts(lang: Lang = 'fr'): Post[] {
  return getGuidePosts(lang).filter((p) => getPostRoute(p) === 'destinations');
}

/** Articles blog Holding uniquement (jamais les guides). */
export function getPublishedPosts(lang: Lang = 'fr'): Post[] {
  return posts.filter((item) => {
    if (!item.published) return false;
    if ((item.lang ?? 'fr') !== lang) return false;
    return hasRenderableBody(item);
  });
}

export function getBlogRoutedPosts(lang: Lang = 'fr'): Post[] {
  return getPublishedPosts(lang);
}

export function getPostBySlug(slug: string, lang: Lang = 'fr'): Post | undefined {
  const pool = [...guides, ...posts];
  const post = pool.find((item) => item.slug === slug && (item.lang ?? 'fr') === lang);
  if (!post?.published) return undefined;
  if (!hasRenderableBody(post)) return undefined;
  return post;
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
