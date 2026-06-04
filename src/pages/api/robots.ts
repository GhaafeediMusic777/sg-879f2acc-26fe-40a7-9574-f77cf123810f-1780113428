import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set appropriate headers
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800')

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ghaafeedimusic.com'

  const robots = `# Ghaafeedi Music Robots.txt
# Generated automatically

# Allow all bots
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /*.json$
Disallow: /*?*
Crawl-delay: 1
Request-rate: 30/1m

# Google Bot
User-agent: Googlebot
Allow: /
Disallow: /admin/
Disallow: /api/
Crawl-delay: 0

# Bing Bot
User-agent: Bingbot
Allow: /
Disallow: /admin/
Disallow: /api/
Crawl-delay: 1

# Block bad bots
User-agent: MJ12bot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-products.xml
Sitemap: ${baseUrl}/sitemap-artists.xml

# Host
Host: ${baseUrl}
`

  res.write(robots)
  res.end()
}
