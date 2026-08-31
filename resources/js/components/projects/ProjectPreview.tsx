import type { Project } from '@/types/project';

interface ProjectPreviewProps {
    project: Project;
}

const THEMES: [string, string, string][] = [
    ['#1d4ed8', '#06b6d4', '135deg'],
    ['#2563eb', '#0ea5e9', '145deg'],
    ['#0e7490', '#2563eb', '125deg'],
    ['#0b1120', '#2563eb', '150deg'],
    ['#1e40af', '#22d3ee', '130deg'],
    ['#0f172a', '#06b6d4', '140deg'],
];

function hashString(value: string): number {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
        hash = (hash << 5) - hash + value.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

function initials(title: string): string {
    return title.split(/[\s–—-]+/).filter(Boolean).slice(0, 2)
        .map((w) => w[0]?.toUpperCase() ?? '').join('');
}

export default function ProjectPreview({ project }: ProjectPreviewProps) {
    const theme = THEMES[hashString(project.slug) % THEMES.length];

    return (
        <div className="group/preview relative">
            {/* Glow ring on hover */}
            <div className="absolute -inset-px rounded-sm bg-gradient-to-r from-electric-500/30 to-cyan-400/30 opacity-0 blur-sm transition-opacity duration-500 group-hover/preview:opacity-100" />

            <div className="relative overflow-hidden border border-white/10 bg-midnight-800 shadow-[0_32px_80px_-32px_rgba(2,6,23,0.95)] transition-transform duration-500 group-hover/preview:-translate-y-1.5">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-white/6 bg-midnight-900/70 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/40" />
                    <div className="ml-3 flex-1 truncate rounded border border-white/8 bg-midnight-950/60 px-3 py-1 text-[10px] text-slate-500">
                        /projects/{project.slug}
                    </div>
                    <span className="hidden rounded bg-white/6 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-slate-500 sm:block">
                        {project.category}
                    </span>
                </div>

                {/* Preview body */}
                {project.image ? (
                    <div className="aspect-[16/10] overflow-hidden">
                        <img
                            src={project.image}
                            alt={`Screenshot of ${project.title}`}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.04]"
                        />
                    </div>
                ) : (
                    <div
                        className="relative aspect-[16/10] overflow-hidden"
                        style={{ background: `linear-gradient(${theme[2]}, ${theme[0]} 0%, ${theme[1]} 120%)` }}
                    >
                        {/* Grid overlay */}
                        <div
                            aria-hidden
                            className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_80%_at_30%_20%,black,transparent)]"
                        />
                        {/* Ghost initials */}
                        <span
                            aria-hidden
                            className="absolute -right-4 top-1/2 -translate-y-1/2 select-none font-display text-[8rem] font-bold leading-none text-white/8 sm:text-[11rem] lg:text-[13rem]"
                        >
                            {initials(project.title)}
                        </span>

                        {/* Dashboard card overlay */}
                        <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
                            <div className="border border-white/12 bg-midnight-950/75 p-4 backdrop-blur-sm sm:p-5">
                                <div className="flex items-end justify-between gap-4">
                                    <div className="min-w-0">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                                            {project.category}
                                        </p>
                                        <p className="mt-1.5 truncate font-display text-sm font-semibold tracking-tight text-white sm:text-lg">
                                            {project.title}
                                        </p>
                                    </div>
                                    <div className="hidden shrink-0 space-y-2 sm:block w-1/3">
                                        <div className="h-1.5 w-full rounded-full bg-white/20" />
                                        <div className="h-1.5 w-4/5 rounded-full bg-white/12" />
                                        <div className="h-1.5 w-3/5 rounded-full bg-white/8" />
                                    </div>
                                </div>
                                {/* Progress bar */}
                                <div className="mt-3 h-0.5 overflow-hidden rounded-full bg-white/10">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-electric-400 to-cyan-400"
                                        style={{ width: `${40 + (hashString(project.slug) % 50)}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
