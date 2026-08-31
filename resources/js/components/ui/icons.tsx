import type { ReactNode } from 'react';

interface ArrowIconProps {
    className?: string;
}

export function ArrowIcon({ className = '' }: ArrowIconProps) {
    return (
        <svg
            aria-hidden
            className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
            viewBox="0 0 16 16"
            fill="none"
        >
            <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function ArrowUpRightIcon({ className = '' }: ArrowIconProps) {
    return (
        <svg
            aria-hidden
            className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${className}`}
            viewBox="0 0 16 16"
            fill="none"
        >
            <path d="M4.5 11.5 11.5 4.5M6.5 4.5h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

interface IconProps {
    className?: string;
}

type IconComponent = (props: IconProps) => ReactNode;

const PATHS: Record<string, IconComponent> = {
    layers: ({ className = '' }) => (
        <svg aria-hidden className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <path d="m12 3 9 5-9 5-9-5 9-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="m3.5 12.5 8.5 4.7 8.5-4.7M3.5 17l8.5 4.7 8.5-4.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    browser: ({ className = '' }) => (
        <svg aria-hidden className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <path d="M3 8.5h18M6.5 6.5h.01M9 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    briefcase: ({ className = '' }) => (
        <svg aria-hidden className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <rect x="3" y="7" width="18" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    ),
    code: ({ className = '' }) => (
        <svg aria-hidden className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    cursor: ({ className = '' }) => (
        <svg aria-hidden className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <path d="M5 3l6.5 16 2.2-5.8L19.5 11 5 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    ),
    database: ({ className = '' }) => (
        <svg aria-hidden className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="5.5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    ),
    shield: ({ className = '' }) => (
        <svg aria-hidden className={`h-5 w-5 ${className}`} viewBox="0 0 24 24" fill="none">
            <path d="M12 3 5 6v5c0 4.4 2.9 8 7 9.5 4.1-1.5 7-5.1 7-9.5V6l-7-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="m9 11.5 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

interface ServiceIconProps {
    name: string | null;
    className?: string;
}

/**
 * Maps a service `icon` keyword to an inline SVG.
 */
export function ServiceIcon({ name, className = '' }: ServiceIconProps) {
    const Icon = (name && PATHS[name]) || PATHS.code;

    return <Icon className={className} />;
}
