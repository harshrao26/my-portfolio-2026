'use client';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import MagneticButton from './MagneticButton';

export default function ProjectsSection() {

  const projects = [
    {
      title: 'Online Planet',
      description: 'Next-gen enterprise multi-vendor marketplace with AI-powered logistics, OCR onboarding, and real-time financial reconciliation.',
      challenge: 'Handling complex multi-vendor operations with deep integrations for logistics, payments, and AI-driven automation while maintaining a 95% reduction in server footprint.',
      features: [
        'AI-Powered Logistics Hub',
        'Automated Identity Verification (OCR)',
        'Gemini AI Business Coaching',
        '12-Stage Order Management',
        'Real-time Financial Reconciliation'
      ],
      tech: ['Next.js 15', 'Node.js', 'MongoDB', 'Gemini AI', 'Tailwind 4'],
      tags: ['Enterprise', 'E-Commerce', 'Fintech', 'AI'],
      image: '/onlineplanetCardBanner.png',
      link: '/projects/online-planet',
    },

  ];

  return (
    <section id="work" className="py-32 relative bg-background transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-400/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-400/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[1px] bg-lime-500 dark:bg-lime-400" />
              <span className="text-lime-600 dark:text-lime-400 font-semibold text-xs uppercase tracking-widest">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground mb-6 tracking-tighter leading-tight">
              My <span className="bg-gradient-to-r from-lime-600 to-lime-400 dark:from-lime-400 dark:to-lime-200 bg-clip-text text-transparent italic font-serif">Projects </span>
            </h2>
            <p className="text-foreground/60 text-base leading-relaxed">
              A curated collection of projects where strategy meets high-performance engineering.
              Click on a project to dive into the case study.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-foreground/50">
            <span>SCROLL TO EXPLORE</span>
            <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center animate-bounce">↓</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="block"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            </Link>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-24 pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-foreground/40 text-sm max-w-xs text-center md:text-left">
            Continuously building and shipping new ideas. More projects coming soon.
          </p>
          <MagneticButton strength={0.3}>
            <button className="px-10 py-5 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-all shadow-xl text-md">
              View All Archives →
            </button>
          </MagneticButton>
        </div>
      </div>

    </section>
  );
}
