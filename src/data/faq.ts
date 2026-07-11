import type { Lang } from '@/lib/i18n';

export const faqByLang = {
  fr: [
    {
      question: 'Le mariage est-il reconnu en France ?',
      answer:
        'Oui, à condition de respecter les démarches civiles en amont. Le mariage religieux italien a des accords spécifiques qui facilitent la transcription.',
    },
    {
      question: 'Quels sont les délais pour constituer le dossier ?',
      answer:
        "Il est conseillé de commencer 8 à 12 mois à l'avance pour sécuriser le lieu et obtenir les autorisations canoniques nécessaires.",
    },
    {
      question: 'Faut-il parler italien pour se marier en Italie ?',
      answer:
        'Pas nécessairement. Nous proposons des célébrants francophones et traduisons vos documents officiels.',
    },
    {
      question: "Quel est le coût moyen d'un mariage catholique ?",
      answer:
        "Le budget varie selon le lieu (Rome vs campagne), mais prévoyez une base pour les frais de chancellerie, le lieu et l'offrande à l'église.",
    },
  ],
  en: [
    {
      question: 'Is the marriage recognized in my home country?',
      answer:
        'Yes, provided you complete civil formalities beforehand. Italian religious marriage benefits from specific agreements that ease transcription.',
    },
    {
      question: 'How far in advance should we start the file?',
      answer:
        'We recommend starting 8 to 12 months ahead to secure the venue and obtain the required canonical authorizations.',
    },
    {
      question: 'Do we need to speak Italian to marry in Italy?',
      answer:
        'Not necessarily. We can arrange francophone or anglophone celebrants and help translate official documents.',
    },
    {
      question: 'What is the average cost of a Catholic wedding?',
      answer:
        'Budgets vary by location (Rome vs countryside). Plan for chancery fees, the venue, and the church offering as a baseline.',
    },
  ],
} as const;

export function getFaqItems(lang: Lang) {
  return faqByLang[lang];
}

/** @deprecated Prefer getFaqItems(lang) */
export const faqItems = faqByLang.fr;
