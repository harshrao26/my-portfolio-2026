'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 border-t border-white/10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-serif italic text-white mb-4">Harsh Vaibhav</h3>
                        <p className="text-gray-400">
                            Product Designer crafting intuitive digital experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <div className="flex flex-col gap-3">
                            <a href="#work" className="text-gray-400 hover:text-lime-400 transition-smooth">
                                Work
                            </a>
                            <a href="#about" className="text-gray-400 hover:text-lime-400 transition-smooth">
                                About
                            </a>
                            <a href="#process" className="text-gray-400 hover:text-lime-400 transition-smooth">
                                Process
                            </a>
                            <a href="#contact" className="text-gray-400 hover:text-lime-400 transition-smooth">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="text-gray-400 hover:text-lime-400 transition-smooth">
                                LinkedIn
                            </a>
                            <a href="#" className="text-gray-400 hover:text-lime-400 transition-smooth">
                                Twitter
                            </a>
                            <a href="#" className="text-gray-400 hover:text-lime-400 transition-smooth">
                                Dribbble
                            </a>
                            <a href="#" className="text-gray-400 hover:text-lime-400 transition-smooth">
                                Behance
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Harsh Vaibhav. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-lime-400 transition-smooth text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-lime-400 transition-smooth text-sm">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
