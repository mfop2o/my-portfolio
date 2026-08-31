import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';
import Container from '@/components/ui/Container';
import Glow from '@/components/background/Glow';
import DecorativeCircle from '@/components/background/DecorativeCircle';

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden bg-midnight-900">
            {/* Background layers */}
            <Glow color="electric" opacity={0.12} className="-left-48 -top-24" size="700px" />
            <Glow color="cyan" opacity={0.07} className="right-0 top-1/2" size="500px" />
            <DecorativeCircle size={260} className="-right-32 top-16 hidden lg:block" />

            {/* Fine grid overlay */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
            />

            <Container className="relative grid items-center gap-16 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-36">
                <HeroContent />
                <HeroVisual />
            </Container>

            {/* Stat strip */}
            <div className="relative border-t border-white/6">
                <Container>
                    <div className="grid grid-cols-2 divide-x divide-white/6 sm:grid-cols-4">
                        {[
                            { value: '1+',   label: 'Years experience' },
                            { value: '10+',  label: 'Projects shipped' },
                            { value: '100%', label: 'On-time delivery' },
                            { value: '3+',   label: 'Tech stacks' },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="flex flex-col items-center gap-1 px-6 py-7 text-center sm:px-8"
                            >
                                <span className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    {stat.value}
                                </span>
                                <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-slate-500">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <div className="hairline-b" />
        </section>
    );
}
