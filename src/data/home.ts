export const homeContent = {
  hero: {
    title: 'Se marier catholiquement en Italie',
    subtitle: 'Accompagnement des démarches canoniques et choix de vos destinations en Italie.',
    image: '/images/home/hero',
    imageAlt: "Intérieur d'une basilique italienne",
    primaryCta: { label: 'Planifier mon mariage', href: '/contact/' },
    secondaryCta: { label: 'Télécharger le guide gratuit', href: '/contact/' },
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
        slug: 'vatican',
        title: 'Vatican · Saint-Pierre',
        image: '/images/home/destinations/vatican-large',
        href: '/destinations/rome/',
        featured: true,
      },
      {
        slug: 'rome',
        title: 'Rome',
        image: '/images/home/destinations/rome',
        href: '/destinations/rome/',
      },
      {
        slug: 'toscane',
        title: 'Toscane',
        image: '/images/home/destinations/toscane',
        href: '/destinations/rome/',
      },
      {
        slug: 'como',
        title: 'Lac de Côme',
        image: '/images/home/destinations/como',
        href: '/destinations/rome/',
      },
      {
        slug: 'amalfi',
        title: 'Côte Amalfitaine',
        image: '/images/home/destinations/amalfi',
        href: '/destinations/rome/',
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
      { label: 'Visiter le Vatican →', href: '/#patrimoine' },
      { label: 'Bibliothèque vaticane →', href: '/#patrimoine' },
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
      href: '/blog/',
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
      { label: 'Idées de lune de miel →', href: '/#lune-de-miel' },
      { label: 'Itinéraire Rome 3 jours →', href: '/destinations/rome/' },
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
    /** Images optionnelles par slug Holding (sinon image de l’article). */
    previewImages: {} as Record<string, string>,
  },
  faq: {
    eyebrow: 'Aide',
    title: 'Questions fréquentes',
    link: { label: 'Voir toutes les questions →', href: '/contact/' },
  },
} as const;
