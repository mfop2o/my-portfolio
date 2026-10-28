import { Search, Boxes, Code2, Sparkles, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import Glow from '@/components/background/Glow';

const STEPS = [
    {
        number: '01',
        title: 'Understand',
        icon: Search,
        description: 'Analyze requirements, user workflows, and core problem constraints.',
    },
    {
        number: '02',
        title: 'Architect',
        icon: Boxes,
        description: 'Design database models, API contracts, and scalable system structure.',
    },
    {
        number: '03',
        title: 'Build',
        icon: Code2,
        description: 'Implement full-stack features with clean, typed, and testable code.',
    },
    {
        number: '04',
        title: 'Refine',
        icon: Sparkles,
        description: 'Test, optimize performance, document, and ship to production.',
    },
];

export default function EngineeringProcess() {
    return (
        <section className="relative scroll-mt-24 overflow-hidden border-y border-white/6 bg-midnight-950/60 py-24 sm:py-32">
            <Glow color="electric" opacity={0.06} className="left-1/3 top-0" size="480px" />
            <Glow color="cyan" opacity={0.04} className="right-0 bottom-1/3" size="380px" />

            <Container>
                <Reveal>
                    <div className="text-center">
                        <SectionLabel dark className="justify-center">Process</SectionLabel>
                        <SectionTitle className="mt-5 text-[1.8rem] leading-none tracking-[-0.06em] sm:text-[2.3rem] lg:text-[2.9rem]" dark>
                            From Problem to
                            <span className="text-gradient"> Production.</span>
                        </SectionTitle>
                        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-slate-300 sm:text-base">
                            A structured engineering workflow ensuring reliable delivery from first concept to shipped code.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {STEPS.map(({ number, title, icon: Icon, description }, index) => (
                        <Reveal key={number} delay={index * 100}>
                            <div className="group relative flex h-full flex-col justify-between rounded-xl border border-white/10 bg-midnight-850/80 p-6 sm:p-7 shadow-[0_4px_24px_-4px_rgba(2,6,23,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_16px_36px_-12px_rgba(6,182,212,0.2)]">
                                <div>
                                    {/* Step number & arrow */}
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-xs font-semibold tabular-nums text-cyan-400">
                                            {number}
                                        </span>
                                        {index < STEPS.length - 1 && (
                                            <ArrowRight className="hidden lg:block h-3.5 w-3.5 text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-cyan-400" />
                                        )}
                                    </div>

                                    {/* Icon */}
                                    <span className="mt-5 inline-grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-midnight-900 text-cyan-400 transition-colors duration-300 group-hover:border-cyan-400/40 group-hover:text-cyan-300">
                                        <Icon className="h-4 w-4" />
                                    </span>

                                    {/* Title */}
                                    <h3 className="mt-5 font-display text-base font-bold tracking-tight text-white">
                                        {title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
