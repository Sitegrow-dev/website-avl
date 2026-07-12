export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type Lang = 'fr' | 'en';

/** Libellés localisés pour les éléments récurrents du fil d'Ariane. */
const labels = {
  fr: {
    home: 'Accueil',
    blog: 'Blog',
    about: 'À propos',
    photos: 'Galerie photos',
    contact: 'Nous joindre',
    services: 'Services',
    destinations: 'Destinations',
    notFound: 'Page introuvable',
    plan: 'Plan du site',
  },
  en: {
    home: 'Home',
    blog: 'Blog',
    about: 'About Us',
    photos: 'Photo Gallery',
    contact: 'Contact',
    services: 'Services',
    destinations: 'Destinations',
    notFound: 'Page not found',
    plan: 'Sitemap',
  },
} as const;

/** Chemins par langue (la racine FR n'a pas de préfixe). */
function localizedPath(path: string, lang: Lang): string {
  if (lang === 'en') return path === '/' ? '/en/' : `/en${path}`;
  return path;
}

function homeItem(lang: Lang): BreadcrumbItem {
  return { label: labels[lang].home, href: localizedPath('/', lang) };
}

/** Constructeur de fil d'Ariane prenant la langue en paramètre. */
export const breadcrumbTrails = {
  blog: (lang: Lang = 'fr'): BreadcrumbItem[] => [homeItem(lang), { label: labels[lang].blog }],
  post: (title: string, lang: Lang = 'fr'): BreadcrumbItem[] => [
    homeItem(lang),
    { label: labels[lang].blog, href: localizedPath('/blog/', lang) },
    { label: title },
  ],
  /** Guides / piliers à l’URL racine (pas sous /blog/). */
  guide: (title: string, lang: Lang = 'fr'): BreadcrumbItem[] => [
    homeItem(lang),
    { label: title },
  ],
  about: (lang: Lang = 'fr'): BreadcrumbItem[] => [homeItem(lang), { label: labels[lang].about }],
  /** Routes legacy AFVL EN-only (.htm) à la racine. */
  aboutHtm: (): BreadcrumbItem[] => [
    homeItem('en'),
    { label: labels.en.about },
  ],
  photosHtm: (): BreadcrumbItem[] => [
    homeItem('en'),
    { label: labels.en.photos },
  ],
  contact: (lang: Lang = 'fr'): BreadcrumbItem[] => [
    homeItem(lang),
    { label: labels[lang].contact },
  ],
  services: (lang: Lang = 'fr'): BreadcrumbItem[] => [
    homeItem(lang),
    { label: labels[lang].services },
  ],
  /** Pas d’index destinations : Accueil › Destinations › {ville}. */
  destination: (name: string, lang: Lang = 'fr'): BreadcrumbItem[] => [
    homeItem(lang),
    { label: labels[lang].destinations },
    { label: name },
  ],
  plan: (lang: Lang = 'fr'): BreadcrumbItem[] => [homeItem(lang), { label: labels[lang].plan }],
  notFound: (lang: Lang = 'fr'): BreadcrumbItem[] => [
    homeItem(lang),
    { label: labels[lang].notFound },
  ],
};

export type SitePageLink = {
  /** Libellé localisé */
  label: string;
  /** Chemin public (déjà préfixé /en/ pour la liste EN) */
  href: string;
  /** Section logique pour le groupement */
  section: 'main' | 'legal';
};

/**
 * Liste centralisée des pages pour le plan du site HTML (FR).
 * Alignée sur les pages FR du sitemap XML (hors articles blog, listés à part).
 * Exclut 404, AMP et utilitaires — comme le sitemap XML.
 */
export const frPagesList: SitePageLink[] = [
  { label: labels.fr.home, href: '/', section: 'main' },
  { label: labels.fr.about, href: '/about.htm', section: 'main' },
  { label: labels.fr.photos, href: '/photos.htm', section: 'main' },
  { label: labels.fr.destinations, href: '/destinations/rome/', section: 'main' },
  { label: labels.fr.blog, href: '/blog/', section: 'main' },
  { label: labels.fr.contact, href: '/contact/', section: 'main' },
  { label: labels.fr.plan, href: '/plan-du-site/', section: 'legal' },
];

/**
 * Liste centralisée des pages pour le plan du site HTML (EN).
 * Miroirs indexables sous /en/ (pas de destinations FR-only).
 */
export const enPagesList: SitePageLink[] = [
  { label: labels.en.home, href: '/en/', section: 'main' },
  { label: labels.en.about, href: '/about.htm', section: 'main' },
  { label: labels.en.photos, href: '/photos.htm', section: 'main' },
  { label: labels.en.blog, href: '/en/blog/', section: 'main' },
  { label: labels.en.contact, href: '/en/contact/', section: 'main' },
  { label: labels.en.plan, href: '/en/site-map/', section: 'legal' },
];
