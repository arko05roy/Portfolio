"use client";

import { IconArrowUpRight } from "@tabler/icons-react";

interface ProjectInventionProps {
    title: string;
    description: string;
    techStack: string[];
    features: string[];
    link: string;
    number: string;
}

export default function ProjectInvention({ title, description, techStack, features, link, number }: ProjectInventionProps) {
    return (
        <div
            className="relative h-full w-full bg-neutral-900/40 backdrop-blur-md border border-white/10 p-6 flex flex-col gap-4 group cursor-pointer overflow-hidden"
            onClick={() => window.open(link, "_blank")}
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />

            {/* Patent Header */}
            <div className="flex justify-between items-start border-b border-white/10 pb-4 relative z-10">
                <div>
                    <div className="text-xs font-mono text-neutral-500 mb-1">FIG. {number}</div>
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-neutral-200 transition-colors">{title}</h3>
                </div>
                <IconArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-400 font-mono leading-relaxed relative z-10">
                {description}
            </p>

            {/* Technical Specs */}
            <div className="flex-1 flex flex-col gap-4 relative z-10">
                <div className="space-y-2">
                    <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Specifications</div>
                    <ul className="list-none space-y-1">
                        {features.map((feature, i) => (
                            <li key={i} className="text-xs text-neutral-300 flex items-start gap-2">
                                <span className="text-neutral-600 mt-0.5">├</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto">
                    <div className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-2">Components</div>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map(tech => (
                            <span key={tech} className="text-[10px] px-2 py-1 border border-white/10 bg-white/5 rounded text-neutral-400 font-mono">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -right-12 -bottom-12 w-40 h-40 border border-white/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -right-8 -bottom-8 w-24 h-24 border border-white/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-500 delay-75" />
        </div>
    );
}
