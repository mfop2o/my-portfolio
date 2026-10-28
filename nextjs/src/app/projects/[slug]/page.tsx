import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import ProjectPreview from '@/components/projects/ProjectPreview';
import { ArrowIcon } from '@/components/ui/icons';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudyFacts from '@/components/case-study/CaseStudyFacts';
import CaseStudyBody from '@/components/case-study/CaseStudyBody';
import CaseStudyLinks from '@/components/case-study/CaseStudyLinks';
import { PROJECTS, getProject } from '@/data/projects';
import { site, siteUrl } from '@/data/site';

export const dynamicParams = false;

export function generateStaticParams() {
    return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
    params,
}: PageProps<'/projects/[slug]'>): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) return {};

    const url = `/projects/${project.slug}`;

    return {
        title: project.title,
        description: project.short_description,
        alternates: siteUrl ? { canonical: url } : undefined,
        openGraph: {
            type: 'article',
            title: project.title,
            description: project.short_description,
            ...(siteUrl ? { url } : {}),
        },
    };
}

export default async function ProjectCaseStudyPage({
    params,
}: PageProps<'/projects/[slug]'>) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) notFound();

    return (
        <>
            <Link
                href="/#projects"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-20 focus:z-50 focus:rounded-sm focus:bg-midnight-900 focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.2em] focus:text-white"
            >
                ← Back to all projects
            </Link>

            <CaseStudyHero
                category={project.category}
                title={project.title}
                description={project.short_description}
                actions={
                    <>
                        <CaseStudyLinks project={project} />
                        <Link
                            href="/#projects"
                            className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 hover:text-slate-300"
                        >
                            All projects
                        </Link>
                    </>
                }
            />

            <CaseStudyFacts project={project} />

            {/* Preview */}
            <div className="bg-midnight-900 pb-16 sm:pb-24">
                <Container>
                    <Reveal variant="scale">
                        <ProjectPreview project={project} />
                    </Reveal>
                </Container>
            </div>

            <CaseStudyBody project={project} />

            {/* CTA strip */}
            <section className="relative overflow-hidden border-t border-white/5 bg-midnight-900 py-20 sm:py-24">
                <Container className="relative">
                    <Reveal>
                        <div className="flex flex-wrap items-center justify-between gap-8">
                            <div>
                                <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
                                    <span aria-hidden className="h-px w-6 bg-gradient-to-r from-electric-500 to-cyan-400" />
                                    {site.availability}
                                </p>
                                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                    Like what you see?
                                </h2>
                                <p className="mt-3 text-slate-400">Let&apos;s build something together.</p>
                            </div>
                            <Button href="/#contact" className="px-8 py-4">
                                Start a project
                                <ArrowIcon />
                            </Button>
                        </div>
                    </Reveal>
                </Container>
            </section>
        </>
    );
}
