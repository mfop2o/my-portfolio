import type { PageProps } from '@/types';
import type { Project } from '@/types/project';
import { usePage } from '@inertiajs/react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { ArrowUpRightIcon } from '@/components/ui/icons';
import ProjectCard from './ProjectCard';
import Glow from '@/components/background/Glow';
import BackgroundGrid from '@/components/background/BackgroundGrid';

interface ProjectsProps {
    projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
    const { site } = usePage<PageProps>().props;
    if (projects.length === 0) return null;

    return (
        <section
            id="projects"
            className="relative scroll-mt-24 overflow-hidden border-y border-white/5 bg-midnight-900 py-24 sm:py-32"
        >
            <BackgroundGrid className="opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
            <Glow color="cyan"     opacity={0.09} className="left-1/4 top-1/3" size="640px" />
            <Glow color="electric" opacity={0.06} className="right-0 bottom-0"  size="480px" />

            <Container>
                <Reveal>
                    <SectionLabel dark>Selected work</SectionLabel>
                    <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
                        <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
                            Selected
                            <span className="text-gradient"> Work</span>
                        </h2>
                        <p className="font-display text-lg font-medium tracking-tight text-slate-500 sm:text-xl">
                            {projects.length} featured {projects.length === 1 ? 'project' : 'projects'}
                        </p>
                    </div>
                </Reveal>

                <div className="mt-16 space-y-24 sm:space-y-32 lg:mt-24">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <Reveal className="mt-20 flex flex-wrap items-center justify-center gap-6 border-t border-white/8 pt-12">
                    <p className="text-sm text-slate-500">Want to see what's behind the scenes?</p>
                    <Button href={site.socials.github} external variant="outline" dark>
                        More on GitHub
                        <ArrowUpRightIcon />
                    </Button>
                </Reveal>
            </Container>
        </section>
    );
}
