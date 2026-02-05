'use client';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Working with Harsh was seamless from start to finish. He understood our goals quickly, asked the right questions, and delivered a design system that scaled perfectly with our growing ecosystem.",
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
        <section className="py-40 relative bg-background transition-colors duration-500 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lime-400/[0.03] rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-[1px] bg-lime-500 dark:bg-lime-400" />
                            <span className="text-lime-600 dark:text-lime-400 font-semibold text-xs uppercase tracking-widest">Kind Words</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-semibold text-foreground tracking-tighter leading-none">
                            Trusted by <br />
                            <span className="italic font-serif font-normal text-lime-600 dark:text-lime-400">innovators</span>.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            {...testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
