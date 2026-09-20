'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  kpi: string;
  kpiLabel: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Tauhid's implementation of Server-Side Tracking and Meta CAPI completely turned our ad spend around after iOS 14.5 shattered our attribution. He restored 28% of our lost conversion signals, leading directly to a 2700% ROAS surge on our holiday campaign.",
    name: 'Marcus Vance',
    role: 'Managing Director',
    company: 'Verve Fashion Retail',
    industry: 'E-commerce & Apparel',
    kpi: '2700% ROAS',
    kpiLabel: 'Holiday Campaign',
    initials: 'MV'
  },
  {
    id: 2,
    quote:
      'Having Tauhid as our Operations Manager for night shift ad delivery was game changing. His team maintained 24/7 campaign uptime, resolved account escalations immediately, and scaled our international Google Ads accounts past $80k/month profitably.',
    name: 'Sarah Jenkins',
    role: 'Chief Marketing Officer',
    company: 'Apex Digital Brands',
    industry: 'Digital Services & SaaS',
    kpi: '5.2x ROAS',
    kpiLabel: '$80k/mo Scale',
    initials: 'SJ'
  },
  {
    id: 3,
    quote:
      'We were struggling with high CPL and lead quality until Tauhid audited our Google Search and Performance Max campaigns. By restructuring our bidding algorithms and negative keyword lists, our MQL volume skyrocketed to 340+ per month while CPA dropped by 42%.',
    name: 'David Thorne',
    role: 'VP of Growth',
    company: 'Strata Tech Solutions',
    industry: 'B2B Enterprise',
    kpi: '340+ MQLs/mo',
    kpiLabel: '-42% CPA Reduction',
    initials: 'DT'
  },
  {
    id: 4,
    quote:
      'Tauhid is one of the rare digital marketers who pairs deep technical data engineering (GTM, GA4, CAPI) with master-class ad copywriting and creative testing. His multi-channel Meta and Google funnel produced 400% ROAS for our regional expansion.',
    name: 'Elena Rossi',
    role: 'Founder & CEO',
    company: 'Gourmet Artisans Co.',
    industry: 'Food & Beverage',
    kpi: '400% ROAS',
    kpiLabel: 'Regional Expansion',
    initials: 'ER'
  }
];

export function InteractiveTestimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance every 6 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, current]);

  const active = testimonials[current];

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative quote icon */}
      <div className="absolute -left-4 -top-6 text-blue/15 sm:-left-8 sm:-top-8">
        <Quote size={80} />
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">
        {/* Rating Stars & Industry Tag */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1 text-amber-300">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
            VERIFIED CLIENT • {active.industry}
          </span>
        </div>

        {/* Animated Slide Content with Editorial Serif Typography */}
        <div className="relative min-h-[160px] sm:min-h-[140px] mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl leading-relaxed text-slate-100 font-normal tracking-wide">
                “{active.quote}”
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Client Metadata & KPI Badge */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue to-blue-700 font-display font-extrabold text-white shadow-lg shadow-blue-500/20">
              {active.initials}
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg tracking-tight">{active.name}</div>
              <div className="text-xs sm:text-sm text-slate-400">
                {active.role} · <span className="text-blue-300 font-medium">{active.company}</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-right">
            <div className="font-mono text-base sm:text-xl font-black text-white">{active.kpi}</div>
            <div className="font-mono text-[10px] sm:text-xs text-blue-300 uppercase tracking-wider">
              {active.kpiLabel}
            </div>
          </div>
        </div>

        {/* Navigation Controls with Monospace Index */}
        <div className="mt-8 flex items-center justify-between border-t border-white/[.06] pt-5">
          <div className="font-mono text-xs text-slate-400">
            <span className="font-bold text-white">0{current + 1}</span> / 0{testimonials.length}
          </div>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 transition-all rounded-full ${
                  current === idx ? 'w-8 bg-blue shadow-md shadow-blue-500/50' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-slate-300 transition hover:bg-white/10 hover:text-white active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-slate-300 transition hover:bg-white/10 hover:text-white active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
