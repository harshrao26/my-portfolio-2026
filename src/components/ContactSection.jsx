'use client';
import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thanks for reaching out! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-radial-lime opacity-10" />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <p className="text-lime-400 font-serif italic text-lg mb-4">/ Let's Connect</p>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Get in Touch
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Have a project in mind? Let's discuss how we can work together to create
                            something amazing.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-strong rounded-3xl p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-white font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50 focus:ring-2 focus:ring-lime-400/20 transition-smooth"
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-white font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50 focus:ring-2 focus:ring-lime-400/20 transition-smooth"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-white font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400/50 focus:ring-2 focus:ring-lime-400/20 transition-smooth resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-lime-400 text-black rounded-full font-semibold hover:bg-lime-500 transition-smooth text-lg hover:shadow-glow"
                            >
                                Send Message →
                            </button>
                        </form>

                        {/* Alternative Contact */}
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <p className="text-center text-gray-400 mb-4">Or reach out directly:</p>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                                <a
                                    href="mailto:harsh@example.com"
                                    className="text-lime-400 hover:text-lime-300 transition-smooth"
                                >
                                    harsh@example.com
                                </a>
                                <span className="hidden md:block text-gray-600">•</span>
                                <a
                                    href="tel:+1234567890"
                                    className="text-lime-400 hover:text-lime-300 transition-smooth"
                                >
                                    +1 (234) 567-890
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
