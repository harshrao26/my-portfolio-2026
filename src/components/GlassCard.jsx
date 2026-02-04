'use client';

export default function GlassCard({ children, className = '', hover = true }) {
    return (
        <div
            className={`glass rounded-3xl p-8 ${hover ? 'hover-lift cursor-pointer' : ''} ${className}`}
        >
            {children}
        </div>
    );
}
