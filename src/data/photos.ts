/**
 * Contenu Photo Gallery — restauré depuis l’archive Wayback de afvl.org/photos.htm
 * (meilleure capture : 2010-09-15 ; la capture 2025-04-19 est vide/corrompue).
 *
 * L’ancienne page embarquait uniquement un lecteur Flash (gallery.swf).
 * Ce fichier SWF n’a pas été préservé par archive.org — lacune documentée ci-dessous.
 */
export const photosContent = {
  title: 'Photo Gallery',
  metaDescription:
    'Photo gallery of the American Friends of the Vatican Library — restored archive imagery from afvl.org.',
  intro:
    'The original AFVL photo gallery was an interactive Flash presentation (gallery.swf) embedded on this page.',
  archiveNote: {
    title: 'About this restoration',
    paragraphs: [
      'Wayback Machine snapshots of photos.htm (2007–2012) show only a Flash object pointing to gallery.swf. That SWF file was never captured by the Internet Archive (404 on every known timestamp), so the original slide show cannot be replayed.',
      'Below are the site graphics that were successfully recovered from the archived AFVL site chrome, presented in a modern layout.',
    ],
  },
  images: [
    {
      src: '/images/archive/afvl-header',
      alt: 'American Friends of the Vatican Library — archived site header',
      caption: 'Site header (archived from afvl.org/images/header.jpg)',
      width: 860,
      height: 130,
    },
    {
      src: '/images/archive/afvl-xxv-anniversary',
      alt: 'AFVL twenty-fifth anniversary emblem',
      caption: '25th anniversary emblem (archived from afvl.org/images/xxv.gif)',
      width: 128,
      height: 171,
    },
    {
      src: '/images/archive/afvl-key-tour',
      alt: 'Key tour promotional graphic from the AFVL site',
      caption: 'Key tour graphic (archived from afvl.org/images/key_tour.gif)',
      width: 125,
      height: 167,
    },
  ],
  cta: {
    text: 'Learn more about our mission and leadership on the About Us page.',
    button: { label: 'About Us', href: '/about.htm' },
  },
} as const;
