import type { Experience } from '@/types/experience';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import ExperienceItem from './ExperienceItem';
import Glow from '@/components/background/Glow';

interface ExperienceProps {
    experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
    if (experiences.length === 0) return null;

    return (
        <section
            id="experience"
            className="relative scroll-mt-24 overflow-hidden border-y border-white/5 bg-midnight-900 py-24 sm:py-32"
        >
            <Glow color="electric" opacity={0.08} className="-right-40 top-1/3" size="580px" />
            <Glow color="cyan"     opacity={0.05} className="-left-32 bottom-0"  size="420px" />

            {/* Subtle dot pattern */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-dots opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_80%_40%,black,transparent)]"
            />

            <Container>
                <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                    <Reveal>
                        <SectionLabel dark>Career</SectionLabel>
                        <SectionTitle className="mt-5" dark>Experience</SectionTitle>
                        <p className="mt-6 max-w-xs text-sm leading-relaxed text-slate-400 sm:text-base">
                            A clear record of the work I've shipped and the teams I've built with —
                            kept honest and current.
                        </p>

                        <div className="mt-10 hidden lg:flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <span aria-hidden className="h-px w-10 bg-gradient-to-r from-electric-500 to-cyan-400" />
                                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500">
                                    {experiences.length} {experiences.length === 1 ? 'role' : 'roles'}
                                </span>
                            </div>
                            {/* Mini role list */}
                            <div className="mt-2 space-y-2">
                                {experiences.map((exp) => (
                                    <div key={exp.id} className="flex items-center gap-3">
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full ${exp.current ? 'bg-cyan-400' : 'bg-slate-600'}`}
                                        />
                                        <span className="text-xs text-slate-500 truncate">{exp.company}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal variant="right" delay={80}>
                        <ol className="relative space-y-14">
                            {/* Gradient rail */}
                            <span
                                aria-hidden
                                className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan-400/60 via-electric-500/20 to-transparent"
                            />
                            {experiences.map((experience, index) => (
                                <ExperienceItem
                                    key={experience.id}
                                    experience={experience}
                                    isLast={index === experiences.length - 1}
                                />
                            ))}
                        </ol>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
