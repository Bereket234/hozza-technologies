"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Cpu, Smartphone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const specialties = [
  {
    title: "Backend Engineers",
    icon: <Cpu className="w-5 h-5 text-zinc-900" />,
    skills: ["Node.js", "Python", "Scalable APIs", "Cloud Architecture"],
  },
  {
    title: "Frontend Engineers",
    icon: <Code2 className="w-5 h-5 text-zinc-900" />,
    skills: ["React", "Vue", "Next.js", "UI Systems"],
  },
  {
    title: "Mobile Developers",
    icon: <Smartphone className="w-5 h-5 text-zinc-900" />,
    skills: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    title: "AI / ML Engineers",
    icon: <Layers className="w-5 h-5 text-zinc-900" />,
    skills: [
      "AI Integrations",
      "Machine Learning",
      "LLM Applications",
      "Data Systems",
    ],
  },
];

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <span className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-6 block">
            Our Talent
          </span>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-zinc-900 mb-8">
            Senior Engineers <br />
            <span className="text-zinc-300 italic">Across Every Stack</span>
          </h2>
          <p className="md:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
            We provide senior engineering talent that functions as an
            extension of your team, bringing years of experience in{" "}
            <span className="text-zinc-900 font-medium">
              scaling products from day zero.
            </span>
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((spec, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={index * 0.1}
              className="p-10 rounded-[2rem] border border-zinc-50 bg-white/50 hover:bg-white hover:border-zinc-100 hover:shadow-xl hover:shadow-zinc-100 transition-all duration-500 group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center mb-8 text-zinc-900 border border-zinc-100 group-hover:scale-110 transition-transform duration-500">
                {spec.icon}
              </div>
              <h3 className="font-bold text-lg mb-6 text-zinc-900 uppercase tracking-tight">
                {spec.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 pt-6 border-t border-zinc-50 w-full">
                {spec.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1.5 rounded-full bg-zinc-50 text-[10px] font-bold uppercase tracking-wider text-zinc-400 border border-zinc-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
