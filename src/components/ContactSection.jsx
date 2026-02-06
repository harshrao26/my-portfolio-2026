'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function ContactSection() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                // Redirect to thank you page with name, email, and phone as URL parameters
                const params = new URLSearchParams({
                    name: formData.name,
                    email: formData.email,
                });
                
                // Only add phone if it exists
                if (formData.phone) {
                    params.append('phone', formData.phone);
                }

                router.push(`/thank-you?${params.toString()}`);
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitError(error.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-40 relative bg-background transition-colors duration-500 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg6.webp"
                    alt="Contact Background"
                    fill
                    className="object-cover opacity-20 dark:opacity-10 hue-rotate-[150deg]"
                    priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-400/[0.05] rounded-full blur-[150px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.5fr] gap-24">

                    {/* Left Side: Text & Info */}
                    <div className="space-y-12">
                        <div className="max-w-xl">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-10 h-[1px] bg-lime-500 dark:bg-lime-400" />
                                <span className="text-lime-600 dark:text-lime-400 font-semibold text-xs uppercase tracking-widest">Contact</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-semibold text-foreground mb-8 tracking-tighter leading-[0.95]">
                                Let's build <br />
                                something <span className="italic font-serif font-normal text-lime-600 dark:text-lime-400">extraordinary</span>.
                            </h2>
                            <p className="text-foreground/60 text-base leading-relaxed">
                                Whether you're interested in a new project, collaboration, or just want to say hi, my inbox is always open.
                            </p>
                        </div>

                        <div className="space-y-8 pt-8 border-t border-black/5 dark:border-white/5">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-lime-500/10 transition-colors">
                                    <Mail className="text-lime-600 dark:text-lime-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground/30">Email me</p>
                                    <a href="mailto:harshurao058@gmail.com" className="text-base font-medium text-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors tracking-tight">
                                        harshurao058@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-lime-500/10 transition-colors">
                                    <Phone className="text-lime-600 dark:text-lime-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground/30">Call me</p>
                                    <a href="tel:+917233811034" className="text-base font-medium text-foreground hover:text-lime-600 dark:hover:text-lime-400 transition-colors tracking-tight">
                                        +91 7233811034
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-lime-500/10 transition-colors">
                                    <MapPin className="text-lime-600 dark:text-lime-400" size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground/30">Location</p>
                                    <p className="text-base font-medium text-foreground tracking-tight">
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
                                        <label className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40 px-1">Full Name *</label>
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
                                        <label className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40 px-1">Email Address *</label>
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
                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40 px-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 px-1 text-foreground focus:outline-none focus:border-lime-500 transition-colors placeholder:text-foreground/20"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40 px-1">Message *</label>
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

                                {/* Error Message */}
                                {submitError && (
                                    <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
                                        {submitError}
                                    </div>
                                )}

                                <div className="pt-6">
                                    <MagneticButton strength={0.3}>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group flex items-center text-black gap-4 px-12 py-5 bg-lime-500 dark:bg-lime-400 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            <div className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center transition-transform group-hover:rotate-45 dark:bg-lime-400">
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
