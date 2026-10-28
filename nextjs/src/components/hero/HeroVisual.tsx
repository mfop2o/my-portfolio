'use client';

import { site } from '@/data/site';
import Glow from '@/components/background/Glow';

/**
 * Clean circular portrait avatar.
 * Simple, professional, distraction-free.
 */
export default function HeroVisual() {
    const avatarSrc = site.avatar ?? '/images/hero.webp';

    return (
        <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center lg:mx-0 lg:justify-self-end">
            <Glow
                color="cyan"
                opacity={0.15}
                className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                size="360px"
            />

            <div className="relative rounded-full p-2.5 border border-white/10 bg-white/[0.02] shadow-2xl">
                <div className="relative aspect-square w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] overflow-hidden rounded-full border border-white/15 bg-midnight-950">
                    <img
                        src={avatarSrc}
                        alt={site.name}
                        loading="eager"
                        className="h-full w-full object-cover object-top filter contrast-[1.03] transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}
