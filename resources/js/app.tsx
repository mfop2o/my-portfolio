import '@vitejs/plugin-react/preamble';
import './bootstrap';
import '../css/app.css';

import { createInertiaApp, type ResolvedComponent } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeProvider } from '@/contexts/ThemeContext';
import type { PageProps } from '@/types';

const appName = import.meta.env.VITE_APP_NAME || 'Portfolio';

createInertiaApp<PageProps>({
    title: (title) => (title ? `${title} — ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')) as Promise<ResolvedComponent>,
    setup({ el, App, props }) {
        if (el) {
            // suppressHydrationWarning prevents crashes from browser extensions
            // (e.g. password managers, grammar tools) that mutate the DOM after
            // React has rendered, causing React's virtual DOM to fall out of sync.
            createRoot(el).render(
                <ThemeProvider>
                    <App {...props} />
                </ThemeProvider>,
            );
        }
    },
});
