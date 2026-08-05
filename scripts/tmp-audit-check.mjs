import { readFileSync, existsSync } from 'node:fs';

const files = [
  'basilique-saint-pierre/index.html',
  'bibliotheque-vaticane/index.html',
  'blog/index.html',
  'en/blog/index.html',
  'cout-mariage-italie/index.html',
  'destinations/cote-amalfitaine/index.html',
  'destinations/lac-de-come/index.html',
  'destinations/rome/index.html',
  'destinations/toscane/index.html',
  'destinations/venise/index.html',
  'contact/index.html',
  'en/contact/index.html',
  'documents-mariage-religieux-etranger/index.html',
  'en/destinations/lake-como/index.html',
  'itineraire-rome-3-jours/index.html',
  'lune-de-miel-italie/index.html',
  'patrimoine-catholique-rome/index.html',
  'en/catholic-heritage-rome/index.html',
  'blog/marier-a-la-basilique-saint-pierre/index.html',
];

for (const f of files) {
  const path = `dist/${f}`;
  if (!existsSync(path)) {
    console.log(`== ${f} == MISSING`);
    continue;
  }
  const html = readFileSync(path, 'utf8');
  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1] ?? '';
  const desc = /name="description" content="([^"]*)"/.exec(html)?.[1] ?? '';
  console.log(`== ${f} ==`);
  console.log(`TITLE(${title.length}): ${title}`);
  console.log(`DESC(${desc.length}): ${desc}`);
}
