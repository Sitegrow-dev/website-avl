/**
 * Configuration maîtresse du site AFVL — Amor Fides Via Lux.
 */
export type BusinessType = 'Organization' | 'LocalBusiness' | 'WebSite';

export const siteConfig = {
  siteName: 'AFVL — Amor Fides Via Lux',
  city: 'Rome',
  region: 'Italie',
  domain: 'afvl.org',
  url: 'https://afvl.org',
  defaultDescription:
    'AFVL — Amor Fides Via Lux : mariage catholique et pèlerinage en Italie. Accompagnement pour votre union au cœur du patrimoine et de la foi.',
  /**
   * Miroir /en/ traduit — indexable + inclus dans hreflang / sitemap.
   * Navigation bilingue : voir aussi src/data/navigation.ts.
   */
  enIndexable: true,
  contactEmail: 'contact@afvl.org',
  phone: '',
  logo: '/images/logo/logo-dark.webp',
  twitterHandle: '',
  allowAiCrawlers: true,
  address: {
    street: '',
    city: 'Rome',
    region: 'Lazio',
    postalCode: '',
    country: 'IT',
  },
  businessType: 'Organization' as BusinessType,
  openingHours: [] as string[],
  geo: undefined as { lat: number; lng: number } | undefined,
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    x: '',
  },
  /** Nav FR par défaut (fallback Zod / skeleton). Préférer getNavigation(lang). */
  nav: [
    { label: 'À propos', href: '/about.htm' },
    { label: 'Galerie photos', href: '/photos.htm' },
    { label: 'Destinations', href: '/destinations/rome/' },
    { label: 'Patrimoine & Vatican', href: '/#patrimoine' },
    { label: 'Blog', href: '/blog/' },
  ],
  navCta: { label: 'Nous joindre', href: '/contact/' },
  footer: {
    tagline: 'Amor Fides Via Lux — Mariage catholique & pèlerinage en Italie.',
    columns: [
      {
        title: 'AFVL',
        links: [
          { label: 'Accueil', href: '/' },
          { label: 'À propos', href: '/about.htm' },
          { label: 'Galerie photos', href: '/photos.htm' },
          { label: 'Contact', href: '/contact/' },
        ],
      },
      {
        title: 'Ressources',
        links: [
          { label: 'Blog', href: '/blog/' },
          { label: 'Destinations', href: '/destinations/rome/' },
          { label: 'Patrimoine & Vatican', href: '/#patrimoine' },
        ],
      },
      {
        title: 'Informations',
        links: [
          { label: 'À propos', href: '/a-propos/' },
          { label: 'Contact', href: '/contact/' },
        ],
      },
    ],
    legal: {
      links: [{ label: 'Plan du site', href: '/plan-du-site/' }],
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
