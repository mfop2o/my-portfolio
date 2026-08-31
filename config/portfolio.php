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
    | The hero headline rendered in large display type. Use \n for line breaks.
    */
    'headline' => "Hi, I'm Bontu.",

    /*
    | Short tagline used directly beneath the headline.
    */
    'tagline' => 'I build modern, scalable digital products and business systems that solve real-world problems.',

    /*
    | Longer introduction used in the About section.
    */
    'about' => 'I design and build full-stack web applications with clean architecture and a strong sense for detail. From database design to polished interfaces, I care about the whole journey of a product — not just one slice of it.',

    /*
    | Highlights shown in the About section.
    */
    'focus' => [
        'Full-Stack Development',
        'Business Systems',
        'Frontend Engineering',
        'Backend Engineering',
        'Database Design',
        'Clean Architecture',
        'User Experience',
        'Problem Solving',
    ],

    /*
    | Years of professional experience. Keep accurate — do not inflate.
    */
    'experience_years' => '1+',

    'email' => env('PORTFOLIO_EMAIL', 'hello@example.com'),

    'location' => 'Addis Ababa, Ethiopia',

    /*
    | Availability label shown as a status badge.
    */
    'availability' => 'Available for selected projects',

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
