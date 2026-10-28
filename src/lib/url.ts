/**
 * Guards against shipping dead links for values that are still placeholders.
 *
 * Several URLs in config/portfolio.php and the seeders ship as obvious
 * placeholders until the owner fills in their real ones. Rendering those as
 * clickable links produces 404s, so the UI hides them instead.
 */

const PLACEHOLDER_PATTERN = /(your-username|example\.com|yoursite|placeholder)/i;

/** True only for a real, configured absolute http(s) URL. */
export function isConfiguredUrl(url: string | null | undefined): url is string {
    if (!url) {
        return false;
    }

    const value = url.trim();

    if (!/^https?:\/\//i.test(value)) {
        return false;
    }

    return !PLACEHOLDER_PATTERN.test(value);
}

/**
 * Anchor props for an external link, or an empty object when the URL is
 * still a placeholder and should not be rendered.
 */
export function externalLinkProps(url: string | null | undefined): {
    href?: string;
    target?: '_blank';
    rel?: string;
} {
    if (!isConfiguredUrl(url)) {
        return {};
    }

    return { href: url, target: '_blank', rel: 'noopener noreferrer' };
}
