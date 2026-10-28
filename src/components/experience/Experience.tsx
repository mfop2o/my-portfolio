'use client';

import { site } from '@/data/site';
import type { Experience as ExperienceRecord } from '@/types/experience';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import Glow from '@/components/background/Glow';
import ExperienceTimelineItem from './ExperienceTimelineItem';

interface ExperienceProps {
    experiences: ExperienceRecord[];
}

export default function Experience({ experiences }: ExperienceProps) {
    const { education } = site;

    if (experiences.length === 0) {
        return null;
    }

    const timelineItems = [
        ...experiences.map((experience, index) => ({
            ...experience,
            align: index % 2 === 0 ? 'left' : 'right',
        })),
        {
            id: 'education',
            company: education.institution,
            position: education.degree,
            description: null,
            highlights: null,
            technologies: [],
            start_date: '',
            end_date: '',
            current: false,
            sort_order: 99,
            period: education.graduated,
            align: 'left',
        },
    ];

    return (
        <section id="experience" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
            <Glow color="electric" opacity={0.06} className="-right-28 top-1/3" size="420px" />

            <Container>
                <div className="space-y-12">
                    <Reveal>
                        <div className="mx-auto max-w-3xl text-center">
                            <SectionLabel className="justify-center">My Experience</SectionLabel>
                            <SectionTitle className="mt-3 text-[2.15rem] font-semibold leading-[0.96] tracking-[-0.08em] text-[#171C19] sm:text-[2.8rem] lg:text-[3.3rem]">
                                My Professional Journey
                            </SectionTitle>
                            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#606A63] sm:text-[15px]">
                                I build practical digital products with a strong foundation in engineering, systems thinking, and clear delivery.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal variant="right" delay={80}>
                        <div className="relative mx-auto max-w-5xl">
                            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-slate-300 via-slate-400 to-transparent md:block dark:from-slate-700 dark:via-slate-500" />

                            <ol className="space-y-8 md:space-y-10">
                                {timelineItems.map((item) => (
                                    <ExperienceTimelineItem
                                        key={item.id}
                                        experience={item as ExperienceRecord}
                                        align={(item as { align?: 'left' | 'right' }).align ?? 'left'}
                                        isLast={false}
                                    />
                                ))}
                            </ol>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
