'use client';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import MagneticButton from './MagneticButton';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Lawfinity Portal',
      description: 'A comprehensive legal-tech management suite designed to automate workflow for law firms in India.',
      challenge: 'Legal professionals handle massive amounts of sensitive data and fragmented workflows. We needed a secure, high-performance platform that simplifies case management.',
      features: ['Automated Document Generation', 'Case Lifecycle Tracking', 'Secure Client Communication', 'Advanced Search & Analytics'],
      tech: ['Next.js 15', 'Node.js', 'PostgreSQL', 'Tailwind'],
      tags: ['Legal Tech', 'SaaS', 'Full Stack'],
      image: null,
      link: '#',
    },
    {
      title: 'NovaCubs App',
      description: 'A modern productivity mobile application with highly intuitive UX and seamless offline-sync capabilities.',
      challenge: 'The market is saturated with complex productivity apps. Our goal was to strip away the noise and create a lightning-fast experience that works everywhere.',
      features: ['Offline-First Store (PouchDB)', 'Biometric Auth', 'Custom Widget System', 'Cross-Platform Sync'],
      tech: ['React Native', 'Firebase', 'State Management'],
      tags: ['Mobile App', 'UX Research', 'Fintech'],
      image: null,
      link: '#',
    },
    {
      title: 'FlowSync Dashboard',
      description: 'Enterprise-grade visualization dashboard for real-time monitoring of industrial export data.',
      challenge: 'Adi Laxmi Export needed to visualize gigabytes of real-time sensor data without browser stutter or lag.',
      features: ['Real-time Kafka Streams', 'D3.js Visualization', 'Low-latency Alerts', 'Predictive Analysis'],
      tech: ['Kafka', 'React', 'D3.js', 'WebSockets'],
      tags: ['Data Viz', 'Enterprise', 'Kafka'],
      image: null,
      link: '#',
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
              <span className="text-lime-600 dark:text-lime-400 font-bold text-xs uppercase tracking-widest">Selected Works</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tighter">
              Crafting <span className="italic font-serif font-normal">digital</span> resilience.
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed">
              A curated collection of projects where strategy meets high-performance engineering.
              Click on a project to dive into the case study.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold text-foreground/50">
            <span>SCROLL TO EXPLORE</span>
            <div className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center animate-bounce">↓</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                link={project.link}
              />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-24 pt-12 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-foreground/40 text-sm max-w-xs text-center md:text-left">
            Continuously building and shipping new ideas. More projects coming soon.
          </p>
          <MagneticButton strength={0.3}>
            <button className="px-10 py-5 bg-foreground text-background rounded-full font-bold hover:scale-105 transition-all shadow-xl text-md">
              View All Archives →
            </button>
          </MagneticButton>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
