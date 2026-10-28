import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

type ButtonVariant = 'primary' | 'outline' | 'ghost';

interface BaseButtonProps {
    variant?: ButtonVariant;
    className?: string;
    children: ReactNode;
    dark?: boolean;
}

interface ButtonAsAnchor extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
    href: string;
    external?: boolean;
}

interface ButtonAsButton extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    href?: never;
    external?: never;
}

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const VARIANTS: Record<ButtonVariant, string> = {
    primary:
        'bg-gradient-to-r from-electric-500 to-electric-600 text-white shadow-[0_8px_28px_-8px_rgba(18,36,61,0.75)] hover:shadow-[0_12px_36px_-8px_rgba(18,36,61,0.78)] hover:brightness-110 active:brightness-95',
    outline:
        'border border-slate-300 bg-white text-slate-700 shadow-sm hover:border-electric-500/70 hover:bg-electric-50/70 hover:text-electric-700 active:scale-[0.98]',
    ghost:
        'text-slate-600 hover:text-electric-700 hover:bg-slate-100/60',
};

const VARIANTS_DARK: Record<ButtonVariant, string> = {
    primary: VARIANTS.primary,
    outline:
        'border border-white/15 bg-white/6 text-slate-200 backdrop-blur-sm hover:border-electric-400/70 hover:bg-white/10 hover:text-white active:scale-[0.98]',
    ghost:
        'text-slate-300 hover:text-white hover:bg-white/8',
};

const BASE =
    'group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-lg px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 select-none';

export default function Button(props: ButtonProps) {
    const { variant = 'primary', className = '', children, dark: darkProp, ...rest } = props;
    const { theme } = useTheme();
    const isDark = darkProp ?? theme === 'dark';
    const classes = `${BASE} ${isDark ? VARIANTS_DARK[variant] : VARIANTS[variant]} ${className}`.trim();

    if ('href' in props && props.href !== undefined) {
        const { href, external = false, ...anchorRest } = rest as ButtonAsAnchor;
        const anchorProps = external
            ? { href, target: '_blank', rel: 'noopener noreferrer' }
            : { href };
        return (
            <a className={classes} {...anchorProps} {...anchorRest}>
                {children}
            </a>
        );
    }

    const buttonRest = rest as ButtonAsButton;
    return (
        <button type="button" className={classes} {...buttonRest}>
            {children}
        </button>
    );
}
