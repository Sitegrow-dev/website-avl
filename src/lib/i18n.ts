/**
 * Helpers i18n : alignés sur le skeleton Sitegrow :
 * - locale par défaut `fr` sans préfixe
 * - anglais sous `/en/`
 * - slugs traduits quand le skeleton le fait (a-propos→about, plan-du-site→site-map)
 * - chemins legacy AFVL `.htm` sous chaque locale
 */

export type Lang = 'fr' | 'en';

export const DEFAULT_LANG: Lang = 'fr';
export const LOCALES: Lang[] = ['fr', 'en'];

/** Valeurs hreflang / html lang (BCP 47 région Canada). */
export const HREFLANG = {
  fr: 'fr-CA',
  en: 'en-CA',
} as const;

/**
 * Paires FR ↔ EN dont le slug diffère (pas un simple préfixe /en).
 * Conventions skeleton : /a-propos/↔/en/about/
 * AFVL : about/photos restent en `.htm` (URLs publiques legacy).
 * Plan du site : /plan-du-site/ ↔ /en/site-map/
 */
const SLUG_PAIRS: Array<{ fr: string; en: string }> = [
  { fr: '/about.htm', en: '/en/about.htm' },
  { fr: '/photos.htm', en: '/en/photos.htm' },
  // Routes Astro internes (réécrites depuis .htm) : pour le sélecteur au build
  { fr: '/about/', en: '/en/about/' },
  { fr: '/photos/', en: '/en/photos/' },
  // Skeleton-style translated slugs (about public EN = legacy .htm)
  { fr: '/a-propos/', en: '/en/about.htm' },
  { fr: '/plan-du-site/', en: '/en/site-map/' },
];

/** Paires de slugs blog FR ↔ EN (enregistrées depuis `src/data/posts.ts`). */
let blogSlugPairs: Array<{ fr: string; en: string }> = [];

/** Enregistre les alternates blog (slugs traduits) pour hreflang / sélecteur. */
export function setBlogSlugPairs(pairs: Array<{ fr: string; en: string }>): void {
  blogSlugPairs = pairs.map((p) => ({
    fr: `/blog/${p.fr.replace(/^\/+|\/+$/g, '')}/`,
    en: `/en/blog/${p.en.replace(/^\/+|\/+$/g, '')}/`,
  }));
}

function allSlugPairs(): Array<{ fr: string; en: string }> {
  return [...SLUG_PAIRS, ...blogSlugPairs];
}

/**
 * Pages FR sans miroir EN indexable (pas de hreflang en-CA).
 * Ex. destinations pas encore traduites.
 */
const FR_ONLY_PATHS = new Set<string>(['/destinations/rome/']);

export function isLang(value: string | undefined | null): value is Lang {
  return value === 'fr' || value === 'en';
}

/** Langue courante depuis Astro.currentLocale ou le pathname. */
export function resolveLang(locale: string | undefined, pathname?: string): Lang {
  if (isLang(locale)) return locale;
  if (pathname && (pathname === '/en' || pathname.startsWith('/en/'))) return 'en';
  return DEFAULT_LANG;
}

/** Retire le préfixe /en d’un chemin. */
export function stripLocalePrefix(path: string): string {
  if (path === '/en' || path === '/en/') return '/';
  return path.replace(/^\/en(?=\/|$)/, '') || '/';
}

function normalizePath(path: string): string {
  if (path.endsWith('/') || path.includes('.') || path === '/') return path;
  return `${path}/`;
}

/** True si le chemin FR n’a pas de miroir EN (ne pas inventer `/en/...`). */
function isFrOnlyPath(path: string): boolean {
  const normalized = normalizePath(stripLocalePrefix(path));
  return FR_ONLY_PATHS.has(normalized) || normalized.startsWith('/destinations/');
}

/** Article blog (hors index) : exige une paire FR↔EN enregistrée. */
function isBlogPostPath(path: string): boolean {
  const stripped = normalizePath(stripLocalePrefix(path));
  return stripped.startsWith('/blog/') && stripped !== '/blog/';
}

function findSlugPair(path: string): { fr: string; en: string } | undefined {
  const normalized = normalizePath(path);
  return allSlugPairs().find((p) => p.fr === normalized || p.en === normalized);
}

/** Ajoute le préfixe /en (chemins déjà préfixés inchangés). */
export function withLocalePrefix(path: string, lang: Lang): string {
  const pairs = allSlugPairs();
  if (lang === 'fr') {
    const pair = pairs.find((p) => p.en === path);
    if (pair) return pair.fr;
    return stripLocalePrefix(path);
  }

  const pair = pairs.find((p) => p.fr === path || p.en === path);
  if (pair) return pair.en;

  // Pages FR-only (ex. destinations) : garder l’URL FR même depuis la nav EN.
  if (isFrOnlyPath(path)) return normalizePath(stripLocalePrefix(path));

  if (path === '/en' || path.startsWith('/en/'))
    return path.endsWith('/') || path.includes('.') ? path : `${path}/`;
  if (path === '/') return '/en/';
  return `/en${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Localise un href interne (nav, CTA, footer).
 * Hash-only, mailto, http(s) et ancres `/#…` restent tels quels
 * (sauf préfixe de locale pour les chemins racine + hash).
 */
export function localizedHref(href: string, lang: Lang): string {
  if (!href || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) {
    return href;
  }
  if (href.startsWith('#')) return href;

  const [pathPart, hash = ''] = href.split('#');
  const path = pathPart || '/';
  const hashSuffix = hash ? `#${hash}` : '';

  if (path === '/' || path === '') {
    return `${withLocalePrefix('/', lang)}${hashSuffix}`.replace(/\/#/, '/#');
  }

  return `${withLocalePrefix(path, lang)}${hashSuffix}`;
}

/** Chemin équivalent dans l’autre langue (sélecteur de langue / hreflang). */
export function alternatePath(pathname: string, targetLang: Lang): string {
  const normalized = normalizePath(pathname);

  const pair = findSlugPair(normalized);
  if (pair) return targetLang === 'en' ? pair.en : pair.fr;

  if (targetLang === 'en') {
    if (normalized === '/en' || normalized.startsWith('/en/')) return normalized;
    // Pas de miroir EN : renvoyer le chemin FR (évite `/en/destinations/...` → 404).
    if (isFrOnlyPath(normalized)) return stripLocalePrefix(normalized);
    // Article blog sans paire : ne pas inventer `/en/blog/<slug-fr>/`.
    if (isBlogPostPath(normalized)) return normalizePath(stripLocalePrefix(normalized));
    return withLocalePrefix(normalized, 'en');
  }

  return stripLocalePrefix(normalized);
}

/** True si un alternate EN indexable existe pour ce chemin public. */
export function hasEnAlternate(pathname: string): boolean {
  const normalized = normalizePath(pathname);
  const frPath = normalizePath(stripLocalePrefix(alternatePath(normalized, 'fr')));

  if (FR_ONLY_PATHS.has(frPath)) return false;
  if (frPath.startsWith('/destinations/')) return false;
  // Partage la cible EN avec /about.htm : éviter un cluster hreflang dupliqué.
  if (frPath === '/a-propos/') return false;

  // Articles blog : uniquement s’il existe une paire FR↔EN enregistrée.
  if (isBlogPostPath(frPath) || isBlogPostPath(normalized)) {
    return Boolean(findSlugPair(normalized) || findSlugPair(frPath));
  }

  return true;
}

/** BCP 47 pour <html lang> / JSON-LD / attribut hreflang. */
export function htmlLang(lang: Lang): string {
  return HREFLANG[lang];
}
