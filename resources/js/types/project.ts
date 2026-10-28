export interface Project {
    id: number;
    title: string;
    slug: string;
    category: string;
    short_description: string;
    description: string | null;
    /** The problem or need this project addresses. */
    problem: string | null;
    /** How the application solves the problem. */
    solution: string | null;
    /** Your personal contribution and responsibilities on the project. */
    my_role: string | null;
    /** Key implemented features as bullet points. */
    highlights: string[] | null;
    /** Notes about frontend/backend/database architecture. */
    architecture_notes: string | null;
    technologies: string[] | null;
    image: string | null;
    github_url: string | null;
    live_url: string | null;
    featured: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}
