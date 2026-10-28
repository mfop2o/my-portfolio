import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import PortfolioLayout from '@/layouts/PortfolioLayout';
import { site, siteUrl } from '@/data/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
});

const title = `${site.name} — ${site.title}`;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    'Full-Stack Developer',
    'Software Developer',
    'React',
    'Laravel',
    'TypeScript',
    site.location,
    site.name,
  ],
  openGraph: {
    type: 'website',
    siteName: `${site.name} — ${site.title}`,
    title,
    description: site.tagline,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1220',
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${jakarta.variable} ${grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Apply the stored theme before first paint so there is no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t!=="light")document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <PortfolioLayout>{children}</PortfolioLayout>
      </body>
    </html>
  );
}
