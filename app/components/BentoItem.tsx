"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export const BentoItem = ({
    className,
    title,
    description,
    header,
    icon,
    onClick,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-neutral-900/40 backdrop-blur-xl border border-white/10 justify-between flex flex-col space-y-4 relative overflow-hidden",
                className
            )}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01, rotateX: 2, rotateY: 2, z: 10 }}
            onClick={onClick}
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/bento:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
                }}
            />

            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover/bento:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent z-10 pointer-events-none" />

            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200 relative z-20">
                <div className="flex items-center gap-2 mb-2">
                    {icon}
                    <div className="font-sans font-bold text-neutral-200">
                        {title}
                    </div>
                </div>
                <div className="font-sans font-normal text-neutral-400 text-xs">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
