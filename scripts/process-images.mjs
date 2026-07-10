/**
 * Ezokhetho Image Processor
 * - Compresses all images at ~80% quality (not too aggressive)
 * - Copies Mapetla-26 images as mapetla_N.jpg to public/images/ezokhetho
 * - Copies About image → about_1.jpg
 * - Copies Sustainable image → sustainable.jpg
 * - Resizes large images to max 2400px wide (keeps aspect ratio)
 */
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC_BASE = path.join(ROOT, 'Ezokhetho-images')
const DEST = path.join(ROOT, 'public', 'images', 'ezokhetho')

const QUALITY = 80        // 80% quality — noticeable compression without artifacts
const MAX_WIDTH = 2400    // max px wide — keeps proportions

async function compress(srcPath, destPath) {
  const img = sharp(srcPath)
  const meta = await img.metadata()
  const needsResize = meta.width && meta.width > MAX_WIDTH

  let pipeline = needsResize
    ? img.resize({ width: MAX_WIDTH, withoutEnlargement: true })
    : img

  await pipeline
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(destPath)

  const srcSize = fs.statSync(srcPath).size
  const destSize = fs.statSync(destPath).size
  const pct = Math.round((1 - destSize / srcSize) * 100)
  console.log(`  ✓ ${path.basename(destPath)} — ${(srcSize/1024).toFixed(0)}KB → ${(destSize/1024).toFixed(0)}KB (↓${pct}%)`)
}

async function run() {
  fs.mkdirSync(DEST, { recursive: true })

  // ── 1. About image ──────────────────────────────────────────────────────────
  console.log('\n📸 About image:')
  const aboutSrc = path.join(SRC_BASE, 'About Us Images', 'About image.jpeg')
  await compress(aboutSrc, path.join(DEST, 'about_1.jpg'))

  // ── 2. Sustainable image ─────────────────────────────────────────────────────
  console.log('\n🌿 Sustainable image:')
  const sustSrc = path.join(SRC_BASE, 'About Us Images', 'Sustainable image.jpeg')
  await compress(sustSrc, path.join(DEST, 'sustainable.jpg'))

  // ── 3. Mapetla-26 images (all 46) → mapetla_1.jpg through mapetla_46.jpg ──
  console.log('\n👗 Mapetla-26 product images:')
  const mapetlaDir = path.join(SRC_BASE, 'Mapetla-26')
  const mapetlaFiles = fs.readdirSync(mapetlaDir)
    .filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg'))
    .sort((a, b) => {
      // Natural sort by number: Ezoketho Mapetla _26-1.jpg, _26-2.jpg...
      const numA = parseInt(a.match(/(\d+)\.jpg$/i)?.[1] ?? '0')
      const numB = parseInt(b.match(/(\d+)\.jpg$/i)?.[1] ?? '0')
      return numA - numB
    })

  for (let i = 0; i < mapetlaFiles.length; i++) {
    const srcPath = path.join(mapetlaDir, mapetlaFiles[i])
    const destPath = path.join(DEST, `mapetla_${i + 1}.jpg`)
    await compress(srcPath, destPath)
  }

  // ── 4. Compress existing ezokhetho images (re-compress brand_story, founder, hero) ──
  console.log('\n🔄 Re-compressing existing hero/founder/brand images:')
  const toRecompress = [
    { file: 'brand-story.jpg', maxW: 2400 },
    { file: 'founder.jpg', maxW: 2400 },
    { file: 'hero.jpg', maxW: 2400 },
  ]
  for (const { file } of toRecompress) {
    const p = path.join(DEST, file)
    if (fs.existsSync(p)) {
      const tmp = p + '.tmp'
      await compress(p, tmp)
      fs.renameSync(tmp, p)
    }
  }

  console.log('\n✅ Done!')
}

run().catch(e => { console.error(e); process.exit(1) })
