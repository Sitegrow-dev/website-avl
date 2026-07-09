export type TimelineItem = {
  step: string;
  label: string;
  timing: string;
};

export type PostSection = {
  heading?: string;
  id?: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
  timeline?: TimelineItem[];
  link?: { label: string; href: string };
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  category: string;
  categorySlug: string;
  summary: string;
  chapo?: string;
  readingTimeMinutes?: number;
  published: boolean;
  featured?: boolean;
  image?: string;
  /** Image pour les cartes / listing (si différente du hero article). */
  listingImage?: string;
  imageAlt?: string;
  author?: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
  toc?: { id: string; label: string }[];
  usefulLinks?: { label: string; href: string }[];
  relatedSlugs?: string[];
  sections: PostSection[];
};

export const blogCategories = [
  { slug: 'all', label: 'Tout' },
  { slug: 'demarches', label: 'Démarches' },
  { slug: 'destinations', label: 'Destinations' },
  { slug: 'budget', label: 'Budget' },
  { slug: 'voyage', label: 'Voyage & pèlerinage' },
  { slug: 'patrimoine', label: 'Patrimoine' },
] as const;

export const postUi = {
  backLink: 'Retour au blog',
  listEyebrow: 'Blog',
  listTitle: 'Guides & ressources',
  listSubtitle:
    'Conseils pratiques, démarches, destinations et inspirations pour votre mariage catholique en Italie.',
  readArticle: "Lire l'article",
  comingSoon: 'Bientôt disponible',
} as const;

const demarchesArticle: Post = {
  slug: 'mariage-catholique-etranger-delais-documents',
  title: "Mariage catholique à l'étranger : les délais et documents à réunir",
  date: '2025-06-03',
  updated: '2025-06-03',
  category: 'Démarches',
  categorySlug: 'demarches',
  summary:
    'Anticiper les démarches canoniques est essentiel pour une union en Italie. Découvrez le calendrier idéal et la liste exhaustive des pièces à fournir à votre diocèse.',
  chapo:
    "La préparation d'un mariage religieux hors de vos frontières demande rigueur et anticipation. Découvrez comment naviguer sereinement entre les exigences de votre paroisse et celles du diocèse italien.",
  readingTimeMinutes: 8,
  published: true,
  featured: true,
  image: '/images/blog/demarches-hero',
  listingImage: '/images/blog/featured',
  imageAlt: 'Documents pour un mariage catholique en Italie',
  author: {
    name: 'Marie-Claire Fontaine',
    role: 'Spécialiste mariage catholique',
    bio: "Spécialiste du mariage catholique à l'étranger, Marie-Claire accompagne les couples francophones dans leurs démarches depuis plus de 8 ans.",
    image: '/images/blog/author-marie-claire',
  },
  toc: [
    { id: 'situation', label: 'Situation du couple' },
    { id: 'documents', label: 'Documents requis' },
    { id: 'delais', label: 'Délais & Calendrier' },
    { id: 'diocese', label: 'Rôle du diocèse' },
    { id: 'variations', label: 'Variations régionales' },
  ],
  usefulLinks: [
    { label: 'Mariage catholique en Italie →', href: '/' },
    {
      label: 'Dossier canonique complet →',
      href: '/blog/mariage-catholique-etranger-delais-documents/',
    },
    { label: 'Contacter un accompagnateur →', href: '/contact/' },
  ],
  relatedSlugs: [
    'quel-budget-mariage-italie',
    'plus-belles-eglises-rome',
    'dossier-canonique-etape-par-etape',
  ],
  sections: [
    {
      id: 'situation',
      heading: 'Pourquoi les démarches varient selon votre situation',
      paragraphs: [
        'Le mariage catholique est un sacrement universel, mais sa mise en œuvre administrative dépend étroitement de votre lieu de résidence habituel. Que vous soyez deux Français résidant à Lyon ou un couple franco-italien vivant à Bruxelles, le point de départ reste toujours votre paroisse de domicile, celle où vous pratiquez ou celle dont vous dépendez géographiquement.',
      ],
    },
    {
      id: 'documents',
      heading: "Les documents requis par l'Église catholique",
      bullets: [
        'Certificat de baptême',
        'Certificat de confirmation',
        'Attestation de liberté au mariage',
        'Lettre du curé de votre paroisse',
        'Bans de mariage',
      ],
      paragraphs: [
        "Ces pièces constituent le socle de votre dossier canonique. Notez que les certificats de baptême et de confirmation doivent être des copies récentes (moins de 6 mois au moment du mariage) pour garantir que votre état civil religieux n'a pas été modifié.",
      ],
    },
    {
      callout:
        "Bon à savoir — Les délais pour constituer le dossier canonique sont généralement de 3 à 6 mois avant la cérémonie. L'administration vaticane et les chancelleries italiennes traitent des milliers de demandes : anticipez.",
      paragraphs: [],
    },
    {
      id: 'delais',
      heading: 'Les délais à respecter',
      paragraphs: [
        'Pour éviter toute précipitation, nous vous conseillons de suivre ce calendrier indicatif qui a fait ses preuves pour les mariages à Rome ou en Toscane :',
      ],
      timeline: [
        { step: '01', label: 'Premier contact avec le diocèse', timing: '(12 mois avant)' },
        { step: '02', label: 'Constitution du dossier', timing: '(6 mois avant)' },
        { step: '03', label: 'Envoi au diocèse italien', timing: '(3 mois avant)' },
        { step: '04', label: "Confirmation de l'église", timing: '(6 semaines avant)' },
      ],
    },
    {
      id: 'diocese',
      heading: 'Le rôle du diocèse local',
      paragraphs: [
        "Une fois votre dossier complet et visé par votre curé, il est transmis à la chancellerie de votre diocèse (par exemple, le diocèse de Paris ou de Malines-Bruxelles). C'est cet organisme qui accorde le « nihil obstat » (rien ne s'oppose) et transmet officiellement les documents à la chancellerie du diocèse italien concerné. Ce transfert de « curie à curie » est la seule voie officielle reconnue.",
      ],
    },
    {
      id: 'variations',
      heading: 'Ce que ça change selon votre destination',
      paragraphs: [
        'Si le droit canon est le même partout, les usages locaux varient. À Rome, le Vicariat gère des flux importants et demande une précision absolue. En Toscane ou sur la Côte Amalfitaine, les petites paroisses rurales peuvent avoir des délais plus souples, mais demandent souvent une présence sur place quelques jours avant pour une rencontre finale avec le célébrant.',
      ],
      link: { label: 'Voir nos destinations en Italie →', href: '/destinations/rome/' },
    },
  ],
};

export const posts: Post[] = [
  demarchesArticle,
  {
    slug: 'quel-budget-mariage-italie',
    title: 'Quel budget prévoir pour un mariage en Italie ?',
    date: '2024-05-15',
    category: 'Budget',
    categorySlug: 'budget',
    summary: 'Analyse des coûts moyens par région et postes de dépenses.',
    published: true,
    image: '/images/blog/budget',
    imageAlt: 'Budget mariage en Italie',
    sections: [
      {
        paragraphs: [
          "Le budget d'un mariage catholique en Italie varie selon la région, l'église choisie et le nombre d'invités. Voici les principaux postes à anticiper pour une célébration sereine.",
        ],
      },
    ],
  },
  {
    slug: 'plus-belles-eglises-rome',
    title: 'Les plus belles églises pour se marier à Rome',
    date: '2024-05-10',
    category: 'Destinations',
    categorySlug: 'destinations',
    summary: 'Sélection de basiliques historiques et chapelles secrètes.',
    published: true,
    image: '/images/blog/eglises-rome',
    imageAlt: 'Églises de Rome',
    sections: [
      {
        paragraphs: [
          "De la basilique Saint-Pierre au San Luigi dei Francesi, Rome offre un éventail d'églises d'exception pour célébrer votre union dans un cadre chargé d'histoire.",
        ],
      },
    ],
  },
  {
    slug: 'pelerinage-rome-avant-mariage',
    title: 'Organiser son pèlerinage à Rome avant le mariage',
    date: '2024-05-02',
    category: 'Voyage & pèlerinage',
    categorySlug: 'voyage',
    summary: "Lier spiritualité et préparation de l'union sacrée.",
    published: true,
    image: '/images/blog/pelerinage',
    imageAlt: 'Pèlerinage à Rome',
    sections: [
      {
        paragraphs: [
          'Un pèlerinage à Rome peut être une étape spirituelle précieuse dans la préparation de votre mariage, en lien avec les lieux saints de la chrétienté.',
        ],
      },
    ],
  },
  {
    slug: 'dossier-canonique-etape-par-etape',
    title: 'Le dossier canonique : étape par étape',
    date: '2024-04-28',
    category: 'Démarches',
    categorySlug: 'demarches',
    summary: 'Tout comprendre sur les documents requis par la chancellerie.',
    published: true,
    image: '/images/blog/dossier',
    imageAlt: 'Dossier canonique',
    sections: [
      {
        paragraphs: [
          "Le dossier canonique regroupe l'ensemble des pièces attestant de votre état civil religieux et de votre liberté de vous marier selon le droit de l'Église.",
        ],
      },
    ],
  },
  {
    slug: 'mariage-toscane-chateaux-villages',
    title: 'Se marier en Toscane : châteaux et villages',
    date: '2024-04-15',
    category: 'Destinations',
    categorySlug: 'destinations',
    summary: 'Inspiration pour une célébration champêtre et élégante.',
    published: true,
    image: '/images/blog/toscane',
    imageAlt: 'Mariage en Toscane',
    sections: [
      {
        paragraphs: [
          'La Toscane séduit par ses collines, ses vignobles et ses villages médiévaux — un cadre romantique pour une célébration catholique hors du temps.',
        ],
      },
    ],
  },
  {
    slug: 'bibliotheque-vaticane-mariage',
    title: 'La Bibliothèque vaticane et le mariage',
    date: '2024-04-05',
    category: 'Patrimoine',
    categorySlug: 'patrimoine',
    summary: "Découvrir l'art sacré et l'histoire des unions pétriniennes.",
    published: true,
    image: '/images/blog/bibliotheque',
    imageAlt: 'Bibliothèque vaticane',
    sections: [
      {
        paragraphs: [
          "La Bibliothèque apostolique vaticane conserve des trésors de l'art et de la théologie qui éclairent la richesse du patrimoine catholique italien.",
        ],
      },
    ],
  },
];

export function getPostHref(post: Pick<Post, 'slug' | 'published'>): string {
  return post.published ? `/blog/${post.slug}/` : '#';
}

export function getPostBySlug(slug: string): Post | undefined {
  const post = posts.find((item) => item.slug === slug);
  if (!post?.published || post.sections.length === 0) return undefined;
  return post;
}

export function getPublishedPosts(): Post[] {
  return posts.filter((item) => item.published && item.sections.length > 0);
}

export function getFeaturedPost(): Post | undefined {
  return posts.find((p) => p.featured && p.published);
}

export function getRelatedPosts(slugs: string[]): Post[] {
  return slugs.map((slug) => getPostBySlug(slug)).filter((p): p is Post => p !== undefined);
}
