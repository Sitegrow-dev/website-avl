import type { Lang } from '@/lib/i18n';

const homeFr = {
  hero: {
    title: 'Se marier catholiquement en Italie',
    subtitle: 'Accompagnement des démarches canoniques et choix de vos destinations en Italie.',
    image: '/images/home/hero',
    imageAlt: "Intérieur d'une basilique italienne",
    primaryCta: { label: 'Planifier mon mariage', href: '/contact/' },
  },
  pillars: {
    items: [
      {
        id: 'mariage',
        icon: 'church',
        title: 'Mariage catholique en Italie',
        subtitle: "Les démarches, l'église, le jour J",
        cta: { label: 'Découvrir', href: '/#processus' },
      },
      {
        id: 'voyage',
        icon: 'compass',
        title: 'Voyage & pèlerinage',
        subtitle: 'Rome, le Vatican, les routes sacrées',
        cta: { label: 'Explorer', href: '/#voyage' },
      },
      {
        id: 'patrimoine',
        icon: 'archive',
        title: 'Patrimoine & Vatican',
        subtitle: 'Bibliothèques, basiliques, art sacré',
        cta: { label: 'Visiter', href: '/#patrimoine' },
      },
    ],
  },
  destinations: {
    title: 'Choisissez votre destination',
    items: [
      {
        slug: 'venise',
        title: 'Venise',
        image: '/images/home/destinations/vatican-large',
        imageAlt: 'Gondoles et Grand Canal à Venise',
        href: '/destinations/venise/',
        featured: true,
      },
      {
        slug: 'rome',
        title: 'Rome',
        image: '/images/home/destinations/rome',
        imageAlt: 'Vue de Rome avec monuments et basiliques',
        href: '/destinations/rome/',
      },
      {
        slug: 'toscane',
        title: 'Toscane',
        image: '/images/home/destinations/toscane',
        imageAlt: 'Paysage de collines toscanes',
        href: '/destinations/toscane/',
      },
      {
        slug: 'como',
        title: 'Lac de Côme',
        image: '/images/home/destinations/como',
        imageAlt: 'Lac de Côme entouré de montagnes',
        href: '/destinations/lac-de-come/',
      },
      {
        slug: 'amalfi',
        title: 'Côte Amalfitaine',
        image: '/images/home/destinations/amalfi',
        imageAlt: 'Côte amalfitaine surplombant la mer',
        href: '/destinations/cote-amalfitaine/',
      },
    ],
  },
  editorial: {
    title: "L'Italie, berceau du mariage catholique",
    paragraphs: [
      "Depuis les premiers siècles, Rome et le Vatican constituent le cœur battant de la chrétienté. Se marier en Italie, c'est inscrire son union dans une lignée de foi millénaire, sous l'ombre bienveillante du siège pétrinien.",
      "Chaque basilique, chaque chapelle de village, raconte une histoire de dévotion et d'art sacré. Nous vous ouvrons les portes de ce patrimoine universel pour une célébration hors du temps.",
    ],
    links: [
      { label: 'Visiter le Vatican →', href: '/visiter-le-vatican/' },
      { label: 'Bibliothèque vaticane →', href: '/bibliotheque-vaticane/' },
    ],
  },
  steps: {
    eyebrow: 'Processus',
    title: "Le mariage catholique à l'étranger, étape par étape",
    items: [
      {
        step: '01',
        icon: 'file-check',
        title: 'Dossier religieux',
        description: 'Constitution des pièces canoniques requises.',
      },
      {
        step: '02',
        icon: 'map-pin',
        title: 'Lieu & Église',
        description: 'Choix de la basilique ou de la chapelle idéale.',
      },
      {
        step: '03',
        icon: 'plane-takeoff',
        title: 'Voyage',
        description: 'Logistique et accueil de vos invités en Italie.',
      },
      {
        step: '04',
        icon: 'atom',
        title: 'Le jour J',
        description: 'Célébration et accompagnement sur place.',
      },
    ],
    link: {
      label: 'Voir les guides →',
      href: '/se-marier-eglise-catholique-italie/',
    },
  },
  honeymoon: {
    id: 'lune-de-miel',
    eyebrow: 'Évasion',
    title: 'Prolongez le voyage : lune de miel en Italie',
    description:
      "Après l'émotion de la cérémonie, découvrez la douceur de vivre italienne. Des collines de Toscane aux rivages de la Côte Amalfitaine, nous dessinons pour vous un itinéraire sur mesure.",
    image: '/images/home/honeymoon',
    imageAlt: 'Paysage italien pour une lune de miel',
    links: [
      { label: 'Idées de lune de miel →', href: '/lune-de-miel-italie/' },
      { label: 'Itinéraire Rome 3 jours →', href: '/itineraire-rome-3-jours/' },
    ],
  },
  testimonials: {
    eyebrow: 'Témoignages',
    title: 'Ils ont dit oui en Italie',
    items: [
      {
        quote:
          'Une organisation impeccable. Se marier au Vatican était un rêve, ils en ont fait une réalité sereine.',
        name: 'Clarisse & Jean',
        location: 'Lyon',
      },
      {
        quote:
          "L'accompagnement en français pour les documents religieux nous a sauvé un temps précieux.",
        name: 'Sophie & Marc',
        location: 'Bruxelles',
      },
      {
        quote:
          "L'église choisie à Rome était sublime, exactement ce que nous recherchions pour notre foi.",
        name: 'Hélène & Pierre',
        location: 'Montréal',
      },
    ],
  },
  blog: {
    eyebrow: 'Magazine',
    title: 'Ressources & guides',
    previewImages: {
      'se-marier-eglise-catholique-italie': '/images/home/blog/demarches',
      'getting-married-catholic-church-italy': '/images/home/blog/demarches',
      'marier-a-la-basilique-saint-pierre': '/images/home/blog/eglises-rome',
      'getting-married-st-peters-basilica': '/images/home/blog/eglises-rome',
    } as Record<string, string>,
  },
  faq: {
    eyebrow: 'Aide',
    title: 'Questions fréquentes',
    link: { label: 'Voir toutes les questions →', href: '/contact/' },
  },
  finalCta: {
    title: 'Prêts à commencer ?',
    ctaLabel: 'Nous contacter',
    ctaHref: '/contact/',
  },
  meta: {
    title: 'Mariage catholique en Italie - AFVL',
    description:
      'Découvrez AFVL : accompagnement complet pour un mariage catholique en Italie, démarches canoniques, choix de l\'église et pèlerinage sur mesure.',
  },
} as const;

const homeEn = {
  hero: {
    title: 'Catholic wedding in Italy',
    subtitle: 'Canonical paperwork support and destination planning across Italy.',
    image: '/images/home/hero',
    imageAlt: 'Interior of an Italian basilica',
    primaryCta: { label: 'Plan my wedding', href: '/contact/' },
  },
  pillars: {
    items: [
      {
        id: 'mariage',
        icon: 'church',
        title: 'Catholic wedding in Italy',
        subtitle: 'Paperwork, church, and the big day',
        cta: { label: 'Discover', href: '/#processus' },
      },
      {
        id: 'voyage',
        icon: 'compass',
        title: 'Travel & pilgrimage',
        subtitle: 'Rome, the Vatican, sacred routes',
        cta: { label: 'Explore', href: '/#voyage' },
      },
      {
        id: 'patrimoine',
        icon: 'archive',
        title: 'Heritage & Vatican',
        subtitle: 'Libraries, basilicas, sacred art',
        cta: { label: 'Visit', href: '/#patrimoine' },
      },
    ],
  },
  destinations: {
    title: 'Choose your destination',
    items: [
      {
        slug: 'venise',
        title: 'Venice',
        image: '/images/home/destinations/vatican-large',
        imageAlt: 'Gondolas and the Grand Canal in Venice',
        href: '/destinations/venise/',
        featured: true,
      },
      {
        slug: 'rome',
        title: 'Rome',
        image: '/images/home/destinations/rome',
        imageAlt: 'View of Rome with monuments and basilicas',
        href: '/destinations/rome/',
      },
      {
        slug: 'toscane',
        title: 'Tuscany',
        image: '/images/home/destinations/toscane',
        imageAlt: 'Rolling hills of the Tuscan countryside',
        href: '/destinations/toscane/',
      },
      {
        slug: 'como',
        title: 'Lake Como',
        image: '/images/home/destinations/como',
        imageAlt: 'Lake Como surrounded by mountains',
        href: '/destinations/lac-de-come/',
      },
      {
        slug: 'amalfi',
        title: 'Amalfi Coast',
        image: '/images/home/destinations/amalfi',
        imageAlt: 'Amalfi Coast overlooking the sea',
        href: '/destinations/cote-amalfitaine/',
      },
    ],
  },
  editorial: {
    title: 'Italy, cradle of Catholic marriage',
    paragraphs: [
      'Since the earliest centuries, Rome and the Vatican have been the beating heart of Christianity. Marrying in Italy places your union in a millennial lineage of faith, under the care of the Petrine See.',
      'Every basilica and village chapel tells a story of devotion and sacred art. We open the doors of this universal heritage for a celebration beyond time.',
    ],
    links: [
      { label: 'Visit the Vatican →', href: '/visiter-le-vatican/' },
      { label: 'Vatican Library →', href: '/bibliotheque-vaticane/' },
    ],
  },
  steps: {
    eyebrow: 'Process',
    title: 'Catholic marriage abroad, step by step',
    items: [
      {
        step: '01',
        icon: 'file-check',
        title: 'Religious file',
        description: 'Prepare the required canonical documents.',
      },
      {
        step: '02',
        icon: 'map-pin',
        title: 'Venue & church',
        description: 'Choose the ideal basilica or chapel.',
      },
      {
        step: '03',
        icon: 'plane-takeoff',
        title: 'Travel',
        description: 'Logistics and hospitality for your guests in Italy.',
      },
      {
        step: '04',
        icon: 'atom',
        title: 'The big day',
        description: 'Celebration and on-site accompaniment.',
      },
    ],
    link: {
      label: 'See the guides →',
      href: '/se-marier-eglise-catholique-italie/',
    },
  },
  honeymoon: {
    id: 'lune-de-miel',
    eyebrow: 'Escape',
    title: 'Extend the journey: honeymoon in Italy',
    description:
      'After the emotion of the ceremony, discover Italian dolce vita. From the hills of Tuscany to the Amalfi Coast, we craft a tailored itinerary for you.',
    image: '/images/home/honeymoon',
    imageAlt: 'Italian landscape for a honeymoon',
    links: [
      { label: 'Honeymoon ideas →', href: '/lune-de-miel-italie/' },
      { label: '3-day Rome itinerary →', href: '/itineraire-rome-3-jours/' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'They said yes in Italy',
    items: [
      {
        quote:
          'Impeccable organization. Marrying at the Vatican was a dream: they made it a serene reality.',
        name: 'Clarisse & Jean',
        location: 'Lyon',
      },
      {
        quote:
          'Support with religious documents saved us precious time.',
        name: 'Sophie & Marc',
        location: 'Brussels',
      },
      {
        quote:
          'The church chosen in Rome was sublime: exactly what we wanted for our faith.',
        name: 'Hélène & Pierre',
        location: 'Montreal',
      },
    ],
  },
  blog: {
    eyebrow: 'Magazine',
    title: 'Resources & guides',
    previewImages: {
      'se-marier-eglise-catholique-italie': '/images/home/blog/demarches',
      'getting-married-catholic-church-italy': '/images/home/blog/demarches',
      'marier-a-la-basilique-saint-pierre': '/images/home/blog/eglises-rome',
      'getting-married-st-peters-basilica': '/images/home/blog/eglises-rome',
    } as Record<string, string>,
  },
  faq: {
    eyebrow: 'Help',
    title: 'Frequently asked questions',
    link: { label: 'See all questions →', href: '/contact/' },
  },
  finalCta: {
    title: 'Ready to begin?',
    ctaLabel: 'Contact us',
    ctaHref: '/contact/',
  },
  meta: {
    title: 'Catholic Wedding in Italy - AFVL',
    description:
      'Discover how to plan your Catholic wedding in Italy. Canonical paperwork, church selection, and travel support from Rome to Tuscany and the Amalfi Coast.',
  },
} as const;

export const homeContent = {
  fr: homeFr,
  en: homeEn,
} as const;

export function getHomeContent(lang: Lang) {
  return homeContent[lang];
}

/** @deprecated Prefer getHomeContent(lang) : alias FR pour compatibilité. */
export const homeContentFr = homeFr;
