interface MarqueeProps {
    items: string[];
    className?: string;
    dark?: boolean;
}

export default function Marquee({ items, className = '', dark = false }: MarqueeProps) {
    const doubled = [...items, ...items];

    return (
        <div
            aria-hidden
            className={`overflow-hidden border-y py-4 ${
                dark
                    ? 'border-white/6 bg-white/3'
                    : 'border-slate-200/80 bg-white'
            } ${className}`}
        >
            <div className="flex w-max animate-marquee whitespace-nowrap">
                {doubled.map((item, index) => (
                    <span
                        key={index}
                        className={`flex items-center gap-8 pr-8 font-display text-[11px] font-medium uppercase tracking-[0.34em] ${
                            dark ? 'text-slate-600' : 'text-slate-400'
                        }`}
                    >
                        {item}
                        <span
                            className={`text-[9px] ${
                                dark ? 'text-cyan-500/70' : 'text-cyan-500/60'
                            }`}
                        >
                            ✦
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
}
