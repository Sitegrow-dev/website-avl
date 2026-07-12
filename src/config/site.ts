/**
 * Configuration maîtresse du site AFVL - Amor Fides Via Lux.
 */
export type BusinessType = 'Organization' | 'LocalBusiness' | 'WebSite';

export const siteConfig = {
  siteName: 'AFVL - Amor Fides Via Lux',
  city: 'Rome',
  region: 'Italie',
  domain: 'afvl.org',
  url: 'https://afvl.org',
  defaultDescription:
    'Découvrez AFVL : accompagnement complet pour un mariage catholique en Italie, démarches canoniques, choix de l\'église et pèlerinage sur mesure.',
  /**
   * Miroir /en/ traduit : indexable + inclus dans hreflang / sitemap.
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
    { label: 'Destinations', href: '/destinations/rome/' },
    { label: 'Patrimoine & Vatican', href: '/#patrimoine' },
    { label: 'Blog', href: '/blog/' },
  ],
  navCta: { label: 'Nous joindre', href: '/contact/' },
  footer: {
    tagline: 'Amor Fides Via Lux : Mariage catholique & pèlerinage en Italie.',
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
        title: 'Mariage catholique',
        links: [
          {
            label: 'Se marier à l’église',
            href: '/blog/se-marier-eglise-catholique-italie/',
          },
          {
            label: 'Documents',
            href: '/blog/documents-mariage-religieux-etranger/',
          },
          { label: 'Coût & budget', href: '/blog/cout-mariage-italie/' },
          {
            label: 'Wedding planner',
            href: '/blog/wedding-planner-mariage-italie/',
          },
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
    ],
    legal: {
      links: [{ label: 'Plan du site', href: '/plan-du-site/' }],
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
