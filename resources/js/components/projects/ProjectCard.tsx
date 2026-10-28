import { Link } from '@inertiajs/react';
import type { Project } from '@/types/project';
import Reveal from '@/components/ui/Reveal';
import { ArrowUpRightIcon } from '@/components/ui/icons';
import ProjectPreview from './ProjectPreview';
import { externalLinkProps } from '@/lib/url';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const live = externalLinkProps(project.live_url);
    const source = externalLinkProps(project.github_url);

    return (
        <Reveal delay={(index % 2) * 90} className="h-full">
            <article className="group relative h-full overflow-hidden rounded-[26px] border border-slate-200/80 bg-slate-900/95 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_24px_56px_-24px_rgba(8,145,178,0.35)] dark:border-white/10 dark:bg-midnight-850/90">
                <Link href={`/projects/${project.slug}`} className="relative block" aria-label={`Read the ${project.title} case study`}>
                    <div className="relative overflow-hidden rounded-[26px]">
                        <ProjectPreview project={project} caption={false} />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <div className="flex items-center justify-between gap-3 text-white">
                            <span className="font-mono text-[7px] font-medium uppercase tracking-[0.18em] text-slate-200/90">
                                {project.category}
                            </span>
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:border-cyan-300/40 group-hover:bg-cyan-400/15">
                                <ArrowUpRightIcon className="h-3 w-3" />
                            </span>
                        </div>

                        <h3 className="mt-2 font-display text-[1.02rem] font-semibold leading-[1.04] tracking-[-0.05em] text-white sm:text-[1.2rem]">
                            {project.title}
                        </h3>

                        <p className="mt-1 max-w-xs text-[10.5px] leading-[1.45] text-slate-200/90 line-clamp-2">
                            {project.short_description}
                        </p>
                    </div>
                </Link>
            </article>
        </Reveal>
    );
}
