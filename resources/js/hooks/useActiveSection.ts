import { useEffect, useState } from 'react';

const SECTION_IDS = ['about', 'experience', 'services', 'projects', 'certificates', 'contact'] as const;

export type SectionId = (typeof SECTION_IDS)[number];

/**
 * Tracks which section is currently in view so the navbar can highlight it.
 */
export function useActiveSection(): SectionId | null {
    const [active, setActive] = useState<SectionId | null>(null);

    useEffect(() => {
        const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
            (el): el is HTMLElement => el !== null,
        );

        if (sections.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id as SectionId);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px' },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return active;
}
