export default function ProcessCard({ number, title, description }) {
    return (
        <div className="group relative">
            <div className="relative p-10 rounded-[2.5rem] bg-black/5 dark:bg-zinc-900/40 border border-black/5 dark:border-white/[0.05] hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden h-full">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 rounded-bl-[5rem] translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />

                <div className="relative z-10">
                    <span className="text-7xl font-semibold text-foreground/5 dark:text-white/5 absolute -top-4 -left-4 select-none group-hover:text-lime-500/10 transition-colors duration-700">
                        {number}
                    </span>
                    
                    <div className="pt-8">
                        <h3 className="text-3xl font-semibold text-foreground mb-4 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                            {title}
                        </h3>
                        <p className="text-foreground/50 text-lg leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
