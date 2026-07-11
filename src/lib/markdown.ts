import { marked, Renderer } from 'marked';

export function slugifyHeading(label: string): string {
  return label
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const renderer = new Renderer();
renderer.heading = function ({ text, depth }) {
  const id = slugifyHeading(text.replace(/<[^>]+>/g, ''));
  return `<h${depth} id="${id}">${text}</h${depth}>\n`;
};

marked.setOptions({
  gfm: true,
  breaks: false,
  renderer,
});

/** Rend du Markdown Holding en HTML sûr pour `set:html` (contenu éditorial de confiance). */
export function renderMarkdown(markdown: string): string {
  if (!markdown?.trim()) return '';
  return marked.parse(markdown, { async: false }) as string;
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
