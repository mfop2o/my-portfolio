'use client';

import type { Experience } from '@/types/experience';
import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';
import HeroFacts from './HeroFacts';
import Container from '@/components/ui/Container';
import Glow from '@/components/background/Glow';
import BackgroundGrid from '@/components/background/BackgroundGrid';

interface HeroProps {
    experiences: Experience[];
}

export default function Hero({ experiences }: HeroProps) {
    const current = experiences.find((experience) => experience.current) ?? null;

    return (
        <section id="top" className="relative overflow-hidden bg-midnight-900 pt-[72px]">
            {/* Background layers */}
            <Glow color="electric" opacity={0.16} className="-left-52 -top-28" size="720px" />
            <Glow color="cyan" opacity={0.1} className="-right-24 top-1/2" size="520px" />
            <BackgroundGrid className="opacity-50 [mask-image:radial-gradient(ellipse_85%_65%_at_50%_0%,black,transparent)]" />

            <Container className="relative grid items-center gap-16 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-28">
                <HeroContent />
                <HeroVisual />
            </Container>

            {/* Genuine facts strip */}
            <HeroFacts />
        </section>
    );
}
