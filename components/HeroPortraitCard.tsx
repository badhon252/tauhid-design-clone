'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import { ParallaxTiltCard, ParallaxOffset } from './ParallaxElements';

export function HeroPortraitCard() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-md select-none">
      {/* Ambient background glow behind portrait - Unified Cobalt Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-blue-600/15 blur-2xl opacity-70 pointer-events-none" />

      {/* Main 3D Tilt Card Frame */}
      <ParallaxTiltCard className="relative z-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 via-slate-950/90 to-[#030712]/95 p-3 shadow-2xl backdrop-blur-2xl">
          {/* Inner Image Container with Aspect Ratio */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
            {!imageError ? (
              <img
                src="/tauhid-portrait.jpg"
                alt="Md. Tauhidul Islam Tuhin - Performance Marketing Specialist & Operations Manager"
                onError={() => setImageError(true)}
                className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            ) : (
              /* High-End Executive Placeholder Fallback */
              <div className="relative flex h-full w-full flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900 via-[#070d1a] to-[#040810]">
                {/* Tech grid texture in background */}
                <div className="absolute inset-0 bg-[radial-gradient(#3c83f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

                {/* Ambient Avatar Monogram */}
                <div className="relative mb-5 flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-blue via-blue-600 to-blue-700 font-display text-4xl font-black text-white shadow-2xl shadow-blue-500/30 ring-4 ring-blue/20">
                  TH
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 ring-2 ring-[#070d1a]" />
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  Md. Tauhidul Islam Tuhin
                </h3>
                <p className="font-mono text-xs font-semibold text-blue-400 mt-1 uppercase tracking-wider">
                  OPERATIONS MANAGER // AD_TECH
                </p>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/[.04] px-4 py-2 text-[11px] text-slate-400 flex items-center gap-2">
                  <ImageIcon size={14} className="text-blue-400" />
                  <span>Custom photo: place at <strong className="text-white">public/tauhid-portrait.jpg</strong></span>
                </div>
              </div>
            )}

            {/* Gradient Overlay for Text Readability at base */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />

            {/* Bottom In-Frame Identity Card */}
            <div className="absolute inset-x-4 bottom-4 z-20 rounded-2xl border border-white/10 bg-slate-950/80 p-3.5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-sm font-bold text-white flex items-center gap-2">
                    Md. Tauhidul Islam Tuhin
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="font-mono text-[11px] text-slate-400 mt-0.5">
                    ScaleUp Ads Agency • Betopia Group
                  </div>
                </div>
                <div className="font-mono text-[10px] text-blue-300 rounded-lg bg-blue/10 border border-blue/30 px-2 py-0.5">
                  DHAKA
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxTiltCard>

      {/* Floating Parallax Metric Badge 1: Top-Right ROAS - Unified Palette */}
      <ParallaxOffset
        offset={24}
        className="absolute -top-5 -right-4 sm:-right-8 z-30 pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-blue-500/30 bg-slate-950/90 p-3.5 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/20">
              <TrendingUp size={16} />
            </span>
            <div>
              <div className="font-mono text-xl sm:text-2xl font-black text-white leading-none">
                2700%
              </div>
              <div className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">
                Peak ROAS Achieved
              </div>
            </div>
          </div>
        </motion.div>
      </ParallaxOffset>

      {/* Floating Parallax Metric Badge 2: Bottom-Left Operations Leadership */}
      <ParallaxOffset
        offset={-20}
        className="absolute -bottom-6 -left-4 sm:-left-8 z-30 pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="rounded-2xl border border-white/10 bg-slate-950/90 p-3.5 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="relative grid h-8 w-8 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck size={18} />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
            </div>
            <div>
              <div className="font-display text-xs sm:text-sm font-bold text-white leading-none">
                Operations Manager
              </div>
              <div className="font-mono text-[10px] text-slate-400 mt-1">
                Night Shift (US/EU) • Active
              </div>
            </div>
          </div>
        </motion.div>
      </ParallaxOffset>
    </div>
  );
}
