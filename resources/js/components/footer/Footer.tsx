import type { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import Container from '@/components/ui/Container';
import { NAV_LINKS } from '@/components/navbar/BrandMark';

export default function Footer() {
    const { site } = usePage<PageProps>().props;
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/6 bg-midnight-950">
            {/* Top gradient line */}
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric-500/40 to-transparent" />

            <Container className="py-16 sm:py-20">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
                    {/* Brand */}
                    <div>
                        <a href="#top" className="group inline-flex items-center gap-3">
                            <span className="grid h-9 w-9 place-items-center border border-white/15 bg-white/5 font-display text-sm font-bold transition-all duration-300 group-hover:border-cyan-400/50">
                                <span className="text-gradient">{site.monogram}</span>
                            </span>
                            <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/80 transition-colors duration-300 group-hover:text-white">
                                {site.name}
                            </span>
                        </a>
                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-500">
                            {site.title} — crafting considered digital products with Laravel, React
                            and everything in between.
                        </p>

                        {/* Availability */}
                        <div className="mt-6 flex items-center gap-2">
                            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                            <span className="text-[11px] text-slate-500">{site.availability}</span>
                        </div>
                    </div>

                    {/* Navigate */}
                    <nav aria-label="Footer navigation">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600">Navigate</p>
                        <ul className="mt-5 space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-500 transition-colors duration-300 hover:text-cyan-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Elsewhere */}
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600">Elsewhere</p>
                        <ul className="mt-5 space-y-3 text-sm">
                            <li>
                                <a href={site.socials.github} target="_blank" rel="noopener noreferrer"
                                    className="text-slate-500 transition-colors duration-300 hover:text-cyan-300">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer"
                                    className="text-slate-500 transition-colors duration-300 hover:text-cyan-300">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${site.email}`}
                                    className="text-slate-500 transition-colors duration-300 hover:text-cyan-300">
                                    {site.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-8">
                    <p className="text-[11px] text-slate-600">
                        © {year} {site.name}. All rights reserved.
                    </p>
                    <p className="text-[11px] text-slate-700">
                        Built with Laravel · React · TypeScript · Tailwind
                    </p>
                    <a
                        href="#top"
                        className="group flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 transition-all duration-300 hover:text-cyan-300"
                    >
                        Back to top
                        <span aria-hidden className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
                    </a>
                </div>
            </Container>
        </footer>
    );
}
