import { useEffect, type RefObject } from 'react';
import { NAV_LINKS } from './BrandMark';
import { useActiveSection } from '@/hooks/useActiveSection';

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
    buttonRef: RefObject<HTMLButtonElement | null>;
}

export default function MobileMenu({ open, onClose, buttonRef }: MobileMenuProps) {
    const active = useActiveSection();

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') { onClose(); buttonRef.current?.focus(); }
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open, onClose, buttonRef]);

    return (
        <div
            id="mobile-menu"
            className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
                open ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
            }`}
            aria-hidden={!open}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-midnight-950/60 backdrop-blur-sm" onClick={onClose} />

            {/* Drawer panel */}
            <div
                className={`absolute right-0 top-0 h-full w-[min(340px,90vw)] bg-white/96 backdrop-blur-2xl shadow-[−20px_0_60px_-10px_rgba(15,23,42,0.25)] dark:bg-midnight-900/96 dark:shadow-[−20px_0_60px_-10px_rgba(0,0,0,0.5)] flex flex-col transition-transform duration-500 ${
                    open ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Top spacer (behind the header bar) */}
                <div className="h-[68px] shrink-0 border-b border-slate-100 dark:border-slate-500/15" />

                <nav className="flex flex-1 flex-col justify-center px-10">
                    <ul className="space-y-1">
                        {NAV_LINKS.map((link, index) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    onClick={onClose}
                                    style={{ transitionDelay: open ? `${index * 45 + 60}ms` : '0ms' }}
                                    className={`flex items-baseline gap-5 rounded-sm px-2 py-3 font-display text-3xl font-semibold tracking-tight transition-all duration-500 ${
                                        open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                                    } ${
                                        active === link.id
                                            ? 'text-gradient'
                                            : 'text-slate-800 hover:text-cyan-700 dark:text-white/80 dark:hover:text-cyan-300'
                                    }`}
                                >
                                    <span className="w-6 shrink-0 text-[10px] font-normal tabular-nums tracking-[0.28em] text-slate-400 dark:text-slate-500">
                                        0{index + 1}
                                    </span>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div
                        style={{ transitionDelay: open ? '320ms' : '0ms' }}
                        className={`mt-10 border-t border-slate-200 dark:border-slate-500/15 pt-8 transition-all duration-500 ${
                            open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                        }`}
                    >
                        <a
                            href="#contact"
                            onClick={onClose}
                            className="inline-flex items-center gap-2.5 rounded-sm bg-gradient-to-r from-electric-500 to-cyan-500 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_8px_24px_-6px_rgba(37,99,235,0.55)] transition-all duration-300 hover:brightness-110"
                        >
                            Let&apos;s talk
                            <span aria-hidden>→</span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
}
