import type { Lang } from '@/lib/i18n';

export type ContactRichPart = string | { label: string; href: string };

export type ContactReason = {
  title: string;
  summary: string;
  paragraphs: ContactRichPart[][];
};

const contactFr = {
  title: 'Nous joindre',
  metaTitle: 'Nous joindre - AFVL',
  metaDescription:
    'Contactez AFVL pour un mariage catholique en Italie, un voyage ou un partenariat. Réponse sous deux jours ouvrables, en français.',
  intro:
    'Une question sur un dossier de mariage, un projet de voyage en Italie ou une demande de collaboration. Écrivez, la réponse arrive sous deux jours ouvrables.',
  advice: {
    title: "Un conseil avant d'écrire",
    text: "Plus votre message est précis, plus la réponse sera utile. Une demande qui indique la situation, les dates envisagées et la région d'intérêt permet une réponse concrète dès le premier échange. Une demande générale reçoit une réponse générale.",
  },
  reasonsTitle: "Trois raisons d'écrire",
  reasons: [
    {
      title: 'Mariage catholique en Italie',
      summary:
        "Dossier canonique, choix de l'église, calendrier, documents à réunir selon votre pays de résidence.",
      paragraphs: [
        [
          'Les questions les plus fréquentes trouvent déjà réponse dans ',
          {
            label: "les démarches pour se marier à l'église catholique en Italie",
            href: '/blog/se-marier-eglise-catholique-italie/',
          },
          ' et dans ',
          {
            label: 'les documents pour un mariage religieux à l’étranger',
            href: '/blog/se-marier-eglise-catholique-italie/#les-pieces-du-dossier-de-mariage',
          },
          ". Si votre situation comporte une union antérieure, une dispense à obtenir ou une contrainte de date, écrivez plutôt que de deviner.",
        ],
        [
          'Pour que la réponse soit utile, indiquez si vous êtes déjà mariés civilement, si l’un de vous a déjà été marié, et votre pays de résidence. Ces trois éléments déterminent à eux seuls la marche à suivre.',
        ],
      ],
    },
    {
      title: 'Voyage et pèlerinage',
      summary:
        'Itinéraires, visite du Vatican, séjour à Rome, organisation d’un pèlerinage.',
      paragraphs: [
        [
          'Les ressources pratiques sont regroupées dans ',
          { label: 'visiter le Vatican', href: '/#patrimoine' },
          ' et dans ',
          { label: 'le pèlerinage à Rome', href: '/destinations/rome/' },
          '.',
        ],
      ],
    },
    {
      title: 'Presse et partenariats',
      summary:
        'Demandes des médias, collaborations éditoriales, propositions de partenariat.',
      paragraphs: [],
    },
  ] satisfies ContactReason[],
  expectations: {
    title: 'Ce à quoi vous pouvez vous attendre',
    items: [
      'Une réponse sous deux jours ouvrables, en français',
      'Une réponse écrite par une personne, pas un modèle générique',
      'Aucune inscription à une infolettre sans votre accord explicite',
      'Vos coordonnées ne sont ni revendues ni transmises à des tiers',
    ],
  },
  cannot: {
    title: 'Ce que nous ne pouvons pas faire',
    intro: 'Une page de contact honnête dit aussi ce qu’elle ne promet pas.',
    items: [
      'Aucun accès privilégié au Vatican, à la basilique Saint-Pierre ou à une institution du Saint-Siège. Les conditions d’accès relèvent des autorités ecclésiastiques compétentes.',
      'Aucune garantie d’obtention d’une dispense, d’une autorisation diocésaine ou d’une déclaration de nullité. Ces décisions appartiennent à l’autorité religieuse.',
      'Aucun raccourci administratif. Les délais de traitement d’un dossier entre chancelleries ne se négocient pas.',
    ],
    closing:
      'Ce qui est offert, c’est une lecture claire de votre situation, l’identification des délais réels et des points de blocage avant qu’ils ne coûtent une date.',
  },
  writeTitle: 'Écrire',
  emailNote: 'Vous pouvez aussi écrire directement à',
  disclaimer:
    'Ce site est une publication indépendante. Il n’est affilié ni au Saint-Siège, ni à la Bibliothèque apostolique vaticane, ni à aucune institution vaticane, ni à aucun organisme de bienfaisance. Aucune adhésion ni aucun don n’est sollicité.',
  topics: [
    { value: 'wedding', label: 'Mariage catholique en Italie' },
    { value: 'travel', label: 'Voyage et pèlerinage' },
    { value: 'press', label: 'Presse et partenariats' },
    { value: 'other', label: 'Autre' },
  ],
  form: {
    title: 'Écrire',
    name: 'Nom',
    email: 'Adresse courriel',
    topic: 'Sujet',
    message: 'Message',
    placeholder: 'Votre message…',
    submit: 'Envoyer',
    submitting: 'Envoi…',
    successTitle: 'Message envoyé',
    successMessage:
      'Merci. Votre message a bien été envoyé. Nous vous répondrons sous deux jours ouvrables.',
    successReset: 'Envoyer un autre message',
    errorGeneric:
      'Une erreur est survenue. Veuillez réessayer ou nous écrire directement par courriel.',
    errorNetwork: 'Connexion impossible. Vérifiez votre réseau et réessayez.',
    errorValidation: 'Veuillez corriger les champs indiqués.',
    requiredName: 'Veuillez indiquer votre nom.',
    requiredEmail: 'Veuillez indiquer votre adresse courriel.',
    invalidEmail: 'Veuillez indiquer une adresse courriel valide.',
    requiredMessage: 'Veuillez écrire votre message.',
    notConfiguredTitle: 'Formulaire non configuré',
    notConfiguredMessage:
      'Définissez PUBLIC_FORMSPREE_ID dans votre fichier .env pour activer le formulaire. Créez un formulaire gratuit sur formspree.io/forms.',
    fallbackCta: 'Écrivez-nous par courriel',
  },
} as const;

const contactEn = {
  title: 'Contact us',
  metaTitle: 'Contact AFVL',
  metaDescription:
    'Contact AFVL about a Catholic wedding in Italy, a pilgrimage, or a partnership. We reply within two business days, in French or English.',
  intro:
    'A question about a wedding file, a travel project in Italy, or a collaboration request. Write to us: you will hear back within two business days.',
  advice: {
    title: 'One tip before you write',
    text: 'The more precise your message, the more useful the reply. A request that states your situation, the dates you have in mind, and the region of interest makes a concrete answer possible from the first exchange. A general request gets a general answer.',
  },
  reasonsTitle: 'Three reasons to write',
  reasons: [
    {
      title: 'Catholic wedding in Italy',
      summary:
        'Canonical file, church selection, timeline, and documents to gather according to your country of residence.',
      paragraphs: [
        [
          'The most frequent questions are already answered in ',
          {
            label: 'getting married in a Catholic church in Italy',
            href: '/en/blog/getting-married-catholic-church-italy/',
          },
          ' and in ',
          {
            label: 'documents for a religious marriage abroad',
            href: '/en/blog/getting-married-catholic-church-italy/#documents-for-the-marriage-file',
          },
          '. If your situation involves a previous union, a dispensation to obtain, or a hard date constraint, write rather than guess.',
        ],
        [
          'For a useful reply, say whether you are already civilly married, whether either of you has been married before, and your country of residence. Those three points alone determine the path ahead.',
        ],
      ],
    },
    {
      title: 'Travel and pilgrimage',
      summary:
        'Itineraries, a visit to the Vatican, a stay in Rome, or organizing a pilgrimage.',
      paragraphs: [
        [
          'Practical resources are gathered in ',
          { label: 'visiting the Vatican', href: '/en/#patrimoine' },
          ' and in ',
          { label: 'pilgrimage in Rome', href: '/destinations/rome/' },
          '.',
        ],
      ],
    },
    {
      title: 'Press and partnerships',
      summary:
        'Media requests, editorial collaborations, and partnership proposals.',
      paragraphs: [],
    },
  ] satisfies ContactReason[],
  expectations: {
    title: 'What you can expect',
    items: [
      'A reply within two business days, in French or English',
      'A reply written by a person, not a generic template',
      'No newsletter signup without your explicit consent',
      'Your details are neither sold nor shared with third parties',
    ],
  },
  cannot: {
    title: 'What we cannot do',
    intro: 'An honest contact page also says what it does not promise.',
    items: [
      'No privileged access to the Vatican, St. Peter’s Basilica, or any Holy See institution. Access conditions belong to the competent ecclesiastical authorities.',
      'No guarantee of obtaining a dispensation, a diocesan authorization, or a declaration of nullity. Those decisions belong to religious authority.',
      'No administrative shortcuts. Processing times for a file between chanceries are not negotiable.',
    ],
    closing:
      'What is offered is a clear reading of your situation, the identification of real timelines, and the points of friction before they cost you a date.',
  },
  writeTitle: 'Write',
  emailNote: 'You can also write directly to',
  disclaimer:
    'This site is an independent publication. It is not affiliated with the Holy See, the Vatican Apostolic Library, any Vatican institution, or any charity. No membership and no donation is solicited.',
  topics: [
    { value: 'wedding', label: 'Catholic wedding in Italy' },
    { value: 'travel', label: 'Travel and pilgrimage' },
    { value: 'press', label: 'Press and partnerships' },
    { value: 'other', label: 'Other' },
  ],
  form: {
    title: 'Write',
    name: 'Name',
    email: 'Email address',
    topic: 'Topic',
    message: 'Message',
    placeholder: 'Your message…',
    submit: 'Send',
    submitting: 'Sending…',
    successTitle: 'Message sent',
    successMessage:
      'Thank you. Your message was sent. We will reply within two business days.',
    successReset: 'Send another message',
    errorGeneric: 'Something went wrong. Please try again or email us directly.',
    errorNetwork: 'Unable to connect. Check your network and try again.',
    errorValidation: 'Please correct the highlighted fields.',
    requiredName: 'Please enter your name.',
    requiredEmail: 'Please enter your email address.',
    invalidEmail: 'Please enter a valid email address.',
    requiredMessage: 'Please enter your message.',
    notConfiguredTitle: 'Form not configured',
    notConfiguredMessage:
      'Set PUBLIC_FORMSPREE_ID in your .env file to enable the form. Create a free form at formspree.io/forms.',
    fallbackCta: 'Email us instead',
  },
} as const;

export const contactContent = {
  fr: contactFr,
  en: contactEn,
} as const;

export function getContactContent(lang: Lang) {
  return contactContent[lang];
}
