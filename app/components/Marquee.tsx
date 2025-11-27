"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
    items: string[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    className?: string;
}

export default function Marquee({ items, direction = "left", speed = "normal", className }: MarqueeProps) {
    const speedClass = {
        fast: "duration-[20s]",
        normal: "duration-[40s]",
        slow: "duration-[60s]",
    };

    return (
        <div className={cn("relative flex overflow-hidden group", className)}>
            <div className={cn("flex min-w-full shrink-0 gap-4 py-4 animate-scroll", direction === "right" && "direction-reverse", speedClass[speed])}>
                {items.map((item, idx) => (
                    <span
                        key={idx}
                        className="px-4 py-2 bg-neutral-900/50 border border-white/10 rounded-lg text-sm text-neutral-300 whitespace-nowrap backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                    >
                        {item}
                    </span>
                ))}
            </div>
            <div className={cn("flex min-w-full shrink-0 gap-4 py-4 animate-scroll", direction === "right" && "direction-reverse", speedClass[speed])} aria-hidden="true">
                {items.map((item, idx) => (
                    <span
                        key={idx}
                        className="px-4 py-2 bg-neutral-900/50 border border-white/10 rounded-lg text-sm text-neutral-300 whitespace-nowrap backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                    >
                        {item}
                    </span>
                ))}
            </div>

            {/* Fade Edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-neutral-900 to-transparent z-10" />
        </div>
    );
}
