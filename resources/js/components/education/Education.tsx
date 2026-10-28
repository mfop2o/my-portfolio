import type { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import { GraduationCap } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import Reveal from '@/components/ui/Reveal';
import Glow from '@/components/background/Glow';

/**
 * Education band.
 *
 * Values come from config/portfolio.php — only record credentials you hold.
 */
export default function Education() {
    const { site } = usePage<PageProps>().props;
    const { education } = site;
    const graduationYear = education.graduated.match(/\b(19|20)\d{2}\b/)?.[0];

    return (
        <section
            id="education"
            className="relative scroll-mt-24 overflow-hidden border-t border-slate-200/80 bg-slate-100/60 py-20 dark:border-white/6 dark:bg-midnight-950/40 sm:py-24"
        >
            <Glow color="cyan" opacity={0.05} className="-left-24 bottom-0" size="380px" />

            {/* Ghost graduation year */}
            {graduationYear && (
                <span
                    aria-hidden
                    className="pointer-events-none absolute -top-4 right-4 hidden select-none font-display text-[13rem] font-bold leading-none text-stroke opacity-[0.09] sm:block lg:right-16"
                >
                    {graduationYear}
                </span>
            )}

            <Container className="relative">
                <Reveal>
                    <div className="text-center">
                        <SectionLabel className="justify-center">Education</SectionLabel>
                    </div>

                    <div className="mt-8 grid items-start gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
                        <span className="grid h-14 w-14 place-items-center border border-slate-200 bg-white text-electric-500 shadow-sm dark:border-white/10 dark:bg-midnight-850 dark:text-cyan-400">
                            <GraduationCap className="h-6 w-6" aria-hidden />
                        </span>

                        <div>
                            <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                                {education.degree}
                            </h2>

                            <dl className="mt-5 grid gap-x-10 gap-y-4 sm:grid-cols-3">
                                {[
                                    { label: 'Institution', value: education.institution },
                                    { label: 'Graduated', value: education.graduated },
                                    { label: 'Location', value: education.location },
                                ].map(({ label, value }) => (
                                    <div key={label}>
                                        <dt className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400 dark:text-slate-500">
                                            {label}
                                        </dt>
                                        <dd className="mt-1.5 text-[15px] leading-snug text-slate-700 dark:text-slate-300">
                                            {value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
}
