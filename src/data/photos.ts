import type { Lang } from '@/lib/i18n';

/**
 * Contenu Photo Gallery — restauré depuis l’archive Wayback de afvl.org/photos.htm
 * (meilleure capture : 2010-09-15 ; la capture 2025-04-19 est vide/corrompue).
 */
const imagesShared = [
  {
    src: '/images/archive/afvl-header',
    alt: {
      fr: 'American Friends of the Vatican Library — en-tête archivé du site',
      en: 'American Friends of the Vatican Library — archived site header',
    },
    caption: {
      fr: 'En-tête du site (archivé depuis afvl.org/images/header.jpg)',
      en: 'Site header (archived from afvl.org/images/header.jpg)',
    },
    width: 860,
    height: 130,
  },
  {
    src: '/images/archive/afvl-xxv-anniversary',
    alt: {
      fr: 'Emblème du 25e anniversaire de l’AFVL',
      en: 'AFVL twenty-fifth anniversary emblem',
    },
    caption: {
      fr: 'Emblème du 25e anniversaire (archivé depuis afvl.org/images/xxv.gif)',
      en: '25th anniversary emblem (archived from afvl.org/images/xxv.gif)',
    },
    width: 128,
    height: 171,
  },
  {
    src: '/images/archive/afvl-key-tour',
    alt: {
      fr: 'Graphisme promotionnel Key tour du site AFVL',
      en: 'Key tour promotional graphic from the AFVL site',
    },
    caption: {
      fr: 'Graphisme Key tour (archivé depuis afvl.org/images/key_tour.gif)',
      en: 'Key tour graphic (archived from afvl.org/images/key_tour.gif)',
    },
    width: 125,
    height: 167,
  },
] as const;

function buildPhotos(lang: Lang) {
  const images = imagesShared.map((img) => ({
    src: img.src,
    alt: img.alt[lang],
    caption: img.caption[lang],
    width: img.width,
    height: img.height,
  }));

  if (lang === 'fr') {
    return {
      title: 'Galerie photos',
      metaDescription:
        'Galerie photos des American Friends of the Vatican Library — images d’archives restaurées depuis afvl.org.',
      intro:
        'La galerie photos d’origine de l’AFVL était une présentation Flash interactive (gallery.swf) intégrée à cette page.',
      archiveNote: {
        title: 'À propos de cette restauration',
        paragraphs: [
          'Les captures Wayback de photos.htm (2007–2012) ne montrent qu’un objet Flash pointant vers gallery.swf. Ce fichier SWF n’a jamais été conservé par Internet Archive (404 à chaque horodatage connu) : le diaporama d’origine ne peut pas être rejoué.',
          'Ci-dessous, les graphismes du site récupérés depuis l’archive AFVL, présentés dans une mise en page moderne.',
        ],
      },
      galleryHeading: 'Images d’archives restaurées',
      images,
      cta: {
        text: 'En savoir plus sur notre mission et notre direction sur la page À propos.',
        button: { label: 'À propos', href: '/about.htm' },
      },
    } as const;
  }

  return {
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
    galleryHeading: 'Restored archive images',
    images,
    cta: {
      text: 'Learn more about our mission and leadership on the About Us page.',
      button: { label: 'About Us', href: '/about.htm' },
    },
  } as const;
}

export const photosContent = {
  fr: buildPhotos('fr'),
  en: buildPhotos('en'),
} as const;

export function getPhotosContent(lang: Lang) {
  return photosContent[lang];
}
