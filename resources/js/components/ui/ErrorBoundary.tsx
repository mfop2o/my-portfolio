import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
    children: ReactNode;
    /** Optional fallback UI. Defaults to null (renders nothing on error). */
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

/**
 * Catches React render errors — including DOM mismatches caused by browser
 * extensions (password managers, grammar checkers, etc.) injecting nodes into
 * semantic elements like <nav> or <section> after React has rendered.
 *
 * Without this boundary, those extension-triggered errors bubble up and crash
 * the whole component tree. With it, the affected subtree silently disappears
 * (or shows a fallback) while the rest of the page keeps working.
 */
export default class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Only log in development so production stays quiet for extension noise.
        if (import.meta.env.DEV) {
            console.warn('[ErrorBoundary] Caught error:', error, info);
        }
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? null;
        }
        return this.props.children;
    }
}
