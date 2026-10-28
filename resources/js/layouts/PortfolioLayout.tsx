import type { ReactNode } from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

interface PortfolioLayoutProps {
    children: ReactNode;
}

/**
 * Persistent layout wrapping every portfolio page.
 *
 * Navbar and main are wrapped in ErrorBoundary so that DOM mutations
 * injected by browser extensions (password managers, grammar checkers, etc.)
 * cannot crash the entire page — errors are caught locally instead.
 */
export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
    return (
        <div className="relative min-h-screen overflow-x-clip bg-slate-50 dark:bg-midnight-900">
            <ErrorBoundary>
                <Navbar />
            </ErrorBoundary>
            <ErrorBoundary>
                <main id="main">{children}</main>
            </ErrorBoundary>
            <Footer />
        </div>
    );
}
