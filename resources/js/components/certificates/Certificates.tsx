import type { Certificate } from '@/types/certificate';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import CertificateCard from './CertificateCard';
import Glow from '@/components/background/Glow';
import DecorativeCircle from '@/components/background/DecorativeCircle';

interface CertificatesProps {
    certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
    if (certificates.length === 0) return null;

    return (
        <section id="certificates" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
            <Glow color="cyan" opacity={0.06} className="-right-32 top-0" size="440px" />
            <DecorativeCircle size={360} className="-right-40 top-10 opacity-50" />

            <Container>
                <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                    <Reveal>
                        <SectionLabel>Credentials</SectionLabel>
                        <SectionTitle className="mt-5">Certificates</SectionTitle>
                        <p className="mt-6 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
                            Formal learning and proof of craft — the building blocks behind the
                            work, listed without inflation.
                        </p>

                        {/* Count badge */}
                        <div className="mt-10 inline-flex items-center gap-3 rounded-sm border border-slate-200 dark:border-slate-500/15 bg-slate-50 px-4 py-2.5">
                            <span className="font-display text-xl font-bold tracking-tight text-slate-900">
                                {certificates.length}
                            </span>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400">
                                Credential{certificates.length !== 1 ? 's' : ''}
                            </span>
                        </div>
                    </Reveal>

                    <Reveal variant="right" delay={80}>
                        <div className="divide-y divide-slate-100 border-b border-slate-100">
                            {certificates.map((certificate, index) => (
                                <CertificateCard key={certificate.id} certificate={certificate} index={index} />
                            ))}
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
