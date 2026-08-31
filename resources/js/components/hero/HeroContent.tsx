import type { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import Button from '@/components/ui/Button';
import { ArrowIcon } from '@/components/ui/icons';

function GitHubIcon() {
    return (
        <svg aria-hidden className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg aria-hidden className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg aria-hidden className="h-[17px] w-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
            <path d="m3.5 6.5 8.5 6.5 8.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function HeroContent() {
    const { site } = usePage<PageProps>().props;
    const lines = site.headline.split('\n');

    return (
        <div className="relative z-10">
            {/* Status badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <span aria-hidden className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse-dot" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {site.availability}
                </span>
            </div>

            {/* Headline */}
            <h1 className="mt-7 font-display font-bold leading-[0.93] tracking-tight" style={{ fontSize: 'clamp(3rem, 9vw, 5.75rem)' }}>
                {lines.map((line, index) => {
                    const isOutline = index === 1;
                    const isLast    = index === lines.length - 1;
                    return (
                        <span key={index} className="block">
                            {isOutline ? (
                                <span className="text-stroke-light">{line}</span>
                            ) : isLast ? (
                                <span className="text-gradient-vivid">{line}</span>
                            ) : (
                                <span className="text-white">{line}</span>
                            )}
                        </span>
                    );
                })}
            </h1>

            {/* Tagline */}
            <p className="mt-7 max-w-lg text-base leading-relaxed text-slate-400 sm:text-[1.05rem]">
                {site.tagline}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="#projects" className="px-7 py-3.5">
                    View my work
                    <ArrowIcon />
                </Button>
                <Button href="#contact" variant="outline" dark>
                    Let&apos;s talk
                </Button>
            </div>

            {/* Social links */}
            <div className="mt-12 flex items-center gap-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600">
                    Find me
                </span>
                <span aria-hidden className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-slate-600 to-transparent" />
                <div className="flex items-center gap-2">
                    {[
                        { href: site.socials.github,   label: 'GitHub',   icon: <GitHubIcon />,   external: true  },
                        { href: site.socials.linkedin,  label: 'LinkedIn', icon: <LinkedInIcon />, external: true  },
                        { href: `mailto:${site.email}`, label: 'Email',    icon: <MailIcon />,     external: false },
                    ].map(({ href, label, icon, external }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="grid h-10 w-10 place-items-center border border-white/12 bg-white/4 text-slate-400 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/8 hover:text-cyan-300 hover:shadow-[0_0_14px_-4px_rgba(6,182,212,0.4)]"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
