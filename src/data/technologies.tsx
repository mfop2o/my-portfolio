'use client';

import {
    Atom,
    Boxes,
    Braces,
    Brain,
    Cloud,
    Code2,
    Coffee,
    Container,
    Database,
    FileCode2,
    GitBranch,
    Leaf,
    MonitorSmartphone,
    MoveRight,
    Network,
    Palette,
    ServerCog,
    ShieldCheck,
    Sparkles,
    TableProperties,
    Terminal,
    Workflow,
    Zap,
    type LucideIcon,
} from 'lucide-react';

export interface TechItem {
    name: string;
    icon: LucideIcon;
}

export interface TechGroup {
    id: string;
    label: string;
    icon: LucideIcon;
    items: TechItem[];
}

export const TECH_GROUPS: TechGroup[] = [
    {
        id: 'frontend',
        label: 'Frontend Development',
        icon: MonitorSmartphone,
        items: [
            { name: 'React', icon: Atom },
            { name: 'JavaScript', icon: Braces },
            { name: 'TypeScript', icon: FileCode2 },
            { name: 'Next.js', icon: Zap },
            { name: 'Tailwind CSS', icon: Palette },
            { name: 'Inertia.js', icon: MoveRight },
        ],
    },
    {
        id: 'backend',
        label: 'Backend Development',
        icon: ServerCog,
        items: [
            { name: 'Laravel', icon: Leaf },
            { name: 'PHP', icon: Code2 },
            { name: 'Spring Boot', icon: Coffee },
            { name: 'Django', icon: ShieldCheck },
            { name: 'Python', icon: Terminal },
            { name: 'Node.js', icon: Boxes },
        ],
    },
    {
        id: 'database',
        label: 'Databases & Data',
        icon: Database,
        items: [
            { name: 'MySQL', icon: Database },
            { name: 'PostgreSQL', icon: TableProperties },
            { name: 'Supabase', icon: Cloud },
        ],
    },
    {
        id: 'tools',
        label: 'DevOps & Tools',
        icon: Workflow,
        items: [
            { name: 'Git', icon: GitBranch },
            { name: 'GitHub', icon: GitBranch },
            { name: 'Docker', icon: Container },
            { name: 'REST APIs', icon: Network },
            { name: 'Vite', icon: Zap },
        ],
    },
    {
        id: 'ai',
        label: 'AI & Emerging Tech',
        icon: Brain,
        items: [
            { name: 'AI API Integration', icon: Sparkles },
            { name: 'Intelligent Recommendations', icon: Brain },
            { name: 'Generative AI', icon: Sparkles },
            { name: 'Agent Workflows', icon: Workflow },
        ],
    },
];

export const ALL_TECHNOLOGIES = TECH_GROUPS.flatMap((group) => group.items);
export const TECHNOLOGY_COUNT = ALL_TECHNOLOGIES.length;

/** Technologies shown in the hero marquee / credibility strip. */
export const MARQUEE_TECHNOLOGIES = ['React', 'TypeScript', 'Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'Inertia.js', 'Vite'] as const;