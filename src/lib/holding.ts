/**
 * Client Holding Sitegrow : lecture des articles publiés.
 * @see https://holding.sitegrow.ca/docs
 */

export type HoldingFaq = {
  question: string;
  answer: string;
};

export type HoldingImage = {
  position: number;
  prompt_en?: string;
  alt_fr?: string;
  url: string | null;
};

export type HoldingArticle = {
  slug: string;
  language: string;
  content_type: string;
  meta_title: string;
  meta_description: string;
  h1_title: string;
  summary: string;
  body_markdown: string;
  faq: HoldingFaq[];
  images: HoldingImage[];
  primary_keyword: string;
  secondary_keywords: string[];
  internal_links: string[];
  external_links: string[];
  brand: string;
  word_count: number;
  published_at: string;
};

export type HoldingArticlesResponse = {
  site: string;
  total: number;
  count: number;
  articles: HoldingArticle[];
};

const DEFAULT_BASE = 'https://holding.sitegrow.ca';
const PAGE_SIZE = 100;

function getApiKey(): string | undefined {
  const key = process.env.HOLDING_API_KEY?.trim();
  return key || undefined;
}

function getBaseUrl(): string {
  return (process.env.HOLDING_API_URL?.trim() || DEFAULT_BASE).replace(/\/$/, '');
}

function authHeaders(apiKey: string): HeadersInit {
  return { Authorization: `Bearer ${apiKey}`, Accept: 'application/json' };
}

async function fetchJson<T>(url: string, apiKey: string): Promise<T> {
  const res = await fetch(url, { headers: authHeaders(apiKey) });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`[holding] ${res.status} ${res.statusText} - ${url}${body ? `: ${body}` : ''}`);
  }
  return res.json() as Promise<T>;
}

/** Liste tous les articles publiés / libérés (pagination automatique). */
export async function fetchHoldingArticles(): Promise<HoldingArticle[]> {
  const apiKey = getApiKey();
  if (!apiKey) return [];

  const base = getBaseUrl();
  const all: HoldingArticle[] = [];
  let offset = 0;

  for (;;) {
    const url = `${base}/api/v1/articles?limit=${PAGE_SIZE}&offset=${offset}`;
    const data = await fetchJson<HoldingArticlesResponse>(url, apiKey);
    all.push(...(data.articles ?? []));
    if (all.length >= data.total || (data.articles?.length ?? 0) < PAGE_SIZE) break;
    offset += PAGE_SIZE;
  }

  return all;
}

/** Un article par slug (ou null si absent / non libéré). */
export async function fetchHoldingArticle(slug: string): Promise<HoldingArticle | null> {
  const apiKey = getApiKey();
  if (!apiKey) return null;

  const base = getBaseUrl();
  const url = `${base}/api/v1/articles/${encodeURIComponent(slug)}`;
  try {
    const data = await fetchJson<HoldingArticle | { article: HoldingArticle }>(url, apiKey);
    if ('article' in data && data.article) return data.article;
    if ('slug' in data) return data as HoldingArticle;
    return null;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (message.includes('404')) return null;
    throw err;
  }
}

export function hasHoldingApiKey(): boolean {
  return Boolean(getApiKey());
}
