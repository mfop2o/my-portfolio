import { Link } from '@inertiajs/react';
import type { Project } from '@/types/project';
import Reveal from '@/components/ui/Reveal';
import { ArrowIcon, ArrowUpRightIcon } from '@/components/ui/icons';
import ProjectPreview from './ProjectPreview';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const flip = index % 2 === 1;

    return (
        <Reveal variant={flip ? 'right' : 'left'} className="group">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                {/* Preview */}
                <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
                    <ProjectPreview project={project} />
                </div>

                {/* Copy */}
                <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
                    {/* Category */}
                    <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        <span aria-hidden className="h-px w-8 bg-gradient-to-r from-electric-500 to-cyan-400" />
                        {project.category}
                    </p>

                    {/* Title */}
                    <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-200 sm:text-3xl">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                        {project.short_description}
                    </p>

                    {/* Tech tags */}
                    {project.technologies && project.technologies.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-sm border border-white/8 bg-white/4 px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-colors duration-200 hover:border-cyan-400/30 hover:text-slate-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Links */}
                    <div className="mt-8 flex flex-wrap items-center gap-6">
                        <Link
                            href={`/projects/${project.slug}`}
                            className="group/link inline-flex items-center gap-2 border-b border-white/20 pb-0.5 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-300"
                        >
                            View project
                            <ArrowIcon className="transition-transform duration-300 group-hover/link:translate-x-1" />
                        </Link>

                        {project.github_url && (
                            <a
                                href={project.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 transition-colors duration-300 hover:text-slate-300"
                            >
                                GitHub
                                <ArrowUpRightIcon />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
