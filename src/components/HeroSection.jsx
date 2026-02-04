'use client';
import Image from 'next/image';
import { Download } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center pt-20 transition-colors duration-500">

      <div className="mt-10 -mb-10 z-20">
        <div className="glass px-6 py-3 rounded-full flex items-center gap-3 border border-black/10 dark:border-white/20 shadow-sm">
          <span className="w-3 h-3 rounded-full bg-lime-500 animate-pulse shadow-[0_0_12px_rgba(138,201,38,0.6)] dark:shadow-[0_0_12px_#c4ff61]" />
          <span className="text-foreground font-medium text-sm whitespace-nowrap">Available for new opportunities</span>
        </div>
      </div>


      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-40 dark:opacity-100">
        <Image
          src="/bg3.webp"
          alt="Background"
          fill
          className="object-cover hue-rotate-150 brightness-110 dark:brightness-100 blur-sm grayscale-[0.5] dark:grayscale-0"
          priority
        />
      </div>

      <div className="absolute inset-0 z-0 flex items-center justify-center transition-all bg-gradient-to-t from-background/80 dark:from-black/40 to-transparent" />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(138,201,38,0.15)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(196,255,97,0.2)_0%,transparent_70%)] opacity-50 pointer-events-none" />

      {/* Main Container for Layered Text and Image */}
      <div className="relative w-full max-w-7xl mx-auto px-6 h-[700px] flex items-center justify-center">

        {/* IMAGE - Now positioned BEHIND the text */}
        <div className="absolute inset-0 z-10 flex items-center justify-center transition-all">
          <div className="relative w-[300px] h-[400px] sm:w-[500px] sm:h-[650px] lg:w-[600px] lg:h-[800px] mt-96 opacity-90 dark:opacity-100">
            <Image
              src="/1000453382.png"
              alt="Harsh Portrait"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* TEXT - Positioned in FRONT */}
        <div className="relative z-20 flex flex-col items-center text-center pointer-events-none mb-40 md:mb-64">
          <h1 className="text-foreground text-6xl md:text-9xl font-bold tracking-tight drop-shadow-sm dark:drop-shadow-2xl">
            Hi I'm <span className='text-lime-600 dark:text-lime-400'>Harsh</span><span className='text-foreground/50 animate-pulse'>!</span>
          </h1>
          <h2 className="font-serif italic text-foreground text-4xl md:text-[140px] leading-none opacity-95 drop-shadow-sm dark:drop-shadow-2xl whitespace-nowrap">
            Full Stack Developer
          </h2>
        </div>
      </div>

      {/* Footer Section: Trust & CTA */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-6 mb-12 mt-[-50px]">
        <MagneticButton strength={0.3}>
          <a
            href="#contact"
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-lg hover:bg-lime-600 dark:hover:bg-lime-400 transition-all hover:scale-105 shadow-xl block text-center"
          >
            Start a Project
          </a>
        </MagneticButton>
        <MagneticButton strength={0.3}>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 bg-white/10 dark:bg-white/5 text-foreground border border-black/10 dark:border-white/10 rounded-full font-bold text-lg hover:bg-black/5 dark:hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-md block text-center"
          >
            <Download size={20} />
            My Resume
          </a>
        </MagneticButton>
      </div>
    </section>
  );
}