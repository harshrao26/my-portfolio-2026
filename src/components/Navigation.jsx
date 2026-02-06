'use client';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import MagneticButton from './MagneticButton';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
            <div className="container-custom">
                <div className={`relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${scrolled ? 'bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-2xl' : ''}`}>

                    {/* Logo / Name */}
                    <a href="/" className="text-xl md:text-2xl f  text-black dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-smooth group flex items-center gap-1">
                        <span className="font-semibold">Harsh</span>
                        <span className="text-lime-600 dark:text-lime-400">D.</span>
                        <span className="font-normal">Rao</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        <a href="#work" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 transition-smooth">
                            Work
                        </a>
                        <a href="#about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 transition-smooth">
                            About
                        </a>
                        <a href="#process" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 transition-smooth">
                            Process
                        </a>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://drive.google.com/uc?export=download&id=1qbdCwxwQsFcnLSvO95z8j1Cmb85rnvLW"
                                download
                                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 transition-smooth border border-black/10 dark:border-white/10 px-4 py-2 rounded-full hover:border-lime-400/50"
                            >
                                Resume
                            </a>
                            {/* Get In Touch Button */}
                            <MagneticButton strength={0.4}>
                                <a href="#contact" className="px-6 py-2.5 bg-lime-500 dark:bg-lime-400 text-white dark:text-black rounded-full text-sm font-semibold hover:bg-lime-600 dark:hover:bg-lime-500 transition-all hover:scale-105 active:scale-95 shadow-lg block">
                                    Get In Touch
                                </a>
                            </MagneticButton>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 hover:border-lime-400/50 transition-smooth bg-white/5"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[-1] transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        <a
                            href="#work"
                            className="text-2xl fo nt-semibold text-white hover:text-lime-400 transition-smooth"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Work
                        </a>
                        <a
                            href="#about"
                            className="text-2xl fo nt-semibold text-white hover:text-lime-400 transition-smooth"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#process"
                            className="text-2xl fo nt-semibold text-white hover:text-lime-400 transition-smooth"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Process
                        </a>
                        <a
                            href="#contact"
                            className="mt-4 px-10 py-4 bg-lime-400 text-black rounded-full text-xl font-semibold hover:bg-white transition-all shadow-xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}