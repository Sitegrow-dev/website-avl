/**
 * Article local FR + EN : la basilique Saint-Pierre, visite, coupole et accès gratuit.
 * NOTE : distinct de local-post-basilique.ts, qui traite du MARIAGE à la basilique Saint-Pierre.
 * Celui-ci traite de la VISITE touristique/pèlerine de la basilique.
 */
import { tocFromMarkdown } from '@/lib/markdown';
import type { Post } from '@/data/posts';

export const BASILIQUE_VISITE_FR_SLUG = 'basilique-saint-pierre';
export const BASILIQUE_VISITE_EN_SLUG = 'st-peters-basilica';
const DATE = '2026-07-11';

const frBody = `L'entrée dans la basilique Saint-Pierre est gratuite pour tous, sans billet ni réservation. La contrepartie est la file au contrôle de sécurité, qui peut atteindre une à deux heures en haute saison. Seule la montée à la coupole est payante, avec deux options, l'escalier intégral ou l'ascenseur suivi d'une portion à pied. Les grottes vaticanes, sous la basilique, sont gratuites elles aussi. La nécropole, dite les Scavi, où se trouve le tombeau attribué à saint Pierre, exige une réservation distincte auprès du bureau des fouilles, et les places sont très limitées.

Dans cet article vous découvrirez comment entrer sans perdre une matinée, ce qu'il faut voir à l'intérieur, ce qu'implique la montée à la coupole et comment accéder aux niveaux souterrains.

## Ce qu'il faut savoir avant d'y aller

La basilique actuelle a été bâtie entre 1506 et 1626, sur l'emplacement d'une première église élevée par l'empereur Constantin au IVe siècle. Bramante, Raphaël, Michel-Ange, Maderno et le Bernin y ont travaillé successivement.

C'est la plus grande église du monde. La coupole de Michel-Ange culmine à environ 136 mètres et mesure quelque 42 mètres de diamètre intérieur.

Une précision utile, la basilique Saint-Pierre n'est pas la cathédrale de Rome. La cathédrale du diocèse de Rome est Saint-Jean-de-Latran. Saint-Pierre est une basilique papale, ce qui n'est pas la même chose.

## Entrer sans y passer la matinée

L'accès se fait par la place Saint-Pierre, aux postes de contrôle situés dans l'hémicycle droit de la colonnade quand on regarde la basilique. Le contrôle est de type aéroportuaire, assuré par la police italienne.

En haute saison, d'avril à octobre, la file dépasse fréquemment l'heure et peut atteindre deux heures.

Trois stratégies fonctionnent.

- **Arriver à l'ouverture**, tôt le matin. C'est la méthode la plus efficace et elle ne coûte rien
- **Venir en début d'après-midi**, quand la file du matin s'est résorbée
- **Réserver une visite guidée ou un accès prioritaire**, qui donne une entrée dédiée

Une quatrième option existe, elle est moins connue. Les groupes qui visitent les musées du Vatican avec un guide peuvent emprunter le passage direct depuis la chapelle Sixtine vers la basilique, ce qui court-circuite entièrement la file de la place.

## Les jours à éviter

Le site officiel de la basilique l'indique lui-même, les jours les plus fréquentés sont le mercredi et le dimanche.

**Le mercredi matin.** L'audience générale du pape se tient sur la place Saint-Pierre ou dans la salle Paul VI. La basilique devient inaccessible ou l'accès est fortement retardé pendant la matinée.

**Le dimanche à midi.** Le pape récite l'Angélus, la place se remplit et le contrôle de sécurité s'engorge.

Ces événements ont un intérêt spirituel évident, mais si votre objectif est de visiter la basilique tranquillement, ce sont deux créneaux à contourner.

## Ce qu'il faut voir à l'intérieur

| Œuvre | Où | Ce qu'il faut savoir |
|---|---|---|
| La *Pietà* de Michel-Ange | Première chapelle à droite en entrant | Sculptée alors qu'il avait environ 24 ans. Seule œuvre qu'il ait signée. Protégée par une vitre depuis une agression en 1972 |
| Le baldaquin du Bernin | Au-dessus de l'autel papal | Environ 29 mètres de bronze, colonnes torses, près de neuf ans de chantier |
| La coupole de Michel-Ange | Au centre | Vue de l'intérieur, elle impose par ses proportions |
| La statue de saint Pierre | Nef centrale, côté droit | Le pied droit est usé par les baisers et les touchers des pèlerins |
| La chaire de saint Pierre | Dans l'abside | Composition du Bernin, lumière filtrée par un albâtre |

Comptez une heure à une heure et demie pour la basilique seule, davantage si vous prenez le temps de vous asseoir.

## La montée à la coupole

C'est le seul élément payant de la visite. Deux formules existent.

- **L'escalier intégral**, soit 551 marches
- **L'ascenseur jusqu'à la terrasse, puis environ 320 marches à pied**

L'ascenseur ne vous dispense donc pas de monter. Il vous épargne la première partie, mais la portion finale, dans l'épaisseur de la coupole, se fait obligatoirement à pied.

Un avertissement sérieux. Les derniers passages sont étroits, en pente, et la paroi s'incline avec la courbure du dôme, si bien qu'on monte penché. C'est physiquement exigeant et franchement pénible en cas de claustrophobie. Ceux qui préfèrent s'arrêter peuvent rester à la terrasse intermédiaire, qui offre déjà une vue superbe sur la place et sur l'intérieur de la basilique.

Les horaires de la coupole varient selon la saison, généralement une ouverture matinale avec une fermeture plus tardive d'avril à septembre. L'accès peut être modifié les jours de célébration et le mercredi matin. Vérifiez avant sur le [site officiel de la basilique](https://www.basilicasanpietro.va/fr/).

Sur la première terrasse, prenez le temps de regarder les mosaïques de près. Vues à quelques centimètres, elles révèlent des détails totalement invisibles depuis le sol de la basilique.

## Les grottes vaticanes

Sous le sol de la basilique s'étendent les grottes, créées lorsque l'édifice actuel a été construit au-dessus de la basilique constantinienne.

De nombreux papes y sont inhumés, dont Jean-Paul II. L'accès est gratuit et se fait par les piliers qui soutiennent la coupole. Il n'y a pas d'horaire strictement publié, l'accès suivant celui de la basilique.

## La nécropole, dite les Scavi

C'est le niveau le plus profond, et le plus difficile d'accès. Il s'agit de la nécropole antique où se trouve le tombeau attribué à saint Pierre.

Les conditions sont strictes.

- Réservation obligatoire auprès du bureau des fouilles, l'Ufficio Scavi
- Places très limitées, à demander plusieurs mois à l'avance
- Aucun sac à dos, aucune valise, aucun appareil photo à l'intérieur
- Vestiaire gratuit à droite de la façade de la basilique
- Tenue stricte, épaules couvertes, pantalon long pour les hommes, jupe sous le genou ou pantalon pour les femmes
- Présentation au bureau des fouilles dix minutes avant l'heure prévue, avec la confirmation

Le bureau se situe via Paolo VI, près de la colonnade gauche. Ce n'est pas une visite touristique ordinaire et l'atmosphère y est différente de tout le reste du Vatican.

## Le code vestimentaire

Épaules et genoux couverts, pour les hommes comme pour les femmes. Camisoles, shorts courts et minijupes entraînent un refus d'entrée.

Le contrôle est appliqué, et il n'existe aucun recours sur place. Un foulard léger dans le sac règle la question pour les épaules. Pour les jambes, il faut y penser avant de sortir de l'hôtel.

## Les messes et les célébrations

Plusieurs messes sont célébrées chaque jour dans la basilique. Certaines célébrations papales exigent un billet gratuit, à demander à l'avance auprès de la Préfecture de la Maison pontificale.

C'est également le cas de l'audience générale du mercredi, gratuite mais sur billet.

La basilique reste avant tout un lieu de culte. Le silence et une attitude respectueuse y sont demandés, ce qui n'est pas toujours évident au milieu du flux de visiteurs.

## S'y rendre

Métro ligne A, station Ottaviano-San Pietro, puis environ dix minutes à pied. Plusieurs lignes de bus desservent le secteur, mais elles sont un terrain connu de pickpockets. La voiture est déconseillée, le stationnement est limité.

## Conclusion

La basilique Saint-Pierre est gratuite, et c'est précisément ce qui crée son principal obstacle, la file. Arriver à l'ouverture reste la solution la plus simple et la moins coûteuse.

La coupole vaut l'effort, à condition d'accepter des passages étroits et une montée réelle. Les grottes sont accessibles sans démarche. Les Scavi demandent une réservation plusieurs mois à l'avance, mais offrent l'expérience la plus forte du site.

Pour organiser la journée entière, voyez [visiter le Vatican](/visiter-le-vatican/). Pour les billets des musées, voyez [les billets des musées du Vatican](/musees-du-vatican-billets/).
`;

const enBody = `Entry into St. Peter's Basilica is free for everyone, with no ticket and no reservation. The trade-off is the line at the security check, which can reach one to two hours in high season. Only climbing the dome is paid, with two options: the full staircase, or the elevator followed by a stretch on foot. The Vatican Grottoes, beneath the basilica, are also free. The necropolis, known as the Scavi, where the tomb attributed to St. Peter lies, requires a separate reservation through the excavations office, and spots are very limited.

In this article you will learn how to get in without losing a morning, what to see inside, what climbing the dome involves, and how to access the underground levels.

## What you should know before you go

The current basilica was built between 1506 and 1626, on the site of an earlier church raised by Emperor Constantine in the 4th century. Bramante, Raphael, Michelangelo, Maderno, and Bernini all worked on it in succession.

It is the largest church in the world. Michelangelo's dome rises to about 136 meters and measures roughly 42 meters in interior diameter.

A useful clarification: St. Peter's Basilica is not the cathedral of Rome. The cathedral of the Diocese of Rome is Saint John Lateran. St. Peter's is a papal basilica, which is not the same thing.

## Getting in without losing your morning

Access is through St. Peter's Square, at the checkpoints located in the right-hand hemicycle of the colonnade when facing the basilica. The check is airport-style, run by the Italian police.

In high season, from April to October, the line frequently exceeds an hour and can reach two hours.

Three strategies work.

- **Arrive at opening**, early in the morning. It's the most effective method and it costs nothing
- **Come in the early afternoon**, once the morning line has cleared
- **Book a guided tour or priority access**, which gives you a dedicated entrance

A fourth option exists, and it's less known. Groups visiting the Vatican Museums with a guide can use the direct passage from the Sistine Chapel to the basilica, entirely bypassing the line on the square.

## Days to avoid

The basilica's official site says so itself: the busiest days are Wednesday and Sunday.

**Wednesday morning.** The pope's general audience is held on St. Peter's Square or in the Paul VI Audience Hall. The basilica becomes inaccessible or access is heavily delayed during the morning.

**Sunday at noon.** The pope recites the Angelus, the square fills up, and the security check backs up.

These events carry obvious spiritual interest, but if your goal is a quiet visit to the basilica, these are two time slots to work around.

## What to see inside

| Work | Where | What to know |
|---|---|---|
| Michelangelo's *Pietà* | First chapel on the right when entering | Carved when he was about 24. The only work he ever signed. Protected behind glass since an attack in 1972 |
| Bernini's baldachin | Above the papal altar | About 29 meters of bronze, twisted columns, nearly nine years to build |
| Michelangelo's dome | At the center | Seen from inside, its proportions are overwhelming |
| The statue of St. Peter | Central nave, right side | The right foot is worn smooth by pilgrims' kisses and touches |
| The Chair of St. Peter | In the apse | Bernini composition, light filtered through alabaster |

Allow one hour to an hour and a half for the basilica alone, longer if you take the time to sit.

## Climbing the dome

This is the only paid part of the visit. Two options exist.

- **The full staircase**, 551 steps
- **The elevator to the terrace, then about 320 steps on foot**

The elevator does not spare you the climb entirely. It covers the first stretch, but the final portion, within the thickness of the dome, must be done on foot.

A serious warning. The last passages are narrow, sloped, and the wall leans with the curve of the dome, so you climb at an angle. It's physically demanding and genuinely uncomfortable for anyone claustrophobic. Those who prefer to stop can stay at the intermediate terrace, which already offers a superb view over the square and into the basilica.

The dome's hours vary by season, generally opening in the morning with a later closing from April to September. Access may change on celebration days and on Wednesday mornings. Check ahead on the [basilica's official website](https://www.basilicasanpietro.va/en/).

On the first terrace, take the time to look closely at the mosaics. Seen from a few centimeters away, they reveal details completely invisible from the floor of the basilica.

## The Vatican Grottoes

Beneath the floor of the basilica lie the grottoes, created when the current building was constructed over the Constantinian basilica.

Many popes are buried there, including John Paul II. Access is free and is reached through the piers that support the dome. There is no strictly published schedule; access follows that of the basilica.

## The necropolis, known as the Scavi

This is the deepest level, and the hardest to access. It is the ancient necropolis where the tomb attributed to St. Peter lies.

The conditions are strict.

- Reservation required through the excavations office, the Ufficio Scavi
- Very limited spots, to be requested several months in advance
- No backpacks, no suitcases, no cameras allowed inside
- Free coat check to the right of the basilica's façade
- Strict dress code: shoulders covered, long pants for men, skirts below the knee or pants for women
- Check in at the excavations office ten minutes before the scheduled time, with your confirmation

The office is located on Via Paolo VI, near the left colonnade. This is not an ordinary tourist visit, and the atmosphere is unlike anywhere else in the Vatican.

## The dress code

Shoulders and knees covered, for men and women alike. Tank tops, short shorts, and miniskirts result in denied entry.

The enforcement is real, and there is no recourse on site. A light scarf in your bag solves the shoulder issue. For legs, you need to plan ahead before leaving the hotel.

## Masses and celebrations

Several Masses are celebrated in the basilica every day. Some papal celebrations require a free ticket, requested in advance through the Prefecture of the Papal Household.

The same is true of the Wednesday general audience, free but ticketed.

The basilica remains, above all, a place of worship. Silence and respectful behavior are expected there, which is not always easy amid the flow of visitors.

## Getting there

Metro line A, Ottaviano-San Pietro station, then about a ten-minute walk. Several bus lines serve the area, but they are known pickpocket territory. Driving is not recommended, parking is limited.

## Conclusion

St. Peter's Basilica is free, and that is precisely what creates its main obstacle: the line. Arriving at opening remains the simplest and cheapest solution.

The dome is worth the effort, provided you accept narrow passages and a genuine climb. The grottoes are accessible with no process at all. The Scavi require a reservation months in advance, but offer the most powerful experience on site.

To plan the full day, see [visiting the Vatican](/en/visiting-the-vatican/). For museum tickets, see [Vatican Museums tickets](/en/vatican-museums-tickets/).
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
  usefulLinks: Post['usefulLinks'];
  relatedSlugs?: string[];
  featured?: boolean;
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
    featured: opts.featured ?? false,
    image: '/images/photos/st-peters-basilica-dome',
    listingImage: '/images/photos/st-peters-basilica-dome',
    imageAlt:
      opts.lang === 'en'
        ? "St. Peter's Basilica façade seen from the square"
        : "Façade de la basilique Saint-Pierre vue depuis la place",
    metaTitle: opts.metaTitle,
    ampMetaTitle: opts.ampMetaTitle,
    ampMetaDescription: opts.ampMetaDescription,
    bodyMarkdown,
    faq: opts.faq,
    primaryKeyword:
      opts.lang === 'en' ? 'st peters basilica visit' : 'visite basilique saint-pierre',
    author: {
      ...AUTHOR,
      role: opts.lang === 'en' ? 'Editor' : AUTHOR.role,
      bio:
        opts.lang === 'en'
          ? 'Practical guides on Catholic marriage and heritage in Italy.'
          : AUTHOR.bio,
    },
    toc: tocFromMarkdown(bodyMarkdown),
    usefulLinks: opts.usefulLinks,
    relatedSlugs: opts.relatedSlugs,
    sections: [],
  };
}

const frPost = buildPost({
  lang: 'fr',
  slug: BASILIQUE_VISITE_FR_SLUG,
  alternateSlug: BASILIQUE_VISITE_EN_SLUG,
  title: 'La basilique Saint-Pierre',
  metaTitle: 'Basilique Saint-Pierre, visite, coupole et accès gratuit',
  summary:
    'Préparez votre visite de la basilique Saint-Pierre, entrée gratuite, montée à la coupole, grottes vaticanes et nécropole. Horaires, files et code vestimentaire.',
  bodyMarkdown: frBody,
  category: 'Voyage',
  categorySlug: 'voyage',
  faq: [
    {
      question: "L'entrée dans la basilique Saint-Pierre est-elle payante ?",
      answer:
        "Non, l'entrée est gratuite pour tous, sans billet ni réservation. Seule la montée à la coupole est payante. Les grottes vaticanes, situées sous la basilique, sont également gratuites. En revanche, la gratuité entraîne des files au contrôle de sécurité qui dépassent fréquemment une heure en haute saison.",
    },
    {
      question: 'Combien de marches pour monter à la coupole ?',
      answer:
        "L'ascension complète à pied représente 551 marches. Avec l'ascenseur, qui monte jusqu'à la terrasse, il reste environ 320 marches à gravir. L'ascenseur ne dispense donc pas de marcher. Les derniers passages sont étroits et inclinés, et l'ascension est déconseillée aux personnes claustrophobes.",
    },
    {
      question: 'Comment visiter le tombeau de saint Pierre ?',
      answer:
        "Le tombeau se trouve dans la nécropole vaticane, dite les Scavi. La visite exige une réservation auprès du bureau des fouilles, l'Ufficio Scavi, plusieurs mois à l'avance, car les places sont très limitées. Ni sac, ni appareil photo ne sont admis, et la tenue exigée est stricte.",
    },
    {
      question: 'Quand la basilique est-elle la plus fréquentée ?',
      answer:
        "Le mercredi, jour de l'audience générale du pape, et le dimanche à midi, lors de l'Angélus. Ces deux moments engorgent la place et le contrôle de sécurité. En dehors de ces créneaux, la haute saison, d'avril à octobre, reste chargée. La première heure du matin est le moment le plus calme.",
    },
  ],
  usefulLinks: [{ label: 'Contact →', href: '/contact/' }],
  relatedSlugs: ['visiter-le-vatican', 'musees-du-vatican-billets', 'pelerinage-rome-italie'],
});

const enPost = buildPost({
  lang: 'en',
  slug: BASILIQUE_VISITE_EN_SLUG,
  alternateSlug: BASILIQUE_VISITE_FR_SLUG,
  title: "St. Peter's Basilica",
  metaTitle: "St. Peter's Basilica: visit, dome, and free access",
  summary:
    "Plan your visit to St. Peter's Basilica: free entry, climbing the dome, the Vatican Grottoes, and the necropolis. Hours, lines, and dress code.",
  bodyMarkdown: enBody,
  category: 'Travel',
  categorySlug: 'voyage',
  faq: [
    {
      question: "Is entry into St. Peter's Basilica paid?",
      answer:
        'No, admission is free for everyone, with no ticket and no reservation. Only climbing the dome is paid. The Vatican Grottoes, beneath the basilica, are also free. However, free entry leads to security-check lines that frequently exceed an hour in high season.',
    },
    {
      question: 'How many steps are there to climb the dome?',
      answer:
        'The full climb on foot is 551 steps. With the elevator, which goes up to the terrace, about 320 steps remain to climb. So the elevator does not spare you from walking. The last passages are narrow and sloped, and the climb is not recommended for anyone claustrophobic.',
    },
    {
      question: "How can you visit St. Peter's tomb?",
      answer:
        'The tomb is located in the Vatican Necropolis, known as the Scavi. Visiting requires a reservation through the excavations office, the Ufficio Scavi, several months in advance, since spots are very limited. No bags or cameras are allowed, and the dress code is strict.',
    },
    {
      question: 'When is the basilica busiest?',
      answer:
        "On Wednesdays, the day of the pope's general audience, and on Sundays at noon, during the Angelus. Both moments create congestion on the square and at the security check. Outside those windows, high season from April to October remains busy. The first hour of the morning is the quietest time.",
    },
  ],
  usefulLinks: [{ label: 'Contact →', href: '/en/contact/' }],
  relatedSlugs: ['visiting-the-vatican', 'vatican-museums-tickets', 'pilgrimage-rome-italy'],
});

export const basiliqueVisitePosts: Post[] = [frPost, enPost];
