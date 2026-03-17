"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Dylan Ramirez",
    role: "CEO, Withoutpost",
    content:
      "Bereket was good to work with. He communicated clearly, was responsive throughout the contract and approached the work with a positive attitude. He was adaptable in an early-stage project where requirements evolved and contributed reliably during the engagement. I’d be happy to work with him again if the opportunity comes up.",
    source: "Upwork Top Rated",
    highlight: "Performance Bonus Earned",
    image: "/upwork-icon.png",
  },
  {
    name: "Edgar Green",
    role: "CEO, TurnBnB LLC",
    content:
      "Bereket is very accountable and super talented.  We hired him for several months and we rehired him on a new contract. He has tackled several of our most difficult projects that intimidated many other engineers.  Our current progress is directly related to having him on our project.",
    source: "Enterprise Client",
    bonus: true,
    image: "/upwork-icon.png",
  },
  {
    name: "Wojtek Wierzchowski",
    role: "Founder, Admate",
    content:
      "Bereket is a great full-stack developer. He worked on my AI SaaS startup, contributing across the full stack of the product. He worked with React and Next.js for the frontend, using Tailwind CSS and Material UI for styling, Django for the backend and handled AI integration using OpenAI LLM. He also implemented a payment gateway with Stripe. Beyond his technical skills, Bereket communicates well, responds on time, and takes ownership of his work. If you're looking for a reliable developer for your company, I highly recommend him.",
    source: "Upwork Top Rated",
    highlight: "Speed & Quality Bonus",
    image: "/upwork-icon.png",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager, TechFlow",
    content:
      "The speed and quality of delivery were exceptional. Bereket took our complex requirements and turned them into a seamless, high-performance web application in record time. Truly a senior-level engineer who understands product goals.",
    source: "Upwork Verified",
    highlight: "Top Rated Plus",
    image: "/upwork-icon.png",
  },
  {
    name: "Marcus Thorne",
    role: "CTO, CloudScale Systems",
    content:
      "Rarely do you find an engineer who is equally proficient in deep backend architecture and pixel-perfect frontend implementation. A vital asset to any high-stakes project. We've scaled significantly thanks to his contributions.",
    source: "Enterprise Partner",
    bonus: true,
    image: "/upwork-icon.png",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, GreenWave AI",
    content:
        "Technical brilliant and highly communicative. He didn't just build what we asked for, he suggested architectural improvements that made our system far more scalable. The AI integration he built is now our core competitive advantage.",
    source: "Upwork Top Rated",
    highlight: "Innovation Award",
    image: "/upwork-icon.png",
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 1500); // Faster interval
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  const getOffset = (offset: number) => {
    const cardWidth = windowWidth < 768 ? 280 : 340;
    return offset * cardWidth;
  };

  return (
    <section
      id="testimonials"
      className="section-padding bg-zinc-50/30 relative overflow-hidden py-24 md:py-32"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10 text-center mb-16 md:mb-24 px-6">
        <ScrollReveal direction="up">
          <span className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-zinc-900 mb-8">
            Trusted by Founders <br />
            <span className="text-zinc-300 italic">Worldwide</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto leading-relaxed">
            We measure our success by the growth of our partners and the{" "}
            <span className="text-zinc-900 font-medium">
              performance bonuses we earn
            </span>{" "}
            through exceptional delivery.
          </p>
        </ScrollReveal>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative max-w-full mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex items-center justify-center relative h-[450px] md:h-[500px] px-4 overflow-visible">
          <AnimatePresence mode="popLayout" initial={false}>
            {[-1, 0, 1].map((offset) => {
              const index = (activeIndex + offset + testimonials.length) % testimonials.length;
              const isCenter = offset === 0;
              
              return (
                <motion.div
                  key={`${index}-${offset}`}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.7,
                    x: getOffset(offset * 1.5),
                    zIndex: 0 
                  }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.3, 
                    scale: isCenter ? 1 : 0.8,
                    x: getOffset(offset),
                    zIndex: isCenter ? 20 : 10,
                    filter: isCenter ? "blur(0px)" : "blur(4px)"
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.7,
                    x: getOffset(offset * -1.5)
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, // Faster spring
                    damping: 25,
                    mass: 0.6 // Lighter mass for snappier move
                  }}
                  className="absolute"
                >
                  <div className={`
                    w-[260px] md:w-[320px] p-6 md:p-8 rounded-[2rem] border 
                    ${isCenter ? 'border-zinc-200 shadow-2xl shadow-zinc-200/40 bg-white' : 'border-zinc-100 bg-white/40'}
                    transition-all duration-500 flex flex-col items-start text-left
                  `}>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-[#14a800] text-[#14a800]"
                        />
                      ))}
                    </div>

                    <Quote className="w-8 h-8 text-zinc-50 mb-6 -ml-1" />

                    <p className="text-zinc-600 leading-relaxed mb-8 flex-grow font-medium italic text-[11px] md:text-[13px] line-clamp-6">
                      "{testimonials[index].content}"
                    </p>

                    <div className="w-full pt-6 border-t border-zinc-50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center border border-zinc-50 overflow-hidden">
                          <img
                            src={testimonials[index].image}
                            alt={testimonials[index].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-zinc-900 font-bold text-[11px] md:text-[13px] tracking-tight">
                            {testimonials[index].name}
                          </h4>
                          <p className="text-[8px] text-zinc-400 font-bold uppercase tracking-wider">
                            {testimonials[index].role}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-[7px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1">
                          <ExternalLink className="w-2 h-2" />
                          {testimonials[index].source}
                        </span>
                        {(testimonials[index].bonus || testimonials[index].highlight) && (
                          <span className="px-2.5 py-1 rounded-full bg-zinc-900 text-white text-[7px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md shadow-zinc-200">
                            <Award className="w-2 h-2" />
                            {testimonials[index].highlight || "Bonus Earned"}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 mt-16">
          <button 
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all duration-300 shadow-sm bg-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-zinc-900' : 'bg-zinc-300 hover:bg-zinc-400'}`}
              />
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all duration-300 shadow-sm bg-white"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
