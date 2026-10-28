'use client';

import type { ReactNode } from 'react';

interface TechTagProps {
    children: ReactNode;
    className?: string;
    /** Use the dark-surface treatment (midnight sections). */
    dark?: boolean;
}

/**
 * Small, reusable technology chip used across project cards, case studies,
 * the skills grid and the career timeline.
 */
export default function TechTag({ children, className = '', dark = false }: TechTagProps) {
    return (
        <span
            className={`inline-flex items-center rounded-md border font-mono px-2.5 py-1 text-[11px] font-medium leading-none transition-colors duration-200 ${
                dark
                    ? 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-400/50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-cyan-300'
            } ${className}`.trim()}
        >
            {children}
        </span>
    );
}
