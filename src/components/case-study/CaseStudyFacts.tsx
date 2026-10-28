'use client';

import type { Project } from '@/types/project';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';

interface CaseStudyFactsProps {
    project: Project;
}

/**
 * Verifiable fact strip for a case study.
 *
 * Values are derived only from the project record — no invented metrics.
 */
export default function CaseStudyFacts({ project }: CaseStudyFactsProps) {
    const techCount = project.technologies?.length ?? 0;

    const facts = [
        { label: 'Category', value: project.category },
        { label: 'Stack', value: techCount > 0 ? `${techCount} technologies` : '—' },
        { label: 'Source', value: project.github_url ? 'Public repository' : 'Private' },
        { label: 'Status', value: project.live_url ? 'Live' : 'In progress' },
    ];

    return (
        <div className="border-t border-white/6 bg-midnight-900">
            <Container>
                <Reveal>
                    <dl className="grid grid-cols-2 divide-white/6 sm:grid-cols-4 sm:divide-x">
                        {facts.map(({ label, value }) => (
                            <div
                                key={label}
                                className="flex flex-col items-center gap-1.5 border-b border-white/6 px-4 py-6 text-center sm:border-b-0 sm:px-6"
                            >
                                <dd className="font-display text-sm font-semibold tracking-tight text-white">
                                    {value}
                                </dd>
                                <dt className="text-[9px] font-medium uppercase tracking-[0.28em] text-slate-600">
                                    {label}
                                </dt>
                            </div>
                        ))}
                    </dl>
                </Reveal>
            </Container>
        </div>
    );
}
