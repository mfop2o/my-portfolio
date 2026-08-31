import type { Service } from '@/types/service';
import Reveal from '@/components/ui/Reveal';
import { ArrowIcon, ServiceIcon } from '@/components/ui/icons';

interface ServiceCardProps {
    service: Service;
    index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <Reveal delay={(index % 3) * 80} className="h-full">
            <div className="group relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white p-7 shadow-[0_1px_4px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_24px_56px_-20px_rgba(6,182,212,0.35)] sm:p-8 dark:border-slate-500/15 dark:bg-midnight-850 dark:shadow-none dark:hover:border-cyan-400/50">

                {/* Ghost number */}
                <span
                    aria-hidden
                    className="absolute -right-1 -top-2 font-display text-6xl font-bold text-stroke leading-none opacity-40 transition-opacity duration-300 group-hover:opacity-60 sm:text-7xl"
                >
                    {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="relative z-10">
                    <span className="inline-grid h-12 w-12 place-items-center border border-slate-200 bg-slate-50 text-electric-600 shadow-[inset_0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 group-hover:border-cyan-400/60 group-hover:bg-cyan-50/70 group-hover:text-cyan-600 group-hover:shadow-[0_0_16px_-4px_rgba(6,182,212,0.4)] dark:border-slate-500/30 dark:bg-midnight-900 dark:text-electric-300 dark:group-hover:border-cyan-400/60 dark:group-hover:text-cyan-300">
                        <ServiceIcon name={service.icon} />
                    </span>
                </div>

                {/* Content */}
                <h3 className="relative z-10 mt-7 font-display text-xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-950 sm:text-2xl dark:text-white dark:group-hover:text-cyan-300">
                    {service.title}
                </h3>
                <p className="relative z-10 mt-3 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {service.description}
                </p>

                {/* Footer link */}
                <span className="relative z-10 mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 transition-all duration-300 group-hover:gap-3 group-hover:text-cyan-600 dark:text-slate-500 dark:group-hover:text-cyan-300">
                    Explore
                    <ArrowIcon />
                </span>

                {/* Bottom gradient bar */}
                <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-electric-500 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100"
                />

                {/* Top-left corner accent */}
                <span
                    aria-hidden
                    className="absolute left-0 top-0 h-8 w-0.5 bg-gradient-to-b from-cyan-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
            </div>
        </Reveal>
    );
}
