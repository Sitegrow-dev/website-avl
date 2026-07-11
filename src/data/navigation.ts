import type { Lang } from '@/lib/i18n';

/**
 * Navigation + footer localisés.
 * Les `href` sont stockés en chemins « FR » (sans /en/) ; le préfixe
 * et les slugs EN traduits sont appliqués via `localizedHref`.
 *
 * Paires de slugs (voir src/lib/i18n.ts) : legacy AFVL + plan du site :
 * - /about.htm ↔ /en/about.htm, /photos.htm ↔ /en/photos.htm (pages OK, hors nav header)
 * - /plan-du-site/ → /en/site-map/
 * - /a-propos/ redirige vers /about.htm (non listé au menu)
 */
export const navigationByLang = {
  fr: {
    nav: [
      { label: 'Galerie photos', href: '/photos.htm' },
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
          title: 'Ressources',
          links: [
            { label: 'Blog', href: '/blog/' },
            { label: 'Destinations', href: '/destinations/rome/' },
            { label: 'Patrimoine & Vatican', href: '/#patrimoine' },
          ],
        },
        {
          title: 'Informations',
          links: [{ label: 'Contact', href: '/contact/' }],
        },
      ],
      legal: {
        links: [{ label: 'Plan du site', href: '/plan-du-site/' }],
      },
      rights: 'Tous droits réservés.',
    },
  },
  en: {
    nav: [
      { label: 'Photo Gallery', href: '/photos.htm' },
      { label: 'Destinations', href: '/destinations/rome/' },
      { label: 'Heritage & Vatican', href: '/#patrimoine' },
      { label: 'Blog', href: '/blog/' },
    ],
    navCta: { label: 'Contact Us', href: '/contact/' },
    footer: {
      tagline: 'Amor Fides Via Lux: Catholic wedding & pilgrimage in Italy.',
      columns: [
        {
          title: 'AFVL',
          links: [
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about.htm' },
            { label: 'Photo Gallery', href: '/photos.htm' },
            { label: 'Contact', href: '/contact/' },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Blog', href: '/blog/' },
            { label: 'Destinations', href: '/destinations/rome/' },
            { label: 'Heritage & Vatican', href: '/#patrimoine' },
          ],
        },
        {
          title: 'Information',
          links: [{ label: 'Contact', href: '/contact/' }],
        },
      ],
      legal: {
        links: [{ label: 'Sitemap', href: '/plan-du-site/' }],
      },
      rights: 'All rights reserved.',
    },
  },
} as const;

export function getNavigation(lang: Lang) {
  return navigationByLang[lang];
}
