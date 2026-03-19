"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Sparkles, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const models = [
  {
    title: "Full Product",
    description: "End-to-end delivery of your product from discovery to launch. We handle everything.",
    icon: <Code className="w-5 h-5 text-zinc-900" />,
    features: ["Discovery & MVP Scope", "Design & UX", "Full-stack Engineering", "Launch Support"]
  },
  {
    title: "Team Augmentation",
    description: "Senior engineers integrated into your team to accelerate development and quality.",
    icon: <Users className="w-5 h-5 text-zinc-900" />,
    features: ["Backend Specialists", "Frontend Experts", "Mobile Devs", "Tech Leads"]
  },
  {
    title: "AI Product Dev",
    description: "Specialized engineering to integrate LLMs, build AI agents, and custom ML systems.",
    icon: <Sparkles className="w-5 h-5 text-zinc-900" />,
    features: ["LLM Integration", "RAG Systems", "AI Strategy", "Model Fine-tuning"]
  }
];

export default function EngagementModels({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="engagement" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up" className="text-center mb-24">
          <span className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
            Collaborate
          </span>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-zinc-900 mb-8">
            Flexible Ways to <br />
            <span className="text-zinc-300 italic">Work With Us</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
            Whether you need a full team or specialized experts, we offer engagement models that <span className="text-zinc-900 font-medium">fit your startup's needs.</span>
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1}
              className="p-10 rounded-[2rem] border border-zinc-50 bg-white/50 hover:bg-white hover:border-zinc-100 hover:shadow-xl hover:shadow-zinc-100 transition-all duration-500 group flex flex-col items-center text-center"
            >
              <div className="flex flex-col h-full items-center">
                <div className="w-12 h-12 rounded-full bg-zinc-50 mb-10 flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform duration-500">
                  {model.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-zinc-900 uppercase tracking-tight">{model.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-10 flex-grow">
                  {model.description}
                </p>
                
                <ul className="flex flex-wrap justify-center gap-2 mb-10 pt-6 border-t border-zinc-50 w-full">
                  {model.features.map((feature, fIndex) => (
                    <li key={fIndex} className="px-3 py-1 rounded-full bg-zinc-50 text-[9px] font-bold uppercase tracking-wider text-zinc-400 border border-zinc-100">
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={onContactClick}
                  className="w-full py-4 rounded-2xl bg-zinc-900 text-white font-bold text-sm tracking-wide uppercase hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-zinc-200"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
