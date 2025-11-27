"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface DrawerSectionProps {
  children: React.ReactNode;
  index: number;
  totalSections: number;
  className?: string;
}

export default function DrawerSection({
  children,
  index,
  totalSections,
  className = "",
}: DrawerSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  // Smooth spring animation for natural feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // First section is always visible, others animate in
  const isFirst = index === 0;

  // 3D rotation that flattens as section comes into view (drawer opening)
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], isFirst ? [0, 0, 0] : [65, 25, 0]);

  // Scale for depth perception - starts smaller and grows
  const scale = useTransform(smoothProgress, [0, 0.5, 1], isFirst ? [1, 1, 1] : [0.8, 0.92, 1]);

  // Translate Y for the drawer sliding up effect
  const translateY = useTransform(smoothProgress, [0, 1], isFirst ? [0, 0] : [150, 0]);

  // Opacity for smooth fade in
  const opacity = useTransform(smoothProgress, [0, 0.3, 1], isFirst ? [1, 1, 1] : [0, 0.7, 1]);

  // Blur effect for depth of field
  const blur = useTransform(smoothProgress, [0, 0.5, 1], isFirst ? [0, 0, 0] : [4, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className={`h-screen w-full ${className}`}
      style={{
        position: "sticky",
        top: 0,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          y: translateY,
          opacity,
          transformOrigin: "center top",
          transformStyle: "preserve-3d",
          filter: useTransform(blur, (v) => `blur(${v}px)`),
        }}
        className="drawer-section section-glow h-full w-full"
      >
        <motion.div
          className="bg-[#0a0a0a] h-full w-full overflow-hidden stack-shadow border-t border-neutral-800/50"
          style={{
            boxShadow: useTransform(
              smoothProgress,
              [0, 1],
              [
                "0 -30px 60px -15px rgba(0, 0, 0, 0.7), 0 20px 50px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.03)",
                "0 -10px 30px -10px rgba(0, 0, 0, 0.3), 0 10px 30px -5px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              ]
            ),
          }}
        >
          {/* Top edge highlight for 3D effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="h-full w-full overflow-y-auto">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
