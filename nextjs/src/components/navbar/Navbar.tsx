'use client';

import { site } from '@/data/site';
import { useEffect, useRef, useState } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/contexts/ThemeContext';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { Sun, Moon, Download } from 'lucide-react';
import { BrandMark, NAV_LINKS } from './BrandMark';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    const { theme, toggle } = useTheme();
    const progress = useScrollProgress();
    const active = useActiveSection();
    const [menuOpen, setMenuOpen] = useState(false);
    const [heroPassed, setHeroPassed] = useState(false);
    const menuButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const updateHeroState = () => {
            const hero = document.getElementById('top');
            const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
            setHeroPassed(window.scrollY > heroHeight - 80);
        };

        updateHeroState();
        window.addEventListener('scroll', updateHeroState, { passive: true });
        window.addEventListener('resize', updateHeroState);

        return () => {
            window.removeEventListener('scroll', updateHeroState);
            window.removeEventListener('resize', updateHeroState);
        };
    }, []);

    const solid = heroPassed || menuOpen;

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
                solid
                    ? 'border-slate-200/80 bg-paper/85 backdrop-blur-xl dark:border-white/8 dark:bg-midnight-900/85'
                    : 'border-transparent'
            }`}
        >
            {/* Reading progress */}
            <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-electric-500 via-cyan-400 to-electric-500 transition-transform duration-150 ease-out"
                style={{ transform: `scaleX(${progress})` }}
            />

            <Container className="flex h-[72px] items-center justify-between gap-6">
                <BrandMark light={solid} />

                <div className="flex items-center gap-1.5">
                    {/* Desktop nav */}
                    <nav aria-label="Primary" className="hidden xl:block">
                        <ul className="flex items-center">
                            {NAV_LINKS.map((link) => {
                                const isActive = active === link.id;
                                return (
                                    <li key={link.id}>
                                        <a
                                            href={link.href}
                                            aria-current={isActive ? 'true' : undefined}
                                            className={`relative block px-3.5 py-2 text-[12px] font-medium tracking-[0.04em] transition-colors duration-300 ${
                                                solid
                                                    ? isActive
                                                        ? 'text-slate-900 dark:text-white'
                                                        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                                                    : isActive
                                                      ? 'text-white'
                                                      : 'text-slate-400 hover:text-white'
                                            }`}
                                        >
                                            {link.label}
                                            <span
                                                aria-hidden
                                                className={`absolute inset-x-3.5 -bottom-px h-px origin-left bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 ${
                                                    isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                                                }`}
                                            />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {site.cv_available ? (
                        <Button
                            href={site.cv_path}
                            external
                            className="ml-2 hidden px-5 py-2.5 text-[11px] xl:inline-flex"
                        >
                            <Download className="h-3.5 w-3.5" />
                            Download Resume
                        </Button>
                    ) : (
                        <Button
                            href="#contact"
                            className="ml-2 hidden px-5 py-2.5 text-[11px] xl:inline-flex"
                        >
                            Get in touch
                        </Button>
                    )}

                    {/* Theme toggle */}
                    <button
                        type="button"
                        onClick={toggle}
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        className={`flex h-10 w-10 items-center justify-center rounded-sm border transition-colors duration-300 ${
                            solid
                                ? 'border-slate-200 text-slate-600 hover:border-cyan-500/60 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300'
                                : 'border-white/15 text-slate-300 hover:border-cyan-400/60 hover:text-white'
                        }`}
                    >
                        {theme === 'dark' ? <Sun className="h-[15px] w-[15px]" /> : <Moon className="h-[15px] w-[15px]" />}
                    </button>

                    {/* Hamburger */}
                    <button
                        ref={menuButtonRef}
                        type="button"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-sm border transition-colors duration-300 hover:border-cyan-400/60 xl:hidden ${
                            solid
                                ? 'border-slate-200 bg-white/60 text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200'
                                : 'border-white/15 bg-white/5 text-slate-200'
                        }`}
                    >
                        <span
                            className={`h-px w-[18px] bg-current transition-transform duration-300 ${
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
