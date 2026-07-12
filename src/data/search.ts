import type { Lang } from '@/lib/i18n';
import type { SearchRecordType } from '@/lib/search-index';

const searchFr = {
  path: '/recherche/',
  title: 'Recherche',
  metaTitle: 'Recherche - AFVL Amor Fides Via Lux',
  metaDescription:
    'Recherchez sur AFVL : guides mariage catholique, Vatican, pèlerinage et pages du site.',
  placeholder: 'Rechercher un guide, un lieu, un sujet…',
  submit: 'Rechercher',
  openLabel: 'Ouvrir la recherche',
  heading: 'Recherche',
  intro: 'Parcourez les guides, articles et pages du site.',
  emptyQuery: 'Saisissez un mot-clé pour lancer une recherche.',
  noResults: 'Aucun résultat pour',
  resultsFor: 'résultat(s) pour',
  types: {
    page: 'Page',
    guide: 'Guide',
    blog: 'Article',
  } satisfies Record<SearchRecordType, string>,
} as const;

const searchEn = {
  path: '/en/search/',
  title: 'Search',
  metaTitle: 'Search - AFVL Amor Fides Via Lux',
  metaDescription:
    'Search AFVL: Catholic wedding guides, Vatican, pilgrimage, and site pages.',
  placeholder: 'Search a guide, place, or topic…',
  submit: 'Search',
  openLabel: 'Open search',
  heading: 'Search',
  intro: 'Browse guides, articles, and pages across the site.',
  emptyQuery: 'Enter a keyword to start searching.',
  noResults: 'No results for',
  resultsFor: 'result(s) for',
  types: {
    page: 'Page',
    guide: 'Guide',
    blog: 'Article',
  } satisfies Record<SearchRecordType, string>,
} as const;

export const searchContent = {
  fr: searchFr,
  en: searchEn,
} as const;

export function getSearchContent(lang: Lang) {
  return searchContent[lang];
}
