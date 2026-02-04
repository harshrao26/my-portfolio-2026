'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const ExperienceItem = ({ year, role, company, summary, highlights, growth, tech, isLast }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative py-12 border-t border-white/10 transition-all duration-700 ease-in-out ${isLast ? 'border-b' : ''} cursor-crosshair`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Hover Effect */}
      <div className={`absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />
      
      {/* Moving Accent Line */}
      <div className={`absolute left-0 top-0 h-full w-[2px] bg-lime-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500`} />

      <div className="container-custom relative z-20">
        <div className="flex flex-col md:grid md:grid-cols-[150px_1fr_200px] items-start md:items-center gap-8">
          
          {/* Year Column */}
          <div className="text-xl font-medium text-white/80 group-hover:text-lime-400 transition-colors duration-500">
            {year}
          </div>

          {/* Main Content Column */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                {role}
              </h3>
              <span className="hidden md:block text-2xl text-white/50 group-hover:text-lime-400/20 transition-colors">—</span>
              <p className="text-2xl text-white/80 font-serif italic group-hover:text-white transition-colors">
                {company}
              </p>
            </div>
            
            {/* Expanded Content */}
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isHovered ? 'max-h-[500px] opacity-100 mt-12' : 'max-h-0 opacity-0'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 py-4">
                <div className="space-y-8">
                  <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                    {summary}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lime-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Core Impact</h4>
                      <ul className="space-y-3">
                        {highlights.map((h, i) => (
                          <li key={i} className="text-gray-300 text-sm flex gap-3">
                            <span className="text-lime-400">/</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">The Evolution</h4>
                      <p className="text-gray-400 text-sm leading-relaxed italic">
                        {growth}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-end items-end">
                   <div className="flex flex-wrap justify-end gap-3 mt-auto">
                     {tech.map((t, i) => (
                       <span key={i} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-white/60 tracking-widest uppercase">
                         {t}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interaction Hint */}
          <div className="hidden md:flex justify-end pr-4">
            <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-lime-400 border-lime-400 -rotate-45' : ''}`}>
               <ArrowUpRight className={`transition-colors ${isHovered ? 'text-black' : 'text-white/30'}`} size={20} />
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
      year: "2025",
      role: "Full Stack Developer",
      company: "Lawfinity India",
      summary: "Leading high-impact web initiatives. My work here centralizes legal workflows through intuitive, performance-first design systems and robust backend integrations.",
      highlights: [
        "Advanced Next.js 15 Architectures",
        "Scale-ready Backend Infrastructure",
        "Collaborative Stakeholder Tools"
      ],
      growth: "Transitioned from pure design into full-stack orchestration, leading the technical direction for upcoming legal-tech suites.",
      tech: ["Architecture", "Next.js", "Node", "PostgreSQL"],
    },
    {
      year: "2024",
      role: "Team Leader",
      company: "Propques",
      summary: "Spearheaded the software development lifecycle for diverse real estate and workspace management platforms.",
      highlights: [
        "Team Management & Mentorship",
        "Cross-functional Product Strategy",
        "End-to-end Project Delivery"
      ],
      growth: "Promoted to Team Leader within 6 months, scaling from a solo contributor to managing a 5+ developer crew.",
      tech: ["Management", "React", "State Management", "Leadership"],
    },
    {
      year: "2024",
      role: "Kafka Engineer",
      company: "Adi Laxmi Export",
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
    <section id="experience" className="relative bg-black py-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-10 select-none pointer-events-none">
        <Image
          src="/bg5.webp"
          alt="Technical Journey Background"
          fill
          className="object-cover opacity-40 hue-rotate-150"
          priority
        />
       </div>

      <div className="container-custom relative z-20 mb-32">
        <div className="max-w-4xl">
           <h2 className="text-7xl md:text-9xl font-bold text-white tracking-tighter leading-none mb-8">
              Work <span className="text-lime-400">History</span>
           </h2>
           <p className="text-xl text-white/80 font-serif italic max-w-xl">
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

      <div className="container-custom mt-32 relative z-20 flex justify-between items-end border-t border-white/10 pt-16">
         <div className="max-w-xs mt-10">
           <p className="text-xs text-white uppercase tracking-[0.3em] font-bold">Involvement</p>
           <p className="mt-4 text-white text-sm">Always looking to push the boundaries of what's possible in the digital realm.</p>
         </div>
         <a href="#" className="flex items-center gap-6 group">
            <span className="text-white text-3xl font-bold tracking-tighter transition-all group-hover:text-lime-400 group-hover:tracking-normal group-hover:mr-4">View Resume</span>
            <ArrowUpRight className="text-white group-hover:text-lime-400 group-hover:rotate-45 transition-all duration-500 " />
         </a>
      </div>
    </section>
  );
}
