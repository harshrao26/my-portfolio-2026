'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Layers, Target, Rocket } from 'lucide-react';
import Image from 'next/image';

export default function ProjectModal({ project, isOpen, onClose }) {
    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative w-full max-w-5xl h-[90vh] bg-background rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 flex flex-col md:flex-row"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-50 p-2 bg-black/20 backdrop-blur-md hover:bg-black/40 text-white rounded-full transition-all"
                    >
                        <X size={24} />
                    </button>

                    {/* Left Side: Visuals */}
                    <div className="w-full md:w-1/2 h-64 md:h-full relative bg-zinc-100 dark:bg-zinc-900">
                        {project.image ? (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-lime-400/20 to-lime-600/10">
                                <span className="text-8xl">🚀</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-10 left-10 text-white">
                            <div className="flex gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h2 className="text-4xl font-bold">{project.title}</h2>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full md:w-1/2 h-full overflow-y-auto p-10 md:p-14 bg-background transition-colors duration-500">
                        <div className="space-y-12">
                            {/* Challenge */}
                            <section>
                                <div className="flex items-center gap-3 mb-4 text-lime-600 dark:text-lime-400">
                                    <Target size={20} />
                                    <span className="text-xs font-bold uppercase tracking-widest">The Challenge</span>
                                </div>
                                <p className="text-foreground/80 leading-relaxed text-lg italic">
                                    "{project.challenge || "Building a scalable solution that balances complex technical requirements with a seamless user experience."}"
                                </p>
                            </section>

                            {/* Approach */}
                            <section>
                                <div className="flex items-center gap-3 mb-4 text-lime-600 dark:text-lime-400">
                                    <Layers size={20} />
                                    <span className="text-xs font-bold uppercase tracking-widest">Our Approach</span>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-foreground/70 leading-relaxed">
                                        We implemented an event-driven architecture using {project.tech?.join(', ') || 'modern web technologies'} to ensure low-latency performance and high reliability.
                                    </p>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {project.features?.map((feature, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-foreground/80">
                                                <span className="text-lime-500">▹</span>
                                                {feature}
                                            </li>
                                        )) || (
                                                <>
                                                    <li className="flex gap-3 text-sm text-foreground/80"><span className="text-lime-500">▹</span> Optimized frontend rendering engine</li>
                                                    <li className="flex gap-3 text-sm text-foreground/80"><span className="text-lime-500">▹</span> Scalable microservices architecture</li>
                                                    <li className="flex gap-3 text-sm text-foreground/80"><span className="text-lime-500">▹</span> Interactive real-time dashboards</li>
                                                </>
                                            )}
                                    </ul>
                                </div>
                            </section>

                            {/* Results */}
                            <section>
                                <div className="flex items-center gap-3 mb-4 text-lime-600 dark:text-lime-400">
                                    <Rocket size={20} />
                                    <span className="text-xs font-bold uppercase tracking-widest">Impact</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                                        <p className="text-2xl font-bold text-foreground">99.9%</p>
                                        <p className="text-xs text-foreground/50">Uptime achieved</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                                        <p className="text-2xl font-bold text-foreground">40%+</p>
                                        <p className="text-xs text-foreground/50">Efficiency boost</p>
                                    </div>
                                </div>
                            </section>

                            {/* Links */}
                            <div className="flex flex-wrap gap-4 pt-8">
                                <a
                                    href={project.link}
                                    className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-all text-sm"
                                >
                                    <ExternalLink size={18} />
                                    Live Demo
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 px-6 py-3 border border-black/10 dark:border-white/10 rounded-full font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-all text-sm text-foreground"
                                >
                                    <Github size={18} />
                                    View Source
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
