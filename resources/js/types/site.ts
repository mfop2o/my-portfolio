export interface SiteSocials {
    github: string;
    linkedin: string;
}

/**
 * Personal identity configuration.
 *
 * Source of truth: config/portfolio.php (shared via the Inertia `site` prop).
 */
export interface SiteConfig {
    name: string;
    monogram: string;
    title: string;
    /** Hero headline. \n characters render as line breaks. */
    headline: string;
    tagline: string;
    about: string;
    focus: string[];
    experience_years: string;
    email: string;
    location: string;
    availability: string;
    cv_path: string;
    socials: SiteSocials;
}
