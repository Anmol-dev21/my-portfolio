import { JSDOM } from 'jsdom'
import axe from 'axe-core'

const res = await fetch('http://localhost:4173')
const html = await res.text()
const dom = new JSDOM(html)
const { window } = dom

const results = await axe.run(window.document)
console.log('A11y issues:', results.violations.length)
for (const v of results.violations) {
  console.log(`${v.id}: ${v.description}`)
}
if (results.violations.length > 0) {
  process.exit(1)
}
