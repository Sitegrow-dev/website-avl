import { getHomeContent } from '@/data/home';
import { getContactContent } from '@/data/contact';
import { getAboutContent } from '@/data/about';
import { photosContent } from '@/data/photos';
import { getGuidePosts, getPublishedPosts, getPostHref } from '@/data/posts';
import type { Lang } from '@/lib/i18n';

export type SearchRecordType = 'page' | 'guide' | 'blog';

export type SearchRecord = {
  id: string;
  title: string;
  url: string;
  type: SearchRecordType;
  excerpt: string;
  body: string;
  category?: string;
};

export type SearchHit = SearchRecord & { score: number };

function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_~>|-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function clip(text: string, max = 220): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

export function normalizeSearchText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildStaticPages(lang: Lang): SearchRecord[] {
  const home = getHomeContent(lang);
  const contact = getContactContent(lang);
  const about = getAboutContent(lang);
  const isEn = lang === 'en';

  const records: SearchRecord[] = [
    {
      id: `${lang}:home`,
      title: home.hero.title,
      url: isEn ? '/en/' : '/',
      type: 'page',
      excerpt: home.hero.subtitle,
      body: [
        home.hero.title,
        home.hero.subtitle,
        home.editorial.title,
        ...home.editorial.paragraphs,
        home.destinations.title,
      ].join(' '),
    },
    {
      id: `${lang}:contact`,
      title: contact.title,
      url: isEn ? '/en/contact/' : '/contact/',
      type: 'page',
      excerpt: contact.metaDescription,
      body: [contact.title, contact.intro, contact.metaDescription].join(' '),
    },
    {
      id: `${lang}:about`,
      title: about.title,
      url: '/about.htm',
      type: 'page',
      excerpt: about.metaDescription,
      body: [
        about.title,
        about.metaDescription,
        ...about.intro,
        about.history.title,
        ...about.history.paragraphs,
      ].join(' '),
    },
    {
      id: `${lang}:blog-index`,
      title: isEn ? 'Blog' : 'Blog',
      url: isEn ? '/en/blog/' : '/blog/',
      type: 'page',
      excerpt: isEn
        ? 'Articles and updates on Catholic weddings, heritage, and travel in Italy.'
        : 'Articles et actualités sur le mariage catholique, le patrimoine et le voyage en Italie.',
      body: isEn
        ? 'blog articles catholic wedding italy vatican pilgrimage'
        : 'blog articles mariage catholique italie vatican pelerinage',
    },
  ];

  if (isEn) {
    records.push({
      id: 'en:photos',
      title: photosContent.title,
      url: '/photos.htm',
      type: 'page',
      excerpt: photosContent.metaDescription,
      body: [
        photosContent.title,
        photosContent.metaDescription,
        ...photosContent.intro,
      ].join(' '),
    });
  }

  return records;
}

export function buildSearchIndex(lang: Lang): SearchRecord[] {
  const records: SearchRecord[] = [...buildStaticPages(lang)];

  for (const post of getGuidePosts(lang)) {
    const body = stripMarkdown(post.bodyMarkdown ?? '');
    const faqText = (post.faq ?? []).map((item) => `${item.question} ${item.answer}`).join(' ');
    records.push({
      id: `${lang}:guide:${post.slug}`,
      title: post.title,
      url: getPostHref(post),
      type: 'guide',
      excerpt: clip(post.summary || post.chapo || body),
      body: [post.title, post.summary, post.chapo, post.primaryKeyword, body, faqText]
        .filter(Boolean)
        .join(' '),
      category: post.category,
    });
  }

  for (const post of getPublishedPosts(lang)) {
    const body = stripMarkdown(post.bodyMarkdown ?? '');
    records.push({
      id: `${lang}:blog:${post.slug}`,
      title: post.title,
      url: getPostHref(post),
      type: 'blog',
      excerpt: clip(post.summary || post.chapo || body),
      body: [post.title, post.summary, post.chapo, post.primaryKeyword, body]
        .filter(Boolean)
        .join(' '),
      category: post.category,
    });
  }

  return records;
}

export function searchIndex(records: SearchRecord[], query: string, limit = 30): SearchHit[] {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];

  const tokens = normalizedQuery.split(' ').filter((token) => token.length >= 2);
  if (!tokens.length) return [];

  const hits: SearchHit[] = [];

  for (const record of records) {
    const title = normalizeSearchText(record.title);
    const excerpt = normalizeSearchText(record.excerpt);
    const body = normalizeSearchText(record.body);
    const category = normalizeSearchText(record.category ?? '');
    const haystack = `${title} ${excerpt} ${category} ${body}`;

    let score = 0;
    let matchedAll = true;

    for (const token of tokens) {
      if (!haystack.includes(token)) {
        matchedAll = false;
        break;
      }
      if (title.includes(token)) score += title.startsWith(token) ? 12 : 8;
      if (excerpt.includes(token)) score += 4;
      if (category.includes(token)) score += 3;
      if (body.includes(token)) score += 1;
    }

    if (!matchedAll || score <= 0) continue;

    if (title.includes(normalizedQuery)) score += 20;
    hits.push({ ...record, score });
  }

  return hits.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title)).slice(0, limit);
}
