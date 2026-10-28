import type { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import { Layers, Cpu, Wrench } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';
import Glow from '@/components/background/Glow';
import DecorativeCircle from '@/components/background/DecorativeCircle';

const FOCUS_AREAS = [
    {
        icon: Layers,
        title: '01 — Product Thinking',
        description: 'Turning real user needs and business goals into intuitive, useful digital experiences.',
    },
    {
        icon: Cpu,
        title: '02 — Reliable Engineering',
        description: 'Building maintainable applications with dependable APIs, thoughtful architecture, and structured data.',
    },
    {
        icon: Wrench,
        title: '03 — Practical Delivery',
        description: 'Taking ideas from concept to implementation with a focus on quality, simplicity, and real-world value.',
    },
];

export default function About() {
    const { site } = usePage<PageProps>().props;

    return (
        <section id="about" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
            <Glow color="cyan" opacity={0.08} className="-left-24 top-1/3" size="460px" />
            <DecorativeCircle size={340} className="-right-20 -top-16 opacity-60" />

            <Container className="relative">
                <div className="text-center">
                    <Reveal>
                        <SectionLabel className="justify-center">About Me</SectionLabel>

                        <h2 className="mx-auto mt-5 max-w-[16ch] font-display text-[1.8rem] font-semibold leading-[1.02] tracking-[-0.065em] text-slate-900 sm:max-w-[17ch] sm:text-[2.3rem] lg:max-w-[18ch] lg:text-[2.9rem] dark:text-white">
                            Building Software with Purpose.
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-700 dark:text-slate-300">
                            I build software that feels simple, useful, and dependable. From intuitive user interfaces to reliable backend systems, I turn real-world problems into thoughtful digital solutions.
                        </p>
                    </Reveal>
                </div>

                <div className="mx-auto mt-8 max-w-xl">
                    <Reveal delay={80}>
                        <div className="rounded-[22px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_36px_-28px_rgba(15,23,42,0.32)] backdrop-blur-sm dark:border-white/10 dark:bg-midnight-850/80">
                            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-400">
                                Currently
                            </p>
                            <div className="mt-4">
                                <p className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                                    Full-Stack Software Developer
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-medium text-slate-600 dark:text-slate-300">
                                    {['Product Engineering', 'System Design', 'Database Architecture'].map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono uppercase tracking-[0.14em] text-slate-600 dark:border-white/10 dark:bg-midnight-900 dark:text-slate-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                A Computer Science graduate from Addis Ababa University, building end-to-end digital products through thoughtful frontend development, reliable backend engineering, and well-structured data systems.
                            </p>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={100}>
                    <div className="mt-14 grid gap-6 sm:grid-cols-3">
                        {FOCUS_AREAS.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className="group relative rounded-[20px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_16px_34px_-25px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_22px_44px_-20px_rgba(14,165,233,0.28)] dark:border-white/10 dark:bg-midnight-850/80 dark:hover:border-cyan-400/40"
                            >
                                <span className="inline-grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-electric-600 transition-colors duration-300 group-hover:border-cyan-400/50 group-hover:text-cyan-600 dark:border-white/10 dark:bg-midnight-900 dark:text-cyan-400">
                                    <Icon className="h-5 w-5" />
                                </span>
                                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                                    {title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
