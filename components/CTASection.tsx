"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CTASection({
  onContactClick,
}: {
  onContactClick: () => void;
}) {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal
          direction="up"
          className="relative rounded-[3rem] overflow-hidden bg-zinc-900 p-12 md:p-24 text-center shadow-2xl shadow-zinc-200"
        >
          <div className="relative z-10">
            {/* Background subtle pattern */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />

            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-8 block">
              Ready to start?
            </span>

            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-white mb-10 max-w-4xl mx-auto">
              Let’s Build Your <br />
              <span className="text-zinc-500 italic">Next Big Product</span>
            </h2>

            <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto mb-16 leading-relaxed">
              Whether you are starting with an idea or scaling an existing
              platform, we help you deliver{" "}
              <span className="text-white font-medium">
                refined software products.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={onContactClick}
                className="px-12 py-5 rounded-full bg-white text-zinc-900 font-bold text-sm uppercase tracking-wide hover:bg-zinc-100 transition-all shadow-xl shadow-white/5"
              >
                Start Your Project
              </button>
              <a
                href="https://www.upwork.com/agencies/1781231506231435264/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 rounded-full border border-white/10 text-white font-bold text-sm uppercase tracking-wide hover:bg-[#14a800]/5 hover:border-[#14a800]/20 hover:text-[#14a800] transition-all flex items-center gap-3 group shadow-xl shadow-white/5"
              >
                <img
                  src="/upwork-icon.png"
                  alt="Upwork"
                  className="w-5 h-5 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                Visit us on Upwork
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Ambient Glows */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-zinc-100 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-50 rounded-full blur-[120px] pointer-events-none opacity-30" />
    </section>
  );
}
