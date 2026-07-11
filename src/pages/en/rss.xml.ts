import type { APIRoute } from 'astro';
import { buildRssFeed } from '@/lib/rss';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href.replace(/\/$/, '') ?? '').replace(/\/$/, '');
  const xml = buildRssFeed(site, {
    langPrefix: '/en',
    language: 'en-CA',
    selfUrl: `${base}/en/rss.xml`,
    filterPosts: (posts) => posts.filter((p) => (p.lang ?? 'fr') === 'en'),
  });
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
