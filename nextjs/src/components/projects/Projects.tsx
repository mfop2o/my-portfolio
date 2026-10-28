'use client';

import { site } from '@/data/site';
import type { Project } from '@/types/project';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { ArrowUpRightIcon } from '@/components/ui/icons';
import ProjectCard from './ProjectCard';
import Glow from '@/components/background/Glow';
import BackgroundGrid from '@/components/background/BackgroundGrid';
import { isConfiguredUrl } from '@/lib/url';

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    if (projects.length === 0) return null;

    const githubUrl = site.socials.github;

    return (
        <section
            id="projects"
            className="relative scroll-mt-24 overflow-hidden border-y border-white/5 bg-midnight-900 py-24 sm:py-32"
        >
            <BackgroundGrid className="opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
            <Glow color="cyan" opacity={0.09} className="left-1/4 top-1/3" size="640px" />
            <Glow color="electric" opacity={0.06} className="right-0 bottom-0" size="480px" />

            <Container>
                <Reveal>
                    <div className="relative">
                        <div className="absolute left-0 top-8 hidden items-center md:flex">
                            <span className="inline-block -rotate-180 text-3xl text-slate-500/80">←</span>
                        </div>
                        <div className="absolute right-0 top-8 hidden items-center md:flex">
                            <span className="inline-block text-3xl text-slate-500/80">→</span>
                        </div>

                        <div className="mx-auto max-w-3xl text-center">
                            <SectionLabel dark className="justify-center">Selected Projects</SectionLabel>
                            <SectionTitle dark className="mt-5 font-display text-[1.9rem] leading-none tracking-[-0.06em] sm:text-[2.5rem] lg:text-[3.1rem]">
                                My Works
                            </SectionTitle>
                            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-slate-300 sm:text-base">
                                Practical products built for clarity, speed, and measurable impact.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div className="mt-14 flex justify-center">
                    <div className="grid w-full max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>

                {isConfiguredUrl(githubUrl) && (
                    <Reveal className="mt-14 flex justify-center">
                        <Button href={githubUrl} external variant="outline" dark>
                            View GitHub
                            <ArrowUpRightIcon />
                        </Button>
                    </Reveal>
                )}
            </Container>
        </section>
    );
}