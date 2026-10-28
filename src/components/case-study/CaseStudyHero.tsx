'use client';

import type { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Glow from '@/components/background/Glow';
import BackgroundGrid from '@/components/background/BackgroundGrid';
import DecorativeCircle from '@/components/background/DecorativeCircle';

interface CaseStudyHeroProps {
    category: string;
    title: string;
    description: string;
    actions: ReactNode;
}

/**
 * Shared case-study hero used by every project detail page.
 */
export default function CaseStudyHero({ category, title, description, actions }: CaseStudyHeroProps) {
    return (
        <section className="relative overflow-hidden bg-midnight-900 pt-[68px]">
            <BackgroundGrid className="opacity-35 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
            <Glow color="electric" opacity={0.09} className="-left-40 top-16" size="640px" />
            <Glow color="cyan" opacity={0.06} className="right-0 bottom-0" size="440px" />
            <DecorativeCircle size={380} className="-right-48 top-20 opacity-50" />

            <Container className="relative py-20 sm:py-28">
                <Reveal className="max-w-4xl">
                    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-400">
                        <span aria-hidden className="h-px w-8 bg-gradient-to-r from-electric-500 to-cyan-400 opacity-90" />
                        <span>{category}</span>
                    </p>

                    <h1
                        className="mt-6 font-display font-bold leading-[1.02] tracking-tight text-white"
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
                    >
                        {title}
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        {description}
                    </p>

                    {actions && <div className="mt-10 flex flex-wrap items-center gap-6">{actions}</div>}
                </Reveal>
            </Container>
        </section>
    );
}
