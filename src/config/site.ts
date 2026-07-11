/**
 * Configuration maîtresse du site AFVL — Amor Fides Via Lux.
 */
export type BusinessType = 'Organization' | 'LocalBusiness' | 'WebSite';

export const siteConfig = {
  siteName: 'AFVL — Amor Fides Via Lux',
  city: 'Chine',
  region: 'Asie',
  domain: 'afvl.org',
  url: 'https://afvl.org',
  defaultDescription:
    'AFVL — Amor Fides Via Lux : Mission Catholique Francophone en Chine. Foi, fraternité et service au service de l’Évangile.',
  enIndexable: false,
  contactEmail: 'contact@afvl.org',
  phone: '',
  logo: '/images/logo/logo.webp',
  twitterHandle: '',
  allowAiCrawlers: true,
  address: {
    street: '',
    city: '',
    region: '',
    postalCode: '',
    country: 'CN',
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
  nav: [
    { label: 'About Us', href: '/about.htm' },
    { label: 'Photo Gallery', href: '/photos.htm' },
    { label: 'Destinations', href: '/destinations/rome/' },
    { label: 'Patrimoine & Vatican', href: '/#patrimoine' },
    { label: 'Blog', href: '/blog/' },
  ],
  navCta: { label: 'Contact Us', href: '/contact/' },
  footer: {
    tagline:
      'Mission Catholique Francophone en Chine — Amor Fides Via Lux.',
    columns: [
      {
        title: 'AFVL',
        links: [
          { label: 'Accueil', href: '/' },
          { label: 'About Us', href: '/about.htm' },
          { label: 'Photo Gallery', href: '/photos.htm' },
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
          { label: 'Confidentialité', href: '/politique-de-confidentialite/' },
        ],
      },
    ],
    legal: {
      links: [{ label: 'Politique de confidentialité', href: '/politique-de-confidentialite/' }],
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
