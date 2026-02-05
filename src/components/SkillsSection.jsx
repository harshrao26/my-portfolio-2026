'use client';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

const SkillCard2 = ({ name, iconUrl }) => {
  return (
    <div className="flex shrink-0 items-center justify-center gap-4 px-10 py-6 rounded-3xl  ">
      <div className="relative z-10 w-10 h-10 group-hover:scale-110 transition-transform duration-500">
        <img
          src={iconUrl}
          alt={name}
          className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(196,255,97,0.3)] dark:invert-0"
        />
      </div>
      <p className="relative z-10 text-gray-200 dark:text-gray-900 text-lg font-bold group-hover:text-black dark:group-hover:text-white transition-colors">
        {name}
      </p>
    </div>
  );
};
const SkillCard = ({ name, iconUrl }) => {
  return (
    <div className="flex  shrink-0 items-center justify-center gap-4 px-10 py-6 rounded-3xl bg-black/5 dark:bg-zinc-900/40 border border-black/5 dark:border-white/[0.05] hover:border-lime-600 dark:hover:border-lime-400/40 transition-all duration-500 hover:bg-white dark:hover:bg-zinc-900/60 hover:shadow-xl dark:hover:shadow-[0_20px_40px_rgba(196,255,97,0.05)] mx-4">
      <div className="relative z-10 w-10 h-10 group-hover:scale-110 transition-transform duration-500">
        <img
          src={iconUrl}
          alt={name}
          className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(196,255,97,0.3)] dark:invert-0"
        />
      </div>
      <p className="relative z-10 text-gray-600 dark:text-gray-100 text-lg font-bold group-hover:text-black dark:group-hover:text-white transition-colors">
        {name}
      </p>
    </div>
  );
};

function SkillsSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Double the skills for a seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="bg-background relative overflow-hidden transition-colors duration-500 pt-10">
      {/* Signature Lime Glows */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/[0.07] dark:bg-lime-400/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 w-[600px] h-[600px] bg-lime-400/[0.07] dark:bg-lime-400/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full relative z-10 flex flex-col items-center overflow-hidden">

        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-foreground text-center mb-24 tracking-tight leading-tight transition-colors">
          Modern Tools for <br />
          <span className="bg-gradient-to-r from-lime-600 to-lime-400 dark:from-lime-400 dark:to-lime-200 bg-clip-text text-transparent">Modern Experiences</span>
        </h2>

        {/* Marquee Container */}
        <div className="relative mb-4  w-full overflow-hidden  bg-lime-400 ">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex w-fit whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ scale: 1.02 }}
          >
            {duplicatedSkills.map((skill, index) => (
              <SkillCard2 key={index} {...skill} />
            ))}
          </motion.div>
        </div>
        <div className="relative w-full overflow-hidden mb-32 group">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex w-fit whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ scale: 1.02 }}
          >
            {duplicatedSkills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </motion.div>
        </div>

        {/* GitHub Contribution Heatmap */}
        <div className="w-full max-w-8xl mx-auto  rounded-3xl bg-black/5 dark:bg-zinc-900/40 border border-black/5 dark:border-white/[0.05] flex flex-col items-center">
          <div className="flex flex-col items-center mb-10 text-center">

            <h3 className="text-3xl md:text-5xl font-bold text-foreground">Coding Activity</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg">My contributions and commitment to the community</p>
          </div>

          <div className="w-full overflow-x-auto flex justify-center py-4 scrollbar-hide">
            {mounted && (
              <GitHubCalendar
                username="harshrao26"
                fontSize={14}
                blockSize={12}
                blockMargin={4}
                colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                theme={{
                  light: ['#f4f4f5', '#d9f99d', '#bef264', '#a3e635', '#65a30d'],
                  dark: ['#18181b', '#1a2e05', '#365314', '#4d7c0f', '#c4ff61'],
                }}
              />
            )}
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
