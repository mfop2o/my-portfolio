'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
    theme: Theme;
    toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = 'portfolio-theme';

/**
 * Dark is the default for first-time visitors.
 *
 * The initial state is always `dark` so the server-rendered markup and the
 * first client render match (no hydration mismatch). The stored preference is
 * applied in an effect, after the pre-paint script in the root layout has
 * already set the class — so there is no flash.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('dark');
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        const initial: Theme = stored === 'light' || stored === 'dark' ? stored : 'dark';

        setTheme(initial);
        setReady(true);
    }, []);

    useEffect(() => {
        if (!ready) return;

        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme, ready]);

    const toggle = () => {
        setTheme((current) => {
            const next: Theme = current === 'dark' ? 'light' : 'dark';

            document.documentElement.classList.toggle('dark', next === 'dark');
            localStorage.setItem(STORAGE_KEY, next);

            return next;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextValue {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
    return ctx;
}
