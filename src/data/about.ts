import type { Lang } from '@/lib/i18n';

/**
 * Contenu About Us : restauré depuis l’archive Wayback de afvl.org/about.htm
 * (meilleure capture disponible : 2014-03-20 ; la capture 2021-02-09 est corrompue).
 */
export type BoardMember = {
  name: string;
  lines: string[];
};

const boardShared = {
  executiveItems: [
    {
      role: { fr: 'Président', en: 'President' },
      name: 'Rev. Msgr. Charles G. Kosanke',
      lines: ['Rector / President', 'SS Cyril & Methodius Seminary', 'Orchard Lake, MI'],
    },
    {
      role: { fr: 'Secrétaire / Trésorier', en: 'Secretary / Treasurer' },
      name: 'Stephen A. Seneker',
      lines: ['CFO', 'Media-Direct LLC', 'Bloomfield Hills, MI'],
    },
    {
      role: { fr: 'Conseiller juridique', en: 'Counsel' },
      name: 'Joseph Bonventre',
      lines: ['Counsel', 'Clark Hill, P.L.C.'],
    },
  ],
  termBoardItems: [
    {
      name: 'Rev. Msgr. Charles G. Kosanke',
      lines: ['Rector / President', 'SS Cyril & Methodius Seminary', 'Orchard Lake, MI'],
    },
    {
      name: 'Stephen A. Seneker',
      lines: ['CFO', 'Media-Direct LLC', 'Bloomfield Hills, MI'],
    },
    {
      name: 'Joseph Bonventre',
      lines: ['Counsel', 'Clark Hill, P.L.C.'],
    },
    {
      name: 'Most Rev. Leonard P. Blair',
      lines: ['Bishop of Toledo', 'Toledo, OH'],
    },
    {
      name: 'Dr. Francis X. Blouin, Jr.',
      lines: ['Director, Bentley Historical Library', 'University of Michigan', 'Ann Arbor, MI'],
    },
    {
      name: 'Sr. Jean R. Bostley, SSJ',
      lines: ['Director, Catholic Library Association', 'Pittsfield, MA'],
    },
    {
      name: 'Dedria Bryfonski',
      lines: ['Executive Vice President', 'Thomson Gale', 'Farmington Hills, MI'],
    },
    {
      name: 'Patrice Merritt',
      lines: [
        'Executive Director',
        'The Detroit Public Library Friends Foundation',
        'Detroit, MI',
      ],
    },
  ] satisfies BoardMember[],
  honoraryBoardItems: [
    {
      name: 'Anthony Cardinal Bevilacqua',
      lines: ['Archbishop Emeritus', 'Philadelphia, PA'],
    },
    {
      name: 'Avery Cardinal Dulles, S.J.',
      lines: ['Fordham University', 'Bronx, NY'],
    },
    {
      name: 'Theodore Cardinal McCarrick',
      lines: ['Archbishop of Washington', 'Washington, D.C.'],
    },
    {
      name: 'Jorge Cardinal Mejia',
      lines: ['Librarian and Archivist, S.R.E., Emeritus', 'Vatican City State, Italy'],
    },
    {
      name: 'Edward Cardinal Egan',
      lines: ['Archbishop of New York', 'New York, NY'],
    },
    {
      name: 'James Cardinal Stafford',
      lines: ['Major Penitentiary', 'Apostolic Penitentiary', 'Rome, Italy'],
    },
    {
      name: 'Francis Cardinal George, O.M.I.',
      lines: ['Archbishop of Chicago', 'Chicago, IL'],
    },
    {
      name: 'Alfons Cardinal Stickler, S.D.B.',
      lines: ['Librarian and Archivist, S.R.E., Emeritus', 'Vatican City State, Italy'],
    },
    {
      name: 'William Cardinal Keeler',
      lines: ['Archbishop of Baltimore', 'Baltimore, MD'],
    },
    {
      name: 'Edmund Cardinal Szoka',
      lines: [
        'President Pontifical Commission for Vatican City State',
        'Vatican City State, Italy',
      ],
    },
    {
      name: 'Adam Cardinal Maida',
      lines: ['Archbishop of Detroit', 'Detroit, MI'],
    },
    {
      name: 'Jean-Louis Cardinal Tauran',
      lines: ['Librarian and Archivist, S.R.E.', 'Vatican City State, Italy'],
    },
    {
      name: 'Rev. Rafaele Farina, S.D.B., Prefect',
      lines: ['Vatican Apostolic Library', 'Vatican City State, Italy'],
    },
  ] satisfies BoardMember[],
};

const aboutFr = {
  title: 'À propos',
  brandEyebrow: 'American Friends of the Vatican Library',
  metaTitle: "À propos de l'AFVL - American Friends of the Vatican Library",
  metaDescription:
    "Découvrez la mission et l'histoire des American Friends of the Vatican Library, fondés en 1981 pour soutenir la Bibliothèque apostolique du Vatican.",
  intro: [
    'La mission des American Friends of the Vatican Library est de faire connaître la Bibliothèque vaticane aux États-Unis. L’organisation contribue aussi au financement de publications savantes, de projets spéciaux et d’autres besoins au-delà du budget de fonctionnement de la Bibliothèque apostolique.',
  ],
  history: {
    title: 'Histoire des American Friends of the Vatican Library',
    paragraphs: [
      'Les American Friends of the Vatican Library, premier groupe auxiliaire de ce type dans la longue histoire de la Bibliothèque vaticane, ont été fondés en 1981 par deux bibliothécaires américains, Mgr Francis X. Canfield et Sœur Claudia Carlen, IHM.',
      'Mgr Canfield et Sœur Carlen ont proposé l’idée au Père Alfons Stickler, préfet de la Bibliothèque, plus tard cardinal bibliothécaire-archiviste de l’Église catholique. Le Père Stickler a reçu le 9 octobre 1981 une lettre du cardinal Casaroli, secrétaire d’État du Vatican, accordant l’approbation de l’organisation par le pape Jean-Paul II. Le Saint-Père a exprimé sa gratitude et encouragé les Friends à promouvoir la Bibliothèque apostolique.',
    ],
  },
  executive: {
    title: 'Comité exécutif',
    items: boardShared.executiveItems.map((item) => ({
      role: item.role.fr,
      name: item.name,
      lines: item.lines,
    })),
  },
  termBoard: {
    title: 'Conseil d’administration',
    items: boardShared.termBoardItems,
  },
  honoraryBoard: {
    title: 'Conseil d’honneur',
    items: boardShared.honoraryBoardItems,
  },
  cta: {
    text: 'Soutenez l’un des trésors culturels du monde. Contactez-nous pour en savoir plus sur l’adhésion et les dons.',
    button: { label: 'Nous joindre', href: '/contact/' },
  },
  values: {
    title: 'Notre mission',
    items: [
      {
        title: 'Sensibilisation',
        description:
          'Faire connaître la Bibliothèque vaticane aux États-Unis.',
      },
      {
        title: 'Recherche',
        description:
          'Financer la publication de travaux savants et de projets spéciaux au-delà du budget de fonctionnement.',
      },
      {
        title: 'Patrimoine',
        description:
          'Soutenir l’un des grands trésors culturels et scientifiques du monde.',
      },
    ],
  },
  team: {
    title: 'Comité exécutif',
    items: [
      {
        name: 'Rev. Msgr. Charles G. Kosanke',
        role: 'Président',
        bio: 'Rector / President, SS Cyril & Methodius Seminary, Orchard Lake, MI.',
        image: '',
      },
      {
        name: 'Stephen A. Seneker',
        role: 'Secrétaire / Trésorier',
        bio: 'CFO, Media-Direct LLC, Bloomfield Hills, MI.',
        image: '',
      },
      {
        name: 'Joseph Bonventre',
        role: 'Conseiller juridique',
        bio: 'Counsel, Clark Hill, P.L.C.',
        image: '',
      },
    ],
  },
} as const;

const aboutEn = {
  title: 'About Us',
  brandEyebrow: 'American Friends of the Vatican Library',
  metaTitle: 'About AFVL - American Friends of the Vatican Library',
  metaDescription:
    'Discover the mission, history, and leadership of the American Friends of the Vatican Library, founded in 1981 to support the Vatican Apostolic Library.',
  intro: [
    'The purpose of the American Friends of the Vatican Library is to develop an awareness of the Vatican Library in the United States. The institution also helps to provide funds for the publication of scholarship, special projects and other needs beyond the operations budget of the Apostolic Library.',
  ],
  history: {
    title: 'History of the American Friends of the Vatican Library',
    paragraphs: [
      'The American Friends of the Vatican Library, the first auxiliary group of its kind in the long history of the Vatican Library, was founded by two American librarians in 1981: Msgr. Francis X. Canfield and Sr. Claudia Carlen, IHM.',
      'Msgr. Canfield and Sr. Carlen proposed the idea for the group to Fr. Alfons Stickler, Prefect for the Library and later Cardinal Librarian-Archivist of the Catholic Church. Fr. Stickler received a letter on Oct. 9, 1981, from Cardinal Casaroli, the Vatican Secretary of State, which granted the approval of the organization by Pope John Paul II. The late Holy Father expressed his gratitude and he encouraged the Friends to promote the Apostolic Library.',
    ],
  },
  executive: {
    title: 'Executive Committee',
    items: boardShared.executiveItems.map((item) => ({
      role: item.role.en,
      name: item.name,
      lines: item.lines,
    })),
  },
  termBoard: {
    title: 'Term Board of Directors',
    items: boardShared.termBoardItems,
  },
  honoraryBoard: {
    title: 'Honorary Board of Directors',
    items: boardShared.honoraryBoardItems,
  },
  cta: {
    text: 'Help support one of the world’s cultural treasures. Contact us to learn more about membership and gifts.',
    button: { label: 'Contact Us', href: '/contact/' },
  },
  values: {
    title: 'Our mission',
    items: [
      {
        title: 'Awareness',
        description: 'Develop awareness of the Vatican Library in the United States.',
      },
      {
        title: 'Scholarship',
        description:
          'Fund the publication of scholarship and special projects beyond the Library’s operations budget.',
      },
      {
        title: 'Heritage',
        description: 'Support one of the world’s great cultural and research treasures.',
      },
    ],
  },
  team: {
    title: 'Executive Committee',
    items: [
      {
        name: 'Rev. Msgr. Charles G. Kosanke',
        role: 'President',
        bio: 'Rector / President, SS Cyril & Methodius Seminary, Orchard Lake, MI.',
        image: '',
      },
      {
        name: 'Stephen A. Seneker',
        role: 'Secretary / Treasurer',
        bio: 'CFO, Media-Direct LLC, Bloomfield Hills, MI.',
        image: '',
      },
      {
        name: 'Joseph Bonventre',
        role: 'Counsel',
        bio: 'Counsel, Clark Hill, P.L.C.',
        image: '',
      },
    ],
  },
} as const;

export const aboutContent = {
  fr: aboutFr,
  en: aboutEn,
} as const;

export function getAboutContent(lang: Lang) {
  return aboutContent[lang];
}
