'use client';
import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

const LightningIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
  </svg>
);

export default function AboutSection() {
  const badgeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const rightBadgeVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="py-40 relative overflow-hidden bg-background transition-colors duration-500">
      <div className="container-custom relative z-10 flex flex-col items-center">

        <div className="relative w-full max-w-8xl flex items-center justify-center min-h-[400px]">

          {/* Left Badges */}
          <div className="absolute left-0 hidden lg:flex flex-col gap-10 -translate-x-12">
            {[
              { label: "Backend Scalability", color: "orange" },
              { label: "SEO Specialist", color: "green" },
              { label: "System Design", color: "purple" }
            ].map((badge, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={badgeVariants} className={i === 1 ? 'translate-x-8' : ''}>
                <SkillBadge icon={<LightningIcon />} label={badge.label} color={badge.color} />
              </motion.div>
            ))}
          </div>

          {/* Main Narrative */}
          <div className="text-center max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-4">
                Engineering products <br />
                with <span className="italic font-serif text-lime-600 dark:text-lime-400">precision</span> and
              </h2>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground/40">
                human-centric <span className="text-foreground/20">design.</span>
              </h2>

              <div className="mt-12 space-y-6">
                <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                  I bridge the gap between complex technical infrastructure and intuitive user interfaces, ensuring performance never compromises aesthetics.
                </p>
                <div className="glass-strong p-6 rounded-3xl max-w-2xl mx-auto border border-lime-500/10">
                  <p className="text-lg text-foreground/70 leading-relaxed ita lic">
                    Expert in <span className="text-lime-600 dark:text-lime-400 font-bold">Technical, On-page, and Off-page SEO.</span> I don&apos;t just build websites; I architect search-optimized experiences that dominate rankings and drive organic growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Badges */}
          <div className="absolute right-0 hidden lg:flex flex-col gap-10 translate-x-12">
            {[
              { label: "Product Strategy", color: "yellow" },
              { label: "React Architectures", color: "blue" },
              { label: "Interactive Motion", color: "lime" }
            ].map((badge, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rightBadgeVariants} className={i === 1 ? '-translate-x-8' : ''}>
                <SkillBadge icon={<LightningIcon />} label={badge.label} color={badge.color} />
              </motion.div>
            ))}
          </div>

        </div>

        {/* Mobile Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-20 lg:hidden px-4">
          <SkillBadge icon={<LightningIcon />} label="Backend Architect" color="orange" />
          <SkillBadge icon={<LightningIcon />} label="SEO Authority" color="green" />
          <SkillBadge icon={<LightningIcon />} label="System Design" color="purple" />
          <SkillBadge icon={<LightningIcon />} label="Strategy" color="yellow" />
          <SkillBadge icon={<LightningIcon />} label="React Expert" color="blue" />
          <SkillBadge icon={<LightningIcon />} label="Motion UI" color="lime" />
        </div>

      </div>
    </section>
  );
}
