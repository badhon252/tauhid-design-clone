'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Mail, Phone, MessageSquare, Copy, Check, Send,
  Calendar, CheckCircle2, Sparkles, ExternalLink
} from 'lucide-react';

interface OutreachModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OutreachModal({ isOpen, onClose }: OutreachModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: '$1,000 – $5,000 / month',
    message: ''
  });

  const email = 'tauhidadexpert@gmail.com';
  const phone = '+8801791997966';
  const whatsappUrl = `https://wa.me/8801791997966?text=${encodeURIComponent(
    'Hi Tauhid, I visited your digital marketing portfolio and would like to discuss a project.'
  )}`;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#080d1a] p-6 sm:p-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[.04] text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Direct Client Booking
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              Connect With <span className="text-gradient">Md. Tauhidul Islam</span>
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Operations Manager & Performance Marketing Specialist • Rampura, Dhaka
            </p>

            {/* Quick Action Channels */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {/* WhatsApp Quick Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 transition hover:bg-emerald-500/15"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/25">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-emerald-300">Instant Chat</div>
                    <div className="text-sm font-bold text-white">WhatsApp Direct</div>
                  </div>
                </div>
                <ExternalLink size={16} className="text-emerald-400" />
              </a>

              {/* Email Copy Card */}
              <div
                onClick={copyEmail}
                className="flex cursor-pointer items-center justify-between rounded-2xl border border-blue/30 bg-blue/10 p-3.5 transition hover:bg-blue/15"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue text-white shadow-lg shadow-blue-500/25">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-blue-300">Direct Email</div>
                    <div className="text-sm font-bold text-white line-clamp-1">{email}</div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Copy email"
                  className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[.06] text-slate-300"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Interactive Form or Success State */}
            <div className="mt-6 border-t border-white/10 pt-5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center"
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Inquiry Received!</h3>
                  <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name || 'Partner'}</strong>. Tauhid
                    will review your project parameters and respond via email within 24 hours.
                  </p>
                  <div className="mt-5 flex justify-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg"
                    >
                      <MessageSquare size={15} /> Message on WhatsApp Now
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        onClose();
                      }}
                      className="rounded-xl border border-white/20 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/5"
                    >
                      Done
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="mt-1.5 h-10 w-full rounded-xl border border-white/10 bg-white/[.04] px-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="mt-1.5 h-10 w-full rounded-xl border border-white/10 bg-white/[.04] px-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300">Website or Ad Account</label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourbrand.com"
                        className="mt-1.5 h-10 w-full rounded-xl border border-white/10 bg-white/[.04] px-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300">Monthly Ad Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="mt-1.5 h-10 w-full rounded-xl border border-white/10 bg-[#0c1220] px-3 text-sm text-white outline-none focus:border-blue"
                      >
                        <option value="Under $1,000 / month">Under $1,000 / month</option>
                        <option value="$1,000 – $5,000 / month">$1,000 – $5,000 / month</option>
                        <option value="$5,000 – $20,000 / month">$5,000 – $20,000 / month</option>
                        <option value="$20,000+ / month">$20,000+ / month</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300">Primary Objective *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Need Server-Side tracking setup for Shopify, and scale Meta + Google Ads ROAS."
                      className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/[.04] p-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue to-blue-600 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition hover:brightness-110 active:scale-[0.99]"
                  >
                    <Send size={16} /> Request Free Ad Account & Tracking Audit
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function FloatingOutreachButton({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* WhatsApp Direct Floating button */}
      <a
        href="https://wa.me/8801791997966"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-950/60 transition hover:scale-110"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400" />
        </span>
        <MessageSquare size={24} />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl border border-white/10 bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg backdrop-blur-md transition group-hover:opacity-100">
          Chat on WhatsApp (+8801791997966)
        </span>
      </a>

      {/* Book Consultation Trigger */}
      <button
        onClick={onOpen}
        aria-label="Open consultation modal"
        className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-blue text-white shadow-2xl shadow-blue-500/40 transition hover:scale-110"
      >
        <Calendar size={22} />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl border border-white/10 bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg backdrop-blur-md transition group-hover:opacity-100">
          Book Free Strategy Audit
        </span>
      </button>
    </div>
  );
}
