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
        DB::table('experiences')->delete();

        DB::table('experiences')->insert([
            [
                'company' => 'Ethio Innovation Software Development PLC',
                'position' => 'Full-Stack Software Developer',
                'description' => 'Built and improved web products using Laravel, React, and MySQL, with a focus on clean delivery and maintainable systems.',
                'highlights' => json_encode([
                    'Developed full-stack features across frontend, backend, and database layers.',
                    'Built responsive interfaces and API workflows for production use.',
                    'Worked with teams to plan, ship, and improve features efficiently.',
                ]),
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
                'description' => 'Delivered client web solutions from planning through deployment, with a strong focus on usability and business needs.',
                'highlights' => json_encode([
                    'Built business websites and internal tools for clients.',
                    'Designed database and backend logic with Laravel and PHP.',
                    'Worked closely with clients to refine requirements and ship updates.',
                ]),
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
