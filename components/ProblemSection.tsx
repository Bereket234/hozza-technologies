"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Cpu, ShieldAlert, AlertTriangle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const problems = [
  {
    icon: <Clock className="w-4 h-4 text-zinc-900" />,
    title: "Slow Development",
    description: "Launch dates slipping? We accelerate your core product delivery."
  },
  {
    icon: <Cpu className="w-4 h-4 text-zinc-900" />,
    title: "Bad Architecture",
    description: "Scalability issues? We build systems that grow with you."
  },
  {
    icon: <ShieldAlert className="w-4 h-4 text-zinc-900" />,
    title: "Missing Leadership",
    description: "Missing a technical bridge? We provide the leadership you need."
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-zinc-900" />,
    title: "No Expertise",
    description: "Need AI or backend depth? Our team covers every domain."
  }
];

export default function ProblemSection() {
  return (
    <section id="problems" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <ScrollReveal direction="up" className="mb-16">
              <span className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
                The Challenge
              </span>
              <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-zinc-900 mb-6">
                Why Software <br />
                <span className="text-zinc-300 italic">Projects Fail</span>
              </h2>
              <p className="text-base text-zinc-500 max-w-md mx-auto leading-relaxed">
                Most failures come from a lack of <span className="text-zinc-900 font-medium">integrated expertise.</span>
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {problems.map((problem, index) => (
                <ScrollReveal 
                  key={index} 
                  direction="up" 
                  delay={index * 0.1}
                  className="flex flex-col items-center text-center p-10 rounded-[2rem] border border-zinc-50 bg-white/50 hover:bg-white hover:border-zinc-100 hover:shadow-xl hover:shadow-zinc-100 transition-all duration-500 group"
                >
                  <div className="mb-6 text-center flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform">
                      {problem.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-zinc-900 mb-2 uppercase tracking-tight">{problem.title}</h3>
                    <p className="text-[11px] text-zinc-500 leading-relaxed mx-auto line-clamp-2 md:line-clamp-none">{problem.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
