import type { Project } from '@/types/project';

interface ProjectPreviewProps {
    project: Project;
    /** Hide the caption bar when the preview is used inside a card that already shows the title. */
    caption?: boolean;
}

export const THEMES: [string, string, string][] = [
    ['#1d4ed8', '#38bdf8', '135deg'],
    ['#2563eb', '#0ea5e9', '145deg'],
    ['#0e7490', '#2563eb', '125deg'],
    ['#0b1220', '#2563eb', '150deg'],
    ['#1e40af', '#38bdf8', '130deg'],
    ['#0f172a', '#0ea5e9', '140deg'],
];

export function hashString(value: string): number {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
        hash = (hash << 5) - hash + value.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

export function initials(title: string): string {
    return title
        .split(/[\s–—-]+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase() ?? '')
        .join('');
}

/**
 * Project media.
 *
 * Renders the real screenshot when one exists; otherwise a deterministic
 * gradient built from the slug so a project never shows a blank box.
 */
export default function ProjectPreview({ project, caption = true }: ProjectPreviewProps) {
    if (project.image) {
        return (
            <div className="relative aspect-[16/9.5] overflow-hidden">
                <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
            </div>
        );
    }

    const theme = THEMES[hashString(project.slug) % THEMES.length];

    return (
        <div
            className="relative aspect-[16/9.5] overflow-hidden"
            style={{ background: `linear-gradient(${theme[2]}, ${theme[0]} 0%, ${theme[1]} 120%)` }}
        >
            <div
                aria-hidden
                className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_80%_at_30%_20%,black,transparent)]"
            />
            <span
                aria-hidden
                className="absolute -right-4 top-1/2 -translate-y-1/2 select-none font-display text-[8rem] font-bold leading-none text-white/10 sm:text-[11rem]"
            >
                {initials(project.title)}
            </span>

            {caption && (
                <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-midnight-950/55 px-5 py-4 backdrop-blur-sm">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
                        {project.category}
                    </p>
                    <p className="mt-1 truncate font-display text-sm font-semibold tracking-tight text-white sm:text-base">
                        {project.title}
                    </p>
                </div>
            )}
        </div>
    );
}
