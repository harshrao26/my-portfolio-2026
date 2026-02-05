import Image from 'next/image';

export default function TestimonialCard({ quote, author, role, avatar }) {
    return (
        <div className="bg-black/5 dark:bg-zinc-900/40 border border-black/5 dark:border-white/[0.05] rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 flex flex-col h-full">
            {/* Quote Icon */}
            <div className="text-6xl text-lime-600 dark:text-lime-400 opacity-20 font-serif mb-6 h-10">“</div>

            {/* Quote Text */}
            <p className="text-foreground/70 text-xl leading-relaxed mb-10 italic font-serif flex-grow">
                {quote}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-5 pt-8 border-t border-black/5 dark:border-white/5">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                    {avatar ? (
                        <Image
                            src={avatar}
                            alt={author}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-lime-400/20 to-lime-600/20 flex items-center justify-center text-lime-600 dark:text-lime-400 font-semibold text-xl">
                            {author.charAt(0)}
                        </div>
                    )}
                </div>
                <div>
                    <div className="font-semibold text-foreground text-lg tracking-tight">{author}</div>
                    <div className="text-sm text-foreground/40 font-medium uppercase tracking-widest">{role}</div>
                </div>
            </div>
        </div>
    );
}
