#!/usr/bin/env node
/**
 * Vérifie la connexion Holding (articles publiés).
 *
 * Usage:
 *   HOLDING_API_KEY=xxx npm run holding:status
 */
const apiKey = process.env.HOLDING_API_KEY?.trim();
const base = (process.env.HOLDING_API_URL || 'https://holding.sitegrow.ca').replace(/\/$/, '');

if (!apiKey) {
  console.log('HOLDING_API_KEY manquant.');
  console.log('1. Holding → Sites → générer la clé API');
  console.log('2. Ajouter HOLDING_API_KEY=… dans .env (et Vercel)');
  console.log('3. Relancer : npm run holding:status');
  process.exit(1);
}

const res = await fetch(`${base}/api/v1/articles?limit=100`, {
  headers: { Authorization: `Bearer ${apiKey}`, Accept: 'application/json' },
});
const text = await res.text();
if (!res.ok) {
  console.error(`API Holding erreur ${res.status}: ${text}`);
  process.exit(1);
}

const data = JSON.parse(text);
const remote = data.articles ?? [];
console.log(`Holding (${data.site ?? '?'}) : ${data.total ?? remote.length} article(s) publié(s)`);
for (const a of remote) {
  console.log(`  - ${a.slug}`);
}
if (remote.length === 0) {
  console.log('(aucun article libéré pour l’instant — le blog restera vide)');
}
