import { useEffect, type RefObject } from 'react';
import { NAV_LINKS } from './BrandMark';
import { useActiveSection } from '@/hooks/useActiveSection';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons';
import { usePage } from '@inertiajs/react';
import type { PageProps } from '@/types';
import { isConfiguredUrl } from '@/lib/url';
import { Download } from 'lucide-react';

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
    buttonRef: RefObject<HTMLButtonElement | null>;
}

export default function MobileMenu({ open, onClose, buttonRef }: MobileMenuProps) {
    const active = useActiveSection();
    const { site } = usePage<PageProps>().props;

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
                buttonRef.current?.focus();
            }
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open, onClose, buttonRef]);

    const socials = [
        isConfiguredUrl(site.socials.github) && { label: 'GitHub', href: site.socials.github, icon: GitHubIcon },
        isConfiguredUrl(site.socials.linkedin) && { label: 'LinkedIn', href: site.socials.linkedin, icon: LinkedInIcon },
    ].filter((item): item is { label: string; href: string; icon: typeof GitHubIcon } => Boolean(item));

    return (
        <div
            id="mobile-menu"
            className={`fixed inset-0 z-40 transition-[visibility,opacity] duration-400 xl:hidden ${
                open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
            }`}
            aria-hidden={!open}
        >
            {/* Backdrop */}
            <button
                type="button"
                tabIndex={-1}
                aria-label="Close menu"
                onClick={onClose}
                className="absolute inset-0 bg-midnight-950/70 backdrop-blur-sm"
            />

            {/* Drawer */}
            <div
                className={`absolute right-0 top-0 flex h-full w-[min(360px,90vw)] flex-col border-l border-slate-200 bg-paper shadow-2xl transition-transform duration-500 ease-out dark:border-white/8 dark:bg-midnight-900 ${
                    open ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Spacer behind the header bar */}
                <div className="h-[72px] shrink-0 border-b border-slate-200/70 dark:border-white/8" />

                <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center px-9">
                    <ul className="space-y-0.5">
                        {NAV_LINKS.map((link, index) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    onClick={onClose}
                                    style={{ transitionDelay: open ? `${index * 40 + 60}ms` : '0ms' }}
                                    className={`flex items-baseline gap-5 rounded-sm px-2 py-3 transition-all duration-500 ${
                                        open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                                    } ${
                                        active === link.id
                                            ? 'text-gradient'
                                            : 'text-slate-800 hover:text-cyan-600 dark:text-white/80 dark:hover:text-cyan-300'
                                    }`}
                                >
                                    <span className="w-6 shrink-0 font-mono text-[10px] tabular-nums tracking-[0.28em] text-slate-400 dark:text-slate-600">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="font-display text-3xl font-semibold tracking-tight">
                                        {link.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div
                        style={{ transitionDelay: open ? '300ms' : '0ms' }}
                        className={`mt-10 border-t border-slate-200 pt-8 transition-all duration-500 dark:border-white/8 ${
                            open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                        }`}
                    >
                        {site.cv_available ? (
                            <a
                                href={site.cv_path}
                                download
                                onClick={onClose}
                                className="inline-flex items-center gap-2.5 rounded-sm bg-gradient-to-r from-electric-500 to-cyan-500 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.55)] transition-all duration-300 hover:brightness-110"
                            >
                                <Download className="h-3.5 w-3.5" />
                                Download Resume
                            </a>
                        ) : (
                            <a
                                href="#contact"
                                onClick={onClose}
                                className="inline-flex items-center gap-2.5 rounded-sm bg-gradient-to-r from-electric-500 to-cyan-500 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.55)] transition-all duration-300 hover:brightness-110"
                            >
                                Get in touch
                                <span aria-hidden>→</span>
                            </a>
                        )}

                        {socials.length > 0 && (
                            <div className="mt-7 flex items-center gap-2.5">
                                {socials.map(({ label, href, icon: Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="grid h-10 w-10 place-items-center border border-slate-200 text-slate-500 transition-colors duration-300 hover:border-cyan-400/60 hover:text-cyan-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-cyan-300"
                                    >
                                        <Icon className="h-[17px] w-[17px]" />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}
