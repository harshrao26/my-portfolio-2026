'use client';
import Image from 'next/image';

export default function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="group relative bg-black/5 dark:bg-zinc-900/40 border border-black/5 dark:border-white/[0.05] rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
      {/* Project Image */}
      <div className="relative h-72 overflow-hidden bg-zinc-100 dark:bg-zinc-800 transition-colors duration-500">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-lime-400/20 to-lime-600/10 dark:from-lime-400/10 dark:to-lime-600/5">
            <span className="text-8xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">🚀</span>
          </div>
        )}

        {/* Modern Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4">
          <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
            <span className="font-semibold text-xl">→</span>
          </div>
          <span className="text-white font-semibold text-sm tracking-widest uppercase py-2 px-4 bg-black/20 backdrop-blur-md rounded-full border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            Case Study
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-10 transition-colors duration-500">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags && tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] font-semibold uppercase tracking-widest rounded-full bg-lime-100 dark:bg-lime-900/20 text-lime-700 dark:text-lime-400 border border-lime-200 dark:border-lime-500/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-3xl font-semibold text-foreground mb-4 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
          {title}
        </h3>
        <p className="text-foreground/50 text-base leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
