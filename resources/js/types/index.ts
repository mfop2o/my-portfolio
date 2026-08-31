import type { SiteConfig } from './site';

export interface FlashMessages {
    success: string | null;
    error: string | null;
}

export interface AuthUser {
    id: number;
    name: string;
    email: string;
}

/**
 * Global page props shared by the Inertia middleware.
 */
export interface PageProps {
    site: SiteConfig;
    flash: FlashMessages;
    auth: AuthUser | null;
    [key: string]: unknown;
}
