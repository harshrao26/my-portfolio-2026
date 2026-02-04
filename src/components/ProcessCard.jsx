'use client';

export default function ProcessCard({ number, title, description, showLine = false }) {
    return (
        <div className="relative">
            <div className="glass-strong rounded-3xl p-8 hover-lift relative overflow-hidden group">
                {/* Gradient Background */}
                <div className="absolute inset-0 gradient-radial-lime opacity-10 group-hover:opacity-100 transition-smooth-slow" />

                {/* Content */}
                <div className="relative z-10">
                    <div className="text-6xl font-light mb-6 text-white/80">{number}</div>
                    <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
                    <p className="text-gray-400 leading-relaxed">{description}</p>
                </div>
            </div>

            {/* Connecting Line */}
            {showLine && (
                <svg
                    className="absolute -right-12 top-1/2 -translate-y-1/2 w-24 h-24 hidden lg:block"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 50 Q 50 20, 90 50"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                    />
                    <circle cx="90" cy="50" r="4" fill="#c4ff61" />
                    <circle cx="10" cy="50" r="4" fill="#c4ff61" />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#c4ff61" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#c4ff61" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                </svg>
            )}
        </div>
    );
}
