import type { SiteConfig } from '@/types/site';

/**
 * Personal identity — the single source of truth for the whole site.
 *
 * Change the values here and every section updates: navbar, hero, about,
 * contact, footer and page metadata.
 */
export const site: SiteConfig = {
    name: 'Bontu Dereje',
    monogram: 'BD',
    title: 'Full-Stack Software Developer',

    /** Short description used for SEO / social previews. */
    tagline:
        'Full-stack software developer building scalable backend systems, modern web apps, and clean digital products.',

    /** Longer introduction used in the About section. */
    about:
        'Full-stack software developer with a Computer Science degree from Addis Ababa University. I design APIs, model databases, and build fast, responsive user interfaces that deliver real business value.',

    /** One-line value statement. */
    headline: 'Turning complex problems into clean, reliable, and scalable software.',

    focus: [
        'Full-Stack Development',
        'Backend Engineering',
        'Frontend Engineering',
        'Database Design',
        'REST APIs',
        'Clean Architecture',
    ],

    /** Years of professional experience. Keep accurate — do not inflate. */
    experience_years: '1+',

    education: {
        institution: 'Addis Ababa University',
        degree: "Bachelor's degree in Computer Science",
        graduated: 'June 2025',
        location: 'Addis Ababa, Ethiopia',
    },

    email: 'bontuderejelegese@gmail.com',
    location: 'Addis Ababa, Ethiopia',
    availability: 'Open to full-time & freelance opportunities',
    phone: '+251 965 714 504',

    /** Profile photo in /public. */
    avatar: '/images/hero.webp',

    /** CV file in /public. Set `cv_available: true` once the file exists. */
    cv_path: '/documents/cv.pdf',
    cv_available: false,

    socials: {
        github: 'https://github.com/mfop2o',
        linkedin: '',
    },
};

/**
 * Absolute site URL used for canonical links and social previews.
 * Set NEXT_PUBLIC_SITE_URL at build time (e.g. https://your-domain.com).
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? '').replace(/\/$/, '');
