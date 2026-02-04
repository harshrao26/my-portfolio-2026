'use client';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Working with Harsh was seamless from start to finish. He understood our goals quickly, asked the right questions, and delivered a design system that scaled perfectly with our growing modern best app.",
            author: "Daniel Reed",
            role: "Founder of NovaCubs",
            avatar: null,
        },
        {
            quote: "Harsh brought our product vision to life with incredible attention to detail. His ability to balance business needs with user empathy made our platform not just beautiful — but genuinely useful.",
            author: "Sarah Nguyen",
            role: "Product Manager at FlowSync",
            avatar: null,
        },
    ];

    return (
        <section className="py-24 relative">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-lime-400 font-serif italic text-lg mb-4">/ What Clients Say</p>
                    <h2 className="text-5xl md:text-6xl font-bold text-white">
                        Trusted by innovators
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            role={testimonial.role}
                            avatar={testimonial.avatar}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
