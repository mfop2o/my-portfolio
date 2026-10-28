'use client';

import type { Experience } from '@/types/experience';

interface ExperienceTimelineItemProps {
    experience: Experience;
    align?: 'left' | 'right';
    isLast: boolean;
}

export default function ExperienceTimelineItem({ experience, align = 'left', isLast }: ExperienceTimelineItemProps) {
    const { company, position, description, technologies, period, current } = experience;

    return (
        <li className="group relative">
            <span
                aria-hidden
                className={`absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-cyan-500 shadow-[0_0_18px_rgba(6,182,212,0.7)] md:block dark:border-midnight-950 ${current ? 'ring-4 ring-cyan-400/25' : ''}`}
            />

            <div className={`flex ${align === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className={`w-full md:w-[46%] ${align === 'left' ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_22px_42px_-28px_rgba(15,23,42,0.35)] transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_18px_30px_-20px_rgba(34,211,238,0.35)] dark:border-white/10 dark:bg-midnight-850/80 dark:hover:border-cyan-400/40">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#606A63] dark:text-slate-400">
                        {period}
                    </span>
                    {current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CFE9DB] bg-[#E8F5ED] px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#16845B] dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-400">
                            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#16845B]" />
                            Current
                        </span>
                    )}
                </div>

                <div className="mt-4">
                    <h3 className="font-display text-[1.35rem] font-semibold tracking-[-0.06em] text-[#171C19] dark:text-white">
                        {position}
                    </h3>
                    <p className="mt-1 text-[13px] font-medium text-[#606A63] dark:text-slate-300">
                        {company}
                    </p>
                </div>

                {description && (
                    <p className="mt-4 text-[14px] leading-7 text-[#606A63] dark:text-slate-300">
                            </p>
                        )}

                        {technologies && technologies.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-2">
                                {technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-600 dark:border-white/10 dark:bg-white/4 dark:text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
}
