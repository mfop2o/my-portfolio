import type { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';
import Glow from '@/components/background/Glow';
import DecorativeCircle from '@/components/background/DecorativeCircle';

export default function HeroVisual() {
    const { site } = usePage<PageProps>().props;

    return (
        <div className="relative mx-auto w-full max-w-[300px]" aria-hidden>
            {/* Ambient layers */}
            <Glow color="both" opacity={0.14} className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size="420px" />
            <DecorativeCircle size={380} className="-left-10 -top-10 animate-float-slow" />
            <DecorativeCircle size={460} className="-bottom-24 -right-16 opacity-50" />
            <DecorativeCircle size={14} className="left-6 top-6 border-cyan-400/60" />
            <DecorativeCircle size={8} className="right-8 bottom-12 border-electric-400/50" />

            {/* Portrait */}
            <div className="relative z-10 aspect-square w-full">
                {/* Rotating dashed ring */}
                <div
                    aria-hidden
                    className="absolute -inset-5 rounded-full border border-dashed border-white/15 animate-spin-slow"
                    style={{ animationDuration: '60s' }}
                />

                {/* Gradient halo */}
                <div
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,#2563eb,#22d3ee,#2563eb)] opacity-30 blur-2xl"
                />

                {/* Gradient ring + portrait surface */}
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,#2563eb80,#22d3ee80,#67e8f97f,#2563eb80)] p-[3px] shadow-[0_24px_64px_-16px_rgba(2,6,23,0.8)]">
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-midnight-850">
                        {/* Inner sheen */}
                        <div
                            aria-hidden
                            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_22%,rgba(37,99,235,0.28),transparent_55%),radial-gradient(circle_at_72%_78%,rgba(6,182,212,0.18),transparent_55%)]"
                        />
                        {/* Photo / placeholder */}
                        <div className="relative grid h-full w-full place-items-center">
                            <span className="bg-clip-text font-display text-[4.5rem] font-bold leading-none tracking-tight text-transparent bg-gradient-to-br from-electric-200 via-white to-cyan-300 sm:text-[5rem]">
                                {site.monogram}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Availability indicator */}
                <div className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-midnight-900/90 backdrop-blur">
                    <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                    </span>
                </div>
            </div>

            {/* Floating badges */}
            <div className="absolute left-0 -top-6 z-20 flex items-center gap-2.5 border border-white/10 bg-midnight-850/90 px-4 py-2 shadow-[0_16px_48px_-16px_rgba(2,6,23,0.9)] backdrop-blur-md animate-float sm:left-8">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">{site.title}</span>
            </div>
            <div className="absolute -bottom-5 right-0 z-20 flex items-center gap-2.5 border border-white/10 bg-midnight-850/90 px-4 py-2 shadow-[0_16px_48px_-16px_rgba(2,6,23,0.9)] backdrop-blur-md animate-float-slow sm:right-8">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-electric-400" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200">{site.location}</span>
            </div>
        </div>
    );
}