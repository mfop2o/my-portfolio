import { useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import type { PageProps } from '@/types';
import Container from '@/components/ui/Container';
import SectionLabel from '@/components/ui/SectionLabel';
import SectionTitle from '@/components/ui/SectionTitle';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { ArrowIcon } from '@/components/ui/icons';
import Glow from '@/components/background/Glow';
import DecorativeCircle from '@/components/background/DecorativeCircle';

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type FormErrors = Partial<Record<keyof ContactForm, string>>;

const FIELD_CLASS =
    'w-full border-0 border-b border-slate-200 dark:border-slate-500/30 bg-transparent pb-2.5 pt-1 text-sm text-slate-900 dark:text-white placeholder:text-transparent dark:placeholder:text-slate-600 transition-colors duration-200 focus:border-cyan-500 dark:focus:border-cyan-400 focus:outline-none';

const LABEL_CLASS =
    'block text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500 mb-2';

export default function Contact() {
    const { site, flash } = usePage<PageProps>().props;
    const { data, setData, post, processing, errors, reset, wasSuccessful } =
        useForm<ContactForm>({ name: '', email: '', subject: '', message: '' });

    useEffect(() => {
        if (wasSuccessful) reset();
    }, [wasSuccessful, reset]);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contact');
    };

    const err = (errors as FormErrors) ?? {};

    return (
        <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
            <Glow color="both"  opacity={0.09} className="-left-32 top-1/4"  size="580px" />
            <DecorativeCircle size={400} className="-right-52 bottom-0 opacity-50" />

            <Container className="relative">
                <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
                    {/* Left */}
                    <Reveal>
                        <SectionLabel>Contact</SectionLabel>
                        <SectionTitle className="mt-5">
                            Let&apos;s build something
                            <span className="text-gradient"> together.</span>
                        </SectionTitle>

                        <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-[1.05rem]">
                            Have a project in mind, a role to fill, or just want to talk shop?
                            My inbox is always open.
                        </p>

                        {/* Email link */}
                        <a
                            href={`mailto:${site.email}`}
                            className="group mt-10 inline-flex flex-col gap-1.5"
                        >
                            <span className="font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 sm:text-2xl">
                                {site.email}
                            </span>
                            <span className="h-px w-0 bg-gradient-to-r from-electric-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
                            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
                                I reply within 24 hours
                            </span>
                        </a>

                        {/* Meta info */}
                        <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-100 dark:border-slate-500/15 pt-10 sm:max-w-md">
                            <div>
                                <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">Location</dt>
                                <dd className="mt-2 text-sm text-slate-700 dark:text-slate-300">{site.location}</dd>
                            </div>
                            <div>
                                <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">Status</dt>
                                <dd className="mt-2 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                                    Open to work
                                </dd>
                            </div>
                        </dl>
                    </Reveal>

                    {/* Form */}
                    <Reveal variant="right" delay={80}>
                        <form
                            onSubmit={onSubmit}
                            noValidate
                            className="relative overflow-hidden border border-slate-200 dark:border-slate-500/15 bg-white dark:bg-midnight-850 p-7 shadow-[0_24px_64px_-32px_rgba(15,23,42,0.18)] dark:shadow-[0_30px_70px_-50px_rgba(0,0,0,0.7)] sm:p-10"
                        >
                            {/* Top accent line */}
                            <span
                                aria-hidden
                                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-electric-500 to-cyan-400"
                            />

                            {/* Success banner */}
                            {flash.success && (
                                <div
                                    role="status"
                                    className="mb-8 flex items-start gap-3 rounded-sm border border-emerald-200 dark:border-emerald-400/30 bg-emerald-50 dark:bg-emerald-400/10 px-4 py-3.5 text-sm text-emerald-700 dark:text-emerald-300"
                                >
                                    <span aria-hidden className="mt-0.5 shrink-0 text-emerald-500 dark:text-emerald-400">✓</span>
                                    <span>{flash.success}</span>
                                </div>
                            )}

                            <div className="grid gap-8 sm:grid-cols-2">
                                {/* Name */}
                                <div>
                                    <label htmlFor="c-name" className={LABEL_CLASS}>Name</label>
                                    <input
                                        id="c-name" name="name" type="text" autoComplete="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        aria-invalid={Boolean(err.name)}
                                        className={FIELD_CLASS}
                                        placeholder="Jane Doe"
                                    />
                                    <p className="mt-1 min-h-[1rem] text-[10px] text-slate-400">
                                        {err.name && <span role="alert" className="text-red-500 dark:text-red-400">{err.name}</span>}
                                    </p>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="c-email" className={LABEL_CLASS}>Email</label>
                                    <input
                                        id="c-email" name="email" type="email" autoComplete="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        aria-invalid={Boolean(err.email)}
                                        className={FIELD_CLASS}
                                        placeholder="jane@company.com"
                                    />
                                    <p className="mt-1 min-h-[1rem] text-[10px] text-slate-400">
                                        {err.email && <span role="alert" className="text-red-500 dark:text-red-400">{err.email}</span>}
                                    </p>
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="mt-2">
                                <label htmlFor="c-subject" className={LABEL_CLASS}>Subject</label>
                                <input
                                    id="c-subject" name="subject" type="text"
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                    aria-invalid={Boolean(err.subject)}
                                    className={FIELD_CLASS}
                                    placeholder="A new product or a role"
                                />
                                <p className="mt-1 min-h-[1rem] text-[10px] text-slate-400">
                                    {err.subject && <span role="alert" className="text-red-500 dark:text-red-400">{err.subject}</span>}
                                </p>
                            </div>

                            {/* Message */}
                            <div className="mt-2">
                                <label htmlFor="c-message" className={LABEL_CLASS}>Message</label>
                                <textarea
                                    id="c-message" name="message" rows={5}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    aria-invalid={Boolean(err.message)}
                                    className={`${FIELD_CLASS} resize-none`}
                                    placeholder="Tell me about your project…"
                                />
                                <p className="mt-1 min-h-[1rem] text-[10px] text-slate-400">
                                    {err.message && <span role="alert" className="text-red-500 dark:text-red-400">{err.message}</span>}
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                                <p className="text-[11px] text-slate-400 dark:text-slate-500">
                                    Secured by Laravel &amp; CSRF protection.
                                </p>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={processing}
                                    className="disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {processing ? 'Sending…' : 'Send message'}
                                    <ArrowIcon />
                                </Button>
                            </div>
                        </form>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
