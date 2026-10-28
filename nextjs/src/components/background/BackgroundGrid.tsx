'use client';

interface BackgroundGridProps {
    className?: string;
    large?: boolean;
}

/**
 * Fine engineering grid overlay.
 */
export default function BackgroundGrid({ className = '', large = false }: BackgroundGridProps) {
    return (
        <div
            aria-hidden
            className={`pointer-events-none absolute inset-0 ${large ? 'bg-grid-lg' : 'bg-grid'} [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] ${className}`}
        />
    );
}
