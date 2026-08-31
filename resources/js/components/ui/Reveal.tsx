import { createElement, type CSSProperties, type ElementType, type ReactNode, useEffect, useRef } from 'react';

export type RevealVariant = 'up' | 'left' | 'right' | 'scale';

interface RevealProps {
    children: ReactNode;
    className?: string;
    variant?: RevealVariant;
    /** Delay in milliseconds, applied as a CSS transition-delay. */
    delay?: number;
    as?: ElementType;
}

const VARIANT_CLASS: Record<RevealVariant, string> = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
};

/**
 * Lightweight IntersectionObserver-based scroll reveal.
 * Disables itself entirely when the user prefers reduced motion.
 */
export default function Reveal({ children, className = '', variant = 'up', delay = 0, as = 'div' }: RevealProps) {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = ref.current;

        if (!el) {
            return;
        }

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.classList.add('is-revealed');

            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.classList.add('is-revealed');
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    const style = { '--reveal-delay': `${delay}ms` } as CSSProperties;

    return createElement(as, { ref, className: `${VARIANT_CLASS[variant]} ${className}`.trim(), style }, children);
}
