import type { Metadata } from 'next';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import ExperienceSection from '@/components/experience/Experience';
import Contact from '@/components/contact/Contact';
import { PROJECTS } from '@/data/projects';
import { EXPERIENCES } from '@/data/experiences';
import { siteUrl } from '@/data/site';

export const metadata: Metadata = {
    alternates: siteUrl ? { canonical: '/' } : undefined,
};

export default function HomePage() {
    return (
        <>
            <Hero experiences={EXPERIENCES} />
            <About />
            <Skills />
            <Projects projects={PROJECTS} />
            <ExperienceSection experiences={EXPERIENCES} />
            <Contact />
        </>
    );
}
