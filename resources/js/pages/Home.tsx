import type { PageProps } from '@/types';
import type { Experience as ExperienceRecord } from '@/types/experience';
import type { Project } from '@/types/project';
import type { ReactNode } from 'react';
import { Head, usePage, type ResolvedComponent } from '@inertiajs/react';
import PortfolioLayout from '@/layouts/PortfolioLayout';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import ExperienceSection from '@/components/experience/Experience';
import Contact from '@/components/contact/Contact';

interface HomeProps extends PageProps {
    projects: Project[];
    experiences: ExperienceRecord[];
}

const Home: ResolvedComponent = ({ projects, experiences }: HomeProps) => {
    const { site } = usePage<PageProps>().props;
    const canonical =
        typeof window !== 'undefined' ? window.location.origin + window.location.pathname : undefined;

    return (
        <>
            <Head>
                <title>{`${site.name} — ${site.title}`}</title>
                <meta name="description" content={site.tagline} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${site.name} — ${site.title}`} />
                <meta property="og:description" content={site.tagline} />
                {canonical && <link rel="canonical" href={canonical} />}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={`${site.name} — ${site.title}`} />
                <meta name="twitter:description" content={site.tagline} />
            </Head>

            <Hero experiences={experiences} />
            <About />
            <Skills />
            <Projects projects={projects} />
            <ExperienceSection experiences={experiences} />
            <Contact />
        </>
    );
};

Home.layout = (page: ReactNode) => <PortfolioLayout>{page}</PortfolioLayout>;

export default Home;
