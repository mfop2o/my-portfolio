'use client';

interface DecorativeCircleProps {
    className?: string;
    size?: number;
}

/**
 * Thin circular outline used for subtle editorial decoration.
 */
export default function DecorativeCircle({ className = '', size = 320 }: DecorativeCircleProps) {
    return (
        <div
            aria-hidden
            className={`pointer-events-none absolute rounded-full border border-slate-400/10 ${className}`}
            style={{ width: size, height: size }}
        />
    );
}
