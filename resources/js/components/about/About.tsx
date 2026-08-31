import type { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { ArrowUpRightIcon } from '@/components/ui/icons';
import Glow from '@/components/background/Glow';
import DecorativeCircle from '@/components/background/DecorativeCircle';

interface AboutProps {
    projectCount: number;
}

const STACK = ['Laravel', 'React', 'TypeScript', 'MySQL', 'Inertia', 'Tailwind CSS'];

export default function About({ projectCount }: AboutProps) {
    const { site } = usePage<PageProps>().props;

    return (
        <section id="about" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
            <Glow color="cyan" opacity={0.1} className="-left-20 top-1/4" size="480px" />
            <DecorativeCircle size={320} className="-right-16 -top-16 opacity-60" />

            <Container className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
                {/* Profile card */}
                <Reveal variant="left" className="relative order-2 lg:order-1">
                    <div className="relative rotate-1 transition-transform duration-500 hover:rotate-0">
                        {/* Outer glow ring */}
                        <div className="absolute -inset-px rounded-sm bg-gradient-to-br from-electric-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="relative border border-slate-200 bg-white shadow-[0_24px_64px_-24px_rgba(15,23,42,0.22)] dark:border-slate-500/25 dark:bg-midnight-800/80 dark:shadow-[0_30px_70px_-35px_rgba(0,0,0,0.7)]">
                            {/* Window bar */}
                            <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-5 py-3 dark:border-slate-500/15">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400/50" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/50" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/50" />
                                <span className="ml-4 text-[10px] tracking-wide text-slate-400 dark:text-slate-500">about.tsx</span>
                                <span className="ml-auto rounded bg-cyan-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-cyan-600">
                                    TSX
                                </span>
                            </div>

                            <div className="p-7 sm:p-9">
                                {/* Identity */}
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="grid h-16 w-16 place-items-center border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 font-display text-2xl font-bold shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)] dark:border-slate-500/30 dark:bg-midnight-900">
                                            <span className="text-gradient">{site.monogram}</span>
                                        </div>
                                        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                                            {site.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{site.title}</p>
                                    </div>
                                    <span className="mt-1 rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:border-slate-500/30 dark:bg-midnight-900 dark:text-slate-600">
                                        EST. {new Date().getFullYear() - 1}
                                    </span>
                                </div>

                                {/* Stats grid */}
                                <div className="mt-8 grid grid-cols-3 divide-x divide-slate-100 rounded-sm border border-slate-100 bg-slate-50/60">
                                    {[
                                        { label: 'Location', value: site.location.split(',')[0] },
                                        { label: 'Exp.',     value: `${site.experience_years} yr` },
                                        { label: 'Projects', value: `${projectCount}+` },
                                    ].map(({ label, value }) => (
                                        <div key={label} className="flex flex-col items-center py-4 px-2 text-center">
                                            <span className="font-display text-lg font-bold tracking-tight text-slate-900">
                                                {value}
                                            </span>
                                            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
                                                {label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Stack */}
                                <div className="mt-7 border-t border-slate-100 pt-6">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
                                        Core stack
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {STACK.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-sm border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 shadow-sm transition-all duration-200 hover:border-cyan-400/60 hover:text-cyan-700 dark:border-slate-500/25 dark:bg-transparent dark:text-slate-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Availability badge */}
                                <div className="mt-6 flex items-center gap-2.5 rounded-sm border border-emerald-200/60 bg-emerald-50/60 px-4 py-2.5">
                                    <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]" />
                                    <span className="text-[11px] font-medium text-emerald-700">{site.availability}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Copy */}
                <Reveal variant="right" className="order-1 lg:order-2">
                    <SectionLabel>About me</SectionLabel>
                    <SectionTitle className="mt-5">
                        Turning ideas into
                        <span className="text-gradient"> digital products.</span>
                    </SectionTitle>

                    <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-600 sm:text-[1.05rem] dark:text-slate-400">
                        <p>{site.about}</p>
                        <p>
                            I care about clean architecture, readable code and the small details that make
                            software feel considered — from the way a query is structured to the way a
                            button responds.
                        </p>
                    </div>

                    {/* Focus tags */}
                    <div className="mt-9 flex flex-wrap gap-2">
                        {site.focus.map((item) => (
                            <span
                                key={item}
                                className="rounded-sm border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-50/60 hover:text-cyan-700 dark:border-slate-500/25 dark:bg-transparent dark:text-slate-300 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <Button href={site.cv_path} external variant="outline">
                            Download CV
                            <ArrowUpRightIcon />
                        </Button>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
