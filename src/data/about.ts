/**
 * Contenu About Us — restauré depuis l’archive Wayback de afvl.org/about.htm
 * (meilleure capture disponible : 2014-03-20 ; la capture 2021-02-09 est corrompue).
 */
export type BoardMember = {
  name: string;
  lines: string[];
};

export const aboutContent = {
  title: 'About Us',
  metaDescription:
    'Purpose, history, and leadership of the American Friends of the Vatican Library — supporting scholarship and special projects of the Apostolic Library.',
  intro: [
    'The purpose of the American Friends of the Vatican Library is to develop an awareness of the Vatican Library in the United States. The institution also helps to provide funds for the publication of scholarship, special projects and other needs beyond the operations budget of the Apostolic Library.',
  ],
  history: {
    title: 'History of the American Friends of the Vatican Library',
    paragraphs: [
      'The American Friends of the Vatican Library, the first auxiliary group of its kind in the long history of the Vatican Library, was founded by two American librarians in 1981 — Msgr. Francis X. Canfield and Sr. Claudia Carlen, IHM.',
      'Msgr. Canfield and Sr. Carlen proposed the idea for the group to Fr. Alfons Stickler, Prefect for the Library and later Cardinal Librarian-Archivist of the Catholic Church. Fr. Stickler received a letter on Oct. 9, 1981, from Cardinal Casaroli, the Vatican Secretary of State, which granted the approval of the organization by Pope John Paul II. The late Holy Father expressed his gratitude and he encouraged the Friends to promote the Apostolic Library.',
    ],
  },
  executive: {
    title: 'Executive Committee',
    items: [
      {
        role: 'President',
        name: 'Rev. Msgr. Charles G. Kosanke',
        lines: ['Rector / President', 'SS Cyril & Methodius Seminary', 'Orchard Lake, MI'],
      },
      {
        role: 'Secretary / Treasurer',
        name: 'Stephen A. Seneker',
        lines: ['CFO', 'Media-Direct LLC', 'Bloomfield Hills, MI'],
      },
      {
        role: 'Counsel',
        name: 'Joseph Bonventre',
        lines: ['Counsel', 'Clark Hill, P.L.C.'],
      },
    ],
  },
  termBoard: {
    title: 'Term Board of Directors',
    items: [
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
        lines: [
          'Director, Bentley Historical Library',
          'University of Michigan',
          'Ann Arbor, MI',
        ],
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
  },
  honoraryBoard: {
    title: 'Honorary Board of Directors',
    items: [
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
  },
  cta: {
    text: 'Help support one of the world’s cultural treasures. Contact us to learn more about membership and gifts.',
    button: { label: 'Contact Us', href: '/contact/' },
  },
  /** Conservé pour la page /a-propos/ (gabarit) — redirige idéalement vers /about.htm */
  values: {
    title: 'Our mission',
    items: [
      {
        title: 'Awareness',
        description:
          'Develop awareness of the Vatican Library in the United States.',
      },
      {
        title: 'Scholarship',
        description:
          'Fund the publication of scholarship and special projects beyond the Library’s operations budget.',
      },
      {
        title: 'Heritage',
        description:
          'Support one of the world’s great cultural and research treasures.',
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
