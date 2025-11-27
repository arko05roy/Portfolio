"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import SpotifyWidget from "./SpotifyWidget";

function MagneticLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const xPos = clientX - (left + width / 2);
    const yPos = clientY - (top + height / 2);
    x.set(xPos);
    y.set(yPos);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: mouseX, y: mouseY }}>
      <Link
        href={href}
        ref={ref}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative px-5 py-2.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors block"
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-neutral-800 rounded-lg -z-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
    </motion.div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Translucent Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-xl z-40 transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Toggle Button - Floating Block */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-3 bg-neutral-900/90 border border-neutral-800 backdrop-blur-md rounded-xl hover:bg-neutral-800 transition-colors group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex flex-col gap-1.5 items-center justify-center w-6">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="w-6 h-0.5 bg-neutral-400 group-hover:bg-white transition-colors"
          />
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-neutral-400 group-hover:bg-white transition-colors"
          />
          <motion.div
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="w-6 h-0.5 bg-neutral-400 group-hover:bg-white transition-colors"
          />
        </div>
      </motion.button>

      {/* Expandable Menu */}
      <nav
        className={`fixed inset-x-0 top-0 z-40 pt-32 pb-12 transition-all duration-500 ${isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-12 pointer-events-none"
          }`}
      >
        <div className="max-w-xl mx-auto px-8">
          <div className="flex flex-col items-center gap-4">
            <MagneticLink href="#about" onClick={() => setIsOpen(false)}>HOME</MagneticLink>
            <MagneticLink href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</MagneticLink>
            <MagneticLink href="#experience" onClick={() => setIsOpen(false)}>EXPERIENCE</MagneticLink>
            <MagneticLink href="#contact" onClick={() => setIsOpen(false)}>CONTACT</MagneticLink>

            {/* Spotify Widget */}
            <div className="mt-8">
              <SpotifyWidget />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
