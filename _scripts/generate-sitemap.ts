import globby from 'globby'
import * as fs from 'fs'

const priorities = {
  '/index': '1.0',
}

async function generateSiteMap(): Promise<void> {
  const pages = await globby(['src/pages/**/*.tsx'])

  const sitemap = `<?xml version='1.0' encoding='UTF-8'?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.google.com/schemas/sitemap/0.84
http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages
    .sort((a, b) => b.indexOf('index'))
    .map(page => {
      return toUrlElement(page)
    })
    .join('')}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

function toUrlElement(page: string): string {
  const path = page.replace('src/pages', '').replace('.tsx', '')
  if (path.indexOf('/_') >= 0) {
    return ''
  }
  const route = path === '/index' ? '' : path

  const priority = priorities[path] ?? '0.8'

  return `
  <url>
      <loc>${`https://fischermatte.dev${route}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>${priority}</priority>
  </url>`
}

generateSiteMap()
