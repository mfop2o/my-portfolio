'use client';

import type { ElementType, ReactNode } from 'react';

interface SectionTitleProps {
    children: ReactNode;
    className?: string;
    as?: ElementType;
    dark?: boolean;
}

export default function SectionTitle({
    children,
    className = '',
    as: Tag = 'h2',
    dark = false,
}: SectionTitleProps) {
    return (
        <Tag
            className={`font-display text-[1.7rem] font-semibold leading-[1.06] tracking-[-0.06em] sm:text-[2.15rem] lg:text-[2.7rem] ${
                dark ? 'text-white' : 'text-slate-900 dark:text-white'
            } ${className}`}
        >
            {children}
        </Tag>
    );
}
