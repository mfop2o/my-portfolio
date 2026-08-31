<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Seed the projects table.
     *
     * NOTE: The entries below are EDITABLE PLACEHOLDERS based on typical
     * full-stack work. Replace them with your real projects — including real
     * titles, URLs and screenshots — before going live.
     *
     * The `image` column can point to a screenshot in /public (e.g.
     * /images/projects/ubgds.png). When it is null, the frontend renders a
     * styled preview generated from the project itself.
     */
    public function run(): void
    {
        DB::table('projects')->insert([
            [
                'title' => 'SACCO — Savings and Credit Cooperative Organization',
                'slug' => 'sacco',
                'category' => 'Fintech',
                'short_description' => 'A democratic financial institution owned and run entirely by its members.',
                'description' => 'SACCO Management system makes users manage their finance, done with a single fast, reliable system built with Springboot, react and postgresql.',
                'technologies' => json_encode(['Spring Boot', 'React', 'PostgreSQL']),
                'image' => '/images/projects/sacco.png',
                'github_url' => 'https://github.com/mfop2o/sacco-management-system',
                'live_url' => 'https://sacco.lovestoblog.com/login',
                'featured' => true,
                'sort_order' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Agribridge',
                'slug' => 'agribridge',
                'category' => 'Business System',
                'short_description' => 'A platform connecting farmers to buyers, with listings, messaging and deal management.',
                'description' => 'Agribridge closes the gap between producers and buyers. The platform handles product listings, negotiation and order flow, with a clean React interface and a Laravel API built for scale.',
                'technologies' => json_encode(['Laravel', 'React', 'TypeScript', 'MySQL', 'Inertia']),
                'image' => '/images/projects/agribridge.png',
                'github_url' => 'https://github.com/mfop2o/agribridge',
                'live_url' => 'https://bontu.lovestoblog.com/login',
                'featured' => true,
                'sort_order' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Oromo Traditional Food Hub',
                'slug' => 'oromo-traditional-food',
                'category' => 'Web Platform',
                'short_description' => 'This platform makes users learn oromo traditional foods procedure by using the recipes on this platform.',
                'description' => 'This platform manages, organizes and promotes different oromo traditional foods by regions with its respective recipes.',
                'technologies' => json_encode(['React', 'TypeScript', 'MySQL', 'nodejs']),
                'image' => '/images/projects/oromofood.png',
                'github_url' => 'https://github.com/mfop2o/finaloromofood',
                'live_url' => 'https://finaloromofoodafter.vercel.app/',
                'featured' => true,
                'sort_order' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Business Management Suite',
                'slug' => 'business-management-suite',
                'category' => 'Business System',
                'short_description' => 'A modular suite for invoicing, inventory and client management in a single dashboard.',
                'description' => 'A modular back-office system covering invoicing, inventory and client relationships. Built with role-based access and clean reporting so growing teams can run operations without spreadsheet sprawl.',
                'technologies' => json_encode(['Laravel', 'PHP', 'MySQL', 'Tailwind CSS']),
                'image' => null,
                'github_url' => 'https://github.com/your-username/business-suite',
                'live_url' => null,
                'featured' => true,
                'sort_order' => 4,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
