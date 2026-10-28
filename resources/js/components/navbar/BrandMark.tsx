import { Link } from '@inertiajs/react';
import type { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';

/**
 * Single source of truth for in-page navigation.
 *
 * `id` must match a real section element id so the scroll-spy highlight and
 * the footer links always point at something that exists.
 */
export const NAV_LINKS = [
    { label: 'About',    href: '#about',    id: 'about'    },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact',  href: '#contact',  id: 'contact'  },
] as const;

interface BrandMarkProps {
    light?: boolean;
}

export function BrandMark({ light = false }: BrandMarkProps) {
    const { site } = usePage<PageProps>().props;

    return (
        <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label={`${site.name} — back to top`}
        >
            <span
                className={`relative grid h-9 w-9 place-items-center border font-display text-[13px] font-bold tracking-tight transition-all duration-300 ${
                    light
                        ? 'border-slate-300 bg-white/60 group-hover:border-cyan-500/70 group-hover:shadow-[0_0_12px_-2px_rgba(6,182,212,0.35)] dark:border-white/20 dark:bg-white/5 dark:group-hover:border-cyan-400/60 dark:group-hover:shadow-[0_0_14px_-2px_rgba(6,182,212,0.3)]'
                        : 'border-white/20 bg-white/5 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_14px_-2px_rgba(6,182,212,0.3)]'
                }`}
            >
                <span className="text-gradient">{site.monogram}</span>
            </span>

            <div className="hidden flex-col sm:flex">
                <span
                    className={`font-display text-[13px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 leading-none ${
                        light
                            ? 'text-slate-900 group-hover:text-slate-950 dark:text-white/90 dark:group-hover:text-white'
                            : 'text-white/90 group-hover:text-white'
                    }`}
                >
                    {site.name}
                </span>
                <span
                    className={`mt-0.5 text-[9px] uppercase tracking-[0.28em] transition-colors duration-300 ${
                        light ? 'text-slate-400 dark:text-slate-500' : 'text-slate-500'
                    }`}
                >
                    {site.title}
                </span>
            </div>
        </Link>
    );
}
