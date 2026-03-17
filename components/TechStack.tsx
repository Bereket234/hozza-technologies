"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const tech = [
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "Kubernetes", category: "Cloud" },
  { name: "OpenAI", category: "AI" },
  { name: "PyTorch", category: "AI" },
  { name: "Pinecone", category: "AI" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" className="text-center mb-24">
          <span className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
            Infrastructure
          </span>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-zinc-900 mb-8">
            Expertly Curated <br />
            <span className="text-zinc-300 italic">Technology Stack</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
            We use the best tools for the job, ensuring <span className="text-zinc-900 font-medium">speed, reliability, and modern engineering standards.</span>
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Scroll Rows */}
          <div className="flex flex-col gap-6">
            <TechRow items={tech.slice(0, 8)} speed={40} />
            <TechRow items={tech.slice(8)} speed={50} direction="reverse" />
          </div>
          
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}

function TechRow({ items, speed, direction = "normal" }: { items: typeof tech, speed: number, direction?: "normal" | "reverse" }) {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        animate={{ 
          x: direction === "normal" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex gap-6 whitespace-nowrap"
      >
        {[...items, ...items].map((t, i) => (
          <div 
            key={i} 
            className="px-10 py-5 rounded-2xl bg-white border border-zinc-100 flex flex-col items-center justify-center min-w-[200px] shadow-sm hover:border-zinc-900 transition-all group"
          >
            <span className="text-zinc-900 font-bold uppercase tracking-tight text-lg mb-1">{t.name}</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-bold">{t.category}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
