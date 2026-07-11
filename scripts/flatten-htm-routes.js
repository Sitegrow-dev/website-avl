/**
 * Émet les fichiers plats /about.htm et /photos.htm à partir des pages Astro
 * /about/ et /photos/ (Astro + trailingSlash:always ne peut pas générer de
 * vrais fichiers *.htm.astro — seulement des stubs de redirection).
 *
 * Résultat : URL exacte de l’ancien site AFVL, ex. https://domaine/about.htm
 */
import { copyFileSync, existsSync, mkdirSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

/** source dossier Astro → fichier plat legacy */
const MAP = [
  { from: 'about/index.html', to: 'about.htm' },
  { from: 'photos/index.html', to: 'photos.htm' },
];

function emitIn(baseDir) {
  if (!existsSync(baseDir)) return 0;
  let n = 0;
  for (const { from, to } of MAP) {
    const src = join(baseDir, from);
    if (!existsSync(src)) {
      console.warn(`⚠️  source manquante: ${from}`);
      continue;
    }
    const dest = join(baseDir, to);
    // Si un dossier homonyme existe (ancien build), le retirer
    try {
      rmSync(dest, { recursive: true, force: true });
    } catch {
      /* ignore */
    }
    copyFileSync(src, dest);
    n += 1;
    console.log(`✓ emitted ${to} ← ${from} (${baseDir.replace(root + '/', '')})`);
  }
  return n;
}

const targets = [join(root, 'dist'), join(root, '.vercel/output/static')];
let total = 0;
for (const t of targets) {
  total += emitIn(t);
}

if (total === 0) {
  console.log('ℹ️  Aucun fichier .htm émis.');
} else {
  console.log(`✨ ${total} fichier(s) .htm émis.`);
}
