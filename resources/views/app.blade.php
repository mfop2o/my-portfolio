<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
            rel="stylesheet"
        >
        <script>
            (function() {
                var t = localStorage.getItem('portfolio-theme');
                var d = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
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
