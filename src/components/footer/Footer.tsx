'use client';

import { site } from '@/data/site';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { NAV_LINKS } from '@/components/navbar/BrandMark';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons';
import { isConfiguredUrl } from '@/lib/url';

export default function Footer() {
    const year = new Date().getFullYear();

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
    ];

    const connectItems: { label: string; href: string; icon?: React.ReactNode; external?: boolean }[] = [];

    if (isConfiguredUrl(site.socials.github)) {
        connectItems.push({
            label: 'GitHub',
            href: site.socials.github,
            icon: <GitHubIcon className="h-4 w-4" />,
            external: true,
        });
    }
    if (isConfiguredUrl(site.socials.linkedin)) {
        connectItems.push({
            label: 'LinkedIn',
            href: site.socials.linkedin,
            icon: <LinkedInIcon className="h-4 w-4" />,
            external: true,
        });
    }
    connectItems.push({ label: 'Email', href: `mailto:${site.email}`, icon: null, external: false });

    return (
        <footer className="relative border-t border-white/10 bg-[#171C19]">
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            <Container className="py-12 sm:py-14">
                <div className="grid gap-10 md:grid-cols-[1.6fr_0.9fr_0.9fr]">
                    <div>
                        <a href="#top" className="group inline-flex items-center gap-3">
                            <span className="grid h-9 w-9 place-items-center border border-cyan-400/40 bg-cyan-500/5 font-display text-sm font-bold text-cyan-300 transition-all duration-300 group-hover:border-cyan-300 group-hover:text-cyan-200">
                                {site.monogram}
                            </span>
                            <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-300 group-hover:text-cyan-300">
                                {site.name}
                            </span>
                        </a>

                        <p className="mt-5 text-[13px] font-medium text-cyan-300">Full-Stack Software Developer</p>
                        <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-slate-300">
                            Building reliable software and digital solutions that solve real-world problems.
                        </p>
                    </div>

                    <nav aria-label="Footer navigation">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-cyan-300">Navigation</p>
                        <ul className="mt-4 space-y-2.5">
                            {navItems.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group/link inline-flex items-center gap-1.5 text-[13px] text-slate-300 transition-colors duration-300 hover:text-cyan-300"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover/link:opacity-100" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-cyan-300">Connect</p>
                        <ul className="mt-4 space-y-2.5 text-[13px]">
                            {connectItems.map(({ label, href, icon, external }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="inline-flex items-center gap-2 text-slate-300 transition-colors duration-300 hover:text-cyan-300"
                                    >
                                        {icon}
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[10px] text-slate-300">
                        © {year} {site.name}. All rights reserved.
                    </p>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                        <p className="text-[10px] text-slate-300">Built with Next.js · React · TypeScript</p>
                        <a
                            href="#top"
                            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300 transition-all duration-300 hover:text-cyan-200"
                        >
                            Back to top
                            <ArrowUp aria-hidden className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}