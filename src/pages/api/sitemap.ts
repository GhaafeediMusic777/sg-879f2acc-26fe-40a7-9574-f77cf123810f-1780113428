import type { NextApiRequest, NextApiResponse } from 'next'
import { SITEMAP_ROUTES } from '@/config/seo-v2'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set appropriate headers
  res.setHeader('Content-Type', 'application/xml; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')

  // Generate sitemap XML
  const sitemap = generateSitemap()
  res.write(sitemap)
  res.end()
}

function generateSitemap(): string {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ghaafeedimusic.com'

  const urls = SITEMAP_ROUTES.map((route) => {
    const lastmod = new Date().toISOString().split('T')[0]
    return `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  }).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls}
</urlset>`
}
