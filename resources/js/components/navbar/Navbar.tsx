import { useRef, useState } from 'react';
import { useScrolled } from '@/hooks/useScrolled';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/contexts/ThemeContext';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { BrandMark, NAV_LINKS } from './BrandMark';
import MobileMenu from './MobileMenu';

function SunIcon() {
    return (
        <svg aria-hidden className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg aria-hidden className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        </svg>
    );
}

export default function Navbar() {
    const { theme, toggle } = useTheme();
    const scrolled = useScrolled();
    const active = useActiveSection();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement | null>(null);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                scrolled || menuOpen
                    ? 'border-b border-slate-200/80 bg-white/90 shadow-[0_2px_20px_-4px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-500/15 dark:bg-midnight-900/85 dark:shadow-[0_2px_20px_-4px_rgba(0,0,0,0.4)]'
                    : 'border-b border-transparent'
            }`}
        >
            <Container className="flex h-[68px] items-center justify-between">
                <BrandMark light={scrolled || menuOpen} />

                {/* Desktop nav */}
                <nav aria-label="Primary" className="hidden lg:block">
                    <ul className="flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    className={`relative rounded-sm px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                                        active === link.id
                                            ? scrolled
                                                ? 'text-slate-900 dark:text-white'
                                                : 'text-white'
                                            : scrolled
                                              ? 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                                              : 'text-slate-400 hover:text-white'
                                    }`}
                                >
                                    {link.label}
                                    <span
                                        aria-hidden
                                        className={`absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 ${
                                            active === link.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                                        } origin-left`}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-2">
                    <Button
                        href="#contact"
                        className="hidden px-5 py-2.5 text-[11px] lg:inline-flex"
                    >
                        Let&apos;s talk
                    </Button>

                    {/* Theme toggle */}
                    <button
                        type="button"
                        onClick={toggle}
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        className={`relative flex h-10 w-10 items-center justify-center rounded-sm border transition-all duration-300 ${
                            scrolled || menuOpen
                                ? 'border-slate-200 text-slate-600 hover:border-cyan-500/60 hover:text-cyan-700 dark:border-slate-500/30 dark:text-slate-300 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300'
                                : 'border-white/15 text-slate-300 hover:border-cyan-400/60 hover:text-white'
                        }`}
                    >
                        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </button>

                    {/* Hamburger */}
                    <button
                        ref={menuButtonRef}
                        type="button"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-sm border transition-all duration-300 hover:border-cyan-400/60 lg:hidden ${
                            scrolled || menuOpen
                                ? 'border-slate-200 text-slate-800 bg-white/60 dark:border-slate-500/30 dark:text-slate-300 dark:bg-white/5'
                                : 'border-white/15 text-slate-200 bg-white/5'
                        }`}
                    >
                        <span
                            className={`h-px w-[18px] bg-current transition-all duration-300 ${
                                menuOpen ? 'translate-y-[3px] rotate-45' : ''
                            }`}
                        />
                        <span
                            className={`h-px bg-current transition-all duration-300 ${
                                menuOpen ? 'w-[18px] -translate-y-[4px] -rotate-45' : 'w-[12px] self-end mr-1'
                            }`}
                        />
                    </button>
                </div>
            </Container>

            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} buttonRef={menuButtonRef} />
        </header>
    );
}
