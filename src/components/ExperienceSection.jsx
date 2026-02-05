'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const ExperienceItem = ({ year, role, company, logo, summary, highlights, growth, images, tech, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div
      className={`group relative py-12 border-t border-black/5 dark:border-white/10 transition-all duration-700 ease-in-out ${isLast ? 'border-b' : ''} cursor-crosshair`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Hover Effect */}
      <div className={`absolute inset-0 bg-lime-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />

      {/* Moving Accent Line */}
      <div className={`absolute left-0 top-0 h-full w-[2px] bg-lime-600 dark:bg-lime-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500`} />

      {/* Fullscreen Image Overlay */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseLeave={() => setActiveImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full h-full max-w-7xl max-h-[85vh]"
            >
              <Image
                src={activeImage}
                alt="Enlarged Milestone"
                fill
                className="object-contain rounded-3xl"
                priority
              />

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage(null);
                }}
                className="fixed top-10 right-10 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-all hover:rotate-90 group/close backdrop-blur-md"
              >
                <X size={24} className="group-hover/close:scale-110" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-20">
        <div className="flex flex-col md:grid md:grid-cols-[120px_1fr_100px] items-start md:items-center gap-12">

          {/* Year Column */}
          <div className="text-xl font-medium text-foreground/50 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors duration-500">
            {year}
          </div>

          {/* Main Content Column */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {logo && (
                <div className="relative w-12 h-12 md:w-20 md:h-20 shrink-0 filter grayscale invert dark:invert-0 group-hover:grayscale-0 transition-all duration-700">
                  <Image src={logo} alt={company} fill className="object-contain" />
                </div>
              )}
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h3 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                  {role}
                </h3>
                <span className="hidden md:block text-2xl text-foreground/20 group-hover:text-lime-600/30 dark:group-hover:text-lime-400/20 transition-colors">—</span>
                <p className="text-2xl text-foreground/70 font-serif italic group-hover:text-foreground transition-colors">
                  {company}
                </p>
              </div>
            </div>

            {/* Expanded Content */}
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isHovered ? 'max-h-[1200px] opacity-100 mt-12' : 'max-h-0 opacity-0'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 py-8 border-t border-black/5 dark:border-white/5">

                {/* Left Side: Summary & Impact */}
                <div className="space-y-12">
                  <div className="space-y-6">
                    <h4 className="text-foreground/30 text-[10px] font-bold uppercase tracking-[0.3em]">The Mission</h4>
                    <p className="text-2xl md:text-3xl text-foreground/90 leading-tight">
                      {summary}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-lime-600 dark:text-lime-400 text-xs font-bold uppercase tracking-[0.2em]">Core Impact</h4>
                    <ul className="space-y-4">
                      {highlights.map((h, i) => (
                        <li key={i} className="text-foreground/90 text-base md:text-lg flex gap-3 font-medium">
                          <span className="text-lime-500">/</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side: Evolution, Milestones & Tech */}
                <div className="flex flex-col gap-12">
                  <div className="space-y-6">
                    <h4 className="text-foreground/40 text-xs font-bold uppercase tracking-[0.2em]">The Evolution</h4>
                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed italic font-serif">
                      {growth}
                    </p>
                  </div>

                  {/* Project Photos (Moved to Right) */}
                  {images && images.length > 0 && (
                    <div className="space-y-6">
                      <h4 className="text-foreground/30 text-[10px] font-bold uppercase tracking-[0.3em]">Visual Milestones</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {images.map((img, i) => (
                          <div
                            key={i}
                            onMouseEnter={() => setActiveImage(img)}
                            className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group/img shadow-xl cursor-zoom-in"
                          >
                            <Image
                              src={img}
                              alt="Work Snapshot"
                              fill
                              className="object-cover group-hover/img:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-auto pt-8">
                    <h4 className="text-foreground/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {tech.map((t, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[10px] font-bold text-foreground/50 tracking-widest uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Interaction Hint */}
          <div className="hidden md:flex justify-end pr-4">
            <div className={`w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-lime-500 dark:bg-lime-400 border-lime-500 dark:border-lime-400 -rotate-45' : ''}`}>
              <ArrowUpRight className={`transition-colors ${isHovered ? 'text-white dark:text-black' : 'text-foreground/20'}`} size={20} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default function ExperienceSection() {
  const experiences = [
    {
      year: "2025 — Present",
      role: "Digital Engineering Lead",
      company: "Lawfinity India",
      logo: "/lawfinity.png",
      summary: (
        <>
          Joined as the <span className="text-lime-600 dark:text-lime-400 font-bold underline decoration-lime-500/30 underline-offset-4 tracking-tight">Founding Technical Member</span> to build an IT department from absolute zero. Single-handedly managed the <span className="text-foreground font-bold italic">entire lifecycle:</span> from deep competitor research against market giants to the final <span className="text-foreground/80 font-medium">architecture, SEO strategy, and deployment.</span>
        </>
      ),
      highlights: [
        "Sole Architect of the entire digital infrastructure",
        "Dominated search rankings via custom Tech SEO",
        "Building proprietary ERPs for Sales, HR & Ops",
        "Bridging Tech gap between Sales & Operations"
      ],
      growth: (
        <>
          I didn&apos;t just write code; I <span className="text-lime-500 font-bold italic">built a business engine.</span> Behind the scenes, I am currently architecting the private software that powers the firm&apos;s internal operations and sales performance.
        </>
      ),
      tech: ["DigitalOcean", "Performance", "Technical SEO", "Full-Stack"],
      images: ["/lawfinity.jpeg"],
    },
    {
      year: "2024 — 2025",
      role: "Team Leader",
      company: "Propques",
      logo: "/propques.png",
      summary: (
        <>
          Joined as a <span className="text-lime-600 dark:text-lime-400 font-bold">Full-time Intern</span> in Oct 2024, promoted to <span className="text-lime-600 dark:text-lime-400 font-bold">Full-Stack Developer</span> within 30 days, and climbed to <span className="text-lime-600 dark:text-lime-400 font-bold underline decoration-lime-500/30 underline-offset-4">Team Leader within 6 months.</span> I orchestrated the intersection of high-end engineering and <span className="text-foreground font-bold italic">data-driven growth.</span>
        </>
      ),
      highlights: [
        "Led 5+ Developers, Designers & QA",
        "Performance Marketing & Meta/Google Ads Ops",
        "Full-Cycle SEO Strategy & Technical Ranking",
        "Cross-Dept Reporting (Sales & Ops Teams)"
      ],
      growth: (
        <>
          At Propques, I didn&apos;t just build features; I <span className="text-lime-500 font-bold italic">bridged the gap between code and commerce.</span> I actively collaborated with the <span className="text-foreground font-bold">Performance Marketing team</span> to optimize ad funnels, managed large-scale <span className="text-foreground font-bold underline decoration-foreground/20 underline-offset-4">SEO architectures</span>, and took full accountability for the technical health of a co-working consultancy giant.
        </>
      ),
      images: ["/Team Lead.jpeg", "/PropquesFulltime.jpeg"],
      tech: ["Leadership", "ERP Architecture", "Product Strategy", "Figma"],
    },
    {
      year: "2024",
      role: "Kafka Engineer",
      company: "Adi Laxmi Export",
      logo: "/adilaxmi.png",
      summary: "Engineered real-time data pipelines for industrial export tracking, focusing on low-latency reactive systems.",
      highlights: [
        "Real-time Stream Processing",
        "Kafka Event Integration",
        "High-throughput Dashboards"
      ],
      growth: "Mastered distributed systems and event-driven architecture in a high-stakes commercial environment.",
      tech: ["Kafka", "Apache Ecosystem", "React Hooks", "Streams"],
    },
    {
      year: "2024",
      role: "Frontend Intern",
      company: "UnBoxing Community",
      logo: "/unboxing.png",
      summary: "First deep dive into professional-grade component architecture and user-centric frontend workflows.",
      highlights: [
        "Component-based UI Design",
        "State Optimization",
        "Pixel-perfect Implementation"
      ],
      growth: "The initial launchpad where I converted design passion into scalable code patterns.",
      tech: ["UI/UX", "JavaScript", "Responsive Design", "Git"],
    },
  ];

  return (
    <section id="experience" className="relative bg-background py-40 overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(138,201,38,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(196,255,97,0.1)_0%,transparent_70%)] opacity-50 pointer-events-none transition-colors" />

      <div className="w-full px-6 md:px-12 lg:px-24 relative z-20 mb-32">
        <div className="max-w-4xl">
          <h2 className="text-7xl md:text-9xl font-bold text-foreground tracking-tighter leading-none mb-8">
            Work <span className="text-lime-600 dark:text-lime-400">History</span>
          </h2>
          <p className="text-xl text-foreground/70 font-serif italic max-w-xl">
            Selected roles and professional milestones that defined my technical trajectory.
          </p>
        </div>
      </div>

      <div className="w-full z-20">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            {...exp}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 mt-32 relative z-20 flex flex-col md:flex-row justify-between items-center md:items-end border-t border-black/5 dark:border-white/10 pt-20">
        <div className="max-w-xs mt-10 text-center md:text-left">
          <p className="text-xs text-foreground uppercase tracking-[0.3em] font-bold">Involvement</p>
          <p className="mt-4 text-foreground/50 text-sm">Always looking to push the boundaries of what's possible in the digital realm.</p>
        </div>
        <MagneticButton strength={0.4}>
          <a href="/resume.pdf" download className="flex items-center gap-6 group mt-12 md:mt-0">
            <span className="text-foreground text-3xl font-bold tracking-tighter transition-all group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:tracking-normal group-hover:mr-4">View Full Resume</span>
            <ArrowUpRight className="text-foreground group-hover:text-lime-600 dark:group-hover:text-lime-400 group-hover:rotate-45 transition-all duration-500 " />
          </a>
        </MagneticButton>
      </div>
    </section>
  );
}
