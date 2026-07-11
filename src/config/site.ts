/**
 * Configuration maîtresse du site AVL — Mariage en Italie.
 */
export type BusinessType = 'Organization' | 'LocalBusiness' | 'WebSite';

export const siteConfig = {
  siteName: 'Mariage en Italie',
  city: 'Rome',
  region: 'Italie',
  domain: 'mariage-en-italie.exemple.com',
  url: 'https://mariage-en-italie.exemple.com',
  defaultDescription:
    'Accompagnement expert pour votre mariage catholique en Italie : démarches canoniques, choix de destination et organisation de votre célébration.',
  enIndexable: false,
  contactEmail: 'contact@mariage-en-italie.exemple.com',
  phone: '',
  logo: '',
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
  nav: [
    { label: 'Mariage catholique', href: '/#processus' },
    { label: 'Destinations', href: '/destinations/rome/' },
    { label: 'Voyage & pèlerinage', href: '/#voyage' },
    { label: 'Patrimoine & Vatican', href: '/#patrimoine' },
    { label: 'Blog', href: '/blog/' },
  ],
  navCta: { label: 'Planifier mon mariage', href: '/contact/' },
  footer: {
    tagline:
      "Accompagnement expert pour votre union catholique au cœur de l'histoire et du patrimoine italien.",
    columns: [
      {
        title: 'Mariage',
        links: [
          { label: 'Mariage catholique Italie', href: '/' },
          { label: 'Démarches canoniques', href: '/blog/' },
          { label: 'Destinations', href: '/destinations/rome/' },
          { label: 'Guides & ressources', href: '/blog/' },
        ],
      },
      {
        title: 'Voyage & Patrimoine',
        links: [
          { label: 'Visiter le Vatican', href: '/#patrimoine' },
          { label: 'Pèlerinage sacré', href: '/#voyage' },
          { label: 'Lune de miel', href: '/#lune-de-miel' },
          { label: 'Bibliothèque vaticane', href: '/#patrimoine' },
        ],
      },
      {
        title: 'Informations',
        links: [
          { label: 'À propos', href: '/a-propos/' },
          { label: 'Contact', href: '/contact/' },
          { label: 'Mentions légales', href: '/politique-de-confidentialite/' },
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
