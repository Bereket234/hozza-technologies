import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  className = "",
  delay = 0 
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70, // Slightly softer for more "fluid" feel
    damping: 30,
    restDelta: 0.001
  });

  // Map directional offsets
  const xOffset = direction === 'left' ? 60 : direction === 'right' ? -60 : 0;
  const yOffset = direction === 'up' ? 60 : direction === 'down' ? -60 : 0;

  // Optimized transformations
  // Elements fade in early (0 to 0.2) and stay until the very end (0.8 to 1)
  const opacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.85, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    smoothProgress,
    [0, 0.2, 0.85, 1],
    [yOffset, 0, 0, -yOffset]
  );

  const x = useTransform(
    smoothProgress,
    [0, 0.2, 0.85, 1],
    [xOffset, 0, 0, -xOffset]
  );

  return (
    <div ref={containerRef} className={`${className} relative z-10`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "100px 0px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        style={{ opacity, y, x }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
