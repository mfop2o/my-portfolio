<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CertificateSeeder extends Seeder
{
    /**
     * Seed the certificates table.
     *
     * NOTE: EDITABLE PLACEHOLDERS. Replace with your real certificates and
     * achievements — or leave the table empty to render a minimal section.
     * Do not claim awards or certifications you do not hold.
     */
    public function run(): void
    {
        DB::table('certificates')->insert([
            [
                'title' => 'Your First Certification',
                'issuer' => 'Your Issuer Here',
                'description' => 'Replace this placeholder with a short description of what the certificate covers.',
                'image' => null,
                'certificate_url' => 'https://example.com/certificate',
                'year' => 2025,
                'sort_order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Your Second Certification',
                'issuer' => 'Your Issuer Here',
                'description' => 'Replace this placeholder with a short description of what the certificate covers.',
                'image' => null,
                'certificate_url' => 'https://example.com/certificate',
                'year' => 2024,
                'sort_order' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
