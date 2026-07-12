import type { Lang } from '@/lib/i18n';

export type NavLink = {
  label: string;
  href: string;
  /** Sous-liens pour un menu déroulant (header). */
  children?: readonly { label: string; href: string }[];
};

/**
 * Navigation + footer localisés.
 * Les `href` sont stockés en chemins « FR » (sans /en/) ; le préfixe
 * et les slugs EN traduits sont appliqués via `localizedHref`.
 *
 * Paires de slugs (voir src/lib/i18n.ts) : legacy AFVL + plan du site :
 * - /about.htm ↔ /en/about.htm
 * - /photos.htm : EN-only (pas de miroir /en/photos.htm)
 * - /plan-du-site/ → /en/site-map/
 * - /a-propos/ redirige vers /about.htm (non listé au menu)
 */
export const navigationByLang = {
  fr: {
    nav: [
      {
        label: 'Mariage catholique en Italie',
        href: '/blog/se-marier-eglise-catholique-italie/',
        children: [
          {
            label: 'Se marier à l’église catholique',
            href: '/blog/se-marier-eglise-catholique-italie/',
          },
          {
            label: 'Documents pour un mariage religieux',
            href: '/blog/documents-mariage-religieux-etranger/',
          },
          {
            label: 'Coût d’un mariage en Italie',
            href: '/blog/cout-mariage-italie/',
          },
          {
            label: 'Wedding planner mariage en Italie',
            href: '/blog/wedding-planner-mariage-italie/',
          },
        ],
      },
      { label: 'Destinations', href: '/destinations/rome/' },
      { label: 'Patrimoine & Vatican', href: '/#patrimoine' },
      { label: 'Blog', href: '/blog/' },
    ] satisfies NavLink[],
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
      rights: 'Tous droits réservés.',
    },
  },
  en: {
    nav: [
      {
        label: 'Catholic wedding in Italy',
        href: '/blog/se-marier-eglise-catholique-italie/',
        children: [
          {
            label: 'Getting married in a Catholic church',
            href: '/blog/se-marier-eglise-catholique-italie/',
          },
          {
            label: 'Documents for a religious marriage abroad',
            href: '/blog/documents-mariage-religieux-etranger/',
          },
          {
            label: 'Cost of a wedding in Italy',
            href: '/blog/cout-mariage-italie/',
          },
          {
            label: 'Wedding planner for Italy',
            href: '/blog/wedding-planner-mariage-italie/',
          },
        ],
      },
      { label: 'Destinations', href: '/destinations/rome/' },
      { label: 'Heritage & Vatican', href: '/#patrimoine' },
      { label: 'Blog', href: '/blog/' },
    ] satisfies NavLink[],
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
          title: 'Catholic wedding',
          links: [
            {
              label: 'Church wedding process',
              href: '/blog/se-marier-eglise-catholique-italie/',
            },
            {
              label: 'Documents',
              href: '/blog/documents-mariage-religieux-etranger/',
            },
            { label: 'Cost & budget', href: '/blog/cout-mariage-italie/' },
            {
              label: 'Wedding planner',
              href: '/blog/wedding-planner-mariage-italie/',
            },
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
