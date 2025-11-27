"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import DrawerSection from "./components/DrawerSection";

const TOTAL_SECTIONS = 5;

export default function Home() {
  return (
    <div className="bg-[#050505] text-foreground font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Grid Background Overlay */}
      <div className="grid-overlay fixed inset-0" />

      {/* Vertical border lines */}
      <div className="fixed top-0 bottom-0 left-1/2 -translate-x-[450px] w-px bg-neutral-800/50 pointer-events-none z-0 hidden lg:block" />
      <div className="fixed top-0 bottom-0 left-1/2 translate-x-[450px] w-px bg-neutral-800/50 pointer-events-none z-0 hidden lg:block" />

      {/* Fixed Navbar */}
      <Navbar />

      <div className="relative z-10">

        {/* Section 1: Intro */}
        <DrawerSection index={0} totalSections={TOTAL_SECTIONS}>
          <div className="h-full flex items-center justify-center px-4">
            <div className="max-w-4xl w-full p-8 md:p-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-sm font-mono text-neutral-500 uppercase tracking-wider">Intro</span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-neutral-700 ring-4 ring-neutral-800/50">
                    <Image
                      src="https://github.com/arko05roy.png"
                      alt="Arko Roy"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-[#0a0a0a] flex items-center justify-center">
                    <span className="text-lg">👋</span>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                    Arko Roy
                    <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg>
                  </h1>
                  <p className="text-xl text-neutral-400 font-mono mb-4">Blockchain Full Stack Developer</p>
                  <p className="text-neutral-500 max-w-md">
                    Building the decentralized future with smart contracts, zero-knowledge proofs, and scalable web3 infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DrawerSection>

        {/* Section 2: At a Glance */}
        <DrawerSection index={1} totalSections={TOTAL_SECTIONS}>
          <div className="h-full flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl w-full p-8 md:p-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                <span className="text-sm font-mono text-neutral-500 uppercase tracking-wider">At a Glance</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Blockchain Developer</div>
                    <div className="text-sm text-neutral-500">@ Supermission</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">India</div>
                    <div className="text-sm text-neutral-500">IST Timezone</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold">arkoroy302@gmail.com</div>
                    <div className="text-sm text-neutral-500">Email</div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="text-sm text-neutral-500 mb-2">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {["Solidity", "TypeScript", "Next.js", "React", "Rust", "Go"].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs bg-neutral-800 border border-neutral-700 rounded-full text-blue-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="text-sm text-neutral-500 mb-2">Tools & Frameworks</div>
                  <div className="flex flex-wrap gap-2">
                    {["Foundry", "Hardhat", "Docker", "MongoDB", "Redis", "IPFS"].map((tool) => (
                      <span key={tool} className="px-3 py-1 text-xs bg-neutral-800 border border-neutral-700 rounded-full text-purple-400">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="https://github.com/arko05roy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50 transition-all group">
                <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center group-hover:bg-neutral-700 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/arkoroyy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50 transition-all group">
                <div className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">LinkedIn</span>
              </a>

              <a href="#" className="flex items-center gap-3 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50 transition-all group">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center border border-neutral-700">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">Twitter</span>
              </a>

              <a href="mailto:arkoroy302@gmail.com" className="flex items-center gap-3 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/50 transition-all group">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">Email</span>
              </a>
            </div>
            </div>
          </div>
        </DrawerSection>

        {/* Section 3: Project Directory */}
        <DrawerSection index={2} totalSections={TOTAL_SECTIONS}>
          <div className="h-full flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl w-full p-8 md:p-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-mono text-neutral-500 uppercase tracking-wider">Project Directory</span>
              </div>

              <div className="space-y-4">
              {/* Arx Protocol */}
              <Link href="https://arx-protocol.vercel.app/" target="_blank" className="block p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-xl font-bold text-white">
                      A
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">Arx Protocol</h3>
                      <span className="text-sm font-mono text-neutral-500">2025</span>
                    </div>
                  </div>
                  <span className="text-neutral-600 group-hover:text-white transition-colors text-2xl">↗</span>
                </div>
                <p className="text-neutral-400 mb-4">
                  Layer-3 blockchain on OP Stack featuring Proof-of-Impact consensus, modular smart-contract infrastructure, and cross-chain settlement into Celo → Ethereum.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["OP Stack", "Solidity", "Go", "Foundry", "Next.js", "Docker"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-neutral-800 border border-neutral-700 rounded-full text-neutral-400">{tag}</span>
                  ))}
                </div>
              </Link>

              {/* Velto */}
              <Link href="https://velto-os.vercel.app/" target="_blank" className="block p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl font-bold text-white">
                      V
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">Velto</h3>
                      <span className="text-sm font-mono text-neutral-500">2025</span>
                    </div>
                  </div>
                  <span className="text-neutral-600 group-hover:text-white transition-colors text-2xl">↗</span>
                </div>
                <p className="text-neutral-400 mb-4">
                  Universal AI memory layer that synchronizes context across ChatGPT, Claude and Cursor, cutting user rework by 70% with 3x faster insight discovery.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "MongoDB", "Redis", "Solidity", "MCP"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-neutral-800 border border-neutral-700 rounded-full text-neutral-400">{tag}</span>
                  ))}
                </div>
              </Link>

              {/* Tzunami */}
              <Link href="https://tzunami.vercel.app/" target="_blank" className="block p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-xl font-bold text-white">
                      T
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">Tzunami</h3>
                      <span className="text-sm font-mono text-neutral-500">2025</span>
                    </div>
                  </div>
                  <span className="text-neutral-600 group-hover:text-white transition-colors text-2xl">↗</span>
                </div>
                <p className="text-neutral-400 mb-4">
                  Privacy-preserving financial platform with Self.xyz ZK KYC, fhERC encrypted tokens, Groth16 proofs, and stealth address support.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Solidity", "Circom", "MongoDB", "ZK Proofs"].map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-neutral-800 border border-neutral-700 rounded-full text-neutral-400">{tag}</span>
                  ))}
                </div>
              </Link>
              </div>
            </div>
          </div>
        </DrawerSection>

        {/* Section 4: My Experience */}
        <DrawerSection index={3} totalSections={TOTAL_SECTIONS}>
          <div className="h-full flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl w-full p-8 md:p-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-sm font-mono text-neutral-500 uppercase tracking-wider">My Experience</span>
              </div>

              <div className="space-y-6">
              {/* Supermission */}
              <div className="relative pl-8 border-l-2 border-neutral-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0a0a0a]" />
                <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">Blockchain Full Stack Developer</h3>
                    <span className="text-sm font-mono text-blue-400">Oct 2025 — Current</span>
                  </div>
                  <div className="text-neutral-400 font-medium mb-3">Supermission</div>
                  <p className="text-neutral-500 text-sm">
                    Developed and integrated autonomous AI agents using x402 (Base), enabling multi-step task orchestration, tool execution, memory persistence, and cross-service reasoning through event-driven agent pipelines.
                  </p>
                </div>
              </div>

              {/* VENQ */}
              <div className="relative pl-8 border-l-2 border-neutral-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0a0a0a]" />
                <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">Blockchain Full Stack Developer Intern</h3>
                    <span className="text-sm font-mono text-purple-400">Jun 2025 — Sep 2025</span>
                  </div>
                  <div className="text-neutral-400 font-medium mb-3">VENQ</div>
                  <p className="text-neutral-500 text-sm">
                    Developed ERC-1155 fractionalization smart contract for real estate tokenization (10x growth). Revamped legacy platform improving performance by 60% with Next.js and Tailwind.
                  </p>
                </div>
              </div>

              {/* Research Commons */}
              <div className="relative pl-8 border-l-2 border-neutral-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-[#0a0a0a]" />
                <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">Frontend Developer Intern</h3>
                    <span className="text-sm font-mono text-green-400">Apr 2025 — Jun 2025</span>
                  </div>
                  <div className="text-neutral-400 font-medium mb-3">Research Commons</div>
                  <p className="text-neutral-500 text-sm">
                    Collaborated cross-functionally with backend and product teams to deliver responsive, modular UI components using Next.js and Tailwind CSS.
                  </p>
                </div>
              </div>

              {/* A1 Future Technologies */}
              <div className="relative pl-8 border-l-2 border-neutral-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-[#0a0a0a]" />
                <div className="p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">AI Developer Intern</h3>
                    <span className="text-sm font-mono text-orange-400">Feb 2025 — Apr 2025</span>
                  </div>
                  <div className="text-neutral-400 font-medium mb-3">A1 Future Technologies</div>
                  <p className="text-neutral-500 text-sm">
                    Built scalable AI-powered systems using Streamlit, cutting manual errors and improving efficiency by 80%.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </DrawerSection>

        {/* Section 5: My Achievements */}
        <DrawerSection index={4} totalSections={TOTAL_SECTIONS}>
          <div className="h-full flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl w-full p-8 md:p-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="text-sm font-mono text-neutral-500 uppercase tracking-wider">My Achievements</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-neutral-800 text-center">
                  <div className="text-4xl font-bold text-white mb-2">6+</div>
                  <div className="text-sm text-neutral-400">Hackathon Wins</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-neutral-800 text-center">
                  <div className="text-4xl font-bold text-white mb-2">2000+</div>
                  <div className="text-sm text-neutral-400">Competitors at ETHGlobal</div>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl border border-neutral-800 text-center">
                  <div className="text-4xl font-bold text-white mb-2">4+</div>
                  <div className="text-sm text-neutral-400">Internships</div>
                </div>
              </div>

              {/* Achievement List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🏆</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Bounty Winner at ETHGlobal New Delhi</h4>
                    <p className="text-sm text-neutral-500">2000+ participants worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🥇</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Winner at Build on CELO Kolkata Hackathon</h4>
                    <p className="text-sm text-neutral-500">100+ teams competed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🥇</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">First Place at Avalanche Team1 Hackathon</h4>
                    <p className="text-sm text-neutral-500">Kolkata, 100+ teams</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🥇</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">First Place Winner at Hack Heritage 2024</h4>
                    <p className="text-sm text-neutral-500">1000+ participants</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🥈</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Second Place at East India Blockchain Summit 2025</h4>
                    <p className="text-sm text-neutral-500">IIT Kharagpur</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🥉</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Third Place at Edu-Chain Regional Hackathon</h4>
                    <p className="text-sm text-neutral-500">Techno Main Salt Lake</p>
                  </div>
                </div>
              </div>

              {/* Footer inside last section */}
              <footer className="text-center text-sm text-neutral-600 pt-12 mt-12 border-t border-neutral-800">
                <p>&copy; {new Date().getFullYear()} Arko Roy. All rights reserved.</p>
              </footer>
            </div>
          </div>
        </DrawerSection>
      </div>
    </div>
  );
}
