import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
    title: 'Page not found',
    description: 'The page you are looking for does not exist.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-midnight-900 py-24">
            <Container className="relative text-center">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-400">
                    404 — Page not found
                </p>
                <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    This page doesn&apos;t exist.
                </h1>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
                    The link may be broken, or the page may have moved.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-electric-500 to-electric-600 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:brightness-110"
                    >
                        Back home
                    </Link>
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 transition-all duration-300 hover:border-cyan-400/60 hover:text-white"
                    >
                        View projects
                    </Link>
                </div>
            </Container>
        </section>
    );
}
