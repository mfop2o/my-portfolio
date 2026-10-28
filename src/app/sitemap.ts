import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/projects';
import { siteUrl } from '@/data/site';

export const dynamic = 'force-static';

/**
 * Static sitemap. Generated at build time — requires NEXT_PUBLIC_SITE_URL,
 * because sitemap entries must be absolute URLs.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    if (!siteUrl) return [];

    const lastModified = new Date();

    return [
        {
            url: `${siteUrl}/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...PROJECTS.map((project) => ({
            url: `${siteUrl}/projects/${project.slug}/`,
            lastModified,
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        })),
    ];
}
