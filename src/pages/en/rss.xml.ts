import type { APIRoute } from 'astro';
import { buildRssFeed } from '@/lib/rss';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href.replace(/\/$/, '') ?? '').replace(/\/$/, '');
  const xml = buildRssFeed(site, {
    langPrefix: '/en',
    language: 'en-CA',
    selfUrl: `${base}/en/rss.xml`,
    title: 'AFVL - Catholic Wedding Guides in Italy & the Vatican',
    description:
      'Explore expert guides on getting married in a Catholic church in Italy or at St. Peter\'s Basilica, with real steps, documents, and timelines.',
    filterPosts: (posts) => posts.filter((p) => (p.lang ?? 'fr') === 'en'),
  });
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
