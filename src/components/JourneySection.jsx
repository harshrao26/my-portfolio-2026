'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Camera, PenTool, Code2, Globe, Smartphone, Zap } from 'lucide-react';

const JourneyMilestone = ({ icon: Icon, title, description, year, index, total }) => {
    return (
        <motion.div
            initial={{ opacity: 0.1, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 mb-20"
        >
            {/* Visual background number */}
            <span className="absolute z-0 opacity-20 top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2 text-[30vw] font-semibold text-foreground/[0.02] select-none pointer-events-none italic">
                0{index + 1}
            </span>

            <div className="relative z-10 flex flex-col items-center max-w-4xl">
                <div className="w-20 h-20 rounded-full bg-lime-500/10 flex items-center justify-center mb-10 group relative">
                    <div className="absolute inset-0 bg-lime-500 animate-ping rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
                    <Icon size={32} className="text-lime-600 dark:text-lime-400 relative z-10" />
                </div>

                <div className="flex flex-col items-center gap-4 mb-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.5em] text-lime-600 dark:text-lime-400 px-4 py-1 border border-lime-500/20 rounded-full bg-lime-500/5">
                        {year}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tighter leading-none italic font-serif">
                        {title}
                    </h3>
                </div>

                <p className="text-lg md:text-2xl text-foreground/50 leading-relaxed font-light tracking-tight max-w-3xl">
                    {description}
                </p>

                {/* Vertical Progress Line */}
                {index < total - 1 && (
                    <div className="absolute top-[110%] left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-lime-500 to-transparent opacity-20" />
                )}
            </div>
        </motion.div>
    );
};

export default function JourneySection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const journey = [
        {
            year: "The Creative Spark",
            title: "Through a Different Lens",
            icon: Camera,
            description: (
                <>
                    I grew up with a camera in my hand. Editing photos in Photoshop taught me my first lessons in <span className="text-lime-600 dark:text-lime-400 font-medium">color, layout, and typography</span>—skills I didn't know would build my future.
                </>
            )
        },
        {
            year: "The Connection",
            title: "Pixels to Logic",
            icon: PenTool,
            description: (
                <>
                    In University, everything clicked. I saw the same design principles from photography applied to the web. I realized that <span className="text-lime-600 dark:text-lime-400 font-medium">great software starts with a great eye.</span>
                </>
            )
        },
        {
            year: "The Full Stack Shift",
            title: "Building the Engine",
            icon: Code2,
            description: (
                <>
                    I started with the frontend, but I wanted to build the whole machine. I challenged myself: <span className="text-lime-600 dark:text-lime-400 font-medium">if I can design it, I can engineer it.</span>
                </>
            )
        },
        {
            year: "The Modern Web",
            title: "Performance First",
            icon: Globe,
            description: (
                <>
                    React gave me smooth apps, but Next.js gave me <span className="text-lime-600 dark:text-lime-400 font-medium">speed and SEO.</span> I mastered the framework to build products that are as fast as they are beautiful.
                </>
            )
        },
        {
            year: "The Next Horizon",
            title: "Universal Mobility",
            icon: Smartphone,
            description: (
                <>
                    The web was just the beginning. I'm now pushing into <span className="text-lime-600 dark:text-lime-400 font-medium">Mobile App Development.</span> If I can build for the browser, I can build for every device in the world.
                </>
            )
        }
    ];

    return (
        <section ref={containerRef} id="journey" className="relative bg-background transition-colors duration-500 overflow-hidden pt-40 pb-60">

            {/* Cinematic Overlays */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(138,201,38,0.03)_0%,transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(138,201,38,0.03)_0%,transparent_50%)]" />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Intro */}
                <div className="flex flex-col items-center text-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-[1px] bg-lime-500 mb-8"
                    />
                    <h2 className="text-2xl md:text-3xl font-semibold text-lime-600 dark:text-lime-400 uppercase tracking-[0.4em] mb-4">
                        The Odyssey
                    </h2>
                    <h2 className="text-6xl md:text-9xl font-semibold text-foreground tracking-tighter leading-none mb-12">
                        A Life in <br />
                        <motion.span
                            style={{ opacity: scrollYProgress }}
                            className="italic font-serif font-normal text-foreground/20"
                        >
                            Constant Focus
                        </motion.span>.
                    </h2>
                </div>

                {/* Milestones */}
                <div className="space-y-40">
                    {journey.map((step, i) => (
                        <JourneyMilestone key={i} index={i} total={journey.length} {...step} />
                    ))}
                </div>
            </div>

            {/* Floating CTA */}
            <div className="flex justify-center mt-20">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-4 text-foreground/30"
                >
                    <span className="text-[10px] uppercase font-semibold tracking-widest">Keep Exploring</span>
                    <Zap size={14} className="text-lime-500" />
                </motion.div>
            </div>
        </section>
    );
}
