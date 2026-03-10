import { chromium } from 'playwright'
import { mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, 'temporary screenshots')
mkdirSync(outDir, { recursive: true })

const url = process.argv[2] || 'http://localhost:3000'
const suffix = process.argv[3] ? `-${process.argv[3]}` : ''

const files = (await import('fs')).readdirSync(outDir).filter(f => f.endsWith('.png'))
const n = files.length + 1
const outFile = join(outDir, `screenshot-${n}${suffix}.png`)

const browser = await chromium.launch()
const page = await browser.newPage()
await page.setViewportSize({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

// Scroll through the page to trigger whileInView animations
const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight)
for (let y = 0; y <= pageHeight; y += 400) {
  await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y)
  await page.waitForTimeout(120)
}
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(600)

await page.screenshot({ path: outFile, fullPage: true })
await browser.close()

console.log(`Screenshot saved: ${outFile}`)
