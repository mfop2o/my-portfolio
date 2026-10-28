<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Portfolio identity
    |--------------------------------------------------------------------------
    |
    | Everything personal lives in this single configuration file so the
    | portfolio can be personalised without touching React components.
    |
    | Replace the placeholder values below with your own information.
    |
    */

    'name' => env('PORTFOLIO_NAME', 'Bontu Dereje'),

    'monogram' => env('PORTFOLIO_MONOGRAM', 'BD'),

    'title' => 'Full-Stack Software Developer',

    /*
    | Short tagline used for SEO / meta descriptions.
    */
    'tagline' => "Full-stack software developer building scalable backend systems, modern web apps, and clean digital products.",

    /*
    | Longer introduction used in the About section.
    */
    'about' => "Full-stack software developer with a Computer Science degree from Addis Ababa University. I design APIs, model databases, and build fast, responsive user interfaces that deliver real business value.",

    /*
    | The one-line value statement shown at the top of the About section.
    */
    'headline' => 'Turning complex problems into clean, reliable, and scalable software.',

    /*
    | Highlights shown in the About section.
    */
    'focus' => [
        'Full-Stack Development',
        'Backend Engineering',
        'Frontend Engineering',
        'Database Design',
        'REST APIs',
        'Clean Architecture',
    ],

    /*
    | Years of professional experience. Keep accurate — do not inflate.
    */
    'experience_years' => '1+',

    /*
    |--------------------------------------------------------------------------
    | Education
    |--------------------------------------------------------------------------
    |
    | Only record credentials you actually hold. Rendered as a dedicated
    | Education section and inside the career timeline.
    |
    */
    'education' => [
        'institution' => 'Addis Ababa University',
        'degree' => "Bachelor's degree in Computer Science",
        'graduated' => 'June 2025',
        'location' => 'Addis Ababa, Ethiopia',
    ],

    'email' => env('PORTFOLIO_EMAIL', 'hello@example.com'),

    'location' => 'Addis Ababa, Ethiopia',

    /*
    | Availability label shown as a status badge.
    */
    'availability' => 'Open to full-time & freelance opportunities',

    /*
    | Phone / WhatsApp number shown in the contact section.
    */
    'phone' => env('PORTFOLIO_PHONE', '+251 900 000 000'),

    /*
    | Path to your profile photo. Drop your photo at public/images/profile.jpg
    | and set this value — the hero renders your initials until then.
    */
    'avatar' => env('PORTFOLIO_AVATAR', '/images/hero.png'),

    /*
    | Path to the CV file inside the public directory.
    | Drop your real CV at public/documents/cv.pdf when ready.
    */
    'cv_path' => '/documents/cv.pdf',

    'socials' => [
        'github' => env('PORTFOLIO_GITHUB', 'https://github.com/your-username'),
        'linkedin' => env('PORTFOLIO_LINKEDIN', 'https://www.linkedin.com/in/your-username'),
    ],

];
