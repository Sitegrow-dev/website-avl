/**
 * Télécharge les assets Figma MCP et génère les variantes WebP/AVIF.
 * Usage: node scripts/download-figma-images.mjs
 */
import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..', 'public', 'images');

const WIDTHS = [400, 800, 1200, 1600];
const WEBP_QUALITY = 85;
const AVIF_QUALITY = 70;

/** @type {{ url: string; out: string; width?: number; height?: number }[]} */
const assets = [
  // Home
  {
    url: 'https://www.figma.com/api/mcp/asset/45b55d89-58db-40f0-afb3-2e2d125d7bc0',
    out: 'home/hero',
    width: 1600,
    height: 900,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/346ab4ee-9613-4c5f-ba84-3eccec17491d',
    out: 'home/destinations/vatican-large',
    width: 843,
    height: 600,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/6a71907c-e017-4c05-8c2b-5fcb4b09709b',
    out: 'home/destinations/rome',
    width: 405,
    height: 284,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/1f56d694-8196-4fd3-a671-2e2c57e2ca62',
    out: 'home/destinations/toscane',
    width: 405,
    height: 284,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/ca7bb6d2-5c99-4036-8ad3-c3fb8b2dd736',
    out: 'home/destinations/como',
    width: 405,
    height: 284,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/69a2cece-91e6-49f3-bd93-bf890fd16b3d',
    out: 'home/destinations/amalfi',
    width: 405,
    height: 284,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/bd52e61c-1c1a-4bb5-a8c3-7bb41480c804',
    out: 'home/honeymoon',
    width: 624,
    height: 500,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/635bbece-645f-4957-a075-4882f99c08e6',
    out: 'home/blog/budget',
    width: 405,
    height: 260,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/244939c2-8064-4fcc-959e-8c8e1bc017cd',
    out: 'home/blog/eglises-rome',
    width: 405,
    height: 260,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/30c5b488-d079-4479-a12c-9329324039d1',
    out: 'home/blog/demarches',
    width: 405,
    height: 260,
  },

  // Destination Rome
  {
    url: 'https://www.figma.com/api/mcp/asset/a5e0649d-ee50-4a2b-9028-da2d4eb02d00',
    out: 'destinations/rome/hero',
    width: 1440,
    height: 640,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/71dc6077-c8a8-417a-90b8-deda21168098',
    out: 'destinations/rome/why-rome',
    width: 560,
    height: 720,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/19a28748-a78d-4465-8fb5-659a59c595e0',
    out: 'destinations/rome/churches/st-pierre',
    width: 624,
    height: 320,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/ea8d1295-0bc0-4afa-85ef-806e97ef7bfa',
    out: 'destinations/rome/churches/santa-maria',
    width: 624,
    height: 320,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/0f4f0f07-b3c3-4726-87ac-48ba9f78ef7c',
    out: 'destinations/rome/churches/agnese',
    width: 624,
    height: 320,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/2bd3e8c5-92a8-44eb-b7c9-a4109c98e0b5',
    out: 'destinations/rome/churches/san-luigi',
    width: 624,
    height: 320,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/eb888b58-16d6-4ce3-aaac-a26af046f6ef',
    out: 'destinations/rome/testimonial',
    width: 400,
    height: 500,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/b852a3f2-9ceb-45bc-b864-097dad8fba7b',
    out: 'destinations/cards/toscane',
    width: 296,
    height: 240,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/62ff5ead-3617-4ad4-ba1c-07bdb314e211',
    out: 'destinations/cards/como',
    width: 296,
    height: 240,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/324cb9e2-549f-4201-ae70-0aabcaf02cbf',
    out: 'destinations/cards/vatican',
    width: 296,
    height: 240,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/1eb106a4-584a-4988-97f1-131b515f72e8',
    out: 'destinations/cards/amalfi',
    width: 296,
    height: 240,
  },

  // Blog
  {
    url: 'https://www.figma.com/api/mcp/asset/71bd3201-e971-4dcb-a043-08d740403912',
    out: 'blog/featured',
    width: 640,
    height: 500,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/46c1a210-f841-466c-a729-f8ad4f91a2cd',
    out: 'blog/demarches-hero',
    width: 1440,
    height: 560,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/545fe619-e237-40be-9ea6-1b9faf27332b',
    out: 'blog/author-marie-claire',
    width: 80,
    height: 80,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/c7fb3257-cb76-4418-9abe-0b8aba5717f3',
    out: 'blog/author-marie-leclair',
    width: 32,
    height: 32,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/ce112992-8931-486d-89cf-df8e8407116a',
    out: 'blog/budget',
    width: 405,
    height: 220,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/415fc6b2-83aa-450f-a2fd-a892c56a87e8',
    out: 'blog/eglises-rome',
    width: 405,
    height: 220,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/e44d5ac2-aaad-4671-a4b3-00239a7b1e45',
    out: 'blog/pelerinage',
    width: 405,
    height: 220,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/cb875b09-0031-4928-87bc-43441ffb6bc3',
    out: 'blog/dossier',
    width: 405,
    height: 220,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/d5146ec6-eccc-4668-b412-d1503e3e68ad',
    out: 'blog/toscane',
    width: 405,
    height: 220,
  },
  {
    url: 'https://www.figma.com/api/mcp/asset/c62c332f-6c0b-4602-8501-bfdfce3783b9',
    out: 'blog/bibliotheque',
    width: 405,
    height: 220,
  },
];

async function downloadBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function processAsset({ url, out, width, height }) {
  const dir = join(root, dirname(out));
  const base = join(root, out);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const buf = await downloadBuffer(url);
  let image = sharp(buf);
  const meta = await image.metadata();
  const targetW = width ?? meta.width ?? 1200;
  const targetH = height ?? meta.height;

  image = sharp(buf).resize(targetW, targetH, { fit: 'cover', position: 'centre' });

  await image.clone().webp({ quality: WEBP_QUALITY }).toFile(`${base}.webp`);
  await image.clone().avif({ quality: AVIF_QUALITY }).toFile(`${base}.avif`);

  const srcW = Math.min(meta.width ?? targetW, targetW);
  for (const w of WIDTHS) {
    if (w < srcW) {
      const resized = sharp(buf).resize(w, Math.round((w / targetW) * targetH), {
        fit: 'cover',
        position: 'centre',
      });
      await resized.clone().webp({ quality: WEBP_QUALITY }).toFile(`${base}-${w}.webp`);
      await resized.clone().avif({ quality: AVIF_QUALITY }).toFile(`${base}-${w}.avif`);
    }
  }

  console.log(`✓ ${out}`);
}

console.log('Downloading Figma assets...\n');
for (const asset of assets) {
  try {
    await processAsset(asset);
  } catch (err) {
    console.error(`✗ ${asset.out}:`, err.message);
    process.exitCode = 1;
  }
}
console.log('\nDone.');
