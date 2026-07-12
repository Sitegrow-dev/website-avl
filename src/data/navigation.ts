import type { Lang } from '@/lib/i18n';

export type NavChild = {
  label: string;
  href: string;
  /** Sous-texte pour mega menu. */
  description?: string;
};

export type NavLink = {
  label: string;
  href: string;
  /** `mega` = panneau large multi-colonnes ; défaut = dropdown simple. */
  variant?: 'dropdown' | 'mega';
  /** Sous-liens pour un menu déroulant (header). */
  children?: readonly NavChild[];
};

const mariageChildrenFr = [
  {
    label: 'Se marier à l’église catholique',
    href: '/se-marier-eglise-catholique-italie/',
    description: 'Page pilier : étapes, diocèses et conseils depuis le Québec',
  },
  {
    label: 'Documents pour un mariage religieux',
    href: '/documents-mariage-religieux-etranger/',
    description: 'Dossier canonique, délais et pièces à préparer',
  },
  {
    label: 'Coût d’un mariage en Italie',
    href: '/cout-mariage-italie/',
    description: 'Budget réaliste, postes de frais et fourchettes',
  },
  {
    label: 'Wedding planner mariage en Italie',
    href: '/wedding-planner-mariage-italie/',
    description: 'Coordination locale, lieux et fournisseurs',
  },
] as const;

const voyageChildrenFr = [
  {
    label: 'Voyage en Italie catholique',
    href: '/voyage-italie-catholique/',
    description: 'Page pilier : lieux saints, saisons, conseils depuis le Québec',
  },
  {
    label: 'Visiter le Vatican',
    href: '/visiter-le-vatican/',
    description: 'Musées, Sixtine, basilique — jours, files et pièges',
  },
  {
    label: 'Billets des musées du Vatican',
    href: '/musees-du-vatican-billets/',
    description: 'Types de billets, réservation et coupe-file',
  },
  {
    label: 'Basilique Saint-Pierre',
    href: '/basilique-saint-pierre/',
    description: 'Entrée gratuite, coupole, grottes et Scavi',
  },
  {
    label: 'Pèlerinage à Rome',
    href: '/pelerinage-rome-italie/',
    description: 'Quatre basiliques majeures et rythme spirituel',
  },
  {
    label: 'Lune de miel en Italie',
    href: '/lune-de-miel-italie/',
    description: 'Régions, budget et enchaînement après le mariage',
  },
  {
    label: 'Itinéraire Rome en 3 jours',
    href: '/itineraire-rome-3-jours/',
    description: 'Plan jour par jour, réaliste et réservations',
  },
] as const;

const mariageChildrenEn = [
  {
    label: 'Getting married in a Catholic church',
    href: '/se-marier-eglise-catholique-italie/',
    description: 'Pillar guide: steps, dioceses, and tips from Quebec',
  },
  {
    label: 'Documents for a religious marriage abroad',
    href: '/documents-mariage-religieux-etranger/',
    description: 'Canonical file, timelines, and paperwork to prepare',
  },
  {
    label: 'Cost of a wedding in Italy',
    href: '/cout-mariage-italie/',
    description: 'Realistic budget, cost items, and ranges',
  },
  {
    label: 'Wedding planner for Italy',
    href: '/wedding-planner-mariage-italie/',
    description: 'Local coordination, venues, and vendors',
  },
] as const;

const voyageChildrenEn = [
  {
    label: 'Catholic travel in Italy',
    href: '/voyage-italie-catholique/',
    description: 'Pillar guide: holy sites, seasons, tips from Quebec',
  },
  {
    label: 'Visiting the Vatican',
    href: '/visiter-le-vatican/',
    description: 'Museums, Sistine, basilica — days, queues, pitfalls',
  },
  {
    label: 'Vatican Museums tickets',
    href: '/musees-du-vatican-billets/',
    description: 'Ticket types, booking, and skip-the-line options',
  },
  {
    label: "St. Peter's Basilica",
    href: '/basilique-saint-pierre/',
    description: 'Free entry, dome climb, grottoes, and Scavi',
  },
  {
    label: 'Pilgrimage to Rome',
    href: '/pelerinage-rome-italie/',
    description: 'Four major basilicas and a contemplative pace',
  },
  {
    label: 'Honeymoon in Italy',
    href: '/lune-de-miel-italie/',
    description: 'Regions, budget, and post-wedding itineraries',
  },
  {
    label: 'Rome in 3 days',
    href: '/itineraire-rome-3-jours/',
    description: 'Day-by-day plan with must-book reservations',
  },
] as const;

const destinationsChildrenFr = [
  {
    label: 'Rome',
    href: '/destinations/rome/',
    description: 'Vol direct, quartiers, Vatican, budget et erreurs à éviter',
  },
  {
    label: 'Toscane',
    href: '/destinations/toscane/',
    description: 'Voiture, permis international, bases et itinéraire sans courir',
  },
  {
    label: 'Venise',
    href: '/destinations/venise/',
    description: 'Vol direct, contribution d’accès, quartiers et pièges',
  },
  {
    label: 'Lac de Côme',
    href: '/destinations/lac-de-come/',
    description: 'Via Milan, villages, ferries et mariage en Italie du Nord',
  },
  {
    label: 'Côte amalfitaine',
    href: '/destinations/cote-amalfitaine/',
    description: 'Sans voiture, choix du village, budget et logistique',
  },
] as const;

const destinationsChildrenEn = [
  {
    label: 'Rome',
    href: '/destinations/rome/',
    description: 'Direct flights, neighborhoods, Vatican, budget, and pitfalls',
  },
  {
    label: 'Tuscany',
    href: '/destinations/toscane/',
    description: 'Car rental, international permit, bases, and a calm itinerary',
  },
  {
    label: 'Venice',
    href: '/destinations/venise/',
    description: 'Direct flights, access fee, neighborhoods, and tourist traps',
  },
  {
    label: 'Lake Como',
    href: '/destinations/lac-de-come/',
    description: 'Via Milan, villages, ferries, and northern Italy weddings',
  },
  {
    label: 'Amalfi Coast',
    href: '/destinations/cote-amalfitaine/',
    description: 'No car, which village to pick, budget, and logistics',
  },
] as const;

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
        href: '/se-marier-eglise-catholique-italie/',
        variant: 'mega' as const,
        children: mariageChildrenFr,
      },
      {
        label: 'Voyage Italie catholique',
        href: '/voyage-italie-catholique/',
        variant: 'mega' as const,
        children: voyageChildrenFr,
      },
      {
        label: 'Destinations',
        href: '/destinations/rome/',
        variant: 'mega' as const,
        children: destinationsChildrenFr,
      },
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
              href: '/se-marier-eglise-catholique-italie/',
            },
            {
              label: 'Documents',
              href: '/documents-mariage-religieux-etranger/',
            },
            { label: 'Coût & budget', href: '/cout-mariage-italie/' },
            {
              label: 'Wedding planner',
              href: '/wedding-planner-mariage-italie/',
            },
          ],
        },
        {
          title: 'Voyage & Vatican',
          links: [
            {
              label: 'Voyage Italie catholique',
              href: '/voyage-italie-catholique/',
            },
            { label: 'Visiter le Vatican', href: '/visiter-le-vatican/' },
            {
              label: 'Billets musées',
              href: '/musees-du-vatican-billets/',
            },
            {
              label: 'Pèlerinage à Rome',
              href: '/pelerinage-rome-italie/',
            },
            {
              label: 'Lune de miel',
              href: '/lune-de-miel-italie/',
            },
            {
              label: 'Rome en 3 jours',
              href: '/itineraire-rome-3-jours/',
            },
            {
              label: 'Bibliothèque vaticane',
              href: '/bibliotheque-vaticane/',
            },
            {
              label: 'Patrimoine catholique de Rome',
              href: '/patrimoine-catholique-rome/',
            },
          ],
        },
        {
          title: 'Ressources',
          links: [
            { label: 'Blog', href: '/blog/' },
            { label: 'Destinations', href: '/destinations/rome/' },
            { label: 'Recherche', href: '/recherche/' },
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
        href: '/se-marier-eglise-catholique-italie/',
        variant: 'mega' as const,
        children: mariageChildrenEn,
      },
      {
        label: 'Catholic travel in Italy',
        href: '/voyage-italie-catholique/',
        variant: 'mega' as const,
        children: voyageChildrenEn,
      },
      {
        label: 'Destinations',
        href: '/destinations/rome/',
        variant: 'mega' as const,
        children: destinationsChildrenEn,
      },
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
              href: '/se-marier-eglise-catholique-italie/',
            },
            {
              label: 'Documents',
              href: '/documents-mariage-religieux-etranger/',
            },
            { label: 'Cost & budget', href: '/cout-mariage-italie/' },
            {
              label: 'Wedding planner',
              href: '/wedding-planner-mariage-italie/',
            },
          ],
        },
        {
          title: 'Travel & Vatican',
          links: [
            {
              label: 'Catholic travel in Italy',
              href: '/voyage-italie-catholique/',
            },
            { label: 'Visiting the Vatican', href: '/visiter-le-vatican/' },
            {
              label: 'Museum tickets',
              href: '/musees-du-vatican-billets/',
            },
            {
              label: 'Pilgrimage to Rome',
              href: '/pelerinage-rome-italie/',
            },
            { label: 'Honeymoon', href: '/lune-de-miel-italie/' },
            {
              label: 'Rome in 3 days',
              href: '/itineraire-rome-3-jours/',
            },
            {
              label: 'Vatican Library',
              href: '/bibliotheque-vaticane/',
            },
            {
              label: 'Catholic heritage of Rome',
              href: '/patrimoine-catholique-rome/',
            },
          ],
        },
        {
          title: 'Resources',
          links: [
            { label: 'Blog', href: '/blog/' },
            { label: 'Destinations', href: '/destinations/rome/' },
            { label: 'Search', href: '/recherche/' },
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
