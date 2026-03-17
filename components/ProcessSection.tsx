"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { Search, PenTool, Code, CheckCircle, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    title: "Discovery",
    description: "We dive deep into your goals and market to define the core product scope.",
    icon: <Search className="w-5 h-5 text-zinc-900" />,
  },
  {
    title: "Architecture",
    description: "Designing scalable, future-proof infrastructures tailored to your needs.",
    icon: <PenTool className="w-5 h-5 text-zinc-900" />,
  },
  {
    title: "Development",
    description: "High-quality, sprint-based development with constant feedback loops.",
    icon: <Code className="w-5 h-5 text-zinc-900" />,
  },
  {
    title: "QA & Testing",
    description: "Rigorous quality assurance for a refined, production-ready experience.",
    icon: <CheckCircle className="w-5 h-5 text-zinc-900" />,
  },
  {
    title: "Launch",
    description: "Successful deployment followed by monitoring and growth strategy.",
    icon: <Rocket className="w-5 h-5 text-zinc-900" />,
  }
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section id="process" className="relative lg:h-[250vh] bg-white" ref={containerRef}>
      <div className="lg:sticky lg:top-0 lg:h-screen w-full flex flex-col justify-center overflow-hidden section-padding lg:py-0">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal direction="up" className="text-center mb-16 lg:mb-24">
            <span className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
              Methodology
            </span>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-zinc-900 mb-8">
              How We Deliver <br />
              <span className="text-zinc-300 italic">Successful Products</span>
            </h2>
            <p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
              Our process is designed for clarity and quality, bridging the gap between <span className="text-zinc-900 font-medium">ideas and robust implementations.</span>
            </p>
          </ScrollReveal>

          <div className="relative pt-10">
          {/* Curved Timeline SVG (Desktop) */}
          <div className="absolute top-[32px] left-0 w-full h-[100px] hidden lg:block -z-10 pointer-events-none">
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#27272a" />
                  <stop offset="50%" stopColor="#52525b" />
                  <stop offset="100%" stopColor="#a1a1aa" />
                </linearGradient>
              </defs>
              <path 
                d="M 100,0 C 200,0 200,100 300,100 C 400,100 400,0 500,0 C 600,0 600,100 700,100 C 800,100 800,0 900,0" 
                fill="none" 
                stroke="#f4f4f5" 
                strokeWidth="2" 
                strokeDasharray="4 4"
              />
              <motion.path 
                d="M 100,0 C 200,0 200,100 300,100 C 400,100 400,0 500,0 C 600,0 600,100 700,100 C 800,100 800,0 900,0" 
                fill="none" 
                stroke="url(#line-gradient)" 
                strokeWidth="2" 
                style={{ pathLength }}
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-0 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const yOffsetClass = isEven ? '' : 'lg:mt-[100px]';

              return (
                <StepItem 
                  key={index} 
                  step={step} 
                  index={index} 
                  yOffsetClass={yOffsetClass}
                  progress={scrollYProgress}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

interface StepItemProps {
  step: any;
  index: number;
  yOffsetClass: string;
  progress: MotionValue<number>;
}

function StepItem({ step, index, yOffsetClass, progress }: StepItemProps) {
  const start = index * 0.15;
  const end = start + 0.2;
  
  const smoothProgress = useSpring(progress, { stiffness: 70, damping: 20 });
  
  const opacity = useTransform(smoothProgress, [start, end], [0, 1]);
  const y = useTransform(smoothProgress, [start, end], [30, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className={`flex flex-col items-center text-center relative z-10 ${yOffsetClass}`}
    >
      <div className="group relative">
        <div className="w-14 h-14 rounded-full bg-white border border-zinc-100 flex items-center justify-center mb-8 shadow-xl shadow-zinc-200/50 group-hover:border-zinc-900 transition-all mx-auto relative z-10">
          <div className="text-zinc-400 group-hover:scale-110 group-hover:text-zinc-900 transition-all">
            {step.icon}
          </div>
        </div>
        
        <h3 className="text-lg font-bold mb-3 text-zinc-900 uppercase tracking-tight">{step.title}</h3>
        <p className="text-sm text-zinc-500 leading-relaxed max-w-[200px] mx-auto">
          {step.description}
        </p>
      </div>
      
      {index < 4 && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-zinc-100 to-transparent -z-10 lg:hidden" />
      )}
    </motion.div>
  );
}
