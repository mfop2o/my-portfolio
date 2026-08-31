import type { Certificate } from '@/types/certificate';
import { ArrowUpRightIcon } from '@/components/ui/icons';

interface CertificateCardProps {
    certificate: Certificate;
    index: number;
}

export default function CertificateCard({ certificate, index }: CertificateCardProps) {
    const content = (
        <div className="flex items-start gap-6 sm:gap-10">
            {/* Year */}
            <div className="w-16 shrink-0 sm:w-24">
                <span className="font-display text-3xl font-bold text-stroke sm:text-4xl">
                    {certificate.year ?? String(new Date().getFullYear() - index)}
                </span>
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 sm:text-xl">
                    {certificate.title}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {certificate.issuer}
                </p>
                {certificate.description && (
                    <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        {certificate.description}
                    </p>
                )}
            </div>

            {/* Arrow */}
            <div className="shrink-0 pt-0.5">
                <span className="grid h-9 w-9 place-items-center rounded-sm border border-slate-200 dark:border-slate-500/15 text-slate-300 dark:text-slate-500 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-50 group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                    <ArrowUpRightIcon />
                </span>
            </div>
        </div>
    );

    const sharedClass = 'group block py-7 transition-colors duration-300';

    if (certificate.certificate_url) {
        return (
            <a
                href={certificate.certificate_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${sharedClass} hover:bg-slate-50/80 -mx-4 px-4 rounded-sm`}
                aria-label={`View certificate: ${certificate.title}`}
            >
                {content}
            </a>
        );
    }

    return <div className={`${sharedClass} cursor-default`}>{content}</div>;
}
