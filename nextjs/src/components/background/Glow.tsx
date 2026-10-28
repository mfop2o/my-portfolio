'use client';

import type { CSSProperties } from 'react';

type GlowColor = 'electric' | 'cyan' | 'both';

interface GlowProps {
    className?: string;
    color?: GlowColor;
    opacity?: number;
    size?: string;
}

/**
 * Soft radial glow blob. Purely decorative.
 */
export default function Glow({ className = '', color = 'electric', opacity = 0.14, size = '520px' }: GlowProps) {
    const background =
        color === 'cyan'
            ? `radial-gradient(circle, rgba(56,189,248,${opacity}) 0%, transparent 70%)`
            : color === 'both'
              ? `radial-gradient(circle at 30% 30%, rgba(37,99,235,${opacity}) 0%, transparent 55%), radial-gradient(circle at 70% 70%, rgba(56,189,248,${opacity * 0.8}) 0%, transparent 55%)`
              : `radial-gradient(circle, rgba(37,99,235,${opacity}) 0%, transparent 70%)`;

    const style: CSSProperties = { background, width: size, height: size };

    return <div aria-hidden className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} style={style} />;
}
