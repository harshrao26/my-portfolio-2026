'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', formData);
        alert('Thanks for reaching out! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-40 relative bg-background transition-colors duration-500 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-400/[0.05] rounded-full blur-[150px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr] gap-24">

                    {/* Left Side: Text & Info */}
                    <div className="space-y-12">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-[1px] bg-lime-500 dark:bg-lime-400" />
                                <span className="text-lime-600 dark:text-lime-400 font-bold text-xs uppercase tracking-widest">Contact</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-8 tracking-tighter leading-[0.9]">
                                Let's build <br />
                                something <span className="italic font-serif font-normal text-lime-600 dark:text-lime-400">extraordinary</span>.
                            </h2>
                            <p className="text-foreground/60 text-lg leading-relaxed">
                                Whether you're interested in a new project, collaboration, or just want to say hi, my inbox is always open.
                            </p>
                        </div>

                        <div className="space-y-8 pt-8 border-t border-black/5 dark:border-white/5">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-lime-500/10 transition-colors">
                                    <Mail className="text-lime-600 dark:text-lime-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">Email me</p>
                                    <a href="mailto:harshurao058@gmail.com" className="text-lg font-medium text-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors tracking-tight">
                                        harshurao058@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-lime-500/10 transition-colors">
                                    <Phone className="text-lime-600 dark:text-lime-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">Call me</p>
                                    <a href="tel:+917233811034" className="text-lg font-medium text-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors tracking-tight">
                                        +91 7233811034
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-lime-500/10 transition-colors">
                                    <MapPin className="text-lime-600 dark:text-lime-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">Location</p>
                                    <p className="text-lg font-medium text-foreground tracking-tight">
                                        Lucknow, India — Available Globally
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="relative">
                        <div className="p-8 md:p-12 rounded-[2.5rem] bg-black/5 dark:bg-zinc-900/40 border border-black/5 dark:border-white/[0.05] backdrop-blur-sm">
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 px-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 px-1 text-foreground focus:outline-none focus:border-lime-500 transition-colors placeholder:text-foreground/20"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 px-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 px-1 text-foreground focus:outline-none focus:border-lime-500 transition-colors placeholder:text-foreground/20"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 px-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 px-1 text-foreground focus:outline-none focus:border-lime-500 transition-colors placeholder:text-foreground/20 resize-none"
                                        placeholder="Tell me about your vision..."
                                    />
                                </div>

                                <div className="pt-6">
                                    <MagneticButton strength={0.3}>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group flex items-center gap-4 px-12 py-5 bg-foreground text-background rounded-full font-bold transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            <div className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center transition-transform group-hover:rotate-45">
                                                <Send size={14} className="text-black" />
                                            </div>
                                        </button>
                                    </MagneticButton>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
