'use client';
import Image from 'next/image';

export default function TestimonialCard({ quote, author, role, avatar }) {
    return (
        <div className="glass-strong rounded-3xl p-8 hover-lift h-full">
            {/* Quote Icon */}
            <div className="text-6xl text-lime-400/30 font-serif mb-4">"</div>

            {/* Quote Text */}
            <p className="text-gray-300 leading-relaxed mb-6 italic">
                {quote}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-lime-400/30">
                    {avatar ? (
                        <Image
                            src={avatar}
                            alt={author}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-black font-bold">
                            {author.charAt(0)}
                        </div>
                    )}
                </div>
                <div>
                    <div className="font-semibold text-white">{author}</div>
                    <div className="text-sm text-gray-400">{role}</div>
                </div>
            </div>
        </div>
    );
}
