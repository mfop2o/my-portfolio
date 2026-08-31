import type { Service } from '@/types/service';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import ServiceCard from './ServiceCard';
import Glow from '@/components/background/Glow';
import DecorativeCircle from '@/components/background/DecorativeCircle';

interface ServicesProps {
    services: Service[];
}

export default function Services({ services }: ServicesProps) {
    if (services.length === 0) return null;

    return (
        <section id="services" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
            <Glow color="electric" opacity={0.06} className="-right-24 top-0" size="480px" />
            <DecorativeCircle size={440} className="-left-56 top-1/3 opacity-60" />

            <Container>
                <Reveal>
                    <div className="flex flex-wrap items-end justify-between gap-8">
                        <div>
                            <SectionLabel>What I do</SectionLabel>
                            <SectionTitle className="mt-5">Services</SectionTitle>
                        </div>
                        <p className="max-w-md text-sm leading-relaxed text-slate-500 sm:text-base dark:text-slate-400">
                            Practical, dependable engineering across the full stack — from a blank
                            schema to a polished, shipped interface.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
