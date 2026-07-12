/**
 * Photo gallery at /photos.htm — English-only legacy URL.
 * Editorial content (not Wayback). Images: Wikimedia Commons (see CREDITS.md).
 */

export type PhotosCredit = {
  author: string;
  license: string;
  licenseUrl?: string;
  commonsUrl: string;
};

export type PhotosImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: PhotosCredit;
};

export type PhotosRichPart = string | { label: string; href: string };

export type PhotosBlock = {
  /** h3 under the section h2 */
  title: string;
  image?: PhotosImage;
  paragraphs: PhotosRichPart[][];
};

export type PhotosSection = {
  id: string;
  title: string;
  blocks: PhotosBlock[];
};

export const photosContent = {
  metaTitle: 'Vatican photo gallery: heritage and sacred art in Rome',
  metaDescription:
    'Browse a commented gallery of the Vatican and Rome: St. Peter’s Basilica, museums, Sistine Chapel, and sacred art, with historical context for each place.',
  title: 'Photo gallery of the Vatican and Roman heritage',
  intro: [
    'The Vatican fits in half a square kilometre, yet it holds one of the densest artistic ensembles in the world. This gallery walks through its most striking places: the square and colonnade, St. Peter’s Basilica, the museums, the Sistine Chapel, and the decorated halls of the Apostolic Library. Each image comes with the context that explains what you are looking at, who built it, when, and why the piece matters.',
    'This page is a visual landmark before a visit. Practical details—tickets, hours, and routes—live on the dedicated pages.',
  ],
  sections: [
    {
      id: 'st-peters-square',
      title: 'St. Peter’s Square and Bernini’s colonnade',
      blocks: [
        {
          title: 'Bernini’s colonnade',
          image: {
            src: '/images/photos/st-peters-square-colonnade',
            alt: 'Bernini’s colonnade framing St. Peter’s Square at the Vatican',
            width: 1200,
            height: 796,
            credit: {
              author: 'Dennis G. Jarvis',
              license: 'CC BY-SA 2.0',
              licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
              commonsUrl:
                'https://commons.wikimedia.org/wiki/File:Italy-0029_-_The_Colonnades_(5115983932).jpg',
            },
          },
          paragraphs: [
            [
              'Gian Lorenzo Bernini designed the square between 1656 and 1667, under Alexander VII. His elliptical colonnade has four rows of columns, and the intention is explicit: it figures two arms that welcome and embrace the faithful.',
            ],
            [
              'A detail almost every visitor misses. Two porphyry discs are set into the pavement on either side of the obelisk. Stand exactly on one of them and the four rows of columns visually align into a single line. The colonnade suddenly appears to have only one thickness. It is a calculated optical effect, and it still works.',
            ],
          ],
        },
        {
          title: 'The Egyptian obelisk',
          paragraphs: [
            [
              'The central obelisk itself comes from Egypt. It was raised on the site in 1586 under Sixtus V, a considerable engineering operation for its time.',
            ],
          ],
        },
      ],
    },
    {
      id: 'st-peters-basilica',
      title: 'St. Peter’s Basilica',
      blocks: [
        {
          title: 'Michelangelo’s dome',
          image: {
            src: '/images/photos/st-peters-basilica-dome',
            alt: 'Dome of St. Peter’s Basilica seen from Vatican Square',
            width: 1200,
            height: 900,
            credit: {
              author: 'Sotamies',
              license: 'CC BY-SA 4.0',
              licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
              commonsUrl: 'https://commons.wikimedia.org/wiki/File:St._Peters_Basilica_dome.jpg',
            },
          },
          paragraphs: [
            [
              'The present basilica replaces a first Constantinian church of the fourth century. Construction began in 1506 and stretched over more than a century, successively involving Bramante, Raphael, Michelangelo, Maderno, and Bernini.',
            ],
            [
              'The dome belongs to Michelangelo, who designed it without seeing it finished. It rises to about 136 metres, making it one of the tallest structures in Rome. From the square, Maderno’s later façade partly masks the base of the dome, which explains a frequent disappointment among visitors who find it less spectacular up close than in photographs taken from farther away.',
            ],
          ],
        },
        {
          title: 'The Pietà',
          paragraphs: [
            [
              'Inside, Michelangelo’s Pietà, carved when he was not yet twenty-five, has been protected behind glass since an attack in 1972.',
            ],
          ],
        },
      ],
    },
    {
      id: 'vatican-museums',
      title: 'The Vatican Museums',
      blocks: [
        {
          title: 'Gallery of Maps',
          image: {
            src: '/images/photos/vatican-gallery-of-maps',
            alt: 'Gallery of Maps in the Vatican Museums, Rome',
            width: 1200,
            height: 880,
            credit: {
              author: 'Alvesgaspar',
              license: 'CC BY-SA 4.0',
              licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
              commonsUrl:
                'https://commons.wikimedia.org/wiki/File:Galleria_delle_carte_geografiche_(Vatican_Museums)_September_2015-1a.jpg',
            },
          },
          paragraphs: [
            [
              'The Gallery of Maps stretches about 120 metres. It was decorated between 1580 and 1585 from the surveys of the geographer Ignazio Danti, and presents forty cartographic frescoes of regional Italy.',
            ],
            [
              'The gilded ceiling above it is often photographed more than the maps themselves, which is a mistake. The maps are a remarkable scientific document for their time.',
            ],
          ],
        },
        {
          title: 'Giuseppe Momo’s spiral staircase',
          image: {
            src: '/images/photos/vatican-museums-spiral-staircase',
            alt: 'Helical staircase by Giuseppe Momo at the Vatican Museums',
            width: 1200,
            height: 790,
            credit: {
              author: 'Colin',
              license: 'CC BY-SA 3.0',
              licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
              commonsUrl:
                'https://commons.wikimedia.org/wiki/File:Vatican_Museums_Spiral_Staircase_Looking_Up_2012.jpg',
            },
          },
          paragraphs: [
            [
              'The double-helix staircase designed by Giuseppe Momo in 1932 stands at the museum exit. Its form lets visitors going up and those going down never meet. It has become one of the most reproduced images of the Vatican, often without anyone realizing it dates from the twentieth century rather than the Renaissance.',
            ],
          ],
        },
      ],
    },
    {
      id: 'sistine-chapel',
      title: 'The Sistine Chapel',
      blocks: [
        {
          title: 'Why photography is forbidden',
          paragraphs: [
            [
              'The Sistine Chapel is not photographed. Photography is forbidden there, and the ban is enforced.',
            ],
            [
              'It is not an arbitrary constraint. It protects the frescoes, and it also reflects reproduction rights granted during the restoration campaigns carried out between 1980 and 1994.',
            ],
          ],
        },
        {
          title: 'Michelangelo’s ceiling and Last Judgment',
          paragraphs: [
            [
              'Michelangelo painted the ceiling between 1508 and 1512, then the Last Judgment on the altar wall between 1536 and 1541. Contrary to a stubborn legend, he did not work lying on his back but standing, head tilted back, on scaffolding of his own design.',
            ],
          ],
        },
        {
          title: 'How to read the Genesis cycle',
          paragraphs: [
            [
              'A practical tip worth more than a photograph. Look at the ceiling starting from the altar wall and stepping back toward the entrance. The scenes then read in the chronological order of the Genesis narrative, and you notice that Michelangelo’s style changes as the project advances, the figures growing fuller and more powerful as he proceeds.',
            ],
          ],
        },
      ],
    },
    {
      id: 'apostolic-library',
      title: 'The halls of the Apostolic Library',
      blocks: [
        {
          title: 'Frescoed ceiling of the Camera dei Papiri',
          image: {
            src: '/images/photos/vatican-library-frescoed-ceiling',
            alt: 'Frescoed ceiling in a hall of the Vatican Apostolic Library',
            width: 1200,
            height: 1742,
            credit: {
              author: 'Anton Raphael Mengs (photo M0tty)',
              license: 'Public domain',
              commonsUrl:
                'https://commons.wikimedia.org/wiki/File:Anton_Raphael_Mengs,_The_Triumph_of_History_over_Time_(Allegory_of_the_Museum_Clementinum),_ceiling_fresco_in_the_Camera_dei_Papiri,_Vatican_Library,_1772_-_M0tty.jpg',
            },
          },
          paragraphs: [
            [
              'The Salone Sistino, built under Sixtus V by the architect Domenico Fontana, is among the halls the museum route lets you walk through. Its walls and vaults are entirely painted.',
            ],
          ],
        },
        {
          title: 'Access for researchers',
          paragraphs: [
            [
              'The Vatican Apostolic Library itself is not open for free visiting; its reading rooms are reserved for accredited researchers. Its history, holdings, and the digitization project underway since 2010 are covered in ',
              {
                label: 'the heritage of the Vatican Apostolic Library',
                href: '/about.htm',
              },
              '.',
            ],
          ],
        },
      ],
    },
  ] satisfies PhotosSection[],
  photoRules: {
    title: 'Landmarks for photographing on site',
    headers: ['Place', 'Photography', 'Good to know'],
    rows: [
      [
        'St. Peter’s Square',
        'Allowed',
        'Best light early in the morning; façade faces east',
      ],
      [
        'St. Peter’s Basilica',
        'Allowed, no flash or tripod',
        'Shorter queues late in the day',
      ],
      ['Vatican Museums', 'Allowed, no flash', 'Tripods forbidden'],
      ['Sistine Chapel', 'Forbidden', 'Ban strictly enforced'],
      [
        'Library reading rooms',
        'Restricted access',
        'On researcher accreditation',
      ],
    ],
    note: 'These rules change. Check the conditions in force before your visit with the official services.',
  },
  seeAlso: {
    title: 'See these places with your own eyes',
    links: [
      {
        label: 'Practical information, tickets, hours, and routes in visiting the Vatican',
        href: '/#patrimoine',
      },
      {
        label: 'History and access to the building in St. Peter’s Basilica',
        href: '/en/getting-married-st-peters-basilica/',
      },
      {
        label: 'The city’s basilicas and sacred art in the Catholic heritage of Rome',
        href: '/destinations/rome/',
      },
    ],
  },
  disclaimer:
    'This site is an independent publication. It is not affiliated with the Holy See, the Vatican Apostolic Library, any Vatican institution, or any charity.',
} as const;

export function getPhotosContent() {
  return photosContent;
}
