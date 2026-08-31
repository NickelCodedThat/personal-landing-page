import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const widths = { desktop: [720, 1200], mobile: [480] }

const jobs = [
  {
    src: '/Users/nickboyce/Desktop/acc solutions/images/crewcommand/04-dashboard-desktop.png',
    out: 'src/assets/products/crewcommand-dashboard',
    sizes: widths.desktop,
  },
  {
    src: '/Users/nickboyce/Desktop/acc solutions/images/crewcommand/05-properties-desktop.png',
    out: 'src/assets/products/crewcommand-properties',
    sizes: widths.desktop,
  },
  {
    src: '/Users/nickboyce/Desktop/acc solutions/images/crewcommand/06-property-detail-desktop.png',
    out: 'src/assets/products/crewcommand-property-detail',
    sizes: widths.desktop,
  },
  {
    src: '/Users/nickboyce/Desktop/acc solutions/images/crewcommand/03-onboarding-desktop.png',
    out: 'src/assets/products/crewcommand-onboarding',
    sizes: widths.desktop,
  },
  {
    src: '/Users/nickboyce/Desktop/acc solutions/images/crewcommand/08-dashboard-mobile.png',
    out: 'src/assets/products/crewcommand-dashboard-mobile',
    sizes: widths.mobile,
  },
  {
    src: '/Users/nickboyce/Desktop/Coastal Property Services/src/assets/images/properties/anchorage-pool-aerial.jpg',
    out: 'src/assets/clients/coastal-property-services',
    sizes: widths.desktop,
  },
  {
    src: 'scripts/green-bros-hero-raw.png',
    out: 'src/assets/clients/green-bros',
    sizes: widths.desktop,
  },
]

async function run() {
  await mkdir('src/assets/products', { recursive: true })
  await mkdir('src/assets/clients', { recursive: true })
  await mkdir('src/assets/more-work', { recursive: true })

  for (const job of jobs) {
    for (const width of job.sizes) {
      const image = sharp(job.src).resize({ width, withoutEnlargement: false })
      const avifPath = `${job.out}-${width}.avif`
      const webpPath = `${job.out}-${width}.webp`

      await image.clone().avif({ quality: 55 }).toFile(avifPath)
      await image.clone().webp({ quality: 78 }).toFile(webpPath)

      const meta = await sharp(avifPath).metadata()
      console.log(`${path.basename(avifPath)} / ${path.basename(webpPath)} — ${meta.width}x${meta.height}`)
    }
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
