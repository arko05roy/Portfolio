"use client";

import { useState } from "react";
import Link from "next/link";
import SpotifyWidget from "./SpotifyWidget";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Translucent Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-md z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Toggle Button - Fixed to absolute top */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50 px-16 py-3 bg-neutral-800 border-x border-b border-neutral-700 rounded-b-2xl transition-all duration-300 hover:bg-neutral-700"
      >
        <svg
          className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Expandable Menu */}
      <nav
        onMouseLeave={() => setIsOpen(false)}
        className={`fixed inset-x-0 top-0 z-40 pt-20 pb-12 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-center gap-6">
          {/* Left Navigation */}
          <div className="flex items-center gap-2">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 text-sm font-medium text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-full transition-all hover:bg-white/5"
            >
              HOME
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 text-sm font-medium text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-full transition-all hover:bg-white/5"
            >
              ABOUT
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 text-sm font-medium text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-full transition-all hover:bg-white/5"
            >
              PROJECTS
            </Link>
          </div>

          {/* Spotify Widget - Center */}
          <SpotifyWidget />

          {/* Right Navigation */}
          <div className="flex items-center gap-2">
            <Link
              href="#github-activity"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 text-sm font-medium text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-full transition-all hover:bg-white/5"
            >
              GITHUB
            </Link>
            <Link
              href="#socials"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 text-sm font-medium text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-full transition-all hover:bg-white/5"
            >
              SOCIALS
            </Link>
            <Link
              href="#stats"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2.5 text-sm font-medium text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-full transition-all hover:bg-white/5"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
