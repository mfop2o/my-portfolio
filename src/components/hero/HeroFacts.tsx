'use client';

import { site } from '@/data/site';
import Container from '@/components/ui/Container';

/**
 * Verified credibility strip under the hero.
 */
export default function HeroFacts() {
    const facts = [
        { label: 'Location', value: site.location },
        { label: 'Education', value: site.education.institution },
        { label: 'Degree', value: 'BSc in Computer Science' },
        { label: 'Graduated', value: site.education.graduated },
    ];

    return (
        <div className="relative border-t border-white/8 bg-midnight-950/40">
            <Container>
                <dl className="grid grid-cols-2 divide-white/6 sm:grid-cols-4 sm:divide-x">
                    {facts.map(({ label, value }) => (
                        <div
                            key={label}
                            className="flex flex-col gap-1 border-b border-white/6 px-2 py-5 text-center sm:border-b-0 sm:px-6"
                        >
                            <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                                {label}
                            </dt>
                            <dd className="font-display text-sm font-medium tracking-tight text-slate-200">
                                {value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </Container>
        </div>
    );
}
