'use client';

const SkillCard = ({ name, iconUrl }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-zinc-900/40 border border-white/[0.05] hover:border-lime-400/40 transition-all duration-500 hover:bg-zinc-900/60 hover:shadow-[0_20px_40px_rgba(196,255,97,0.05)]">
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-lime-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      
      <div className="relative z-10 w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-500">
        <img 
          src={iconUrl} 
          alt={name} 
          className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(196,255,97,0.3)]" 
        />
      </div>
      <p className="relative z-10 text-gray-400 text-sm font-medium group-hover:text-white transition-colors">
        {name}
      </p>
    </div>
  );
};

export default function SkillsSection() {
  const skills = [
    { name: "Next.js", iconUrl: "https://skillicons.dev/icons?i=nextjs" },
    { name: "React", iconUrl: "https://skillicons.dev/icons?i=react" },
    { name: "TypeScript", iconUrl: "https://skillicons.dev/icons?i=ts" },
    { name: "Tailwind", iconUrl: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Node.js", iconUrl: "https://skillicons.dev/icons?i=nodejs" },
    { name: "MongoDB", iconUrl: "https://skillicons.dev/icons?i=mongodb" },
    { name: "PostgreSQL", iconUrl: "https://skillicons.dev/icons?i=postgres" },
    { name: "Docker", iconUrl: "https://skillicons.dev/icons?i=docker" },
    { name: "AWS", iconUrl: "https://skillicons.dev/icons?i=aws" },
    { name: "Figma", iconUrl: "https://skillicons.dev/icons?i=figma" },
    { name: "GitHub", iconUrl: "https://skillicons.dev/icons?i=github" },
    { name: "Firebase", iconUrl: "https://skillicons.dev/icons?i=firebase" },
  ];

  return (
    <section id="skills" className="bg-black py-32 relative overflow-hidden">
      {/* Signature Lime Glows */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 flex flex-col items-center">
        {/* Top Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-950/30 border border-lime-400/20 mb-8">
          <span className="text-sm">🚀</span>
          <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">Tech We Use</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-20 tracking-tight leading-tight">
          The Tech That <br />
          <span className="bg-gradient-to-r from-lime-400 to-lime-200 bg-clip-text text-transparent">Powers My Work</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
