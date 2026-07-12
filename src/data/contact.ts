import type { Lang } from '@/lib/i18n';

const contactFr = {
  title: 'Nous joindre',
  metaTitle: 'Nous joindre - AFVL',
  metaDescription:
    'Contactez AFVL pour votre mariage catholique en Italie, un pèlerinage à Rome ou un partenariat. On vous répond rapidement.',
  subtitle:
    'Une question, un projet ou une demande de soumission ? Écrivez-nous, on vous répond rapidement.',
  blocks: [
    {
      title: 'Mariage & démarches',
      text: 'Questions sur le dossier canonique, le choix d’église ou le calendrier de votre union en Italie.',
    },
    {
      title: 'Pèlerinage & voyage',
      text: 'Itinéraires, hébergement et accompagnement pour un séjour spirituel à Rome et au-delà.',
    },
    {
      title: 'Soutien & partenariat',
      text: 'Adhésion, dons et collaborations avec les American Friends of the Vatican Library.',
    },
  ],
  topics: [
    { value: 'general', label: 'Demande générale' },
    { value: 'quote', label: 'Demande de soumission' },
    { value: 'partnership', label: 'Partenariat' },
    { value: 'other', label: 'Autre' },
  ],
  form: {
    title: 'Envoyez-nous un message',
    name: 'Nom',
    email: 'Adresse courriel',
    topic: 'Sujet',
    message: 'Message',
    placeholder: 'Votre message…',
    submit: 'Envoyer',
    submitting: 'Envoi…',
    successTitle: 'Message envoyé',
    successMessage:
      'Merci ! Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.',
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
  title: 'Contact Us',
  metaTitle: 'Contact AFVL - Catholic Wedding & Pilgrimage in Italy',
  metaDescription:
    'Reach out to AFVL with your questions about Catholic weddings in Italy, pilgrimages, or partnerships. We reply promptly to every message.',
  subtitle: 'A question, a project, or a quote request? Write to us: we reply promptly.',
  blocks: [
    {
      title: 'Wedding & paperwork',
      text: 'Questions about the canonical file, church selection, or the timeline of your union in Italy.',
    },
    {
      title: 'Pilgrimage & travel',
      text: 'Itineraries, lodging, and accompaniment for a spiritual stay in Rome and beyond.',
    },
    {
      title: 'Support & partnership',
      text: 'Membership, gifts, and collaborations with the American Friends of the Vatican Library.',
    },
  ],
  topics: [
    { value: 'general', label: 'General inquiry' },
    { value: 'quote', label: 'Quote request' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'other', label: 'Other' },
  ],
  form: {
    title: 'Send us a message',
    name: 'Name',
    email: 'Email address',
    topic: 'Topic',
    message: 'Message',
    placeholder: 'Your message…',
    submit: 'Send',
    submitting: 'Sending…',
    successTitle: 'Message sent',
    successMessage: 'Thank you! Your message was sent. We will get back to you shortly.',
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
