'use client';
import Image from 'next/image';
import { Linkedin, Github, Instagram } from 'lucide-react';

export default function EducationSection() {
  const education = [
    {
      degree: "B.Tech, Computer Science",
      school: "Dr. A.P.J. Abdul Kalam Technical University",
      date: "2021 — 2024"
    },
    {
      degree: "Diploma in Engineering",
      school: "Govt. Polytechnic Sant Kabir Nagar",
      date: "2018 — 2021"
    },
    {
      degree: "Intermediate",
      school: "Urmila Educational Academy",
      date: "2017 — 2018"
    },
    {
      degree: "High School",
      school: "Urmila Educational Academy",
      date: "2015 — 2016"
    }
  ];

  return (
    <section id="education" className="bg-background py-40 text-foreground relative transition-colors duration-500">
      <div className="container-custom max-w-7xl mx-auto">

        {/* Top Minimal Label */}
        <div className="mb-8">
          <p className="text-lime-600 dark:text-lime-400 font-serif italic text-xl tracking-widest leading-none">/ Academic Narrative</p>
        </div>

        {/* Hero Heading */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.85] text-foreground">
            Building Foundations <br />
            <span className="text-foreground/20 italic font-serif">since 2015.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">

          {/* Left Column: Focused Persona */}
          <div className="lg:col-span-5 space-y-12">
            <div className="relative aspect-[4/5] w-full rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 group shadow-2xl transition-all duration-700 hover:shadow-lime-500/10">
              <Image
                src="/mypic2.png"
                alt="Portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2 opacity-50">Profile</p>
                <h4 className="text-2xl font-bold">Harsh D. Rao</h4>
                <p className="text-xs text-white/60">Software Engineer & Designer</p>
              </div>
            </div>
          </div>

          {/* Right Column: Experience Table */}
          <div className="lg:col-span-7">
            <div className="w-full">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="group grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1.5fr] py-12 border-t border-black/5 dark:border-white/5 items-center gap-6 transition-all hover:bg-black/[0.02] dark:hover:bg-white/[0.02] px-4"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors tracking-tight">
                    {item.degree}
                  </h3>
                  <p className="text-foreground/40 text-sm md:text-base group-hover:text-foreground/60 transition-colors">
                    {item.school}
                  </p>
                  <p className="text-foreground/10 font-bold tracking-widest md:text-right text-xs md:text-sm group-hover:text-foreground transition-colors uppercase">
                    {item.date}
                  </p>
                </div>
              ))}
              <div className="border-t border-black/5 dark:border-white/5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
