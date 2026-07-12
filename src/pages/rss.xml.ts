import type { APIRoute } from 'astro';
import { buildRssFeed } from '@/lib/rss';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href.replace(/\/$/, '') ?? '').replace(/\/$/, '');
  const xml = buildRssFeed(site, {
    langPrefix: '',
    language: 'fr-CA',
    selfUrl: `${base}/rss.xml`,
    title: 'AFVL - Mariage catholique en Italie et à Rome',
    description:
      "Découvrez les démarches pour se marier à l'église catholique en Italie, à la basilique Saint-Pierre et les étapes du dossier canonique.",
  });
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
