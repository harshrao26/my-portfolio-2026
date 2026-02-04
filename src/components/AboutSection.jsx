'use client';
import SkillBadge from './SkillBadge';

const LightningIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
  </svg>
);

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      <div className="container-custom relative z-10 flex flex-col items-center">
        
        
        <div className="relative w-full max-w-6xl flex items-center justify-center">
          
          {/* Left Badges - Staggered */}
          <div className="absolute left-0 hidden lg:flex flex-col gap-12 -translate-x-12">
            <div className="animate-fadeInLeft" style={{ animationDelay: '0.1s' }}>
              <SkillBadge icon={<LightningIcon />} label="Product Design" color="orange" />
            </div>
            <div className="animate-fadeInLeft translate-x-8" style={{ animationDelay: '0.2s' }}>
              <SkillBadge icon={<LightningIcon />} label="UX Design" color="blue" />
            </div>
            <div className="animate-fadeInLeft" style={{ animationDelay: '0.3s' }}>
              <SkillBadge icon={<LightningIcon />} label="User Research" color="purple" />
            </div>
          </div>

          {/* Main Focused Text */}
          <div className="text-center max-w-5xl px-4 animate-scaleIn">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight text-white mb-2">
              focus is on blending clear strategy,
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight text-white mb-2">
              thoughtful design, and user
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight text-white/50 mb-2">
              empathy to <span className="text-white/30">craft experiences</span>
            </h2>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight text-white/20">
              that solve real problems
            </h2>
          </div>

          {/* Right Badges - Staggered */}
          <div className="absolute right-0 hidden lg:flex flex-col gap-12 translate-x-12">
            <div className="animate-fadeInRight" style={{ animationDelay: '0.1s' }}>
              <SkillBadge icon={<LightningIcon />} label="Design Systems" color="yellow" />
            </div>
            <div className="animate-fadeInRight -translate-x-8" style={{ animationDelay: '0.2s' }}>
              <SkillBadge icon={<LightningIcon />} label="Usability Testing" color="pink" />
            </div>
            <div className="animate-fadeInRight" style={{ animationDelay: '0.3s' }}>
              <SkillBadge icon={<LightningIcon />} label="Brand Identity" color="lime" />
            </div>
          </div>

        </div>

        {/* Mobile Badges - Visible only on mobile */}
        <div className="flex flex-wrap justify-center gap-4 mt-16 lg:hidden">
          <SkillBadge icon={<LightningIcon />} label="Product Design" color="orange" />
          <SkillBadge icon={<LightningIcon />} label="UX Design" color="blue" />
          <SkillBadge icon={<LightningIcon />} label="User Research" color="purple" />
          <SkillBadge icon={<LightningIcon />} label="Design Systems" color="yellow" />
          <SkillBadge icon={<LightningIcon />} label="Usability Testing" color="pink" />
          <SkillBadge icon={<LightningIcon />} label="Brand Identity" color="lime" />
        </div>

        {/* Bottom Label for Next Section */}
       
        
      </div>
    </section>
  );
}
