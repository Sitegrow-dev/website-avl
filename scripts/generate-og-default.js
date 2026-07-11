/**
 * Génère public/images/og-default.png (1200×630) : image de partage social par défaut.
 * SVG → PNG via Sharp. Aucune dépendance externe (police système).
 *
 * Usage: node scripts/generate-og-default.js
 * Recommandé : remplacer ce placeholder par une vraie image de marque avant publication.
 */
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync, mkdirSync } from 'fs';
import { siteConfig } from '../src/config/site.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const outputDir = join(projectRoot, 'public', 'images');
const outputFile = join(outputDir, 'og-default.png');

if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

const siteName = siteConfig.siteName || 'Site';
const city = siteConfig.city || '';

// 1200×630, fond sombre AFVL (#1a1a1a), texte blanc centré.
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1a1a"/>
      <stop offset="100%" stop-color="#2a1515"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <text x="600" y="270" font-family="Georgia, 'Times New Roman', serif" font-size="64" font-weight="700"
        fill="white" text-anchor="middle" dominant-baseline="middle">${escapeXml(siteName)}</text>
  ${
    city
      ? `<text x="600" y="360" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="500"
        fill="rgba(255,255,255,0.8)" text-anchor="middle" dominant-baseline="middle">Mariage catholique &amp; pèlerinage en Italie</text>`
      : ''
  }
  <text x="600" y="540" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="500"
        fill="rgba(255,255,255,0.45)" text-anchor="middle" dominant-baseline="middle">Amor Fides Via Lux</text>
</svg>`;

function escapeXml(s) {
  return s.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}

await sharp(Buffer.from(svg)).png().toFile(outputFile);
console.log(`✓ OG default image generated: public/images/og-default.png (1200×630)`);
