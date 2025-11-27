"use client";

import { motion } from "framer-motion";

const skills = {
    languages: ["JavaScript", "TypeScript", "Solidity", "Python", "HTML", "CSS", "C++", "C", "Rust", "Streamlit"],
    frameworks: ["React.js", "Next.js", "Node.js", "TailwindCSS", "Bootstrap", "ShadCN", "Aceternity", "Motia"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Prisma", "Supabase"],
    tools: ["Git", "GitHub", "Docker", "VS Code", "Foundry", "Hardhat", "Recoil", "Zustand", "Redis"]
};

export default function TechBlueprint() {
    return (
        <div className="relative w-full h-full p-6 overflow-hidden">
            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full relative z-10">
                {Object.entries(skills).map(([category, items], idx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative p-4 border border-white/5 bg-white/5 backdrop-blur-sm rounded-lg"
                    >
                        {/* Category Label */}
                        <div className="absolute -top-3 left-4 px-2 bg-black text-xs font-serif text-neutral-400 uppercase tracking-widest border border-white/10">
                            {category}
                        </div>

                        {/* Connecting Nodes */}
                        <div className="flex flex-wrap gap-3 mt-2">
                            {items.map((item, i) => (
                                <div key={item} className="flex items-center gap-2 group cursor-default">
                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors" />
                                    <span className="text-xs text-neutral-400 group-hover:text-white transition-colors font-mono">
                                        {item}
                                    </span>
                                    {/* Connecting Line (Visual only) */}
                                    {i < items.length - 1 && (
                                        <div className="w-4 h-px bg-neutral-800 group-hover:bg-neutral-600 transition-colors" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
