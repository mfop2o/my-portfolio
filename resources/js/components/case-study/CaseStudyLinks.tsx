import type { Project } from '@/types/project';
import { ArrowUpRightIcon } from '@/components/ui/icons';
import { externalLinkProps } from '@/lib/url';

interface CaseStudyLinksProps {
    project: Project;
    /** Style variant for the link treatment. */
    variant?: 'inline' | 'button';
}

/**
 * External project links.
 *
 * Placeholder URLs are filtered out via externalLinkProps so a case study
 * never renders a dead link.
 */
export default function CaseStudyLinks({ project, variant = 'inline' }: CaseStudyLinksProps) {
    const live = externalLinkProps(project.live_url);
    const source = externalLinkProps(project.github_url);

    const links = [
        live.href && {
            href: live.href,
            target: live.target,
            rel: live.rel,
            label: 'Live site',
            primary: true,
        },
        source.href && {
            href: source.href,
            target: source.target,
            rel: source.rel,
            label: 'GitHub',
            primary: false,
        },
    ].filter(Boolean) as {
        href: string;
        target?: '_blank';
        rel?: string;
        label: string;
        primary: boolean;
    }[];

    if (links.length === 0) {
        return null;
    }

    if (variant === 'button') {
        return (
            <div className="flex flex-wrap gap-4">
                {links.map(({ href, target, rel, label, primary }) => (
                    <a
                        key={label}
                        href={href}
                        {...(target ? { target, rel } : {})}
                        className={`group inline-flex items-center justify-center gap-2.5 rounded-sm px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                            primary
                                ? 'bg-gradient-to-r from-electric-500 to-cyan-500 text-white shadow-[0_8px_28px_-8px_rgba(37,99,235,0.6)] hover:brightness-110'
                                : 'border border-slate-300 bg-white text-slate-700 shadow-sm hover:border-cyan-400/60 hover:bg-cyan-50/60 hover:text-cyan-700'
                        }`}
                    >
                        {label}
                        <ArrowUpRightIcon />
                    </a>
                ))}
            </div>
        );
    }

    return (
        <>
            {links.map(({ href, target, rel, label, primary }) => (
                <a
                    key={label}
                    href={href}
                    {...(target ? { target, rel } : {})}
                    className={`group/link inline-flex items-center gap-2 border-b pb-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                        primary
                            ? 'border-white/20 text-white hover:border-cyan-400/60 hover:text-cyan-300'
                            : 'border-transparent text-slate-500 hover:text-slate-200'
                    }`}
                >
                    {label}
                    <ArrowUpRightIcon />
                </a>
            ))}
        </>
    );
}
