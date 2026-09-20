'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function ParallaxBackground() {
  const { scrollY } = useScroll();

  // Unified ambient background glow layers moving with spring damping
  const y1 = useTransform(scrollY, [0, 3500], [0, 420]);
  const y2 = useTransform(scrollY, [0, 3500], [0, -320]);
  const y3 = useTransform(scrollY, [0, 3500], [0, 240]);
  const opacity = useTransform(scrollY, [0, 800, 2200], [0.8, 0.4, 0.7]);

  const springY1 = useSpring(y1, { stiffness: 45, damping: 22 });
  const springY2 = useSpring(y2, { stiffness: 35, damping: 25 });
  const springY3 = useSpring(y3, { stiffness: 40, damping: 22 });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dynamic glow orb 1 - Deep Cobalt */}
      <motion.div
        style={{ y: springY1, opacity }}
        className="absolute -top-40 left-[10%] h-[620px] w-[620px] rounded-full bg-blue-600/8 blur-[160px]"
      />

      {/* Dynamic glow orb 2 - Subtle Deep Navy / Indigo */}
      <motion.div
        style={{ y: springY2 }}
        className="absolute top-[35%] right-[6%] h-[650px] w-[650px] rounded-full bg-indigo-900/8 blur-[180px]"
      />

      {/* Dynamic glow orb 3 - Atmospheric Deep Blue */}
      <motion.div
        style={{ y: springY3 }}
        className="absolute top-[68%] left-[20%] h-[580px] w-[580px] rounded-full bg-blue-700/6 blur-[160px]"
      />

      {/* Geometric parallax floating wireframe shapes */}
      <motion.div
        style={{ y: springY2 }}
        className="absolute top-[18%] left-[6%] hidden xl:block opacity-10"
      >
        <div className="h-28 w-28 rounded-3xl border border-white/20 rotate-12" />
      </motion.div>

      <motion.div
        style={{ y: springY1 }}
        className="absolute top-[55%] right-[8%] hidden xl:block opacity-10"
      >
        <div className="h-36 w-36 rounded-full border border-blue-400/20 -rotate-45" />
      </motion.div>
    </div>
  );
}

export function ParallaxOffset({
  children,
  offset = 40,
  className = ''
}: {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  );
}

export function ParallaxTiltCard({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    setMousePos({ x, y, active: true });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {/* Specular cursor glow following pointer */}
      {mousePos.active && (
        <div
          className="pointer-events-none absolute -inset-px rounded-inherit opacity-60 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.1), transparent 80%)`
          }}
        />
      )}
      {children}
    </div>
  );
}

export function ParallaxMarquee({
  items,
  speed = 32
}: {
  items: string[];
  speed?: number;
}) {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/[.06] bg-[#050914]/80 py-3.5 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap gap-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: speed }}
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-slate-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500/80" />
            <span className="hover:text-white transition-colors">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
