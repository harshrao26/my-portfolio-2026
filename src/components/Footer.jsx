'use client';
import Image from 'next/image';
import { Github, Linkedin, Twitter, ArrowUp, Instagram } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-background pt-32 pb-16 relative transition-colors duration-500 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg1.webp"
                    alt="Footer Background"
                    fill
                    className="object-cover opacity-20 dark:opacity-10 hue-rotate-[140deg]"
                    priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
            </div>
            <div className="container-custom relative z-10">

                {/* Large Branding Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-black/5 dark:border-white/5 pb-24 mb-16 gap-12">
                    <div className="max-w-xl">
                        <h3 className="text-8xl md:text-[120px] font-serif italic text-foreground leading-none tracking-tighter mb-8">
                            Harsh<span className="text-lime-600 dark:text-lime-400">.</span>
                        </h3>
                        <p className="text-2xl text-foreground font-medium tracking-tight">
                            Software Engineer & Product Designer <br />
                            <span className="text-foreground/40">Lucknow, India</span>
                        </p>
                    </div>

                    <MagneticButton strength={0.4}>
                        <button
                            onClick={scrollToTop}
                            className="w-20 h-20 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group hover:bg-foreground transition-all duration-500"
                        >
                            <ArrowUp className="text-foreground group-hover:text-background transition-colors" />
                        </button>
                    </MagneticButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb4">
                    {/* Social links */}
                    <div className="space-y-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/30">Connect</p>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: Linkedin, href: "https://www.linkedin.com/in/harsh-d-rao/" },
                                { icon: Github, href: "https://github.com/harshrao26" },
                                { icon: Twitter, href: "#" },
                                { icon: Instagram, href: "https://www.instagram.com/h.a.r.s.h.u.r.a.o/" }
                            ].map((social, i) => (
                                <MagneticButton key={i} strength={0.2}>
                                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-lime-500/10 transition-colors">
                                        <social.icon size={18} className="text-foreground/60 hover:text-lime-600 dark:hover:text-lime-400 transition-colors" />
                                    </a>
                                </MagneticButton>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/30">Navigation</p>
                        <ul className="space-y-4">
                            {['Work', 'About', 'Experience', 'Notes', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-foreground/60 hover:text-foreground transition-colors text-lg font-medium tracking-tight">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Availability */}
                    <div className="space-y-6 md:col-span-2">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-foreground/30">Current Status</p>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                            <p className="text-lg font-medium text-foreground tracking-tight">
                                Available for freelance & full-time roles starting March 2026.
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
}
