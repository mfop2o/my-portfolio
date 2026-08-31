<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Seed the services table.
     *
     * The `icon` value is a keyword the frontend maps to an inline SVG icon.
     */
    public function run(): void
    {
        DB::table('services')->insert([
            [
                'title' => 'Full-Stack Development',
                'description' => 'End-to-end product development across the stack — frontend, backend, database and deployment.',
                'icon' => 'layers',
                'sort_order' => 1,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Web Application Development',
                'description' => 'Fast, maintainable web applications with modern React frontends and solid Laravel backends.',
                'icon' => 'browser',
                'sort_order' => 2,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Business Systems',
                'description' => 'Management, administration and operations systems built around real workflows.',
                'icon' => 'briefcase',
                'sort_order' => 3,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'API Development',
                'description' => 'Clean, documented APIs that are secure, tested and easy to consume.',
                'icon' => 'code',
                'sort_order' => 4,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'UI Implementation',
                'description' => 'Pixel-conscious interfaces from design files, with accessible, responsive detail.',
                'icon' => 'cursor',
                'sort_order' => 5,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Database Design',
                'description' => 'Normalised schemas, sensible indexes and queries that stay fast as data grows.',
                'icon' => 'database',
                'sort_order' => 6,
                'active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
