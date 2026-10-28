'use client';

import { site } from '@/data/site';
import Button from '@/components/ui/Button';
import { ArrowIcon } from '@/components/ui/icons';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons';
import { isConfiguredUrl } from '@/lib/url';
import { Download, Mail } from 'lucide-react';

export default function HeroContent() {
    return (
        <div className="relative z-10">
            {/* Status & Role */}
            <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    Full-Stack Developer · Addis Ababa, ET
                </p>
            </div>

            {/* Headline */}
            <h1
                className="mt-5 font-display font-bold leading-[1.05] tracking-tight text-white"
                style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}
            >
                Hi, I&apos;m {site.name}.
                <span className="block mt-1.5 bg-gradient-to-r from-[#a8d7ff] via-[#68b4ff] to-[#2c6ec9] bg-clip-text text-transparent">
                    I build software that makes a difference.
                </span>
            </h1>

            {/* Short clear summary */}
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
                I specialize in full-stack development, building modern web applications with clean architecture, reliable backends, intuitive interfaces, and scalable database solutions.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#projects">
                    View Projects
                    <ArrowIcon />
                </Button>
                {site.cv_available ? (
                    <Button href={site.cv_path} external variant="outline" dark>
                        <Download className="h-3.5 w-3.5" />
                        Resume
                    </Button>
                ) : (
                    <Button href="#contact" variant="outline" dark>
                        Get in Touch
                    </Button>
                )}
            </div>

            {/* Direct social links */}
            <div className="mt-8 flex items-center gap-3">
                {isConfiguredUrl(site.socials.github) && (
                    <a
                        href={site.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                    >
                        <GitHubIcon className="h-4 w-4" />
                    </a>
                )}
                {isConfiguredUrl(site.socials.linkedin) && (
                    <a
                        href={site.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                    >
                        <LinkedInIcon className="h-4 w-4" />
                    </a>
                )}
                <a
                    href={`mailto:${site.email}`}
                    aria-label="Email"
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
                >
                    <Mail className="h-4 w-4" />
                </a>
            </div>
        </div>
    );
}
