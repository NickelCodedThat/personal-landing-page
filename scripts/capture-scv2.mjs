import { chromium } from 'playwright'

async function run() {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 960 } })

  await page.goto('https://scv-2-roan.vercel.app', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Storm Center' }).click()
  await page.waitForTimeout(1500)
  await page.getByText('Preparing the storm map').waitFor({ state: 'detached', timeout: 8000 }).catch(() => {})
  await page.waitForTimeout(1500)

  await page.screenshot({ path: 'scripts/scv2-storm-center-raw.png' })

  await browser.close()
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
