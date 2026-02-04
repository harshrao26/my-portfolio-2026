'use client';
import Image from 'next/image';
import { Linkedin, Github, Instagram } from 'lucide-react';

export default function EducationSection() {
    const education = [
        {
            degree: "B.Tech, Computer Science",
            institution: "Dr. A.P.J. Abdul Kalam Technical University",
            period: "2021 — 2024"
        },
        {
            degree: "Diploma in Engineering",
            institution: "Govt. Polytechnic Sant Kabir Nagar",
            period: "2018 — 2021"
        },
        {
            degree: "Intermediate",
            institution: "Urmila Educational Academy",
            period: "2017 — 2018"
        },
        {
            degree: "High School",
            institution: "Urmila Educational Academy Basti",
            period: "2015 — 2016"
        }
    ];

    return (
        <section id="education" className="bg-black py-32 text-white">
            <div className="container-custom">
                

                {/* Main Heading */}
                <div className="text-center mb-24">
                    <h2 className="text-6xl md:text-7xl font-bold tracking-tighter">
                        Building Foundations <span className="text-white/40">since 2015</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-20 items-start">

                    {/* Left Column: Image Card */}
                    <div className="relative group">
                        <div className="relative aspect-[4/5] w-full rounded-[40px] overflow-hidden border border-white/5">
                            <Image
                                src="/mypic2.png"
                                alt="Harsh Portrait"
                                fill
                                className="object-cover grayscale 0  hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />

                            {/* Card Overlays */}
                            <div className="absolute inset-x-8 bottom-8 flex justify-between items-end z-10">
                                {/* Social Icons */}
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
                                        <Linkedin size={18} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
                                        <Github size={18} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all">
                                        <Instagram size={18} />
                                    </a>
                                </div>

                                {/* Name Label */}
                                <div className="text-right">
                                    <p className="text-sm font-bold uppercase tracking-widest leading-none">Harsh D. Rao</p>
                                    <p className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Full Stack Developer</p>
                                </div>
                            </div>

                            {/* Gradient Bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>
                    </div>

                    {/* Right Column: Content & Table */}
                    <div className="space-y-16">
                        
                        {/* Education Table */}
                        <div className="divide-y divide-white/10">
                            {education.map((item, idx) => (
                                <div key={idx} className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:translate-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-xl md:text-2xl font-bold group-hover:text-lime-400 transition-colors">
                                            {item.degree}
                                        </h3>
                                        <p className="text-white/40 text-sm md:text-base">{item.institution}</p>
                                    </div>
                                    <div className="text-white/20 font-medium tracking-widest text-sm md:text-base group-hover:text-white transition-colors">
                                        {item.period}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
