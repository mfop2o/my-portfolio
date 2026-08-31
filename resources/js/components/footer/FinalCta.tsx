import type { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { ArrowIcon } from '@/components/ui/icons';
import Glow from '@/components/background/Glow';
import DecorativeCircle from '@/components/background/DecorativeCircle';

export default function FinalCta() {
    const { site } = usePage<PageProps>().props;

    return (
        <section className="relative overflow-hidden border-t border-white/5 bg-midnight-900 py-28 sm:py-36">
            <Glow color="both" opacity={0.14} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size="760px" />
            <DecorativeCircle size={440} className="-left-44 top-10 opacity-60" />
            <DecorativeCircle size={280} className="-right-24 bottom-0 opacity-40" />

            {/* Dot texture */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-dots opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
            />

            <Container className="relative text-center">
                <Reveal>
                    {/* Availability pill */}
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-5 py-2 backdrop-blur-sm">
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-dot" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-400">
                            {site.availability}
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="mx-auto mt-8 max-w-4xl font-display font-bold leading-[1.02] tracking-tight text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                        Have a project
                        <br />
                        <span className="text-stroke-light">in mind?</span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                        Let&apos;s turn it into a working product — from the first sketch to the
                        last deploy.
                    </p>

                    {/* CTAs */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <Button href={`mailto:${site.email}`} className="px-9 py-4">
                            Start a conversation
                            <ArrowIcon />
                        </Button>
                        <Button href="#projects" variant="outline" dark className="px-8 py-4">
                            View my work
                        </Button>
                    </div>

                    {/* Social proof strip */}
                    <div className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-white/6 pt-10">
                        {[
                            { value: 'Laravel',     label: 'Backend'  },
                            { value: 'React',       label: 'Frontend' },
                            { value: 'TypeScript',  label: 'Language' },
                            { value: 'MySQL',       label: 'Database' },
                        ].map(({ value, label }) => (
                            <div key={value} className="flex flex-col items-center gap-1">
                                <span className="font-display text-sm font-semibold text-slate-300">{value}</span>
                                <span className="text-[9px] uppercase tracking-[0.28em] text-slate-600">{label}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
