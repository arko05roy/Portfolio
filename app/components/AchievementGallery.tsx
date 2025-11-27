"use client";

import { IconTrophy } from "@tabler/icons-react";

const achievements = [
    { place: "1st", event: "ETHGlobal New Delhi", competitors: "2000+", color: "text-yellow-500", border: "border-yellow-500/20", bg: "bg-yellow-500/10" },
    { place: "1st", event: "Build on CELO Kolkata", competitors: "100+", color: "text-yellow-500", border: "border-yellow-500/20", bg: "bg-yellow-500/10" },
    { place: "1st", event: "Avalanche Team1", competitors: "100+", color: "text-yellow-500", border: "border-yellow-500/20", bg: "bg-yellow-500/10" },
    { place: "1st", event: "Hack Heritage 2024", competitors: "1000+", color: "text-yellow-500", border: "border-yellow-500/20", bg: "bg-yellow-500/10" },
    { place: "2nd", event: "East India Blockchain Summit", competitors: "IIT Kharagpur", color: "text-neutral-300", border: "border-neutral-300/20", bg: "bg-neutral-300/10" },
    { place: "3rd", event: "Edu-Chain Regional", competitors: "Techno Main", color: "text-amber-700", border: "border-amber-700/20", bg: "bg-amber-700/10" },
];

export default function AchievementGallery() {
    return (
        <div className="h-full w-full p-6 bg-neutral-900/40 backdrop-blur-md border border-white/10 flex flex-col gap-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 z-10 relative">
                <h3 className="text-xl font-serif font-bold text-white">Hall of Fame</h3>
                <IconTrophy className="w-6 h-6 text-yellow-500" />
            </div>

            <div className="grid grid-cols-1 gap-3 overflow-y-auto custom-scrollbar z-10 relative pr-2">
                {achievements.map((ach, i) => (
                    <div key={i} className={`flex items-center gap-4 p-3 rounded-lg border ${ach.border} ${ach.bg} hover:bg-opacity-20 transition-all group`}>
                        <div className={`text-xl font-serif font-bold ${ach.color} w-12 text-center`}>{ach.place}</div>
                        <div className="h-8 w-px bg-white/10" />
                        <div className="flex-1">
                            <div className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">{ach.event}</div>
                            <div className="text-xs text-neutral-500 font-mono">{ach.competitors}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
        </div>
    );
}
