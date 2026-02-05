'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const NoteCard = ({ title, excerpt, date, readTime, category }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="group p-8 rounded-[2rem] bg-black/5 dark:bg-zinc-900/40 border border-black/5 dark:border-white/[0.05] hover:border-lime-500/30 transition-all duration-500 flex flex-col"
        >
            <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-lime-100 dark:bg-lime-900/20 text-lime-700 dark:text-lime-400 text-[10px] font-semibold uppercase tracking-widest rounded-full border border-lime-200 dark:border-lime-500/20">
                    {category}
                </span>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors line-clamp-2">
                {title}
            </h3>

            <p className="text-foreground/50 text-sm leading-relaxed mb-8 line-clamp-3">
                {excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5">
                <div className="flex items-center gap-4 text-[10px] font-semibold text-foreground/40 uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock size={12} />
                        <span>{readTime}</span>
                    </div>
                </div>

                <button className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-lg">
                    <ArrowRight size={18} />
                </button>
            </div>
        </motion.div>
    );
};

export default function NotesSection() {
    const notes = [
        {
            title: "Optimizing Next.js 15 for Enterprise Performance",
            excerpt: "A deep dive into server actions, partial pre-rendering, and the new caching mechanisms in Next.js 15.",
            date: "Feb 20, 2026",
            readTime: "8 min read",
            category: "Engineering"
        },
        {
            title: "The Future of AI-First User Interfaces",
            excerpt: "How generative AI is shifting our approach from static components to dynamic, intent-based UI systems.",
            date: "Jan 12, 2026",
            readTime: "5 min read",
            category: "Product Design"
        },
        {
            title: "Architecting Micro-Frontends with Module Federation",
            excerpt: "Breaking down complex monoliths into scalable, independently deployable frontend applications.",
            date: "Dec 05, 2025",
            readTime: "12 min read",
            category: "Architecture"
        }
    ];

    return (
        <section id="notes" className="py-32 relative bg-background transition-colors duration-500">
            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-[1px] bg-lime-500 dark:bg-lime-400" />
                            <span className="text-lime-600 dark:text-lime-400 font-semibold text-xs uppercase tracking-widest">Insights & Thoughts</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-6 tracking-tighter">
                            Technical <span className="italic font-serif font-normal text-lime-600 dark:text-lime-400">Notes</span>.
                        </h2>
                        <p className="text-foreground/60 text-base leading-relaxed">
                            Occasional writings on technology, design philosophy, and building digital products.
                        </p>
                    </div>

                    <a href="#" className="flex items-center gap-3 text-sm font-semibold text-foreground/80 hover:text-lime-500 transition-colors uppercase tracking-widest group">
                        View all stories
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {notes.map((note, idx) => (
                        <NoteCard key={idx} {...note} />
                    ))}
                </div>
            </div>
        </section>
    );
}
