'use client';

import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import Glow from '@/components/background/Glow';
import { TECH_GROUPS } from '@/data/technologies';

export default function Skills() {
    return (
        <section id="skills" className="relative scroll-mt-24 overflow-hidden border-y border-white/6 bg-midnight-900 py-24 sm:py-32">
            <Glow color="electric" opacity={0.08} className="right-1/4 top-0" size="520px" />

            <Container className="relative">
                <Reveal>
                    <div className="text-center">
                        <SectionLabel dark className="justify-center">Technical Stack</SectionLabel>
                        <SectionTitle className="mt-5 text-[1.9rem] leading-none tracking-[-0.06em] sm:text-[2.5rem] lg:text-[3.2rem]" dark>
                            Technologies I
                            <span className="text-gradient text-cyan-300"> work with.</span>
                        </SectionTitle>
                        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-300 sm:text-base">
                            Languages, frameworks, and database tools I use to build scalable production systems.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
                    {TECH_GROUPS.map((group, groupIndex) => {
                        const colSpan = groupIndex < 3 ? 'lg:col-span-2' : 'lg:col-span-3';
                        return (
                            <Reveal key={group.id} delay={groupIndex * 80} className={`h-full ${colSpan}`}>
                                <div className="group relative flex h-full flex-col justify-between rounded-xl border border-white/10 bg-midnight-850/80 p-6 sm:p-7 shadow-[0_4px_24px_-4px_rgba(2,6,23,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_16px_36px_-12px_rgba(6,182,212,0.2)]">
                                    <div>
                                        {/* Group header */}
                                        <div className="flex items-center gap-3.5 border-b border-white/8 pb-5">
                                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-midnight-900 text-cyan-400 transition-colors duration-300 group-hover:border-cyan-400/40 group-hover:text-cyan-300">
                                                <group.icon className="h-[18px] w-[18px]" />
                                            </span>
                                            <div>
                                                <h3 className="font-display text-base font-bold tracking-tight text-white">
                                                    {group.label}
                                                </h3>
                                                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                                                    {group.items.length} Technologies
                                                </span>
                                            </div>
                                        </div>

                                        {/* Items */}
                                        <ul className="mt-5 flex flex-wrap gap-2">
                                            {group.items.map((item) => (
                                                <li
                                                    key={item.name}
                                                    className="inline-flex items-center gap-2 rounded-md border border-white/8 bg-white/4 px-2.5 py-1 font-mono text-xs text-slate-300 transition-colors duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
                                                >
                                                    <item.icon className="h-3.5 w-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                                                    {item.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
