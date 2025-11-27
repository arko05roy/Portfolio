"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import DrawerSection from "./components/DrawerSection";

const TOTAL_SECTIONS = 5;

export default function Home() {
  return (
    <div className="bg-[#050505] text-foreground font-sans selection:bg-white selection:text-black">
      {/* Grid Background Overlay */}
      <div className="grid-overlay fixed inset-0 pointer-events-none" />

      {/* Vertical border lines */}
      <div className="fixed top-0 bottom-0 left-1/2 -translate-x-[450px] w-px bg-neutral-800/50 pointer-events-none z-50 hidden lg:block" />
      <div className="fixed top-0 bottom-0 left-1/2 translate-x-[450px] w-px bg-neutral-800/50 pointer-events-none z-50 hidden lg:block" />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main stacking container */}
      <main className="relative">

        {/* Section 1: Intro */}
        <DrawerSection index={0} totalSections={TOTAL_SECTIONS}>
          <div className="h-full flex items-center justify-center px-4">
            <div className="max-w-3xl w-full">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 py-12 px-8">
                {/* Profile Image with Flag */}
                <div className="relative flex-shrink-0">
                  <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-neutral-800">
                    <Image
                      src="https://github.com/arko05roy.png"
                      alt="Arko Roy"
                      width={176}
                      height={176}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* India Flag Badge */}
                  <div className="absolute top-0 left-0 w-10 h-7 rounded-sm overflow-hidden shadow-lg">
                    <div className="w-full h-1/3 bg-[#FF9933]" />
                    <div className="w-full h-1/3 bg-white flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full border border-[#000080]" />
                    </div>
                    <div className="w-full h-1/3 bg-[#138808]" />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center md:text-left flex-1 pt-4">
                    <h1 className="text-3xl font-medium text-zinc-50 mb-3 flex items-center justify-center md:justify-start gap-2">
                    Arko Roy
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </h1>
                  <p className="text-zinc-500">Blockchain Full Stack Developer</p>
                </div>
              </div>

              {/* Divider */}
              <div className="section-divider" />

              {/* Info Grid */}
              <div className="py-8 px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
                  {/* Left Column */}
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span className="text-zinc-300">Blockchain Developer <span className="text-blue-400">@Supermission</span></span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-zinc-300">IST <span className="text-zinc-500">// +5:30 UTC</span></span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-zinc-300">Kolkata, India</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-zinc-300">arkoroy302@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span className="text-zinc-300">arkoroy.dev</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-zinc-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-zinc-300">he/him</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="section-divider" />

              {/* Social Links Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <a href="https://github.com/arko05roy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-6 hover:bg-zinc-900/50 transition-colors border-b border-r border-zinc-800/50 group">
                  <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-zinc-100 font-medium">GitHub</div>
                    <div className="text-zinc-500 text-sm">arko05roy</div>
                  </div>
                  <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">↗</span>
                </a>

                <a href="https://www.linkedin.com/in/arkoroyy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-6 hover:bg-zinc-900/50 transition-colors border-b border-zinc-800/50 group">
                  <div className="w-14 h-14 bg-[#0A66C2] rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-zinc-100 font-medium">LinkedIn</div>
                    <div className="text-zinc-500 text-sm">arkoroyy</div>
                  </div>
                  <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">↗</span>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-6 hover:bg-zinc-900/50 transition-colors border-b border-r border-zinc-800/50 group">
                  <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center border border-zinc-800">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-zinc-100 font-medium">X (formerly Twitter)</div>
                    <div className="text-zinc-500 text-sm">@arko05roy</div>
                  </div>
                  <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">↗</span>
                </a>

                <a href="mailto:arkoroy302@gmail.com" className="flex items-center gap-5 p-6 hover:bg-zinc-900/50 transition-colors border-b border-zinc-800/50 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-zinc-100 font-medium">Email</div>
                    <div className="text-zinc-500 text-sm">arkoroy302@gmail.com</div>
                  </div>
                  <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">↗</span>
                </a>
              </div>
            </div>
          </div>
        </DrawerSection>

        {/* Section 2: Skills & Stack */}
        <DrawerSection index={1} totalSections={TOTAL_SECTIONS}>
          <div className="h-full flex items-center justify-center px-4">
            <div className="max-w-3xl w-full">
              {/* Section Header */}
              <div className="py-8 px-8 border-b border-zinc-800/50">
                <h2 className="text-2xl font-medium text-zinc-100">Skills & Stack</h2>
                <p className="text-zinc-500 mt-2">Technologies I work with daily</p>
              </div>

              {/* Languages */}
              <div className="py-6 px-8 border-b border-zinc-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="text-zinc-400 text-sm">Languages</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Solidity", "TypeScript", "JavaScript", "Rust", "Go", "Python"].map((lang) => (
                    <span key={lang} className="px-4 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:border-zinc-700 transition-colors">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="py-6 px-8 border-b border-zinc-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <span className="text-zinc-400 text-sm">Frameworks & Libraries</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Node.js", "Express", "Foundry", "Hardhat", "Ethers.js", "Viem"].map((fw) => (
                    <span key={fw} className="px-4 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:border-zinc-700 transition-colors">
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Infrastructure */}
              <div className="py-6 px-8 border-b border-zinc-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-zinc-400 text-sm">Tools & Infrastructure</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Git", "MongoDB", "PostgreSQL", "Redis", "IPFS", "AWS", "Vercel"].map((tool) => (
                    <span key={tool} className="px-4 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:border-zinc-700 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blockchain & Web3 */}
              <div className="py-6 px-8">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-zinc-400 text-sm">Blockchain & Web3</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Ethereum", "OP Stack", "Polygon", "Celo", "ZK Proofs", "Circom", "ERC Standards", "DeFi"].map((chain) => (
                    <span key={chain} className="px-4 py-2 text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:border-zinc-700 transition-colors">
                      {chain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DrawerSection>

        {/* Section 3: Project Directory */}
        <DrawerSection index={2} totalSections={TOTAL_SECTIONS}>
          <div className="h-full flex items-center justify-center px-4">
            <div className="max-w-3xl w-full">
              {/* Section Header */}
              <div className="py-8 px-8 border-b border-zinc-800/50">
                <h2 className="text-2xl font-medium text-zinc-100">Projects</h2>
                <p className="text-zinc-500 mt-2">Featured work and open source contributions</p>
              </div>

              {/* Arx Protocol */}
              <Link href="https://arx-protocol.vercel.app/" target="_blank" className="flex items-start gap-5 p-6 hover:bg-zinc-900/50 transition-colors border-b border-zinc-800/50 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
                  A
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-zinc-100 font-medium group-hover:text-blue-400 transition-colors">Arx Protocol</h3>
                      <span className="text-zinc-500 text-sm">2025</span>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">↗</span>
                  </div>
                  <p className="text-zinc-500 text-sm mt-2 line-clamp-2">
                    Layer-3 blockchain on OP Stack featuring Proof-of-Impact consensus, modular smart-contract infrastructure, and cross-chain settlement.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["OP Stack", "Solidity", "Go", "Foundry"].map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-zinc-900 border border-zinc-800 rounded text-zinc-500">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>

              {/* Velto */}
              <Link href="https://velto-os.vercel.app/" target="_blank" className="flex items-start gap-5 p-6 hover:bg-zinc-900/50 transition-colors border-b border-zinc-800/50 group">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
                  V
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-zinc-100 font-medium group-hover:text-purple-400 transition-colors">Velto</h3>
                      <span className="text-zinc-500 text-sm">2025</span>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">↗</span>
                  </div>
                  <p className="text-zinc-500 text-sm mt-2 line-clamp-2">
                    Universal AI memory layer that synchronizes context across ChatGPT, Claude and Cursor, cutting user rework by 70%.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Next.js", "MongoDB", "Redis", "MCP"].map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-zinc-900 border border-zinc-800 rounded text-zinc-500">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>

              {/* Tzunami */}
              <Link href="https://tzunami.vercel.app/" target="_blank" className="flex items-start gap-5 p-6 hover:bg-zinc-900/50 transition-colors border-b border-zinc-800/50 group">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
                  T
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-zinc-100 font-medium group-hover:text-emerald-400 transition-colors">Tzunami</h3>
                      <span className="text-zinc-500 text-sm">2025</span>
                    </div>
                    <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">↗</span>
                  </div>
                  <p className="text-zinc-500 text-sm mt-2 line-clamp-2">
                    Privacy-preserving financial platform with Self.xyz ZK KYC, fhERC encrypted tokens, Groth16 proofs, and stealth addresses.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Solidity", "Circom", "ZK Proofs", "Next.js"].map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-zinc-900 border border-zinc-800 rounded text-zinc-500">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </DrawerSection>

        {/* Section 4: My Experience */}
        <DrawerSection index={3} totalSections={TOTAL_SECTIONS}>
          <div className="h-full flex flex-col justify-center px-4">
            <div className="max-w-3xl w-full mx-auto">
              {/* Section Header */}
              <div className="py-8 px-8 border-b border-zinc-800/50">
                <h2 className="text-2xl font-medium text-zinc-100">Experience</h2>
                <p className="text-zinc-500 mt-2">A journey through my professional career</p>
              </div>

              {/* Timeline */}
              <div className="py-8 px-8">
                {/* Timeline Line with months */}
                <div className="relative">
                  {/* Month labels */}
                  <div className="flex justify-between text-xs text-zinc-600 mb-3">
                    <span>Feb</span>
                    <span>Apr</span>
                    <span>Jun</span>
                    <span>Aug</span>
                    <span>Oct</span>
                    <span>Dec</span>
                  </div>

                  {/* Timeline bar */}
                  <div className="relative h-2 bg-zinc-800/50 rounded-full overflow-hidden">
                    {/* A1 Future Tech - Feb to Apr */}
                    <div className="absolute top-0 bottom-0 bg-zinc-600 rounded-full" style={{ left: '0%', width: '20%' }} />
                    {/* Research Commons - Apr to Jun */}
                    <div className="absolute top-0 bottom-0 bg-zinc-500 rounded-full" style={{ left: '20%', width: '20%' }} />
                    {/* VENQ - Jun to Sep */}
                    <div className="absolute top-0 bottom-0 bg-zinc-400 rounded-full" style={{ left: '40%', width: '30%' }} />
                    {/* Supermission - Oct to Dec */}
                    <div className="absolute top-0 bottom-0 bg-zinc-200 rounded-full" style={{ left: '80%', width: '20%' }} />
                  </div>

                  {/* Dots */}
                  <div className="absolute top-[18px] left-0 w-2 h-2 bg-zinc-900 border border-zinc-600 rounded-full -translate-x-1/2" />
                  <div className="absolute top-[18px] left-[20%] w-2 h-2 bg-zinc-900 border border-zinc-500 rounded-full -translate-x-1/2" />
                  <div className="absolute top-[18px] left-[40%] w-2 h-2 bg-zinc-900 border border-zinc-400 rounded-full -translate-x-1/2" />
                  <div className="absolute top-[18px] left-[70%] w-2 h-2 bg-zinc-900 border border-zinc-600 rounded-full -translate-x-1/2" />
                  <div className="absolute top-[18px] left-[80%] w-2 h-2 bg-zinc-900 border border-zinc-200 rounded-full -translate-x-1/2" />
                  <div className="absolute top-[18px] right-0 w-2 h-2 bg-zinc-200 rounded-full translate-x-1/2" />
                </div>
              </div>

              {/* Experience Cards */}
              <div className="border-t border-zinc-800/50">
                {/* Supermission */}
                <div className="flex items-center gap-5 p-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 text-zinc-300 text-sm font-medium">
                    S
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-zinc-100">Supermission</span>
                      <span className="text-zinc-600 text-xs">Oct — Present</span>
                    </div>
                    <span className="text-zinc-500 text-sm">Blockchain Full Stack Developer</span>
                  </div>
                </div>

                {/* VENQ */}
                <div className="flex items-center gap-5 p-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 text-zinc-300 text-sm font-medium">
                    V
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-zinc-100">VENQ</span>
                      <span className="text-zinc-600 text-xs">Jun — Sep</span>
                    </div>
                    <span className="text-zinc-500 text-sm">Blockchain Developer Intern</span>
                  </div>
                </div>

                {/* Research Commons */}
                <div className="flex items-center gap-5 p-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 text-zinc-300 text-sm font-medium">
                    RC
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-zinc-100">Research Commons</span>
                      <span className="text-zinc-600 text-xs">Apr — Jun</span>
                    </div>
                    <span className="text-zinc-500 text-sm">Frontend Developer Intern</span>
                  </div>
                </div>

                {/* A1 Future Technologies */}
                <div className="flex items-center gap-5 p-5 hover:bg-zinc-900/30 transition-colors">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0 text-zinc-300 text-sm font-medium">
                    A1
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-zinc-100">A1 Future Technologies</span>
                      <span className="text-zinc-600 text-xs">Feb — Apr</span>
                    </div>
                    <span className="text-zinc-500 text-sm">AI Developer Intern</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DrawerSection>

        {/* Section 5: My Achievements */}
        <DrawerSection index={4} totalSections={TOTAL_SECTIONS}>
          <div className="h-full flex items-center justify-center px-4">
            <div className="max-w-3xl w-full">
              {/* Section Header */}
              <div className="py-8 px-8 border-b border-zinc-800/50">
                <h2 className="text-2xl font-medium text-zinc-100">Achievements</h2>
                <p className="text-zinc-500 mt-2">Hackathons, competitions, and recognition</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 border-b border-zinc-800/50">
                <div className="p-6 text-center border-r border-zinc-800/50">
                  <div className="text-3xl font-medium text-zinc-100">6+</div>
                  <div className="text-zinc-500 text-sm mt-1">Hackathon Wins</div>
                </div>
                <div className="p-6 text-center border-r border-zinc-800/50">
                  <div className="text-3xl font-medium text-zinc-100">2000+</div>
                  <div className="text-zinc-500 text-sm mt-1">Competitors</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-3xl font-medium text-zinc-100">4+</div>
                  <div className="text-zinc-500 text-sm mt-1">Internships</div>
                </div>
              </div>

              {/* Achievement List */}
              <div className="flex items-center gap-4 p-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0 text-yellow-500">
                  1st
                </div>
                <div className="flex-1">
                  <div className="text-zinc-100 font-medium">ETHGlobal New Delhi</div>
                  <div className="text-zinc-500 text-sm">Bounty Winner // 2000+ participants</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0 text-yellow-500">
                  1st
                </div>
                <div className="flex-1">
                  <div className="text-zinc-100 font-medium">Build on CELO Kolkata</div>
                  <div className="text-zinc-500 text-sm">Winner // 100+ teams</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0 text-yellow-500">
                  1st
                </div>
                <div className="flex-1">
                  <div className="text-zinc-100 font-medium">Avalanche Team1 Hackathon</div>
                  <div className="text-zinc-500 text-sm">First Place // Kolkata</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0 text-yellow-500">
                  1st
                </div>
                <div className="flex-1">
                  <div className="text-zinc-100 font-medium">Hack Heritage 2024</div>
                  <div className="text-zinc-500 text-sm">First Place // 1000+ participants</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                <div className="w-10 h-10 bg-zinc-500/10 rounded-lg flex items-center justify-center flex-shrink-0 text-zinc-400">
                  2nd
                </div>
                <div className="flex-1">
                  <div className="text-zinc-100 font-medium">East India Blockchain Summit 2025</div>
                  <div className="text-zinc-500 text-sm">Second Place // IIT Kharagpur</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0 text-amber-600">
                  3rd
                </div>
                <div className="flex-1">
                  <div className="text-zinc-100 font-medium">Edu-Chain Regional Hackathon</div>
                  <div className="text-zinc-500 text-sm">Third Place // Techno Main Salt Lake</div>
                </div>
              </div>

              {/* Footer */}
              <footer className="text-center text-zinc-600 text-sm py-8 border-t border-zinc-800/50">
                <p>&copy; {new Date().getFullYear()} Arko Roy. Built with Next.js</p>
              </footer>
            </div>
          </div>
        </DrawerSection>
      </main>
    </div>
  );
}
