'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ShieldAlert, Cpu, Activity, ArrowRight, Zap, RefreshCw, Layers, Sparkles } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  progress: number;
  speed: number;
  color: string;
  type: 'ad_click' | 'purchase' | 'lead' | 'pageview';
  blocked: boolean;
}

export function TrackingSimulator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<'server' | 'client'>('server');
  const [eventCount, setEventCount] = useState(1482);
  const [recoveredEvents, setRecoveredEvents] = useState(384);
  const [lastFired, setLastFired] = useState<string | null>(null);

  // Nodes for the flow
  const nodes = [
    { id: 'user', label: 'User Action', sub: 'Ad Click / Add to Cart', icon: '👤' },
    { id: 'browser', label: 'Browser Client', sub: 'iOS 14.5+ & AdBlockers', icon: '🌐' },
    { id: 'server', label: 'GTM Cloud Container', sub: 'Server-Side Tagging', icon: '⚡' },
    { id: 'dest', label: 'Meta CAPI & GA4', sub: 'Ad Conversion Engine', icon: '🎯' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#38bdf8'];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener('resize', resize);

    let lastSpawn = 0;

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const y = h / 2;

      // Draw connection line
      ctx.beginPath();
      ctx.setLineDash([4, 4]);
      ctx.strokeStyle = mode === 'server' ? 'rgba(60, 131, 246, 0.35)' : 'rgba(239, 68, 68, 0.25)';
      ctx.lineWidth = 2;
      ctx.moveTo(w * 0.12, y);
      ctx.lineTo(w * 0.88, y);
      ctx.stroke();
      ctx.setLineDash([]);

      // Spawn particles
      if (timestamp - lastSpawn > (mode === 'server' ? 220 : 420)) {
        lastSpawn = timestamp;
        const willBeBlocked = mode === 'client' && Math.random() < 0.32;
        particles.push({
          x: w * 0.12,
          y: y,
          targetX: willBeBlocked ? w * 0.42 : w * 0.88,
          targetY: willBeBlocked ? y + (Math.random() * 40 - 20) : y,
          progress: 0,
          speed: 0.009 + Math.random() * 0.007,
          color: willBeBlocked ? '#ef4444' : colors[Math.floor(Math.random() * colors.length)],
          type: 'purchase',
          blocked: willBeBlocked
        });
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.progress += p.speed;

        const currentX = p.x + (p.targetX - p.x) * p.progress;
        const currentY = p.y + (p.targetY - p.y) * p.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, p.blocked && p.progress > 0.85 ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = p.blocked && p.progress > 0.7 ? '#ef4444' : p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Blocked indicator cross
        if (p.blocked && p.progress >= 0.95) {
          ctx.strokeStyle = 'rgba(239, 68, 68, 0.85)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(currentX - 4, currentY - 4);
          ctx.lineTo(currentX + 4, currentY + 4);
          ctx.moveTo(currentX + 4, currentY - 4);
          ctx.lineTo(currentX - 4, currentY + 4);
          ctx.stroke();
        }

        if (p.progress >= 1) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mode]);

  // Periodic event counter
  useEffect(() => {
    const timer = setInterval(() => {
      setEventCount((prev) => prev + (mode === 'server' ? 3 : 1));
      if (mode === 'server') {
        setRecoveredEvents((prev) => prev + 1);
      }
    }, 1200);
    return () => clearInterval(timer);
  }, [mode]);

  const fireTestEvent = () => {
    setEventCount((prev) => prev + 1);
    if (mode === 'server') setRecoveredEvents((prev) => prev + 1);
    setLastFired(`Event 'Purchase' synced via Meta CAPI at ${new Date().toLocaleTimeString()}`);
    setTimeout(() => setLastFired(null), 3500);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-5 sm:p-7 shadow-2xl backdrop-blur-2xl">
      {/* Ambient glow highlights */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/12 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-800/10 blur-3xl" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue/10 text-blue border border-blue/20">
            <Cpu size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-sm font-bold tracking-tight text-white sm:text-base">
                Live Ad Tech & Server-Side Tracking Pipeline
              </h3>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="font-mono text-[11px] text-slate-400">
              ARCHITECTURE_ENGINE: <span className="text-blue-400 font-semibold">GTM_SERVER_CAPI_V2</span>
            </p>
          </div>
        </div>

        {/* Mode Toggle Switch */}
        <div className="flex items-center rounded-2xl border border-white/10 bg-white/[.04] p-1 font-mono text-xs">
          <button
            onClick={() => setMode('client')}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 transition ${
              mode === 'client'
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldAlert size={14} /> Client-Side (32% Loss)
          </button>
          <button
            onClick={() => setMode('server')}
            className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 transition ${
              mode === 'server'
                ? 'bg-blue text-white shadow-lg shadow-blue-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck size={14} /> Server CAPI (99.4%)
          </button>
        </div>
      </div>

      {/* Flow Canvas & Node Markers */}
      <div className="relative my-6 h-36 w-full sm:h-44">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {/* Overlay Node Indicators */}
        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-6 pointer-events-none">
          {nodes.map((node) => {
            const isServerNode = node.id === 'server';
            const isBypassed = mode === 'client' && isServerNode;

            return (
              <div
                key={node.id}
                className={`flex flex-col items-center text-center transition-all duration-300 ${
                  isBypassed ? 'opacity-30 scale-95' : 'opacity-100'
                }`}
                style={{ width: '22%' }}
              >
                <div
                  className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border backdrop-blur-md shadow-lg transition-transform ${
                    isServerNode && mode === 'server'
                      ? 'border-blue bg-blue/20 text-blue shadow-blue-500/25 scale-110'
                      : 'border-white/15 bg-slate-900/90 text-white'
                  }`}
                >
                  <span className="text-base sm:text-lg">{node.icon}</span>
                </div>
                <span className="mt-2 font-display text-[11px] sm:text-xs font-bold text-white line-clamp-1">
                  {node.label}
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-slate-400 hidden xs:inline">
                  {isBypassed ? 'Bypassed (Dropped)' : node.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Metrics Matrix with Monospace Data Fonts */}
      <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-white/[.06] bg-white/[.03] p-3 text-center">
          <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Signal Delivery</div>
          <div
            className={`mt-1 font-mono text-xl font-extrabold sm:text-2xl ${
              mode === 'server' ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {mode === 'server' ? '99.4%' : '68.2%'}
          </div>
          <div className="text-[10px] text-slate-500 font-sans">
            {mode === 'server' ? 'Zero AdBlock Drop' : 'iOS 14+ Signal Loss'}
          </div>
        </div>

        <div className="rounded-2xl border border-white/[.06] bg-white/[.03] p-3 text-center">
          <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Event Match Score</div>
          <div
            className={`mt-1 font-mono text-xl font-extrabold sm:text-2xl ${
              mode === 'server' ? 'text-blue-400' : 'text-slate-400'
            }`}
          >
            {mode === 'server' ? '9.3 / 10' : '4.8 / 10'}
          </div>
          <div className="text-[10px] text-slate-500 font-sans">Meta CAPI Parameter Sync</div>
        </div>

        <div className="rounded-2xl border border-white/[.06] bg-white/[.03] p-3 text-center">
          <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Cookie Life</div>
          <div
            className={`mt-1 font-mono text-xl font-extrabold sm:text-2xl ${
              mode === 'server' ? 'text-blue-400' : 'text-slate-400'
            }`}
          >
            {mode === 'server' ? '365 Days' : '1 - 7 Days'}
          </div>
          <div className="text-[10px] text-slate-500 font-sans">Safari ITP Circumvention</div>
        </div>

        <div className="rounded-2xl border border-white/[.06] bg-white/[.03] p-3 text-center">
          <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Attributed ROAS</div>
          <div
            className={`mt-1 font-mono text-xl font-extrabold sm:text-2xl ${
              mode === 'server' ? 'text-emerald-400' : 'text-slate-400'
            }`}
          >
            {mode === 'server' ? '+28% Gain' : 'Underreported'}
          </div>
          <div className="text-[10px] text-slate-500 font-sans">Algorithm Optimization</div>
        </div>
      </div>

      {/* Interactive Trigger & Live Feedback Bar */}
      <div className="relative z-10 mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue/20 bg-blue/10 px-4 py-2.5 text-xs text-blue-200">
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-amber-300 shrink-0" />
          <span className="font-mono text-[11px]">
            {lastFired ||
              (mode === 'server'
                ? `RECOVERED: ${recoveredEvents.toLocaleString()} purchases restored by Server CAPI.`
                : 'WARNING: 32% high-value purchase signals lost to Safari & AdBlockers.')}
          </span>
        </div>

        <button
          onClick={fireTestEvent}
          className="flex items-center gap-1.5 rounded-xl border border-blue/30 bg-blue/20 px-3 py-1 font-mono text-xs font-semibold text-white hover:bg-blue/40 transition active:scale-95"
        >
          <Sparkles size={12} className="text-amber-300" /> Fire Test Purchase Event
        </button>
      </div>
    </div>
  );
}
