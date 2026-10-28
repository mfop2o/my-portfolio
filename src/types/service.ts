export interface Service {
    id: number;
    title: string;
    description: string;
    /** Keyword the frontend maps to an inline SVG icon. */
    icon: string | null;
    sort_order: number;
    active: boolean;
}
