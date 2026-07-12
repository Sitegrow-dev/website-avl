export type DestinationChurch = {
  name: string;
  location: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type DestinationCard = {
  slug: string;
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type Destination = {
  slug: string;
  title: string;
  seo: { title: string; description: string };
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  trustBadges: string[];
  why: {
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };
  churches: {
    title: string;
    subtitle: string;
    items: DestinationChurch[];
  };
  steps: {
    eyebrow: string;
    title: string;
    items: {
      step: string;
      icon: string;
      title: string;
      description: string;
      link: { label: string; href: string };
    }[];
  };
  budget: {
    title: string;
    quote: string;
    items: { label: string; range: string }[];
    link: { label: string; href: string };
  };
  editorial: {
    title: string;
    text: string;
    links: { label: string; href: string }[];
  };
  testimonial: {
    quote: string;
    name: string;
    location: string;
    image: string;
    imageAlt: string;
  };
  otherDestinations: {
    title: string;
    items: DestinationCard[];
  };
  finalCta: {
    title: string;
    cta: { label: string; href: string };
  };
};

export const destinations: Destination[] = [
  {
    slug: 'rome',
    title: 'Rome',
    seo: {
      title: 'Mariage catholique à Rome - AFVL',
      description:
        'Découvrez comment célébrer votre mariage catholique à Rome : dossier canonique, choix d\'église et logistique voyage pris en charge par AFVL.',
    },
    hero: {
      title: 'Se marier catholiquement à Rome',
      subtitle:
        "La Ville Éternelle, berceau de la foi catholique, pour une union inscrite dans l'histoire sacrée.",
      image: '/images/destinations/rome/hero',
      imageAlt: 'Vue de Rome avec une basilique',
    },
    trustBadges: [
      'Diocèse de Rome',
      "Mariages à l'église depuis + de 10 ans",
      'Accompagnement complet du dossier',
      'Logistique voyage incluse',
    ],
    why: {
      title: 'Pourquoi choisir Rome pour votre mariage catholique ?',
      paragraphs: [
        "Rome n'est pas seulement un décor de cinéma à ciel ouvert. Pour un couple catholique, c'est le lieu où la dimension sacramentelle de l'union rencontre la source même de sa tradition.",
        "Près du Vatican, centre de la chrétienté, chaque église respire une ferveur millénaire. Se promettre fidélité ici, c'est s'inscrire dans une géographie sacrée et une histoire de foi universelle.",
        'De la majesté des grandes basiliques pontificales au recueillement des cryptes paléochrétiennes, Rome offre une symbolique inégalée pour le premier jour de votre vie commune.',
      ],
      image: '/images/destinations/rome/why-rome',
      imageAlt: 'Basilique romaine',
    },
    churches: {
      title: 'Nos églises à Rome',
      subtitle: 'Des basiliques millénaires aux chapelles intimistes',
      items: [
        {
          name: 'Basilique Saint-Pierre · Vatican',
          location: 'Cité du Vatican',
          image: '/images/destinations/rome/churches/saint-pierre',
          imageAlt: 'Basilique Saint-Pierre et place Saint-Pierre au Vatican',
          href: '/contact/',
        },
        {
          name: 'Santa Maria Maggiore',
          location: 'Esquilin',
          image: '/images/destinations/rome/churches/santa-maria',
          imageAlt: 'Basilique Santa Maria Maggiore à Rome',
          href: '/contact/',
        },
        {
          name: "Sant'Agnese in Agone",
          location: 'Place Navone',
          image: '/images/destinations/rome/churches/sant-agnese',
          imageAlt: "Église Sant'Agnese in Agone sur la place Navone à Rome",
          href: '/contact/',
        },
        {
          name: 'San Luigi dei Francesi',
          location: 'Cœur historique',
          image: '/images/destinations/rome/churches/san-luigi',
          imageAlt: 'Église San Luigi dei Francesi au cœur historique de Rome',
          href: '/contact/',
        },
      ],
    },
    steps: {
      eyebrow: 'Les Étapes',
      title: 'Se marier catholiquement à Rome',
      items: [
        {
          step: '01',
          icon: 'file-check',
          title: 'Dossier canonique',
          description: 'Constitution des pièces requises pour votre diocèse.',
          link: {
            label: 'Voir les guides →',
            href: '/blog/',
          },
        },
        {
          step: '02',
          icon: 'church',
          title: 'Choisir son église',
          description: 'Sélection et réservation de votre basilique romaine.',
          link: { label: 'Explorer les églises →', href: '/contact/' },
        },
        {
          step: '03',
          icon: 'plane-takeoff',
          title: 'Organiser le séjour',
          description: 'Hébergement, transport et lune de miel en Italie.',
          link: { label: 'Lune de miel en Italie →', href: '/#lune-de-miel' },
        },
      ],
    },
    budget: {
      title: 'Budget pour un mariage à Rome',
      quote: "Le coût varie selon l'église, la cérémonie et vos prestataires locaux.",
      items: [
        { label: "Droits d'église", range: '€ - €€' },
        { label: 'Dossier et accompagnement', range: '€€' },
        { label: 'Logistique voyage', range: '€€ - €€€' },
      ],
      link: { label: 'Obtenir une estimation personnalisée →', href: '/contact/' },
    },
    editorial: {
      title: 'Rome au-delà du mariage',
      text: "Prolongez l'expérience romaine pour vous et vos proches. Des musées du Vatican aux audiences papales, en passant par les saveurs d'un dîner en terrasse dans le Trastevere, nous organisons votre séjour pour une immersion totale dans la douceur de vivre italienne.",
      links: [
        { label: 'Visiter le Vatican →', href: '/#patrimoine' },
        { label: 'Itinéraire Rome 3 jours →', href: '/destinations/rome/' },
      ],
    },
    testimonial: {
      quote:
        "Se marier à Rome, c'était pour nous une évidence spirituelle. L'accompagnement sur le dossier canonique nous a permis de vivre ces mois de préparation dans une sérénité totale, sans le stress administratif.",
      name: 'Claire & Antoine',
      location: 'Paris, France',
      image: '/images/destinations/rome/testimonial',
      imageAlt: 'Claire et Antoine, couple marié à Rome avec AFVL',
    },
    otherDestinations: {
      title: 'Découvrez nos autres destinations',
      items: [
        {
          slug: 'toscane',
          eyebrow: 'Campagne & Vignes',
          title: 'Toscane',
          image: '/images/destinations/cards/toscane',
          imageAlt: 'Paysage de collines et vignobles en Toscane',
          href: '/contact/',
        },
        {
          slug: 'como',
          eyebrow: 'Lacs & Villas',
          title: 'Lac de Côme',
          image: '/images/destinations/cards/como',
          imageAlt: 'Vue du lac de Côme et de ses rives',
          href: '/contact/',
        },
        {
          slug: 'vatican',
          eyebrow: 'Basiliques Sacrées',
          title: 'Vatican',
          image: '/images/destinations/cards/vatican',
          imageAlt: 'Coupole de la basilique Saint-Pierre au Vatican',
          href: '/contact/',
        },
        {
          slug: 'amalfi',
          eyebrow: 'Rivages & Mer',
          title: 'Côte Amalfitaine',
          image: '/images/destinations/cards/amalfi',
          imageAlt: 'Village côtier de la côte amalfitaine',
          href: '/contact/',
        },
      ],
    },
    finalCta: {
      title: 'Prêts à célébrer votre mariage à Rome ?',
      cta: { label: 'Planifier mon mariage', href: '/contact/' },
    },
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
