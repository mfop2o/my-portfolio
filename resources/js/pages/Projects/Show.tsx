import type { PageProps } from '@/types';
import type { Project } from '@/types/project';
import type { ReactNode } from 'react';
import { Head, Link, usePage, type ResolvedComponent } from '@inertiajs/react';
import PortfolioLayout from '@/layouts/PortfolioLayout';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import ProjectPreview from '@/components/projects/ProjectPreview';
import { ArrowIcon, ArrowUpRightIcon } from '@/components/ui/icons';
import Glow from '@/components/background/Glow';
import DecorativeCircle from '@/components/background/DecorativeCircle';
import SectionLabel from '@/components/ui/SectionLabel';

interface ShowProps extends PageProps {
    project: Project;
}

/**
 * Minimal project case-study page.
 * Designed to be expanded with galleries, process details and outcomes.
 */
const Show: ResolvedComponent = ({ project }: ShowProps) => {
    const { site } = usePage<PageProps>().props;
    const canonical =
        typeof window !== 'undefined' ? window.location.origin + window.location.pathname : undefined;

    return (
        <>
            <Head>
                <title>{project.title}</title>
                <meta name="description" content={project.short_description} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={project.title} />
                <meta property="og:description" content={project.short_description} />
                {canonical && <link rel="canonical" href={canonical} />}
            </Head>

            <section className="relative overflow-hidden bg-midnight-900 pt-[72px]">
                <Glow color="electric" opacity={0.08} className="-left-32 top-10" size="600px" />
                <DecorativeCircle size={420} className="-right-52 top-24" />

                <Container className="relative py-20 sm:py-28">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 transition-colors duration-300 hover:text-cyan-300"
                    >
                        <span aria-hidden className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                        Back to home
                    </Link>

                    <Reveal className="mt-12 max-w-4xl">
                        <SectionLabel dark>{project.category}</SectionLabel>
                        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl">
                            {project.title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                            {project.short_description}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                            {project.github_url && (
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-cyan-300"
                                >
                                    GitHub
                                    <ArrowUpRightIcon />
                                </a>
                            )}
                            {project.live_url && (
                                <a
                                    href={project.live_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-cyan-300"
                                >
                                    Live site
                                    <ArrowUpRightIcon />
                                </a>
                            )}
                        </div>
                    </Reveal>
                </Container>
            </section>

            <Container className="pb-8">
                <Reveal variant="scale">
                    <ProjectPreview project={project} />
                </Reveal>
            </Container>

            <section className="py-20 sm:py-24">
                <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <Reveal>
                        <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                            About this project
                        </h2>
                        {project.technologies && project.technologies.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="border border-slate-200 dark:border-slate-500/25 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </Reveal>

                    <Reveal variant="right" delay={80}>
                        <div className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                            <p>{project.description ?? project.short_description}</p>
                            <p>
                                This case study is a living page — detailed breakdowns, decisions
                                and outcomes can be added here as the work evolves.
                            </p>
                        </div>
                    </Reveal>
                </Container>
            </section>

            <section className="relative overflow-hidden border-t border-slate-500/15 bg-midnight-900 py-20 sm:py-24">
                <Glow color="cyan" opacity={0.1} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size="600px" />
                <Container className="relative flex flex-wrap items-center justify-between gap-8">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
                            {site.availability}
                        </p>
                        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                            Like what you see?
                        </h2>
                    </div>
                    <Button href={`mailto:${site.email}`}>
                        Start a project
                        <ArrowIcon />
                    </Button>
                </Container>
            </section>
        </>
    );
}

Show.layout = (page: ReactNode) => <PortfolioLayout>{page}</PortfolioLayout>;

export default Show;
