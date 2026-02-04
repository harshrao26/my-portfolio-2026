'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center overflow-hidden pt-20">

      <div className=" mt-10 -mb-10">
             <div className="glass px-6 py-3 rounded-full flex items-center gap-3 border border-white/20">
                <span className="w-3 h-3 rounded-full bg-lime-400 animate-pulse shadow-[0_0_12px_#c4ff61]" />
                <span className="text-white font-medium text-sm whitespace-nowrap">Available for now opportunities</span>
             </div>
          </div>


      {/* Background Image with Overlay */}
      <div className="absolute -top-0 inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/bg3.webp"
          alt="Background"
          fill
          className="object-cover hue-rotate-150 contrast-00 blur-sm"
          priority
        />
         
      </div>

      <div className="absolute inset-0 z-0 flex items-center justify-center transition-all bg-gradient-to-t from-black/40 to-transparent">
        
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(196,255,97,0.2)_0%,transparent_70%)] opacity-50 pointer-events-none" />

      {/* Main Container for Layered Text and Image */}
      <div className="relative w-full max-w-7xl mx-auto px-6 h-[700px] flex items-center justify-center">
        
        {/* IMAGE - Now positioned BEHIND the text */}
        <div className="absolute inset-0 z-50 flex items-center justify-center transition-all">
          <div className="relative w-[300px] h-[400px] sm:w-[500px] sm:h-[650px] lg:w-[600px] lg:h-[800px] mt-96">
            <Image
              src="/1000453382.png"
              alt="Harsh Portrait"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        

        {/* TEXT - Positioned in FRONT and "a little bit of head" (overlapping top of image) */}
        <div className="relative z-10 flex flex-col items-center text-center pointer-events-none mb-40 md:mb-64">
          <h1 className="text-white text-6xl md:text-9xl font-bold tracking-tight drop-shadow-2x l">
            Hi I'm <span className='text-lime-400'>Harsh</span><span className='text-white/50 animate-pulse'>!</span>
          </h1>
          <h2 className="font-serif italic text-white text-4xl md:text-[140px] leading-none opacity-95 drop-shadow-2xl whitespace-nowrap">
            Full Stack Developer
          </h2>
        </div>

        {/* Side Elements (Availability & Bio) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left Side: Availability Pill */}
          
          {/* Right Side: Bio Text */}
          
        </div>
      </div>

      {/* Footer Section: Trust & CTA */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-end gap-10 mb-12 mt-[-50px]">
         {/* Client Trust Section */}
         <>
          
         </>
         {/* CTA Button */}
         {/* <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-md flex items-center gap-3 hover:bg-lime-400 transition-all hover:scale-105 shadow-xl">
            → Get in Touch
         </button> */}
      </div>

      
    </section>
  );
}