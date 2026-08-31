import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import Glow from '@/components/background/Glow';

const STEPS = [
    {
        number: '01',
        title: 'Discover',
        description: 'Understand the problem, the users and the constraints before writing a line of code.',
        icon: '⬡',
    },
    {
        number: '02',
        title: 'Design',
        description: 'Shape the information architecture, the database and the interface around real workflows.',
        icon: '⬡',
    },
    {
        number: '03',
        title: 'Build',
        description: 'Develop in short, reviewable cycles — clean code, tested features, no surprises at the end.',
        icon: '⬡',
    },
    {
        number: '04',
        title: 'Ship',
        description: 'Deploy carefully, monitor, iterate. Software is never finished, only improved.',
        icon: '⬡',
    },
];

export default function WorkProcess() {
    return (
        <section
            id="process"
            className="relative scroll-mt-24 overflow-hidden border-y border-white/5 bg-midnight-900 py-24 sm:py-32"
        >
            <Glow color="electric" opacity={0.07} className="left-1/4 top-0"   size="560px" />
            <Glow color="cyan"     opacity={0.05} className="right-0 bottom-0" size="400px" />

            <Container>
                <Reveal>
                    <SectionLabel dark>Process</SectionLabel>
                    <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
                        <SectionTitle className="max-w-2xl" dark>
                            How I turn a problem into a
                            <span className="text-gradient"> working system.</span>
                        </SectionTitle>
                        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-600">
                            4 steps
                        </span>
                    </div>
                </Reveal>

                {/* Steps grid */}
                <div className="mt-16 grid gap-px overflow-hidden border border-white/6 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
                    {STEPS.map((step, index) => (
                        <Reveal
                            key={step.number}
                            delay={index * 90}
                            className="group relative flex flex-col bg-midnight-850 p-8 transition-colors duration-400 hover:bg-midnight-800 sm:p-10"
                        >
                            {/* Top gradient line */}
                            <span
                                aria-hidden
                                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />

                            {/* Step number */}
                            <div className="flex items-start justify-between">
                                <span className="font-display text-5xl font-bold text-stroke-light leading-none sm:text-6xl">
                                    {step.number}
                                </span>
                                {/* Connector arrow — hidden on last */}
                                {index < STEPS.length - 1 && (
                                    <span
                                        aria-hidden
                                        className="mt-2 hidden text-slate-700 transition-colors duration-300 group-hover:text-slate-500 lg:block"
                                    >
                                        →
                                    </span>
                                )}
                            </div>

                            {/* Gradient accent bar */}
                            <span
                                aria-hidden
                                className="mt-6 block h-px w-8 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-300 group-hover:w-14"
                            />

                            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-white">
                                {step.title}
                            </h3>
                            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                                {step.description}
                            </p>

                            {/* Index dot */}
                            <div className="mt-8 flex items-center gap-2">
                                {STEPS.map((_, i) => (
                                    <span
                                        key={i}
                                        aria-hidden
                                        className={`h-1 rounded-full transition-all duration-300 ${
                                            i === index
                                                ? 'w-6 bg-gradient-to-r from-electric-500 to-cyan-400'
                                                : 'w-1 bg-slate-700'
                                        }`}
                                    />
                                ))}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
