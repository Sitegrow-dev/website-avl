import { marked, Renderer } from 'marked';

export function slugifyHeading(label: string): string {
  return label
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** Dérive un alt lisible depuis le nom de fichier si le Markdown n’en fournit pas. */
function altFromSrc(href: string | null): string {
  if (!href) return 'Illustration';
  try {
    const path = href.startsWith('http') ? new URL(href).pathname : href;
    const base = path.split('/').pop()?.replace(/\.[a-z0-9]+$/i, '') ?? '';
    const label = base.replace(/[-_]+/g, ' ').trim();
    return label || 'Illustration';
  } catch {
    return 'Illustration';
  }
}

const renderer = new Renderer();
renderer.heading = function ({ text, depth }) {
  const id = slugifyHeading(text.replace(/<[^>]+>/g, ''));
  return `<h${depth} id="${id}">${text}</h${depth}>\n`;
};
const defaultTable = renderer.table.bind(renderer);
renderer.table = function (token) {
  return `<div class="table-wrap">${defaultTable(token)}</div>\n`;
};
renderer.image = function ({ href, title, text }) {
  const alt = (text || '').trim() || altFromSrc(href);
  const titleAttr = title ? ` title="${escapeHtmlAttr(title)}"` : '';
  const src = href ? escapeHtmlAttr(href) : '';
  return `<img src="${src}" alt="${escapeHtmlAttr(alt)}"${titleAttr} loading="lazy" decoding="async" />`;
};

marked.setOptions({
  gfm: true,
  breaks: false,
  renderer,
});

/**
 * Retire le H1 ATX initial (`# Titre`) du Markdown.
 * Le titre est déjà rendu dans le hero article : éviter un second H1 avant le corps.
 */
export function stripLeadingH1(markdown: string): string {
  if (!markdown) return '';
  return markdown.replace(/^\uFEFF?\s*#(?!#)\s+[^\n]+(?:\n+|$)/, '');
}

/** Rend du Markdown Holding en HTML sûr pour `set:html` (contenu éditorial de confiance). */
export function renderMarkdown(
  markdown: string,
  opts: { stripLeadingH1?: boolean } = {}
): string {
  if (!markdown?.trim()) return '';
  const source = opts.stripLeadingH1 ? stripLeadingH1(markdown) : markdown;
  if (!source.trim()) return '';
  return marked.parse(source, { async: false }) as string;
}

/** Extrait une TOC depuis les titres ## du Markdown. */
export function tocFromMarkdown(markdown: string): { id: string; label: string }[] {
  const toc: { id: string; label: string }[] = [];
  const re = /^##\s+(.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = re.exec(markdown)) !== null) {
    const label = match[1].trim().replace(/[#*_`]/g, '');
    const id = slugifyHeading(label);
    if (label && id) toc.push({ id, label });
  }
  return toc;
}
