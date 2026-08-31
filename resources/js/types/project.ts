export interface Project {
    id: number;
    title: string;
    slug: string;
    category: string;
    short_description: string;
    description: string | null;
    technologies: string[] | null;
    image: string | null;
    github_url: string | null;
    live_url: string | null;
    featured: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}
