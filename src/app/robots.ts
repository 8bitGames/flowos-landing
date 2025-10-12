import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.flowos.work/sitemap.xml',
    host: 'https://www.flowos.work',
  };
}
