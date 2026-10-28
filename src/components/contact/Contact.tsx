'use client';

import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/SocialIcons';
import { isConfiguredUrl } from '@/lib/url';
import { site } from '@/data/site';

const FIELD_CLASS =
    'h-11 w-full rounded-lg border border-white/10 bg-midnight-900 px-3.5 text-[12px] text-white placeholder:text-slate-500 transition-all duration-200 focus:border-cyan-400 focus:bg-midnight-950 focus:outline-none focus:ring-2 focus:ring-cyan-500/12';

const LABEL_CLASS = 'mb-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400';

export default function Contact() {
    const [state, handleSubmit] = useForm('xoeewqqv');

    const contactItems = [
        { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
        { icon: Phone, label: 'Phone / WhatsApp', value: site.phone, href: `tel:${site.phone.replace(/\s+/g, '')}` },
        { icon: MapPin, label: 'Location', value: site.location, href: '#contact' },
    ];

    return (
        <section id="contact" className="relative scroll-mt-24 overflow-hidden py-6 sm:py-9">
            <Container className="relative">
                <div className="mx-auto max-w-[1040px] rounded-[24px] border border-white/10 bg-midnight-900 p-3.5 sm:p-4 lg:p-5">
                    <Reveal>
                        <div className="mx-auto max-w-2xl text-center">
                            <SectionLabel dark className="justify-center">Contact Me</SectionLabel>
                            <SectionTitle dark className="mt-2.5 text-[1.7rem] font-semibold leading-[0.96] tracking-[-0.08em] sm:text-[2.1rem] lg:text-[2.5rem]">
                                Let&apos;s Build Something Great.
                            </SectionTitle>
                            <p className="mx-auto mt-2 max-w-xl text-[12.5px] leading-6 text-slate-300 sm:text-[13.5px]">
                                Open to opportunities, collaborations, and exciting projects. Let&apos;s connect and create something meaningful.
                            </p>
                        </div>
                    </Reveal>

                    <div className="mt-5 grid gap-3.5 lg:grid-cols-[42%_58%] lg:items-start">
                        <Reveal>
                            <div className="h-full rounded-[22px] border border-white/10 bg-midnight-850/80 p-3.5">
                                <div className="space-y-2.5">
                                    <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
                                        Let&apos;s connect
                                    </p>
                                    <p className="text-[15px] font-medium leading-6 text-white">
                                        Have an idea worth building?
                                    </p>
                                    <p className="text-[12.5px] leading-6 text-slate-300">
                                        Whether you&apos;re hiring, exploring a collaboration, or planning a digital product, I&apos;d be happy to hear from you.
                                    </p>
                                </div>

                                <div className="mt-3 space-y-2.5">
                                    {contactItems.map(({ icon: Icon, label, value, href }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            className="group block rounded-2xl border border-white/10 bg-midnight-900 p-2.5 transition-colors duration-200 hover:border-cyan-400/50"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="grid h-8 w-8 place-items-center rounded-xl border border-white/10 bg-midnight-950 text-cyan-400">
                                                    <Icon className="h-[13px] w-[13px]" />
                                                </span>
                                                <div className="min-w-0">
                                                    <span className="block text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                                                        {label}
                                                    </span>
                                                    <span className="mt-0.5 block truncate text-[11.5px] font-medium text-white">
                                                        {value}
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-3 flex flex-wrap items-center gap-2">
                                    {isConfiguredUrl(site.socials.github) && (
                                        <a
                                            href={site.socials.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-[9.5px] font-medium text-slate-200 transition-colors duration-200 hover:border-cyan-400/50 hover:text-cyan-300"
                                        >
                                            <GitHubIcon className="h-3.5 w-3.5" />
                                            <span>GitHub</span>
                                        </a>
                                    )}
                                    {isConfiguredUrl(site.socials.linkedin) && (
                                        <a
                                            href={site.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-[9.5px] font-medium text-slate-200 transition-colors duration-200 hover:border-cyan-400/50 hover:text-cyan-300"
                                        >
                                            <LinkedInIcon className="h-3.5 w-3.5" />
                                            <span>LinkedIn</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Reveal>

                        <Reveal variant="right" delay={80}>
                            <form
                                onSubmit={handleSubmit}
                                className="h-full rounded-[22px] border border-white/10 bg-midnight-850/90 p-3.5"
                            >
                                <div className="mb-3">
                                    <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-cyan-400">
                                        Project inquiry
                                    </p>
                                    <h3 className="mt-2 font-display text-[1.25rem] font-semibold tracking-[-0.06em] text-white">
                                        Let&apos;s Talk
                                    </h3>
                                </div>

                                {state.succeeded && (
                                    <div
                                        role="status"
                                        aria-live="polite"
                                        className="mt-3 flex items-start gap-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2.5 text-xs text-emerald-300"
                                    >
                                        <span aria-hidden className="mt-0.5 shrink-0">✓</span>
                                        <span>Your message has been sent. I will get back to you soon.</span>
                                    </div>
                                )}

                                {!state.succeeded && (
                                    <>
                                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="c-name" className={LABEL_CLASS}>
                                                    Name
                                                </label>
                                                <input
                                                    id="c-name"
                                                    name="name"
                                                    type="text"
                                                    autoComplete="name"
                                                    required
                                                    className={FIELD_CLASS}
                                                    placeholder="Your name"
                                                />
                                                <ValidationError
                                                    prefix="Name"
                                                    field="name"
                                                    errors={state.errors}
                                                    className="mt-1 block text-[10px] text-red-400"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="c-email" className={LABEL_CLASS}>
                                                    Email
                                                </label>
                                                <input
                                                    id="c-email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    className={FIELD_CLASS}
                                                    placeholder="your@email.com"
                                                />
                                                <ValidationError
                                                    prefix="Email"
                                                    field="email"
                                                    errors={state.errors}
                                                    className="mt-1 block text-[10px] text-red-400"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-2">
                                            <label htmlFor="c-message" className={LABEL_CLASS}>
                                                Project details
                                            </label>
                                            <textarea
                                                id="c-message"
                                                name="message"
                                                rows={5}
                                                required
                                                className={`${FIELD_CLASS} min-h-[110px] resize-none`}
                                                placeholder="Describe your project..."
                                            />
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                                className="mt-1 block text-[10px] text-red-400"
                                            />
                                        </div>

                                        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
                                            <p className="text-[8px] uppercase tracking-[0.16em] text-slate-400">
                                                Usually replies within 24h
                                            </p>
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                dark
                                                disabled={state.submitting}
                                                className="h-10 px-4 text-[10px] disabled:cursor-not-allowed disabled:opacity-60"
                                            >
                                                {state.submitting ? 'Sending…' : 'Send message'}
                                                <Send className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </form>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </section>
    );
}
