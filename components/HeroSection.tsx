"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, MessageSquare, Smartphone, Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-16 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-zinc-50 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-[120px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Content */}
          <div className="flex-1 text-center lg:text-left relative z-20">
            <ScrollReveal direction="up">
              <span className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-8 block">
                Product Engineering for Startups
              </span>
              <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-zinc-900 mb-8">
                From Idea to <br />
                <span className="text-zinc-300 italic">Scalable Product</span> <br />
                We Deliver.
              </h1>
              <p className="text-base md:text-lg text-zinc-500 max-w-xl mb-12 leading-relaxed mx-auto lg:mx-0">
                We are a high-performance product agency helping founders turn vision into <span className="text-zinc-900 font-medium">sophisticated software products</span> through integrated engineering excellence.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button className="px-12 py-5 rounded-full bg-zinc-900 text-white font-bold text-[12px] uppercase tracking-wide hover:bg-zinc-800 transition-all shadow-2xl shadow-zinc-200">
                  Start Your Project
                </button>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-zinc-900 text-zinc-900" />
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-9 h-9 rounded-full border-4 border-white bg-zinc-100 shadow-sm overflow-hidden">
                           <img src={`/upwork-icon.png`} alt="founder" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <span>Trusted by 20+ founders</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        {/* Hero Visual - Abstract Architecture */}
        <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center lg:z-10 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-50 to-indigo-50/20 rounded-full blur-3xl animate-pulse -z-10" />
          <ArchitectureVisual />
          
          {/* Floating Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -bottom-25 -right-4 lg:-right-10 -translate-y-1/2 w-64 p-6 bg-white rounded-[2rem] shadow-2xl border border-zinc-100 hidden md:block z-40"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-100">
                <img src="/upwork-icon.png" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-zinc-900 tracking-tight">Dylan Ramirez</p>
                <p className="text-[8px] text-zinc-400 font-bold uppercase tracking-wider">CEO and founder, Withoutpost</p>
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 leading-relaxed italic mb-4">
              "Bereket's team didn't just write code; they <span className="text-zinc-900 font-medium">built a product</span> that saved us months of rework."
            </p>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-2 h-2 fill-zinc-900 text-zinc-900" />
              ))}
            </div>
          </motion.div>

          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-12 h-12 bg-white rounded-2xl shadow-2xl border border-zinc-100 flex items-center justify-center hidden lg:flex"
          >
             <div className="w-6 h-1 border-b border-zinc-200" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-20 w-10 h-10 bg-white rounded-full shadow-2xl border border-zinc-100 flex items-center justify-center hidden lg:flex"
          >
             <div className="w-2 h-2 rounded-full bg-zinc-900" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureVisual() {
  const nodes = [
    { icon: <Terminal className="w-5 h-5" />, label: "Systems", angle: -40, delay: 0 },
    { icon: <Smartphone className="w-5 h-5" />, label: "Mobile", angle: 40, delay: 0.2 },
    { icon: <MessageSquare className="w-5 h-5" />, label: "Intelligent", angle: 140, delay: 0.4 },
    { icon: <div className="w-5 h-5 border border-zinc-900 rounded-sm" />, label: "Interface", angle: 220, delay: 0.6 },
  ];

  return (
    <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
      {/* Background Rings */}
      <div className="absolute inset-0 border border-zinc-50 rounded-full opacity-50" />
      <div className="absolute inset-12 border border-zinc-50 rounded-full opacity-30" />
      <div className="absolute inset-24 border border-zinc-50 rounded-full opacity-10" />

      {/* Connection Lines (Rendered first to be in background) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
        {nodes.map((node, i) => (
          <ConnectionLine key={`line-${i}`} angle={node.angle} delay={node.delay} />
        ))}
      </svg>

      {/* Central Node */}
      <motion.div
        animate={{ 
          scale: [1, 1.02, 1],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-[2.5rem] bg-white border border-zinc-100 flex items-center justify-center shadow-2xl shadow-zinc-200/50 z-20 group-hover:scale-105 transition-transform duration-500"
      >
        <div className="w-24 h-24 rounded-3xl bg-zinc-900 flex items-center justify-center shadow-xl">
          <Cpu className="w-10 h-10 text-white" />
        </div>
      </motion.div>

      {/* Satellite Nodes */}
      {nodes.map((node, i) => (
        <SatelliteNode 
          key={`node-${i}`}
          icon={node.icon}
          label={node.label}
          angle={node.angle}
          delay={node.delay}
        />
      ))}
    </div>
  );
}

function ConnectionLine({ angle, delay }: { angle: number, delay: number }) {
  const radius = 180;
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.line
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      transition={{ delay: delay + 0.6, duration: 1.5 }}
      x1="250" y1="250" // Center of the 500x500 container
      x2={250 + (x * 0.7)} y2={250 + (y * 0.7)}
      stroke="currentColor"
      className="text-zinc-300"
      strokeWidth="1.5"
      strokeDasharray="4 4"
    />
  );
}

function SatelliteNode({ icon, label, angle, delay }: { icon: React.ReactNode, label: string, angle: number, delay: number }) {
  const radius = 180;
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-30"
    >
      <div className="w-14 h-14 rounded-2xl bg-white shadow-xl border border-zinc-50 flex items-center justify-center text-zinc-900 hover:border-zinc-900 transition-all duration-300">
        {icon}
      </div>
      <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em]">{label}</span>
    </motion.div>
  );
}
