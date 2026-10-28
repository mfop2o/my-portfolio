'use client';

import { useState } from 'react';
import type { Project } from '@/types/project';
import Reveal from '@/components/ui/Reveal';
import { ArrowUpRightIcon } from '@/components/ui/icons';
import ProjectPreview from './ProjectPreview';
import { externalLinkProps } from '@/lib/url';
import { X } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const live = externalLinkProps(project.live_url);
    const github = externalLinkProps(project.github_url);
    const technologies = project.technologies ?? [];

    const [open, setOpen] = useState(false);

    return (
        <>
            <Reveal className="h-full">
                <article
                    className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl shadow-[0_8px_30px_-18px_rgba(15,23,42,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-28px_rgba(8,145,178,0.3)] dark:shadow-[0_4px_24px_-4px_rgba(2,6,23,0.5)] dark:hover:shadow-[0_16px_36px_-12px_rgba(6,182,212,0.18)]"
                    onClick={() => setOpen(true)}
                >
                    {/* Project cover image */}
                    <div className="relative w-full overflow-hidden">
                        <div className="aspect-[16/9] w-full">
                            <ProjectPreview project={project} caption={false} />
                        </div>
                    </div>

                    {/* Project information */}
                    <div className="flex flex-1 flex-col justify-center gap-1.5 bg-midnight-800 px-5 py-4 dark:bg-slate-50">
                        <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-cyan-400 dark:text-cyan-600">
                            {project.category}
                        </p>
                        <h3 className="font-display text-base font-semibold leading-tight tracking-[-0.01em] text-white dark:text-slate-900 sm:text-lg">
                            {project.title}
                        </h3>
                    </div>
                </article>
            </Reveal>

            {open && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="relative max-h-[95vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-white/10 bg-midnight-900 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-midnight-900/80 text-slate-300 transition-colors hover:border-cyan-400/60 hover:text-white"
                            aria-label="Close"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        <div className="grid gap-0 md:grid-cols-[42%_58%]">
                            <div className="relative h-full w-full bg-midnight-950">
                                <div className="flex h-full w-full items-center justify-center p-2">
                                    <div className="h-full w-full [&_img]:h-full [&_img]:w-full [&_img]:object-contain">
                                        <ProjectPreview project={project} caption={false} />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 p-5 sm:p-6">
                                <div>
                                    <p className="mb-1.5 font-mono text-[8px] uppercase tracking-[0.24em] text-cyan-400">
                                        {project.category}
                                    </p>
                                    <h3 className="font-display text-lg font-semibold leading-tight tracking-[-0.01em] text-white sm:text-xl">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-xs leading-relaxed text-slate-300">
                                    {project.description || project.short_description}
                                </p>

                                {technologies.length > 0 && (
                                    <div>
                                        <p className="mb-1.5 font-mono text-[8px] uppercase tracking-[0.24em] text-cyan-400">
                                            Tech Stack
                                        </p>
                                        <div className="flex flex-wrap items-center gap-1.5">
                                            {technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="inline-flex items-center rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-gray-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {(live.href || github.href) && (
                                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
                                        {live.href && (
                                            <a
                                                href={live.href}
                                                target={live.target}
                                                rel={live.rel}
                                                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-electric-500 to-electric-600 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:brightness-110"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Live Demo
                                                <ArrowUpRightIcon className="h-3 w-3" />
                                            </a>
                                        )}
                                        {github.href && (
                                            <a
                                                href={github.href}
                                                target={github.target}
                                                rel={github.rel}
                                                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-200 transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-300"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                GitHub
                                                <ArrowUpRightIcon className="h-3 w-3" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
