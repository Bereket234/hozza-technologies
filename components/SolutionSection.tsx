"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const solutions = [
  {
    icon: <Database className="w-5 h-5 text-zinc-900" />,
    title: "Backend",
    description: "Scalable, secure, and performant server-side systems built for high traffic.",
    features: ["Microservices", "Cloud Native", "Real-time Systems"]
  },
  {
    icon: <Layout className="w-5 h-5 text-zinc-900" />,
    title: "Frontend",
    description: "Modern, responsive, and blazing-fast user interfaces with great UX.",
    features: ["React / Next.js", "Design Systems", "Web Performance"]
  },
  {
    icon: <Smartphone className="w-5 h-5 text-zinc-900" />,
    title: "Mobile",
    description: "Native and cross-platform mobile apps that users love to engage with.",
    features: ["iOS / Android", "React Native", "Flutter"]
  },
  {
    icon: <Sparkles className="w-5 h-5 text-zinc-900" />,
    title: "AI / ML",
    description: "Integrating intelligent features and LLMs to automate and enhance your product.",
    features: ["LLM Integration", "Predictive Models", "AI Agents"]
  }
];

export default function SolutionSection() {
  return (
    <section id="solutions" className="section-padding relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" className="text-center">
          <span className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
            The Solution
          </span>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-zinc-900 mb-8 max-w-3xl mx-auto">
            A Complete Product <br />
            <span className="text-zinc-300 italic">Engineering Team</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
            We provide the integrated expertise needed to turn complex ideas into <span className="text-zinc-900 font-medium">refined, production-ready software products.</span>
          </p>
        </ScrollReveal>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1}
              className="p-10 rounded-[2rem] border border-zinc-50 bg-white/50 hover:bg-white hover:border-zinc-100 hover:shadow-xl hover:shadow-zinc-100 transition-all duration-500 group flex flex-col items-center text-center"
            >
              <div className="flex flex-col h-full items-center">
                <div className="w-12 h-12 rounded-full bg-zinc-50 mb-10 flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform duration-500">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900 uppercase tracking-tight">{solution.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                  {solution.description}
                </p>
                
                <ul className="flex flex-wrap justify-center gap-2 pt-6 border-t border-zinc-50">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="px-3 py-1 rounded-full bg-zinc-50 text-[9px] font-bold uppercase tracking-wider text-zinc-400 border border-zinc-100">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div> */}
      </div>
    </section>
  );
}
