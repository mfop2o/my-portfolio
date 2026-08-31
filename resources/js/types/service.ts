export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string | null;
    sort_order: number;
    active: boolean;
    created_at: string;
    updated_at: string;
}
