export interface Experience {
    id: number;
    company: string;
    position: string;
    description: string | null;
    /** Key achievements / responsibilities as bullet points. */
    highlights: string[] | null;
    technologies: string[] | null;
    start_date: string;
    end_date: string | null;
    current: boolean;
    sort_order: number;
    /** Human-readable date range, e.g. "Mar 2025 — Present". */
    period: string;
}
