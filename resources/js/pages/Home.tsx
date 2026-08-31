import type { PageProps } from '@/types';
import type { Project } from '@/types/project';
import type { Experience as ExperienceRecord } from '@/types/experience';
import type { Service } from '@/types/service';
import type { Certificate } from '@/types/certificate';
import type { ReactNode } from 'react';
import { Head, usePage, type ResolvedComponent } from '@inertiajs/react';
import PortfolioLayout from '@/layouts/PortfolioLayout';
import Hero from '@/components/hero/Hero';
import Marquee from '@/components/ui/Marquee';
import About from '@/components/about/About';
import Experience from '@/components/experience/Experience';
import Services from '@/components/services/Services';
import Projects from '@/components/projects/Projects';
import Certificates from '@/components/certificates/Certificates';
import WorkProcess from '@/components/process/WorkProcess';
import Contact from '@/components/contact/Contact';
import FinalCta from '@/components/footer/FinalCta';

interface HomeProps extends PageProps {
    projects: Project[];
    experiences: ExperienceRecord[];
    services: Service[];
    certificates: Certificate[];
}

const TECH = ['Laravel', 'React', 'TypeScript', 'Inertia', 'MySQL', 'Tailwind CSS', 'PHP', 'Vite'];

const Home: ResolvedComponent = ({ projects, experiences, services, certificates }: HomeProps) => {
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

            <Hero />
            <Marquee items={TECH} dark />
            <About projectCount={projects.length} />
            <Experience experiences={experiences} />
            <Services services={services} />
            <Projects projects={projects} />
            <Certificates certificates={certificates} />
            <WorkProcess />
            <Contact />
            <FinalCta />
        </>
    );
};

Home.layout = (page: ReactNode) => <PortfolioLayout>{page}</PortfolioLayout>;

export default Home;
