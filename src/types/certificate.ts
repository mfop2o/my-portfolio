export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    description: string | null;
    image: string | null;
    certificate_url: string | null;
    year: number | null;
    sort_order: number;
    created_at: string;
    updated_at: string;
}
