'use client';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'NovaCubs Mobile App',
      description: 'A modern mobile application with intuitive UX design and seamless user flows for enhanced productivity.',
      tags: ['Mobile Design', 'UX/UI', 'Prototyping'],
      image: null,
      link: '#',
    },
    {
      title: 'FlowSync Dashboard',
      description: 'Enterprise dashboard redesign focusing on data visualization and user empathy for complex workflows.',
      tags: ['Dashboard', 'Data Viz', 'Enterprise'],
      image: null,
      link: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Complete design system and user interface for a modern e-commerce platform with focus on conversion.',
      tags: ['E-Commerce', 'Design System', 'Branding'],
      image: null,
      link: '#',
    },
  ];

  return (
    <section id="work" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-radial-lime-left opacity-5" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-lime-400 font-serif italic text-lg mb-4">/ Featured Work</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Selected Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects where strategy, design, and user empathy come together
            to solve real problems.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 glass-strong text-white rounded-full font-medium hover-glow transition-smooth text-lg border border-white/20 hover:border-lime-400/50">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
}
