<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExperienceSeeder extends Seeder
{
    /**
     * Seed the experiences table.
     *
     * NOTE: EDITABLE PLACEHOLDERS. Replace with your real employment history.
     * Do not fabricate roles, companies or dates.
     *
     * Set `current` to true and leave `end_date` null for the role you hold now.
     */
    public function run(): void
    {
        DB::table('experiences')->insert([
            [
                'company' => 'Ethio Innovation Software Development PLC',
                'position' => 'Full-Stack Software Developer',
                'description' => 'Building and maintaining full-stack web applications — Laravel backends, React frontends and MySQL databases — while collaborating with teams to ship features that solve real problems.',
                'technologies' => json_encode(['Laravel', 'React', 'TypeScript', 'MySQL', 'Inertia']),
                'start_date' => '2026-05-11',
                'end_date' => null,
                'current' => true,
                'sort_order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'company' => 'Faris Technologies',
                'position' => 'Fullstack Software Developer',
                'description' => 'Designed and developed complete web solutions for clients, from requirement gathering and database design through to deployment and support.',
                'technologies' => json_encode(['Laravel', 'PHP', 'MySQL', 'JavaScript']),
                'start_date' => '2025-10-01',
                'end_date' => '2026-05-11',
                'current' => false,
                'sort_order' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
