import type { Project } from '@/types';

/**
 * Selected projects shown on the homepage and case-study pages.
 *
 * Static content for the site. Edit this file to change what is displayed.
 * No database or backend required.
 */

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Urban Beautification and Green Development System',
        slug: 'urban-beautification-green-development',
        category: 'Government & Public Services',

        short_description:
            'A centralized digital system for managing urban greenery, beautification activities, and environmental development operations.',

        description:
            'The Urban Beautification and Green Development System (UBGDS) is a web-based management platform designed to digitize and coordinate urban beautification and green development activities. It supports structured management of green assets, development activities, operational workflows, and administrative reporting.',

        problem:
            'Managing urban greenery and beautification activities across multiple administrative levels can involve fragmented records, manual reporting, and limited visibility into operational progress. These challenges make it difficult to coordinate activities, monitor green assets, assign responsibilities, and maintain consistent records.',

        solution:
            'A centralized web-based management system that organizes urban green development operations, administrative structures, green assets, work activities, and reporting. The platform provides a structured digital environment for managing information, coordinating responsibilities, and improving operational visibility.',

        my_role:
            'Contributed to full-stack development using Laravel, React, TypeScript, and Inertia.js. Worked on application interfaces, backend functionality, database integration, and administrative modules to support the digitization of urban beautification and green development workflows.',

        highlights: [
            'Administrative and organizational management',
            'User, role, and permission management',
            'Green asset and development category management',
            'Operational activity and work order management',
            'Cemetery and maintenance-related workflows',
            'Reporting and administrative dashboards',
            'QR-based reporting functionality',
            'Relational database management with MySQL'
        ],

        architecture_notes:
            'A Laravel application with React and TypeScript interfaces connected through Inertia.js. MySQL provides relational data storage, while Laravel manages server-side application logic, database operations, and access control.',

        technologies: [
            'Laravel',
            'React',
            'TypeScript',
            'Inertia.js',
            'MySQL',
            'Tailwind CSS'
        ],

        image: '/images/projects/ubgd.png',
        github_url: 'https://github.com/mfop2o/urban-beautification-green-development',
        live_url: null,

        featured: true,
        sort_order: 1
    },

    {
        id: 2,
        title: 'AI-Powered Digital Lending Platform',
        slug: 'ai-powered-digital-lending',
        category: 'AI & Fintech',

        short_description:
            'A digital lending solution designed to streamline loan applications, financial data processing, and AI-assisted lending decisions.',

        description:
            'The AI-Powered Digital Lending Platform explores how artificial intelligence and modern web technologies can improve digital lending workflows. It combines a React and TypeScript frontend with Django, Spring Boot, and Supabase to support application functionality, backend services, and data management.',

        problem:
            'Traditional lending processes can involve lengthy application procedures, manual document reviews, fragmented financial information, and time-consuming credit assessments. These challenges can make access to financial services more difficult and reduce the efficiency of lending institutions.',

        solution:
            'A digital lending platform designed to organize loan application workflows and support more efficient financial information processing. Its AI-oriented approach can help assess relevant applicant information and provide decision support, while lending approval remains subject to the platform’s implemented rules and review process.',

        my_role:
            'Worked on full-stack development using React, JavaScript, TypeScript, Django, Supabase, and Spring Boot. The project brings together frontend application development, backend services, data integration, and an AI-focused approach to digital financial services.',

        highlights: [
            'Digital loan application workflows',
            'Applicant information management',
            'Financial data integration',
            'Backend services using Django and Spring Boot',
            'Supabase-based data and application integration',
            'AI-oriented lending assessment and decision support',
            'Structured lending information management',
            'Modern, responsive user interfaces'
        ],

        architecture_notes:
            'The frontend uses React and TypeScript. Django and Spring Boot provide backend application services, while Supabase supports data and platform integration. The precise division of responsibilities between the backend services and the AI components depends on the implemented application architecture.',

        technologies: [
            'React',
            'JavaScript',
            'TypeScript',
            'Django',
            'Supabase',
            'Spring Boot'
        ],

        image: '/images/projects/faris.png',
        github_url: 'https://github.com/mfop2o/ai-powered-digital-lending',
        live_url: null,

        featured: true,
        sort_order: 2
    },

    {
        id: 3,
        title: 'Ethio Innovation Software Development Company Website',
        slug: 'ethio-innovation-company-website',
        category: 'Corporate Website',

        short_description:
            'A professional corporate website designed to present a software development company, its services, capabilities, and digital solutions.',

        description:
            'A corporate web platform for Ethio Innovation Software Development Company, built to establish a professional online presence and communicate the company’s technology services, capabilities, and business identity. The application uses Laravel, React, TypeScript, Inertia.js, and MySQL.',

        problem:
            'Technology companies need a professional digital presence to explain their services, communicate their expertise, build credibility, and help prospective customers understand how their solutions address business needs.',

        solution:
            'A responsive corporate website that organizes company information, service offerings, and business content into a clear, accessible interface. Its full-stack architecture supports structured content management and future website enhancements.',

        my_role:
            'Contributed to full-stack website development using Laravel, React, TypeScript, and Inertia.js. Worked across the frontend and backend, integrating application functionality with MySQL and building a maintainable foundation for the company’s digital presence.',

        highlights: [
            'Professional corporate homepage',
            'Company profile and business information',
            'Software development service presentation',
            'Responsive frontend interfaces',
            'Laravel backend integration',
            'Structured content and database management',
            'Component-based React development',
            'TypeScript for maintainable frontend code'
        ],

        architecture_notes:
            'A Laravel application using Inertia.js to connect server-side routing and application logic with React and TypeScript interfaces. MySQL provides persistent relational data storage.',

        technologies: [
            'Laravel',
            'React',
            'TypeScript',
            'Inertia.js',
            'MySQL'
        ],

        image: '/images/projects/eisd.png',
        github_url: 'https://github.com/mfop2o/ethio-innovation-website',
        live_url: null,

        featured: true,
        sort_order: 3
    },

    {
        id: 4,
        title: 'OBM Construction Enterprise Website',
        slug: 'obm-construction-website',
        category: 'Construction & Enterprise',

        short_description:
            'A modern corporate website showcasing a construction enterprise, its services, projects, and business capabilities.',

        description:
            'A corporate website for OBM Construction Enterprise, designed to strengthen its online presence and present its construction services, projects, company profile, and business capabilities. The application is built with Laravel, React, TypeScript, and Inertia.js.',

        problem:
            'Construction companies need a credible digital presence to showcase completed projects, explain their services, communicate their capabilities, and help potential clients understand their experience and business offerings.',

        solution:
            'A modern, responsive corporate website that organizes company information, construction services, project showcases, and contact information into a professional digital experience. The architecture provides a foundation for maintaining business content and extending website functionality.',

        my_role:
            'Worked on full-stack website development using Laravel, React, TypeScript, and Inertia.js. Focused on the website structure, reusable frontend components, responsive interfaces, and integration between the Laravel backend and React-based user experience.',

        highlights: [
            'Professional corporate homepage',
            'Construction services presentation',
            'Project portfolio and showcase',
            'Company profile and business information',
            'Responsive React interfaces',
            'Reusable UI components',
            'Laravel application integration',
            'Contact and business inquiry sections'
        ],

        architecture_notes:
            'A Laravel and Inertia.js application with React and TypeScript powering the user interface. The architecture combines server-side application logic with reusable frontend components and SPA-like navigation.',

        technologies: [
            'Laravel',
            'React',
            'TypeScript',
            'Inertia.js'
        ],

        image: '/images/projects/obm.png',
        github_url: 'https://github.com/mfop2o/obm-construction-website',
        live_url: null,

        featured: true,
        sort_order: 4
    },

    {
        id: 5,
        title: 'AI-Powered Service Intelligence Platform',
        slug: 'ai-powered-service-intelligence',
        category: 'AI & SaaS',

        short_description:
            'An AI-powered platform that helps people discover, compare, and evaluate services through centralized information and intelligent recommendations.',

        description:
            'The AI-Powered Service Intelligence Platform (ASIP) is designed to make service discovery more transparent and convenient. It brings service information, provider profiles, customer feedback, and AI-assisted comparison into a centralized digital platform. Built with Next.js, TypeScript, Django, PostgreSQL, and Docker, the project aims to help users make more informed service-related decisions.',

        problem:
            'Finding reliable service providers can be difficult when information is scattered across different platforms and customer experiences are hard to compare. Individuals may struggle to verify providers, evaluate service quality, and make informed decisions using inconsistent or incomplete information.',

        solution:
            'A centralized service intelligence platform that organizes provider information, customer feedback, and service categories in one place. AI-assisted comparison and recommendations can help users evaluate available options, while provider verification and moderation workflows support information quality and trust.',

        my_role:
            'Worked on the design and development of a full-stack service intelligence platform using Next.js, TypeScript, Django, PostgreSQL, and Docker. The project combines modern frontend development, backend application services, structured data management, and an architecture intended to support AI-assisted service discovery.',

        highlights: [
            'Centralized service and provider discovery',
            'Organized service categories and provider profiles',
            'Customer feedback and service evaluation',
            'AI-assisted service comparison and recommendations',
            'Provider registration and onboarding workflows',
            'Administrative verification and moderation',
            'PostgreSQL relational data management',
            'Docker-based development and deployment configuration'
        ],

        architecture_notes:
            'Next.js and TypeScript power the frontend, while Django provides backend application services. PostgreSQL stores structured application data, and Docker supports containerized development and deployment. AI-assisted recommendations and comparisons can be integrated into the platform’s service discovery workflows.',

        technologies: [
            'Next.js',
            'TypeScript',
            'Django',
            'PostgreSQL',
            'Docker'
        ],

        image: '/images/projects/asip.png',
        github_url: 'https://github.com/injifannoo/service-intelligence-platform',
        live_url: null,

        featured: true,
        sort_order: 5
    },
    {
        id: 6,
        title: 'Ethio Service Connect (EISC)',
        slug: 'ethio-service-connect',
        category: 'Service Marketplace',

        short_description:
            'A service-dispatch marketplace for Ethiopia that connects customers with verified, nearby service providers through a fully tracked request → dispatch → quote → work → review pipeline.',

        description:
            'Ethio Service Connect (EISC) is a full-stack service-dispatch marketplace for Ethiopia that connects customers with verified, nearby service providers (garage/auto repair, electricians, plumbers, carpenters). It replaces informal word-of-mouth with a transparent, auditable, rating-backed workflow covering the complete service lifecycle.',

        problem:
            'Finding licensed, trustworthy repair help in Ethiopia currently relies on phonebooks and word of mouth, with no pricing accountability, verification, or structured channel for emergencies.',

        solution:
            'A fully tracked service-dispatch platform with geo-aware matching, provider verification, role-based workspaces, an audited status history, per-request discussion threads, and a complete request-to-review lifecycle.',

        my_role:
            'Built the full-stack application using Laravel 13, React 19, TypeScript, Inertia 2, and Tailwind CSS 4 with Spatie Permissions, Spatie Activitylog, and comprehensive testing.',

        highlights: [
            'Complete service lifecycle with audited status history and discussion thread',
            'Geo-aware dispatch engine using Haversine distance within coverage radius',
            'Provider verification workflow with document uploads',
            'Role-based workspaces (Super Admin, Admin, Dispatcher, Provider, Customer)',
            'Full admin console for categories, providers, requests, and monitoring',
            'Emergency queue and priority handling',
            'Two-way reviews and ratings',
            '46 tests / 128 assertions covering dispatch flow and admin management'
        ],

        architecture_notes:
            'Laravel 13 backend with PHP 8.3 and MySQL, connected to React 19 and TypeScript via Inertia 2. Uses Spatie Permissions for RBAC, Spatie Activitylog for auditing, custom Eloquent scopes (approved(), available(), nearby()), and a Geo support class for distance calculations.',

        technologies: [
            'Laravel 13',
            'PHP 8.3',
            'MySQL',
            'Inertia 2',
            'React 19',
            'TypeScript',
            'Tailwind CSS 4',
            'Vite 8',
            'Spatie Permissions',
            'Spatie Activitylog'
        ],

        image: '/images/projects/ethio-keep.png',
        github_url: 'https://github.com/mfop2o/ethio-service-connect',
        live_url: null,

        featured: true,
        sort_order: 6
    }
];

export function getProject(slug: string): Project | undefined {
    return PROJECTS.find((project) => project.slug === slug);
}