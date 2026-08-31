import type { ReactNode } from 'react';

interface SectionLabelProps {
    children: ReactNode;
    className?: string;
    dark?: boolean;
}

export default function SectionLabel({ children, className = '', dark = false }: SectionLabelProps) {
    return (
        <p
            className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] ${
                dark ? 'text-cyan-400' : 'text-cyan-600'
            } ${className}`}
        >
            <span aria-hidden className="h-px w-8 bg-gradient-to-r from-electric-500 to-cyan-400 opacity-90" />
            <span>{children}</span>
        </p>
    );
}
