export interface SiteSocials {
    github: string;
    linkedin: string;
}

export interface SiteEducation {
    institution: string;
    degree: string;
    graduated: string;
    location: string;
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
    /** Hero supporting statement. */
    headline: string;
    tagline: string;
    about: string;
    focus: string[];
    experience_years: string;
    education: SiteEducation;
    email: string;
    location: string;
    availability: string;
    phone: string;
    /** Path to profile photo (renders initials as a placeholder until set). */
    avatar: string | null;
    cv_path: string;
    /**
     * Computed server-side: true only when the CV file actually exists in
     * /public, so the UI never renders a dead download link.
     */
    cv_available: boolean;
    socials: SiteSocials;
}
