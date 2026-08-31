import type { Experience } from '@/types/experience';

interface ExperienceItemProps {
    experience: Experience;
    isLast: boolean;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
    return (
        <li className="group relative pl-10 sm:pl-14">
            {/* Timeline dot */}
            <span aria-hidden className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
                {experience.current ? (
                    <>
                        <span className="absolute h-4 w-4 rounded-full bg-cyan-400/20 animate-ping" />
                        <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_0_3px_rgba(6,182,212,0.2),0_0_12px_rgba(6,182,212,0.5)]" />
                    </>
                ) : (
                    <span className="h-2.5 w-2.5 rounded-full border-2 border-slate-600 bg-midnight-900 transition-colors duration-300 group-hover:border-slate-400" />
                )}
            </span>

            <div>
                {/* Period & badge */}
                <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
                        {experience.period}
                    </span>
                    {experience.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                            <span aria-hidden className="h-1 w-1 rounded-full bg-cyan-400" />
                            Current
                        </span>
                    )}
                </div>

                {/* Role */}
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-3xl">
                    {experience.position}
                </h3>

                {/* Company */}
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-electric-300">
                    {experience.company}
                </p>

                {/* Description */}
                {experience.description && (
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                        {experience.description}
                    </p>
                )}

                {/* Tech tags */}
                {experience.technologies && experience.technologies.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-sm border border-white/8 bg-white/4 px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-colors duration-200 group-hover:border-white/12 group-hover:text-slate-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </li>
    );
}
