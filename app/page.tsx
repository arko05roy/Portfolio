"use client";

import { useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import TechBlueprint from "./components/TechBlueprint";
import ProjectInvention from "./components/ProjectInvention";
import AchievementGallery from "./components/AchievementGallery";
import { BentoGrid } from "./components/BentoGrid";
import { BentoItem } from "./components/BentoItem";
import Lenis from "lenis";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconCode,
  IconTrophy,
  IconBriefcase,
  IconArrowUpRight,
} from "@tabler/icons-react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#050505] text-foreground font-sans selection:bg-white selection:text-black">
      {/* Animated Background */}
      <Background />

      {/* Grid Background Overlay */}
      <div className="grid-overlay fixed inset-0 opacity-20 pointer-events-none" />

      <Navbar />

      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Arko Roy
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Blockchain Full Stack Developer building the future of Web3.
            Crafting elegant solutions with robust infrastructure.
          </p>
        </div>

        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">

          {/* Profile Card - Compact */}
          <BentoItem
            className="md:col-span-2 md:row-span-1"
            title={
              <span className="text-2xl text-gradient font-serif font-bold">About Me</span>
            }
            description={
              <div className="space-y-2 text-base mt-2 font-mono text-neutral-400">
                <p>
                  I&apos;m a passionate developer based in Kolkata, India, specializing in full-stack blockchain development.
                  I build scalable decentralized applications and infrastructure.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 backdrop-blur-md">Blockchain Dev</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 backdrop-blur-md">Full Stack</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 backdrop-blur-md">System Design</span>
                </div>
              </div>
            }
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-white/5 relative overflow-hidden group-hover/bento:border-white/10 transition-colors">
                <Image
                  src="https://github.com/arko05roy.png"
                  alt="Arko Roy"
                  fill
                  className="object-cover opacity-80 group-hover/bento:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Da Vinci Overlay */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none">
                  <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20" />
                  <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20" />
                </div>
              </div>
            }
          />

          {/* Socials - Stacked */}
          <BentoItem
            className="md:col-span-1 md:row-span-1"
            title="Connect"
            description="Social Platforms"
            header={
              <div className="flex flex-col gap-2 h-full justify-center">
                <div
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-md group"
                  onClick={() => window.open("https://github.com/arko05roy", "_blank")}
                >
                  <IconBrandGithub className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
                  <span className="text-sm text-neutral-300 font-mono group-hover:text-white transition-colors">GitHub</span>
                </div>
                <div
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#0A66C2]/10 border border-[#0A66C2]/20 hover:bg-[#0A66C2]/20 transition-colors cursor-pointer backdrop-blur-md group"
                  onClick={() => window.open("https://www.linkedin.com/in/arkoroyy", "_blank")}
                >
                  <IconBrandLinkedin className="w-6 h-6 text-[#0A66C2] group-hover:text-white transition-colors" />
                  <span className="text-sm text-neutral-300 font-mono group-hover:text-white transition-colors">LinkedIn</span>
                </div>
                <div
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-md group"
                  onClick={() => window.location.href = "mailto:arkoroy302@gmail.com"}
                >
                  <IconMail className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
                  <span className="text-sm text-neutral-300 font-mono group-hover:text-white transition-colors">Email</span>
                </div>
              </div>
            }
            icon={<IconArrowUpRight className="w-4 h-4 text-neutral-500" />}
          />

          {/* Tech Blueprint (Skills) */}
          <BentoItem
            className="md:col-span-3 md:row-span-2"
            title={<span className="font-serif text-xl">Technical Blueprint</span>}
            description="Comprehensive Skill Schematic"
            header={<TechBlueprint />}
            icon={<IconCode className="w-4 h-4 text-neutral-500" />}
          />

          {/* Project 1: Arx Protocol - Invention Style */}
          <BentoItem
            className="md:col-span-2 md:row-span-1 p-0 overflow-hidden"
            header={
              <ProjectInvention
                title="Arx Protocol"
                description="Layer-3 blockchain on OP Stack featuring Proof-of-Impact consensus and modular smart-contract infrastructure."
                techStack={["OP Stack", "Solidity", "Go", "Foundry"]}
                features={[
                  "Proof-of-Impact Consensus Mechanism",
                  "Modular TaskRegistry & FundingPool",
                  "Cross-chain Settlement (Celo → Ethereum)"
                ]}
                link="https://arx-protocol.vercel.app/"
                number="01"
              />
            }
          />

          {/* Project 2: Velto - Invention Style */}
          <BentoItem
            className="md:col-span-1 md:row-span-1 p-0 overflow-hidden"
            header={
              <ProjectInvention
                title="Velto"
                description="Universal AI memory layer synchronizing context across LLMs."
                techStack={["Next.js", "Redis", "MCP"]}
                features={[
                  "Cross-LLM Context Sync",
                  "70% Reduction in Rework",
                  "Real-time Memory Vectorization"
                ]}
                link="https://velto-os.vercel.app/"
                number="02"
              />
            }
          />

          {/* Project 3: Tzunami - Invention Style */}
          <BentoItem
            className="md:col-span-3 md:row-span-1 p-0 overflow-hidden"
            header={
              <ProjectInvention
                title="Tzunami"
                description="Privacy-preserving financial platform combining ZK-KYC with encrypted token protocols."
                techStack={["Solidity", "Circom", "ZK Proofs", "Next.js"]}
                features={[
                  "Self.xyz Zero-Knowledge KYC",
                  "fhERC Encrypted Token Protocol",
                  "Groth16 Proofs & ElGamal Encryption"
                ]}
                link="https://tzunami.vercel.app/"
                number="03"
              />
            }
          />

          {/* Experience - Detailed */}
          <BentoItem
            className="md:col-span-2 md:row-span-2"
            title={<span className="font-serif text-xl">Experience Log</span>}
            description="Professional Timeline"
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900/30 border border-white/5 p-6 flex flex-col gap-8 overflow-y-auto custom-scrollbar relative">
                {/* Vertical Line */}
                <div className="absolute left-[29px] top-6 bottom-6 w-px bg-gradient-to-b from-neutral-700 via-neutral-700 to-transparent" />

                <div className="pl-8 relative group">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-neutral-900 border border-neutral-500 group-hover:bg-white group-hover:border-white transition-colors" />
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-serif font-bold text-neutral-200 text-lg">Supermission</h4>
                    <span className="text-xs font-mono text-neutral-500 bg-white/5 px-2 py-1 rounded border border-white/5">Oct 2025 - Present</span>
                  </div>
                  <p className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-wider">Blockchain Full Stack Developer</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Developed autonomous AI agents using x402 (Base), enabling multi-step task orchestration and cross-service reasoning.
                  </p>
                </div>

                <div className="pl-8 relative group">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-neutral-900 border border-neutral-500 group-hover:bg-white group-hover:border-white transition-colors" />
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-serif font-bold text-neutral-200 text-lg">VENQ</h4>
                    <span className="text-xs font-mono text-neutral-500 bg-white/5 px-2 py-1 rounded border border-white/5">Jun - Sep 2025</span>
                  </div>
                  <p className="text-xs font-mono text-purple-400 mb-2 uppercase tracking-wider">Blockchain Developer Intern</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Deployed ERC-1155 fractionalization contracts for real estate tokenization. Migrated legacy platform to Next.js, improving performance by 60%.
                  </p>
                </div>

                <div className="pl-8 relative group">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-neutral-900 border border-neutral-500 group-hover:bg-white group-hover:border-white transition-colors" />
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-serif font-bold text-neutral-200 text-lg">Research Commons</h4>
                    <span className="text-xs font-mono text-neutral-500 bg-white/5 px-2 py-1 rounded border border-white/5">Apr - Jun 2025</span>
                  </div>
                  <p className="text-xs font-mono text-emerald-400 mb-2 uppercase tracking-wider">Frontend Developer Intern</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Delivered responsive, modular UI components using Next.js and Tailwind CSS.
                  </p>
                </div>

                <div className="pl-8 relative group">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-neutral-900 border border-neutral-500 group-hover:bg-white group-hover:border-white transition-colors" />
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-serif font-bold text-neutral-200 text-lg">A1 Future Technologies</h4>
                    <span className="text-xs font-mono text-neutral-500 bg-white/5 px-2 py-1 rounded border border-white/5">Feb - Apr 2025</span>
                  </div>
                  <p className="text-xs font-mono text-yellow-400 mb-2 uppercase tracking-wider">AI Developer Intern</p>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Built scalable AI-powered systems using Streamlit, improving efficiency by 80%.
                  </p>
                </div>
              </div>
            }
            icon={<IconBriefcase className="w-4 h-4 text-neutral-500" />}
          />

          {/* Achievements - Gallery Style */}
          <BentoItem
            className="md:col-span-1 md:row-span-2 p-0 overflow-hidden"
            header={<AchievementGallery />}
          />

        </BentoGrid>
      </main>
    </div>
  );
}
