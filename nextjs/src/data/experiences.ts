import type { Experience } from '@/types/experience';

/**
 * Work history shown in the experience timeline.
 *
 * Only record roles you actually held.
 */
export const EXPERIENCES: Experience[] = [
    {
        "id": 3,
        "company": "Ethio Innovation Software Development PLC",
        "position": "Full-Stack Software Developer",
        "description": "Building and maintaining full-stack web applications — Laravel backends, React frontends and MySQL databases — while collaborating with teams to ship features that solve real problems.",
        "highlights": [
            "Developed and maintained full-stack web applications using Laravel and React",
            "Implemented backend functionality and REST API endpoints",
            "Designed and integrated relational database schemas with MySQL",
            "Built responsive user interfaces with TypeScript and Tailwind CSS",
            "Collaborated with cross-functional teams on feature planning and delivery"
        ],
        "technologies": [
            "Laravel",
            "React",
            "TypeScript",
            "MySQL",
            "Inertia"
        ],
        "start_date": "2026-05-11T00:00:00.000000Z",
        "end_date": null,
        "current": true,
        "sort_order": 1,
        "period": "May 2026 — Present"
    },
    {
        "id": 4,
        "company": "Faris Technologies",
        "position": "Fullstack Software Developer",
        "description": "Designed and developed complete web solutions for clients, from requirement gathering and database design through to deployment and support.",
        "highlights": [
            "Designed and developed complete web solutions from requirements to deployment",
            "Built client-facing websites and internal business tools",
            "Implemented database schemas and server-side logic with Laravel and PHP",
            "Managed client communication and iterative feedback cycles"
        ],
        "technologies": [
            "Laravel",
            "PHP",
            "MySQL",
            "JavaScript"
        ],
        "start_date": "2025-10-01T00:00:00.000000Z",
        "end_date": "2026-05-11T00:00:00.000000Z",
        "current": false,
        "sort_order": 2,
        "period": "Oct 2025 — May 2026"
    }
];
