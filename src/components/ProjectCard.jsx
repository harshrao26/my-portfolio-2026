'use client';
import Image from 'next/image';

export default function ProjectCard({ title, description, tags, image, link }) {
  return (
    <a
      href={link || '#'}
      className="group block glass-strong rounded-3xl overflow-hidden hover-lift"
    >
      {/* Project Image */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-lime-400/10 to-lime-600/5">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-smooth-slow"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl opacity-20">🎨</div>
          </div>
        )}
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
          <span className="text-white font-semibold text-lg">View Project →</span>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-lime-400 transition-smooth">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
