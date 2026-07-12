/**
 * Résout un texte alternatif d’image : ignore les chaînes vides / whitespace
 * et retombe sur un fallback descriptif (jamais `alt=""` pour une image de contenu).
 */
export function resolveImageAlt(
  alt: string | undefined | null,
  fallback: string
): string {
  const primary = alt?.trim();
  if (primary) return primary;
  const secondary = fallback.trim();
  if (secondary) return secondary;
  throw new Error('Image alt text is required (empty alt and empty fallback).');
}
