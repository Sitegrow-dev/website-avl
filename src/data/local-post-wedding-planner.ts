/**
 * Article local FR + EN : wedding planner pour un mariage catholique en Italie.
 * Paire de slugs enregistrée via alternateSlug (et consolidée dans posts.ts).
 */
import { tocFromMarkdown } from '@/lib/markdown';
import type { Post } from '@/data/posts';

export const WEDDING_PLANNER_FR_SLUG = 'wedding-planner-mariage-italie';
export const WEDDING_PLANNER_EN_SLUG = 'wedding-planner-italy';
const DATE = '2026-07-11';

const frBody = `Un wedding planner spécialisé dans le mariage catholique en Italie ne se limite pas au choix du traiteur ou des fleurs. Son rôle central consiste à sécuriser le dossier canonique auprès du diocèse, à coordonner l'église et les prestataires, puis à orchestrer le jour J, du premier échange jusqu'à la cérémonie.

Beaucoup de couples québécois abordent ce projet en pensant d'abord logistique : lieu, photographe, traiteur. Or, pour un mariage catholique, la pièce maîtresse du calendrier n'est ni la salle de réception ni le menu, c'est l'acceptation du dossier religieux par le diocèse italien. Un accompagnement qui ignore cette réalité expose le couple à des retards, voire à un refus de date.

Cet article détaille ce que couvre réellement un accompagnement sérieux, les formules possibles, le déroulé étape par étape et surtout les limites honnêtes de ce type de service.

## Ce qui distingue un mariage catholique d'un mariage de destination

Un mariage de destination classique repose sur la disponibilité d'un lieu et d'un officiant civil ou laïque. La réservation se négocie directement avec le prestataire, sans autorité religieuse à convaincre.

Un mariage catholique en Italie fonctionne selon une logique différente :

- L'accord de célébration dépend du diocèse et de la paroisse concernée, pas seulement du prix payé
- Le dossier canonique (baptême, confirmation, enquête prénuptiale, liberté au mariage) doit être validé avant toute confirmation de date
- Les délais dépendent des autorités religieuses, qui suivent leur propre rythme administratif
- Certaines situations, comme un conjoint non catholique ou un mariage antérieur, demandent des démarches supplémentaires auprès de l'évêché

Un wedding planner qui connaît ce cadre construit le calendrier autour du dossier religieux, puis y greffe la logistique. À l'inverse, un planificateur habitué aux mariages laïques risque de caler des réservations avant même de savoir si la date sera confirmée par l'église.

## Les trois formules d'accompagnement

Selon l'ampleur du besoin, l'accompagnement peut prendre plusieurs formes. Chaque couple choisit le niveau qui correspond à sa situation, à son temps disponible et à la complexité de son dossier.

### Accompagnement administratif

Cette formule cible les couples qui gèrent déjà leurs prestataires (lieu de réception, photographe, traiteur) mais qui ont besoin d'un appui pour le volet religieux. L'accompagnement couvre la préparation du dossier canonique, la liste des documents à réunir dans la paroisse d'origine, les traductions nécessaires et le suivi des échanges avec le diocèse italien.

### Accompagnement complet

C'est la formule la plus demandée. Elle combine le suivi du dossier canonique avec la sélection et la coordination des prestataires en Italie : église, lieu de réception, photographe, fleuriste, transport des invités. Le couple garde le dernier mot sur chaque choix, mais n'a pas à gérer seul les échanges avec une dizaine d'interlocuteurs dans une langue et un système administratif différents.

### Accompagnement sur mesure

Certaines situations sortent du cadre standard : couple mixte où un conjoint n'est pas catholique, mariage antérieur nécessitant une procédure auprès de l'évêché, cérémonie civile et religieuse séparées dans deux pays, ou événement combinant plusieurs lieux (église dans un diocèse, réception ailleurs). Dans ces cas, le périmètre exact de l'accompagnement se définit au cas par cas, après un premier échange pour comprendre la situation précise.

## Le déroulé, étape par étape

Un accompagnement structuré suit généralement une séquence assez stable, même si les délais varient selon le dossier :

- Premier échange pour comprendre la situation du couple, la date souhaitée et la région d'Italie visée
- Diagnostic du dossier religieux : baptême, confirmation, situation matrimoniale, paroisse d'origine
- Constitution et transmission du dossier canonique vers le diocèse italien concerné
- Choix de l'église et, selon la formule retenue, des prestataires de réception
- Suivi des validations religieuses et ajustement du calendrier logistique en fonction
- Coordination des derniers détails et présence ou relais le jour de la cérémonie

Cette séquence explique pourquoi le premier échange sert surtout à évaluer où se situe le couple dans son dossier religieux, avant de parler de lieux ou de prestataires.

## Ce que l'accompagnement ne fera pas

Un accompagnement sérieux repose sur des attentes claires dès le départ. Il est tout aussi important de dire ce qu'il ne peut pas faire que ce qu'il couvre :

- Il ne donne aucun accès privilégié au Vatican ou à un diocèse : chaque demande suit le circuit officiel, avec les mêmes délais que pour tout autre couple
- Il ne garantit pas l'obtention d'une dispense (mariage mixte, annulation antérieure, situation particulière) : cette décision appartient exclusivement à l'autorité religieuse compétente
- Il ne permet aucun raccourci administratif : les documents suivent les vérifications et délais normaux du diocèse et de la paroisse d'origine

Un couple qui recherche une solution pour « accélérer » un dossier religieux au-delà de ce cadre risque d'être déçu, quel que soit l'accompagnement choisi.

## Les questions à préparer avant le premier échange

Le premier échange avance beaucoup plus vite lorsque le couple arrive avec quelques réponses déjà en tête :

- Les deux conjoints sont-ils baptisés catholiques, ou l'un des deux appartient-il à une autre confession ou n'a-t-il aucune confession religieuse ?
- L'un des deux conjoints a-t-il déjà été marié, civilement ou religieusement, et cette union est-elle close ?
- Dans quelle paroisse le dossier canonique (baptême, préparation au mariage) peut-il être constitué au retour ?
- Quelle région d'Italie ou quelle église est envisagée, même à titre d'idée générale ?
- Quel est l'horizon de temps souhaité entre aujourd'hui et la date de la cérémonie ?
- Quel niveau d'accompagnement est recherché : uniquement le volet religieux, ou l'ensemble de l'organisation ?

Ces éléments permettent d'orienter directement le couple vers la formule la plus adaptée, sans détour inutile.

## Demander un appel de cadrage

Chaque dossier de mariage catholique en Italie a ses particularités : paroisse d'origine, situation matrimoniale, région visée. Un appel de cadrage permet de clarifier ces éléments avant d'avancer sur une date ou un lieu précis. [Prendre contact](/contact/) pour discuter de votre situation et déterminer la formule d'accompagnement la plus adaptée.
`;

const enBody = `A wedding planner who specializes in Catholic weddings in Italy is not limited to choosing the caterer or the flowers. Their central role is to secure the canonical file with the diocese, coordinate the church and vendors, and then orchestrate the day itself, from the first conversation through to the ceremony.

Many Quebec couples approach this project thinking logistics first: venue, photographer, caterer. But for a Catholic wedding, the centerpiece of the timeline is neither the reception hall nor the menu — it is the Italian diocese's acceptance of the religious file. Support that ignores this reality exposes the couple to delays, or even a refused date.

This article details what serious support actually covers, the possible formulas, the step-by-step process, and above all the honest limits of this kind of service. For background on the religious process itself, see [getting married in a Catholic church in Italy](/en/getting-married-catholic-church-italy/).

## What sets a Catholic wedding apart from a destination wedding

A typical destination wedding rests on the availability of a venue and a civil or secular officiant. The booking is negotiated directly with the vendor, with no religious authority to convince.

A Catholic wedding in Italy works under a different logic:

- Approval to celebrate depends on the diocese and the parish involved, not only on the price paid
- The canonical file (baptism, confirmation, prenuptial inquiry, freedom to marry) must be validated before any date is confirmed
- Timelines depend on religious authorities, who follow their own administrative pace
- Certain situations, such as a non-Catholic spouse or a previous marriage, require additional steps with the diocesan office

A wedding planner who understands this framework builds the timeline around the religious file, then layers logistics on top of it. A planner used to secular weddings, on the other hand, risks locking in bookings before even knowing whether the church will confirm the date.

## The three support formulas

Depending on the scope of the need, support can take several forms. Each couple chooses the level that matches their situation, their available time, and the complexity of their file.

### Administrative support

This formula targets couples who already manage their own vendors (reception venue, photographer, caterer) but need help with the religious track. Support covers preparing the canonical file, listing the documents to gather in the home parish, arranging translations, and following up with the Italian diocese. For the document list itself, see [documents for a religious marriage abroad](/en/documents-religious-marriage-abroad/).

### Full support

This is the most requested formula. It combines follow-up on the canonical file with selecting and coordinating vendors in Italy: church, reception venue, photographer, florist, transport for guests. The couple keeps the final say on every choice, but does not have to manage a dozen contacts alone in a different language and a different administrative system. Budget planning naturally comes up at this stage; see [the cost of a wedding in Italy](/en/cost-wedding-italy/) for a realistic view of what to anticipate.

### Tailored support

Some situations fall outside the standard framework: a mixed-faith couple where one spouse is not Catholic, a previous marriage requiring a process with the diocesan office, civil and religious ceremonies split across two countries, or an event combining several locations (church in one diocese, reception elsewhere). In these cases, the exact scope of support is defined case by case, after an initial conversation to understand the specific situation.

## The process, step by step

Structured support generally follows a fairly stable sequence, even though timelines vary depending on the file:

- Initial conversation to understand the couple's situation, desired date, and the region of Italy in mind
- Diagnostic of the religious file: baptism, confirmation, marital status, home parish
- Assembly and transmission of the canonical file to the relevant Italian diocese
- Selection of the church and, depending on the formula chosen, the reception vendors
- Follow-up on religious validations, with the logistics timeline adjusted accordingly
- Coordination of final details and presence or a point of contact on the day of the ceremony

This sequence explains why the first conversation mainly serves to assess where the couple stands on their religious file, before discussing venues or vendors.

## What this support will not do

Serious support relies on clear expectations from the start. It matters just as much to say what it cannot do as what it covers:

- It provides no privileged access to the Vatican or to a diocese: every request follows the official channel, with the same timelines as for any other couple
- It does not guarantee that a dispensation will be granted (mixed marriage, prior annulment, or other specific situations): that decision belongs exclusively to the competent religious authority
- It allows no administrative shortcuts: documents go through the normal checks and timelines set by the diocese and the home parish

A couple looking for a way to "speed up" a religious file beyond this framework is likely to be disappointed, regardless of the support chosen.

## Questions to prepare before the first conversation

The first conversation moves much faster when the couple arrives with a few answers already in mind:

- Are both spouses baptized Catholics, or does one belong to another faith or to no religious faith?
- Has either spouse been married before, civilly or religiously, and is that union closed?
- In which parish can the canonical file (baptism, marriage preparation) be assembled once home?
- Which region of Italy or which church is being considered, even as a general idea?
- What is the desired timeframe between today and the ceremony date?
- What level of support is being sought: only the religious track, or the entire organization?

These answers make it possible to point the couple directly toward the most suitable formula, without unnecessary back and forth.

## Ask for a scoping call

Every Catholic wedding file in Italy has its own particulars: home parish, marital situation, region in mind. A scoping call clarifies these elements before moving forward on a specific date or venue. [Get in touch](/en/contact/) to discuss your situation and determine the support formula that fits best.
`;

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

const AUTHOR = {
  name: 'Marie Leclair',
  role: 'Rédactrice',
  bio: 'Guides pratiques sur le mariage catholique et le patrimoine en Italie.',
  image: '/images/blog/author-marie-leclair',
} as const;

function buildPost(opts: {
  lang: 'fr' | 'en';
  slug: string;
  alternateSlug: string;
  title: string;
  metaTitle: string;
  ampMetaTitle?: string;
  ampMetaDescription?: string;
  summary: string;
  bodyMarkdown: string;
  category: string;
  categorySlug: string;
  faq: Post['faq'];
}): Post {
  const bodyMarkdown = opts.bodyMarkdown.trim();
  return {
    slug: opts.slug,
    lang: opts.lang,
    alternateSlug: opts.alternateSlug,
    title: opts.title,
    date: DATE,
    updated: DATE,
    category: opts.category,
    categorySlug: opts.categorySlug,
    summary: opts.summary,
    chapo: opts.summary,
    readingTimeMinutes: Math.max(1, Math.ceil(wordCount(bodyMarkdown) / 200)),
    published: true,
    featured: false,
    image: '/images/blog/demarches-hero',
    listingImage: '/images/blog/mariage-eglise-italie',
    imageAlt:
      opts.lang === 'en'
        ? 'Wedding planner discussing plans with a couple near an Italian church'
        : 'Organisatrice de mariage échangeant avec un couple devant une église italienne',
    metaTitle: opts.metaTitle,
    ampMetaTitle: opts.ampMetaTitle,
    ampMetaDescription: opts.ampMetaDescription,
    bodyMarkdown,
    faq: opts.faq,
    primaryKeyword: opts.lang === 'en' ? 'wedding planner italy' : 'wedding planner mariage italie',
    author: {
      ...AUTHOR,
      role: opts.lang === 'en' ? 'Editor' : AUTHOR.role,
      bio:
        opts.lang === 'en'
          ? 'Practical guides on Catholic marriage and heritage in Italy.'
          : AUTHOR.bio,
    },
    toc: tocFromMarkdown(bodyMarkdown),
    usefulLinks: [
      {
        label: opts.lang === 'en' ? 'Contact →' : 'Contact →',
        href: opts.lang === 'en' ? '/en/contact/' : '/contact/',
      },
    ],
    sections: [],
  };
}

const frPost = buildPost({
  lang: 'fr',
  slug: WEDDING_PLANNER_FR_SLUG,
  alternateSlug: WEDDING_PLANNER_EN_SLUG,
  title: 'Wedding planner pour un mariage catholique en Italie',
  metaTitle: 'Wedding planner mariage en Italie, accompagnement complet',
  summary:
    'Faites-vous accompagner pour un mariage catholique en Italie, du dossier canonique au jour J. Église, diocèse, prestataires et logistique, gérés de bout en bout.',
  bodyMarkdown: frBody,
  category: 'Démarches',
  categorySlug: 'demarches',
  faq: [
    {
      question: "Qu'est-ce qu'un accompagnement wedding planner inclut exactement ?",
      answer:
        "Selon la formule choisie, l'accompagnement couvre la préparation du dossier canonique (baptême, confirmation, enquête prénuptiale), le suivi des échanges avec le diocèse italien, et éventuellement la sélection et la coordination des prestataires (église, réception, photographe, transport). L'étendue exacte se précise lors du premier échange, en fonction de la situation du couple et de la formule retenue : administrative, complète ou sur mesure.",
    },
    {
      question:
        "L'accompagnement peut-il garantir l'obtention d'une dispense ou accélérer le dossier ?",
      answer:
        "Non. L'accompagnement prépare et structure le dossier, mais la décision d'accorder une dispense (mariage mixte, annulation antérieure, ou autre situation particulière) appartient exclusivement à l'autorité religieuse compétente. De la même façon, aucun raccourci administratif n'existe : les documents suivent les vérifications et délais normaux du diocèse et de la paroisse d'origine, sans accès privilégié possible.",
    },
    {
      question: 'Comment se déroule le premier échange avant de démarrer un accompagnement ?',
      answer:
        "Le premier échange sert à comprendre la situation religieuse du couple (baptême, situation matrimoniale, paroisse d'origine), la date et la région envisagées, ainsi que le niveau de soutien recherché. Cette discussion permet ensuite d'orienter vers la formule la plus adaptée, avant tout engagement sur un lieu ou un prestataire précis.",
    },
  ],
});

const enPost = buildPost({
  lang: 'en',
  slug: WEDDING_PLANNER_EN_SLUG,
  alternateSlug: WEDDING_PLANNER_FR_SLUG,
  title: 'Wedding planner for a Catholic wedding in Italy',
  metaTitle: 'Wedding planner for a wedding in Italy: full support',
  summary:
    'Get support for a Catholic wedding in Italy, from the canonical file to the day itself. Church, diocese, vendors, and logistics handled end to end.',
  bodyMarkdown: enBody,
  category: 'Procedures',
  categorySlug: 'demarches',
  faq: [
    {
      question: 'What does wedding planner support actually include?',
      answer:
        "Depending on the formula chosen, support covers preparing the canonical file (baptism, confirmation, prenuptial inquiry), following up with the Italian diocese, and, in some formulas, selecting and coordinating vendors (church, reception, photographer, transport). The exact scope is defined during the first conversation, based on the couple's situation and the formula chosen: administrative, full, or tailored.",
    },
    {
      question: 'Can support guarantee a dispensation or speed up the file?',
      answer:
        'No. Support prepares and structures the file, but the decision to grant a dispensation (mixed marriage, prior annulment, or another specific situation) belongs exclusively to the competent religious authority. Likewise, there are no administrative shortcuts: documents go through the normal checks and timelines set by the diocese and the home parish, with no privileged access available.',
    },
    {
      question: 'What happens during the first conversation before starting support?',
      answer:
        "The first conversation is used to understand the couple's religious situation (baptism, marital status, home parish), the desired date and region, and the level of support being sought. That discussion then points toward the most suitable formula, before any commitment to a specific venue or vendor.",
    },
  ],
});

export const weddingPlannerPosts: Post[] = [frPost, enPost];
