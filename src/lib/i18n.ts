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
 * AFVL : /about.htm et /photos.htm sont EN-only (pas de miroir /en/*).
 * Plan du site : /plan-du-site/ ↔ /en/site-map/
 */
const SLUG_PAIRS: Array<{ fr: string; en: string }> = [
  { fr: '/plan-du-site/', en: '/en/site-map/' },
  { fr: '/recherche/', en: '/en/search/' },
];

/**
 * Pages anglaises servies à l’URL racine (hors /en/), sans miroir FR.
 * Ex. https://afvl.org/about.htm et https://afvl.org/photos.htm
 */
const EN_ONLY_PATHS = new Set<string>([
  '/about.htm',
  '/about/',
  '/photos.htm',
  '/photos/',
]);

/** Paires de slugs blog FR ↔ EN (enregistrées depuis `src/data/posts.ts`). */
let blogSlugPairs: Array<{ fr: string; en: string }> = [];

/**
 * Enregistre les alternates d’articles (chemins publics complets) pour hreflang.
 * Accepte soit des chemins (`/slug/`, `/slug/`) soit d’anciens slugs nus
 * (alors préfixés `/blog/` pour rétrocompat).
 */
export function setBlogSlugPairs(pairs: Array<{ fr: string; en: string }>): void {
  blogSlugPairs = pairs.map((p) => {
    const frRaw = p.fr.trim();
    const enRaw = p.en.trim();
    const fr = frRaw.startsWith('/')
      ? normalizePath(frRaw)
      : `/blog/${frRaw.replace(/^\/+|\/+$/g, '')}/`;
    const en = enRaw.startsWith('/')
      ? normalizePath(enRaw)
      : `/en/blog/${enRaw.replace(/^\/+|\/+$/g, '')}/`;
    return { fr, en };
  });
}

function allSlugPairs(): Array<{ fr: string; en: string }> {
  return [...SLUG_PAIRS, ...blogSlugPairs];
}

/**
 * Pages FR sans miroir EN indexable (pas de hreflang en-CA).
 * Les destinations ont désormais des miroirs /en/destinations/* — ne plus les traiter ici.
 */
const FR_ONLY_PATHS = new Set<string>([]);

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
  return FR_ONLY_PATHS.has(normalized);
}

/** True si la page est anglaise-only à l’URL racine (ex. /photos.htm). */
export function isEnOnlyPath(path: string): boolean {
  const stripped = normalizePath(stripLocalePrefix(path));
  const normalized = normalizePath(path);
  return EN_ONLY_PATHS.has(stripped) || EN_ONLY_PATHS.has(normalized);
}

/** URL publique canonique d’une page EN-only (toujours sans /en/). */
function enOnlyPublicPath(path: string): string {
  const stripped = normalizePath(stripLocalePrefix(path));
  if (stripped === '/about/' || stripped === '/about.htm') return '/about.htm';
  if (stripped === '/photos/' || stripped === '/photos.htm') return '/photos.htm';
  return stripped;
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
  // Galerie photos : une seule URL publique, quelle que soit la langue de nav.
  if (isEnOnlyPath(path)) return enOnlyPublicPath(path);

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

  // EN-only : pas d’alternate localisé — toujours l’URL publique unique.
  if (isEnOnlyPath(normalized)) return enOnlyPublicPath(normalized);

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

  // Page monolingue EN à la racine : pas de cluster hreflang FR↔EN.
  if (isEnOnlyPath(normalized)) return false;

  const frPath = normalizePath(stripLocalePrefix(alternatePath(normalized, 'fr')));

  if (FR_ONLY_PATHS.has(frPath)) return false;
  if (frPath.startsWith('/destinations/')) return false;
  // /a-propos/ redirige vers /about.htm (EN-only) : pas de hreflang.
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
