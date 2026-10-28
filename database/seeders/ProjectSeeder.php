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
        DB::table('projects')->delete();

        DB::table('projects')->insert([
            [
                'title' => 'SACCO — Savings and Credit Cooperative Organization',
                'slug' => 'sacco',
                'category' => 'Fintech',
                'short_description' => 'A democratic financial institution owned and run entirely by its members.',
                'description' => 'SACCO Management system makes users manage their finance, done with a single fast, reliable system built with Springboot, react and postgresql.',
                'problem' => 'Savings and credit cooperatives traditionally rely on manual record-keeping, paper-based transactions, and fragmented spreadsheets. This leads to errors in member accounts, delayed loan processing, and difficulty generating financial reports — limiting the cooperative\'s ability to serve its members efficiently.',
                'solution' => 'A centralised web-based management system that digitises member registration, savings tracking, loan applications, and repayment schedules. The platform provides real-time dashboards for administrators and transparent account views for members, replacing manual workflows with automated, auditable processes.',
                'my_role' => 'Led full-stack development — designed the relational database schema, implemented the Spring Boot REST API layer, built the React frontend with role-based access control, and integrated PostgreSQL for reliable financial data storage.',
                'highlights' => json_encode([
                    'Member registration and profile management',
                    'Savings deposit and withdrawal tracking',
                    'Loan application and approval workflow',
                    'Repayment schedule management',
                    'Role-based access control (admin, member)',
                    'Financial reporting dashboard',
                ]),
                'architecture_notes' => 'React SPA communicating with a Spring Boot REST API. PostgreSQL handles transactional financial data with foreign-key constraints ensuring referential integrity. JWT-based authentication secures all endpoints.',
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
                'problem' => 'Ethiopian agricultural producers often struggle to reach buyers directly, relying on intermediaries who take large margins. There is no centralised digital platform where farmers can list products, negotiate prices, and manage orders — resulting in inefficient trade and reduced farmer income.',
                'solution' => 'A digital marketplace that connects farmers directly with buyers through organised product listings, real-time messaging, and structured deal management. The platform streamlines the entire trade flow from listing to order confirmation, reducing dependency on middlemen.',
                'my_role' => 'Designed and developed the full application — Laravel backend with Inertia.js for server-driven routing, React/TypeScript frontend, MySQL database schema, and the complete product listing and order management workflow.',
                'highlights' => json_encode([
                    'Product listing with categories and pricing',
                    'Buyer-seller messaging system',
                    'Order negotiation and deal tracking',
                    'Search and filter by crop type and region',
                    'User authentication and profile management',
                    'Responsive design for mobile access',
                ]),
                'architecture_notes' => 'Laravel monolith with Inertia.js providing SPA-like navigation without a separate API layer. React/TypeScript frontend with Tailwind CSS. MySQL database with Eloquent ORM for product, user, and order models.',
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
                'problem' => 'Traditional Oromo food recipes are passed down orally and risk being lost as younger generations urbanise. There is no organised digital resource where people can discover, learn, and preserve these culturally significant recipes by region.',
                'solution' => 'A web platform that catalogues Oromo traditional foods organised by region, with step-by-step recipes, ingredient lists, and cultural context. Users can browse, search, and learn cooking procedures through a clean, accessible interface.',
                'my_role' => 'Built the full application from concept to deployment — designed the database schema for recipe and region management, implemented the Node.js backend API, and developed the React/TypeScript frontend with responsive layouts.',
                'highlights' => json_encode([
                    'Recipe catalogue organised by region',
                    'Step-by-step cooking procedures',
                    'Ingredient lists with quantities',
                    'Search and filter by food type and region',
                    'Cultural context and food history',
                    'Mobile-responsive design',
                ]),
                'architecture_notes' => 'React/TypeScript frontend deployed on Vercel, communicating with a Node.js backend API. MySQL database stores recipe, region, and ingredient data with relational mappings.',
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
                'problem' => 'Small and growing businesses often manage invoicing, inventory, and client records across disconnected spreadsheets and manual processes. This creates data inconsistency, duplicated effort, and difficulty tracking business performance.',
                'solution' => 'A unified back-office dashboard that consolidates invoicing, inventory tracking, and client relationship management into a single application with role-based access control and automated reporting.',
                'my_role' => 'Developed the full-stack application — designed the database schema for multi-module business data, built the Laravel backend with role-based middleware, and implemented the frontend dashboard with Tailwind CSS.',
                'highlights' => json_encode([
                    'Invoice generation and tracking',
                    'Inventory management with stock alerts',
                    'Client relationship management',
                    'Role-based access control',
                    'Business reporting dashboard',
                    'Export functionality for records',
                ]),
                'architecture_notes' => 'Laravel MVC application with Blade/Tailwind CSS frontend. MySQL database with separate tables for invoices, inventory items, clients, and user roles. Middleware handles authorization per module.',
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
