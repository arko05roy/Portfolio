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
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconMail,
  IconCode,
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
    <div className="bg-[#050505] text-foreground font-sans selection:bg-white selection:text-black min-h-screen overflow-y-auto">
      {/* Animated Background */}
      <Background />

      {/* Grid Background Overlay */}
      <div className="grid-overlay fixed inset-0 opacity-20 pointer-events-none" />

      <Navbar />

      {/* Main stacking container */}
      <main className="relative min-h-screen">

        {/* Hero Section */}
        <section className="relative w-full h-[100vh] lg:h-[110vh] flex flex-col justify-end lg:overflow-visible overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/back.jpeg"
              alt="Hero Background"
              fill
              className="object-cover object-center md:object-bottom lg:object-cover lg:object-top scale-90 md:scale-90 lg:scale-100"
              priority
              quality={100}
              unoptimized
            />
            {/* Gradient Overlays for Fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
          </div>

          {/* Da Vinci Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Hero Text - Center Bottom */}
          <div className="absolute bottom-16 lg:-bottom-45 left-1/2 -translate-x-1/2 z-20 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-2" style={{ fontFamily: 'var(--font-serif), Georgia, serif' }}>
              Arko Roy
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-neutral-400 tracking-[0.3em] uppercase font-light">
              Fullstack Blockchain Dev
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a href="https://github.com/arko05roy" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <IconBrandGithub className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://x.com/ArkoDRoy" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <IconBrandX className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/arkoroyy" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <IconBrandLinkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>

          {/* Skills Overlay - Large screens only */}
          <div className="hidden lg:block absolute inset-0 z-20 p-8">
            {/* Top Left - Languages */}
            <div className="absolute top-8 left-8">
              <div className="text-xs font-serif text-neutral-400 uppercase tracking-widest mb-2">Languages</div>
              <div className="flex flex-wrap gap-2 max-w-[250px]">
                {["JavaScript", "TypeScript", "Solidity", "Python", "Rust", "C++"].map((item) => (
                  <span key={item} className="text-xs text-neutral-300 font-mono hover:text-white transition-colors cursor-default">{item}</span>
                ))}
              </div>
            </div>

            {/* Top Right - Frameworks */}
            <div className="absolute top-8 right-8 text-right">
              <div className="text-xs font-serif text-neutral-400 uppercase tracking-widest mb-2">Frameworks</div>
              <div className="flex flex-wrap gap-2 max-w-[250px] justify-end">
                {["React.js", "Next.js", "Node.js", "TailwindCSS", "ShadCN"].map((item) => (
                  <span key={item} className="text-xs text-neutral-300 font-mono hover:text-white transition-colors cursor-default">{item}</span>
                ))}
              </div>
            </div>

            {/* Bottom Left - Databases */}
            <div className="absolute bottom-28 left-8">
              <div className="text-xs font-serif text-neutral-400 uppercase tracking-widest mb-2">Databases</div>
              <div className="flex flex-wrap gap-2 max-w-[250px]">
                {["MongoDB", "PostgreSQL", "Firebase", "Prisma", "Supabase"].map((item) => (
                  <span key={item} className="text-xs text-neutral-300 font-mono hover:text-white transition-colors cursor-default">{item}</span>
                ))}
              </div>
            </div>

            {/* Bottom Right - Tools */}
            <div className="absolute bottom-28 right-8 text-right">
              <div className="text-xs font-serif text-neutral-400 uppercase tracking-widest mb-2">Tools</div>
              <div className="flex flex-wrap gap-2 max-w-[250px] justify-end">
                {["Git", "Docker", "Foundry", "Hardhat", "Redis"].map((item) => (
                  <span key={item} className="text-xs text-neutral-300 font-mono hover:text-white transition-colors cursor-default">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem] relative z-20 mt-10 lg:mt-50">

     

          {/* Tech Blueprint (Skills) - Hidden on lg as it's shown on hero */}
          <BentoItem
            className="md:col-span-3 md:row-span-2 lg:hidden"
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
