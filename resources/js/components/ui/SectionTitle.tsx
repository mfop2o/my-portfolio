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
            className={`font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${
                dark ? 'text-white' : 'text-slate-900'
            } ${className}`}
        >
            {children}
        </Tag>
    );
}
