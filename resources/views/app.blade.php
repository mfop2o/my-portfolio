<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#0b1220">
        <meta name="color-scheme" content="light dark">
        <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
        <link rel="icon" href="{{ asset('favicon.ico') }}" sizes="32x32">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
            rel="stylesheet"
        >
        <script>
            (function() {
                var t = localStorage.getItem('portfolio-theme');
                var d = t === 'dark' || t !== 'light';
                if (d) document.documentElement.classList.add('dark');
            })();
        </script>
        @inertiaHead
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
