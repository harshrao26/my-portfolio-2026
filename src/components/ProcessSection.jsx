'use client';
import ProcessCard from './ProcessCard';

export default function ProcessSection() {
    const processes = [
        {
            number: '01',
            title: 'Inquiry',
            description: 'Deep diving into the problem space, stakeholder interviews, and technical requirements gathering.',
        },
        {
            number: '02',
            title: 'Architecture',
            description: 'Planning scalable system designs and intuitive user flows before a single line of code is written.',
        },
        {
            number: '03',
            title: 'Execution',
            description: 'Clean, high-performance implementation with a focus on stability, speed, and pixel-perfection.',
        },
    ];

    return (
        <section id="process" className="py-40 relative bg-background transition-colors duration-500 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(138,201,38,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(196,255,97,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-[1px] bg-lime-500 dark:bg-lime-400" />
                            <span className="text-lime-600 dark:text-lime-400 font-semibold text-xs uppercase tracking-widest">Workflow</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-semibold text-foreground tracking-tighter leading-none">
                            The <span className="italic font-serif font-normal text-lime-600 dark:text-lime-400">Method</span>.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 max-w-7xl mx-auto">
                    {processes.map((process, index) => (
                        <ProcessCard
                            key={index}
                            {...process}
                            showLine={index < processes.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
