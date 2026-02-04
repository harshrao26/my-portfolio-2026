'use client';
import ProcessCard from './ProcessCard';

export default function ProcessSection() {
    const processes = [
        {
            number: '01',
            title: 'Discover',
            description: 'Understanding your goals, users, and challenges through research and strategy.',
        },
        {
            number: '02',
            title: 'Design',
            description: 'Transforming insights into intuitive, beautiful, and functional product experiences.',
        },
        {
            number: '03',
            title: 'Deliver',
            description: 'Testing, refining, and launching the final product with clarity and precision.',
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-radial-lime opacity-10 blur-3xl" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-lime-400 font-serif italic text-lg mb-4">/ Our Projects Explained</p>
                    <h2 className="text-5xl md:text-6xl font-bold text-white">
                        Here's how it workps
                    </h2>
                </div>

                {/* Process Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {processes.map((process, index) => (
                        <ProcessCard
                            key={index}
                            number={process.number}
                            title={process.title}
                            description={process.description}
                            showLine={index < processes.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
