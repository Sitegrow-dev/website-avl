import type { APIRoute } from 'astro';
import { siteConfig } from '@/config/site';
import { getHomeContent } from '@/data/home';
import { servicesContent, services } from '@/data/services';
import { getAboutContent } from '@/data/about';
import { getPublishedPosts } from '@/data/posts';

export const prerender = true;

/**
 * /llms-full.txt : contenu complet du site en un seul Markdown (spec llmstxt.org).
 * Permet à un LLM d'ingérer tout le contenu sans crawler page par page.
 * Alimenté par src/config + src/data (pages clés + articles publiés en entier).
 */
export const GET: APIRoute = ({ site }) => {
  const base = (site?.href.replace(/\/$/, '') ?? siteConfig.url).replace(/\/$/, '');
  const homeContent = getHomeContent('fr');
  const aboutContent = getAboutContent('fr');

  const out: string[] = [];

  out.push(`# ${siteConfig.siteName}`);
  out.push('');
  out.push(`> ${siteConfig.defaultDescription}`);
  out.push('');
  out.push(
    `Site : ${base}/ · Lieu : ${siteConfig.city}, ${siteConfig.region} · Contact : ${siteConfig.contactEmail}`
  );
  out.push('');

  // Accueil
  out.push('## Accueil');
  out.push('');
  out.push(homeContent.hero.title);
  out.push('');
  out.push(homeContent.hero.subtitle);
  out.push('');
  out.push('### Piliers');
  out.push('');
  for (const item of homeContent.pillars.items) {
    out.push(`- **${item.title}** : ${item.subtitle}`);
  }
  out.push('');

  // Services
  out.push(`## ${servicesContent.title}`);
  out.push('');
  out.push(servicesContent.intro);
  out.push('');
  for (const s of services) {
    out.push(`### ${s.title}`);
    out.push('');
    out.push(s.description);
    if (s.features?.length) {
      out.push('');
      for (const f of s.features) out.push(`- ${f}`);
    }
    out.push('');
  }

  // À propos
  out.push(`## ${aboutContent.title}`);
  out.push('');
  for (const p of aboutContent.intro) {
    out.push(p);
    out.push('');
  }
  out.push(`### ${aboutContent.values.title}`);
  out.push('');
  for (const v of aboutContent.values.items) {
    out.push(`- **${v.title}** : ${v.description}`);
  }
  out.push('');

  // Blog (articles complets)
  const posts = getPublishedPosts('fr');
  if (posts.length > 0) {
    out.push('## Blog');
    out.push('');
    for (const post of posts) {
      out.push(`### ${post.title}`);
      out.push('');
      out.push(
        `URL : ${base}/blog/${post.slug}/ · Publié : ${post.date}${post.updated ? ` · Modifié : ${post.updated}` : ''}`
      );
      out.push('');
      out.push(post.summary);
      out.push('');
      if (post.bodyMarkdown?.trim()) {
        out.push(post.bodyMarkdown.trim());
        out.push('');
      } else {
        for (const section of post.sections) {
          if (section.heading) {
            out.push(`#### ${section.heading}`);
            out.push('');
          }
          for (const para of section.paragraphs) {
            out.push(para);
            out.push('');
          }
          if (section.bullets?.length) {
            for (const b of section.bullets) out.push(`- ${b}`);
            out.push('');
          }
        }
      }
      if (post.faq?.length) {
        out.push('#### FAQ');
        out.push('');
        for (const item of post.faq) {
          out.push(`**${item.question}**`);
          out.push('');
          out.push(item.answer);
          out.push('');
        }
      }
    }
  }

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
