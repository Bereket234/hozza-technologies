"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Solutions", href: "#solutions" },
  { name: "Expertise", href: "#expertise" },
  { name: "Process", href: "#process" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-4 border-zinc-200 shadow-sm"
          : "bg-transparent py-8 border-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-20 overflow-hidden rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <img
              src="/Logo.png"
              alt="Hozza Logo"
              className="w-full h-full object-cover scale-[1.8]"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-zinc-900 group-hover:text-indigo-600 transition-colors">
            Hozza Technologies
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          <div
            className="flex items-center gap-2 bg-zinc-100/50 p-1 rounded-full border border-zinc-200/50 backdrop-blur-sm"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className="relative px-5 py-2 text-sm font-semibold text-zinc-600 hover:text-indigo-600 transition-colors duration-300"
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-pill"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-zinc-200/50 z-[-1]"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>
          <div className="ml-4">
            <button className="px-6 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-bold hover:bg-indigo-600 hover:scale-105 transition-all duration-500 flex items-center gap-2 group shadow-lg shadow-zinc-200">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-zinc-600 hover:text-indigo-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-5 py-3 rounded-xl bg-zinc-900 text-white font-semibold flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
