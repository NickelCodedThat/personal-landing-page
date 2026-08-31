import { chromium } from 'playwright'

async function run() {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 837 } })

  await page.goto('https://green-bros-site.vercel.app', { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)

  await page.screenshot({ path: 'scripts/green-bros-hero-raw.png' })

  await browser.close()
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
