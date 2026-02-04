'use client';
import { GitHubCalendar } from 'react-github-calendar';

const SkillCard = ({ name, iconUrl }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-black/5 dark:bg-zinc-900/40 border border-black/5 dark:border-white/[0.05] hover:border-lime-600 dark:hover:border-lime-400/40 transition-all duration-500 hover:bg-white dark:hover:bg-zinc-900/60 hover:shadow-xl dark:hover:shadow-[0_20px_40px_rgba(196,255,97,0.05)]">
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-lime-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

      <div className="relative z-10 w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-500">
        <img
          src={iconUrl}
          alt={name}
          className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(196,255,97,0.3)] dark:invert-0"
        />
      </div>
      <p className="relative z-10 text-gray-600 dark:text-gray-400 text-sm font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
        {name}
      </p>
    </div>
  );
};

function SkillsSection() {
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
    <section id="skills" className="bg-background py-32 relative overflow-hidden transition-colors duration-500">
      {/* Signature Lime Glows */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/[0.07] dark:bg-lime-400/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/[0.07] dark:bg-lime-400/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 flex flex-col items-center">
        {/* Top Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-100 dark:bg-lime-950/30 border border-lime-200 dark:border-lime-400/20 mb-8 transition-colors">
          <span className="text-sm">🚀</span>
          <span className="text-[10px] font-bold text-lime-800 dark:text-white tracking-[0.2em] uppercase">Tech Stack</span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-foreground text-center mb-20 tracking-tight leading-tight transition-colors">
          Modern Tools for <br />
          <span className="bg-gradient-to-r from-lime-600 to-lime-400 dark:from-lime-400 dark:to-lime-200 bg-clip-text text-transparent">Modern Experiences</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-6xl mx-auto mb-32">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        {/* GitHub Contribution Heatmap */}
        <div className="w-full max-w-5xl mx-auto p-10 rounded-3xl bg-black/5 dark:bg-zinc-900/40 border border-black/5 dark:border-white/[0.05] flex flex-col items-center">
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-lime-100 dark:bg-lime-950/30 border border-lime-200 dark:border-lime-400/20">
              <span className="text-xs font-bold text-lime-800 dark:text-lime-400 tracking-wider uppercase">Open Source</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Coding Activity</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">My contributions and commitment to the community</p>
          </div>

          <div className="w-full overflow-x-auto flex justify-center py-4 scrollbar-hide">
            <GitHubCalendar
              username="itsharshrao"
              fontSize={14}
              blockSize={12}
              blockMargin={4}
              colorScheme="light"
              theme={{
                light: ['#f4f4f5', '#d9f99d', '#bef264', '#a3e635', '#65a30d'],
                dark: ['#18181b', '#1a2e05', '#365314', '#4d7c0f', '#c4ff61'],
              }}
            />
          </div>

          <div className="mt-8 flex items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-lime-400" />
              <span>Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-zinc-300 dark:bg-zinc-800" />
              <span>Resting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
