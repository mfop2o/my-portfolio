import { Link } from '@inertiajs/react';
import type { Project } from '@/types/project';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import TechTag from '@/components/ui/TechTag';
import { ArrowIcon } from '@/components/ui/icons';
import CaseStudyLinks from './CaseStudyLinks';
import { AlertCircle, CheckCircle2, UserCheck, Layers, Cpu } from 'lucide-react';

interface CaseStudyBodyProps {
    project: Project;
}

/**
 * Main narrative column of a case study.
 *
 * Renders structured case-study sections (The Problem, The Solution,
 * My Contribution, Key Features, Architecture) when available.
 */
export default function CaseStudyBody({ project }: CaseStudyBodyProps) {
    const hasStructuredContent = Boolean(
        project.problem || project.solution || project.my_role || project.highlights || project.architecture_notes
    );

    const paragraphs = (project.description ?? project.short_description)
        .split(/\n{2,}/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

    return (
        <section className="py-20 sm:py-28">
            <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                <Reveal>
                    <div className="sticky top-28 space-y-8">
                        <div>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                                Case Study
                            </span>
                            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                                {project.title}
                            </h2>
                        </div>

                        {project.technologies && project.technologies.length > 0 && (
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
                                    Technology Stack
                                </p>
                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <li key={tech}>
                                            <TechTag>{tech}</TechTag>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="pt-2">
                            <CaseStudyLinks project={project} variant="button" />
                        </div>
                    </div>
                </Reveal>

                <Reveal variant="right" delay={80}>
                    <div className="space-y-12">
                        {hasStructuredContent ? (
                            <>
                                {project.problem && (
                                    <div className="border-l-2 border-amber-500/50 pl-6 dark:border-amber-400/40">
                                        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                                            <AlertCircle className="h-4 w-4" />
                                            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em]">
                                                The Problem
                                            </h3>
                                        </div>
                                        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                                            {project.problem}
                                        </p>
                                    </div>
                                )}

                                {project.solution && (
                                    <div className="border-l-2 border-cyan-500/50 pl-6 dark:border-cyan-400/40">
                                        <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                                            <CheckCircle2 className="h-4 w-4" />
                                            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em]">
                                                The Solution
                                            </h3>
                                        </div>
                                        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                                            {project.solution}
                                        </p>
                                    </div>
                                )}

                                {project.my_role && (
                                    <div className="border-l-2 border-electric-500/50 pl-6 dark:border-electric-400/40">
                                        <div className="flex items-center gap-2 text-electric-600 dark:text-electric-400">
                                            <UserCheck className="h-4 w-4" />
                                            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em]">
                                                My Contribution
                                            </h3>
                                        </div>
                                        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                                            {project.my_role}
                                        </p>
                                    </div>
                                )}

                                {project.highlights && project.highlights.length > 0 && (
                                    <div className="rounded-sm border border-slate-200 bg-slate-50/50 p-6 dark:border-white/8 dark:bg-midnight-850/50">
                                        <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                                            <Layers className="h-4 w-4 text-cyan-400" />
                                            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em]">
                                                Key Features & Capabilities
                                            </h3>
                                        </div>
                                        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                                            {project.highlights.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {project.architecture_notes && (
                                    <div className="border-l-2 border-slate-400/40 pl-6 dark:border-slate-500/40">
                                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                            <Cpu className="h-4 w-4 text-cyan-400" />
                                            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em]">
                                                System Architecture
                                            </h3>
                                        </div>
                                        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                                            {project.architecture_notes}
                                        </p>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="space-y-6 text-base leading-relaxed text-slate-600 sm:text-[1.05rem] dark:text-slate-400">
                                {paragraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        )}

                        {/* Divider with label */}
                        <div className="flex items-center gap-4 border-t border-slate-200 pt-8 dark:border-white/8">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
                                More projects
                            </span>
                            <span aria-hidden className="flex-1 border-b border-slate-200 dark:border-white/8" />
                            <Link
                                href="/#projects"
                                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 hover:text-cyan-700 dark:hover:text-cyan-300"
                            >
                                View all
                                <ArrowIcon />
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
