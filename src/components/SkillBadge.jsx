'use client';

export default function SkillBadge({ icon, label, color = 'orange' }) {
  const colorClasses = {
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    lime: 'bg-lime-400/10 text-lime-400 border-lime-400/20',
  };

  const iconColorClasses = {
    orange: 'bg-[#ff6b35]',
    blue: 'bg-[#4a9eff]',
    pink: 'bg-[#ff4a9e]',
    yellow: 'bg-[#ffd93d]',
    purple: 'bg-[#b84aff]',
    lime: 'bg-[#c4ff61]',
  };

  return (
    <div
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20 shadow-[0_4px_12px_rgba(0,0,0,0.1)] group"
    >
      <div className={`w-6 h-6 rounded-full ${iconColorClasses[color]} flex items-center justify-center text-white text-[10px] shadow-sm`}>
        {icon}
      </div>
      <span className="font-medium text-sm text-white/90 group-hover:text-white transition-colors">{label}</span>
    </div>
  );
}
