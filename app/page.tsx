'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, BarChart3, BriefcaseBusiness, Calendar, Cpu,
  Globe, Mail, Menu, MessageSquare, Phone, Send,
  Target, TrendingUp, Users, X, Zap, ShieldCheck, CheckCircle2,
  ExternalLink, MapPin, Award
} from 'lucide-react';

import { TrackingSimulator } from '../components/TrackingSimulator';
import { NarrativeRoadmap } from '../components/NarrativeRoadmap';
import { InteractiveTestimonials } from '../components/InteractiveTestimonials';
import { OutreachModal, FloatingOutreachButton } from '../components/OutreachModal';
import { ParallaxBackground, ParallaxTiltCard, ParallaxMarquee } from '../components/ParallaxElements';
import { InteractiveConstellation } from '../components/InteractiveConstellation';
import { HeroPortraitCard } from '../components/HeroPortraitCard';

// 4 Core Value Pillars — Unified Signature Cobalt Accent
const corePillars = [
  {
    id: 'paid-media',
    title: 'High-ROI Paid Media Scaling',
    subtitle: 'Google Ads & Meta Ads Architecture',
    icon: TrendingUp,
    description:
      'Full-funnel media buying across Google Search, Shopping, Performance Max, and Meta Advantage+. Designed around contribution margin, negative keyword sculpting, and target ROAS algorithms.',
    bullets: [
      'Search intent sculpting & negative keyword hierarchies',
      'Meta Advantage+ shopping & dynamic product retargeting',
      'Target ROAS / Target CPA smart bidding alignment'
    ]
  },
  {
    id: 'server-tracking',
    title: 'Server-Side Tracking & CAPI',
    subtitle: 'First-Party Cloud Tagging Infrastructure',
    icon: Cpu,
    description:
      'First-party cloud tracking via Google Tag Manager Server-Side (Stape/GCP) to bypass iOS 14.5+ privacy limits, Safari ITP, and ad blockers, restoring up to 30% of lost conversion signals.',
    bullets: [
      'Meta Conversions API (CAPI) with 9.0+ match quality',
      'GTM Server container & custom dataLayer variables',
      'Cookie lifetime extension from 1 day to 365 days'
    ]
  },
  {
    id: 'cro-funnel',
    title: 'Funnel & Conversion Optimization',
    subtitle: 'A/B Offer Testing & Heatmap Auditing',
    icon: Target,
    description:
      'Behavioral user session auditing via Microsoft Clarity and Google Analytics 4. Testing checkout flows, friction removal, and value propositions to slash CPA and increase earnings per click.',
    bullets: [
      'Session recording analysis & drop-off bottleneck audits',
      'E-commerce cart recovery and high-converting checkout flows',
      'Cross-channel GA4 custom exploration and Looker Studio dashboards'
    ]
  },
  {
    id: 'operations-leadership',
    title: '24/7 Operations & Team Leadership',
    subtitle: 'Agency Management & Quality Control',
    icon: BriefcaseBusiness,
    description:
      'Managing night-shift ad operations for US & European timezones. Enforcing strict campaign launch checklists, mentoring media buyers, and executing rapid turnarounds on at-risk ad accounts.',
    bullets: [
      '15+ specialist supervision across Google, Meta, and SEO',
      '94% retention rate through proactive KPI monitoring',
      'Daily scrums, cross-functional sprints, and executive escalations'
    ]
  }
];

// 4 Top-Tier Featured Case Studies — Harmonized
const featuredCaseStudies = [
  {
    client: 'E-commerce & Apparel Retailer',
    title: 'Valentine Campaign Revenue Surge',
    kpi: '2700%',
    kpiLabel: 'Peak Campaign ROAS',
    context:
      'Scaled a direct-to-consumer apparel store during the Valentine rush using dynamic catalog ads paired with Meta Conversions API (CAPI) event deduplication, preventing CPA escalation.',
    tags: ['Meta CAPI', 'Dynamic Product Ads', 'E-commerce Scale']
  },
  {
    client: 'D2C Consumer Goods',
    title: 'Server-Side Signal Recovery & 5x Scale',
    kpi: '5x',
    kpiLabel: 'Revenue in 90 Days',
    context:
      'Implemented Stape server-side tagging on Shopify Plus, restoring 28% of dropped purchase events from Safari/iOS users and providing the Meta algorithm with accurate high-value conversion signals.',
    tags: ['Server-Side GTM', 'Meta Pixel', 'Shopify Plus']
  },
  {
    client: 'B2B Enterprise SaaS',
    title: 'High-Intent Pipeline Generation',
    kpi: '340+',
    kpiLabel: 'Qualified MQLs / Month',
    context:
      'Overhauled bloated broad-match Google Search campaigns into tightly themed single-intent ad groups. Lowered cost per lead by 42% while simultaneously increasing sales pipeline quality.',
    tags: ['Google Search', 'MQL Growth', '-42% CPA']
  },
  {
    client: 'Food & Beverage Regional Brand',
    title: 'Hyperlocal Growth & Retention',
    kpi: '400%',
    kpiLabel: 'Sustained ROAS',
    context:
      'Engineered hyperlocal geofenced Meta ad sets with rapid creative fatigue rotation, establishing steady recurring order volume and strong brand recognition across target metropolitan areas.',
    tags: ['Local PPC', 'Audience Segmentation', 'Creative Testing']
  }
];

const marqueeItems = [
  'Google Ads Search & PMax',
  'Meta Conversions API (CAPI)',
  'Server-Side GTM Cloud',
  'GA4 Attribution Modeling',
  'Shopify Plus & WooCommerce',
  'Looker Studio Dashboards',
  'Stape.io Infrastructure',
  'Microsoft Clarity CRO',
  'Google Merchant Center',
  '24/7 Night-Shift Operations'
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Tracking Lab', href: '#tracking-lab' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Career', href: '#career' }
];

export default function Page() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030712] text-white">
      {/* Background Parallax Ambient Layers */}
      <ParallaxBackground />

      {/* Interactive Outreach Modal */}
      <OutreachModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Floating Action Quick Access */}
      <FloatingOutreachButton onOpen={() => setIsModalOpen(true)} />

      {/* Navigation Bar */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-[#030712]/85 backdrop-blur-xl border-b border-white/[.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue to-blue-700 font-display font-black text-white shadow-lg shadow-blue-500/20 transition group-hover:scale-105">
              TH
            </span>
            <div>
              <span className="block font-display text-base font-extrabold tracking-tight text-white group-hover:text-blue-300 transition">
                Md. Tauhidul Islam Tuhin
              </span>
              <span className="block font-mono text-[10px] font-medium text-slate-400">
                OPERATIONS MANAGER & PERFORMANCE STRATEGIST
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => setIsModalOpen(true)}
              className="font-display flex items-center gap-2 rounded-xl bg-blue px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600 active:scale-95"
            >
              <Calendar size={16} /> Book Strategy Audit
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-[#070b16] px-6 py-4 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="py-2 text-sm font-medium text-slate-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenu(false);
                    setIsModalOpen(true);
                  }}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25"
                >
                  <Calendar size={16} /> Book Strategy Audit
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION — HARMONIZED PALETTE */}
      <section id="about" className="grid-bg relative flex min-h-[90vh] items-center pt-32 pb-20 overflow-hidden">
        {/* Interactive Magnetic Constellation Mesh Background */}
        <InteractiveConstellation />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Clear Value Proposition */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono font-semibold text-blue-300 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE FOR Q3/Q4 ACCOUNT AUDITS
            </div>

            <h1 className="mt-6 font-display text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl xl:text-6xl text-white">
              Scale Your Revenue Through{' '}
              <span className="text-gradient">Data-Driven</span> Paid Media & Server Tracking
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              I’m <strong className="text-white">Md. Tauhidul Islam Tuhin</strong>, Operations Manager at{' '}
              <strong className="text-white">ScaleUp Ads Agency</strong> and Digital Marketing Team Leader at{' '}
              <strong className="text-white">bdCalling IT Ltd.</strong> With 6+ years of experience, I engineer
              high-ROI Google & Meta campaigns backed by first-party server-side tracking architecture to ensure
              zero conversion data loss.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="font-display inline-flex items-center gap-2 rounded-xl bg-blue px-7 py-3.5 font-bold text-white shadow-xl shadow-blue-500/25 transition hover:bg-blue-600 active:scale-95"
              >
                <Calendar size={18} />
                Book Free Strategy Audit
                <ArrowRight size={16} />
              </button>

              <a
                href="#case-studies"
                className="font-display rounded-xl border border-white/15 bg-white/[.03] px-7 py-3.5 font-bold text-white hover:bg-white/10 transition backdrop-blur-md"
              >
                View Case Studies
              </a>
            </div>

            {/* 3 Core Credibility Stats — Harmonized White & Blue */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-black text-white">6+ Years</div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">Ad-Tech & Ops Leadership</div>
              </div>
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-black text-white">$15M+</div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">Profitable Spend Managed</div>
              </div>
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-black text-blue-400">99.4%</div>
                <div className="text-xs text-slate-400 font-sans mt-0.5">Server CAPI Match Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait Showcase with Dual Floating Parallax Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroPortraitCard />
          </div>
        </div>
      </section>

      {/* CONTINUOUS TECH MARQUEE */}
      <ParallaxMarquee items={marqueeItems} speed={32} />

      {/* SECTION 1: 4 CONSOLIDATED EXPERTISE PILLARS — UNIFIED SIGNATURE PALETTE */}
      <section id="expertise" className="relative py-24 border-b border-white/[.06]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
              CORE EXPERTISE
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl text-white">
              Four Pillars of <span className="text-gradient">Profitable Scaling</span>
            </h2>
            <p className="mt-3 text-base text-slate-400 font-sans">
              Consolidating paid media acquisition, first-party data engineering, conversion optimization,
              and 24/7 operational rigor.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <ParallaxTiltCard key={pillar.id}>
                  <div className="card h-full p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        {/* Unified Cobalt Icon Container */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-inner">
                          <Icon size={24} />
                        </div>
                        <span className="font-mono text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                          {pillar.subtitle}
                        </span>
                      </div>

                      <h3 className="mt-6 font-display text-2xl font-bold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300 font-sans">
                        {pillar.description}
                      </p>
                    </div>

                    <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-xs text-slate-300 font-sans">
                      {pillar.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-blue-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ParallaxTiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: THE INTERACTIVE TRACKING LAB (DEDICATED FULL-WIDTH SHOWCASE) */}
      <section id="tracking-lab" className="relative py-24 bg-slate-950/40 border-b border-white/[.06]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
              INTERACTIVE AD TECH SIMULATOR
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl text-white">
              Why Server-Side Tracking <span className="text-gradient">Changes Everything</span>
            </h2>
            <p className="mt-3 text-base text-slate-400 font-sans">
              Standard browser pixels lose up to 30% of high-intent purchase conversions to iOS 14.5 and ad
              blockers. Toggle below to compare Client-Side vs. Tauhid’s Server CAPI architecture in real-time.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <TrackingSimulator />
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED CASE STUDIES — HARMONIZED NUMBERS & TAGS */}
      <section id="case-studies" className="relative py-24 border-b border-white/[.06]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
              PROVEN RESULTS
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl text-white">
              Real Campaigns, <span className="text-gradient">Real Revenue</span>
            </h2>
            <p className="mt-3 text-base text-slate-400 font-sans">
              Transparent client turnarounds delivering sustainable return on ad spend (ROAS) and lower acquisition costs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredCaseStudies.map((cs) => (
              <ParallaxTiltCard key={cs.title}>
                <article className="card relative h-full flex flex-col justify-between overflow-hidden p-8">
                  {/* Subtle, Unified Cobalt Accent Line */}
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                  />

                  <div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {cs.client}
                      </span>
                      <TrendingUp size={18} className="text-blue-400/50" />
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold text-white">{cs.title}</h3>

                    <div className="mt-5 flex items-baseline gap-3">
                      <span className="font-mono text-4xl sm:text-5xl font-black text-white">
                        {cs.kpi}
                      </span>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-300">
                        {cs.kpiLabel}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-300 font-sans">{cs.context}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono rounded-lg border border-white/10 bg-white/[.03] px-2.5 py-1 text-[11px] font-medium text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </ParallaxTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: UNIFIED NARRATIVE ROADMAP & CREDENTIALS */}
      <section id="career" className="relative py-24 bg-slate-950/40 border-b border-white/[.06]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
              CAREER TIMELINE & CREDENTIALS
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl text-white">
              Professional Journey & <span className="text-gradient">Verified Authority</span>
            </h2>
            <p className="mt-3 text-base text-slate-400 font-sans">
              From Facebook Ads specialist in 2019 to Operations Manager at ScaleUp Ads Agency and Digital Marketing Team Leader at bdCalling IT Ltd.
            </p>
          </div>
          <NarrativeRoadmap />
        </div>
      </section>

      {/* SECTION 5: CLIENT TESTIMONIALS */}
      <section className="relative py-24 border-b border-white/[.06]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
              SOCIAL PROOF
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl text-white">
              What Brand Partners <span className="text-gradient">Say</span>
            </h2>
            <p className="mt-3 text-base text-slate-400 font-sans">
              Direct feedback from founders, marketing leaders, and agency executives.
            </p>
          </div>
          <InteractiveTestimonials />
        </div>
      </section>

      {/* SECTION 6: DIRECT OUTREACH & STRATEGY AUDIT */}
      <section id="contact" className="relative py-24 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
              GET IN TOUCH
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl text-white">
              Ready to Stop Ad Waste and <span className="text-gradient">Scale Profitably?</span>
            </h2>
            <p className="mt-3 text-base text-slate-400 font-sans">
              Connect directly via WhatsApp, email, or request a comprehensive 30-minute ad account and server-side tracking audit.
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-12 items-center">
            {/* Direct Channels */}
            <div className="md:col-span-5 space-y-4">
              <a
                href="https://wa.me/8801791997966"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 transition hover:bg-emerald-500/20"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/25">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <div className="font-mono text-xs text-emerald-400 uppercase tracking-wider">Direct WhatsApp</div>
                  <div className="font-mono text-sm font-bold text-white">+880 1791 997966</div>
                </div>
              </a>

              <a
                href="mailto:tauhidadexpert@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-4 transition hover:border-blue/40"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue/10 text-blue">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="font-mono text-xs text-blue-300 uppercase tracking-wider">Official Email</div>
                  <div className="font-mono text-sm font-bold text-white">tauhidadexpert@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/mdtauhidulislamtuhin"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-4 transition hover:bg-white/[.08]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-800 text-white">
                  <Globe size={22} />
                </div>
                <div>
                  <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">Professional Profile</div>
                  <div className="font-mono text-sm font-bold text-white">LinkedIn / mdtauhidulislamtuhin</div>
                </div>
              </a>
            </div>

            {/* Strategy Audit Booking Card */}
            <div className="md:col-span-7">
              <div className="card p-8 sm:p-10 border border-blue/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
                  COMPLIMENTARY AUDIT
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  Claim Your Free 30-Minute Tracking & ROAS Audit
                </h3>
                <p className="mt-3 text-sm text-slate-300 font-sans leading-relaxed">
                  I will personally review your Google Ads, Meta Ads Manager, and Google Tag Manager
                  containers to diagnose lost conversion signals and identify quick revenue wins.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group font-display flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-blue px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-200 hover:bg-blue-600 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                  >
                    <Calendar size={18} className="shrink-0" />
                    <span>Open Audit Booking</span>
                    <ArrowRight size={16} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <a
                    href="https://wa.me/8801791997966"
                    target="_blank"
                    rel="noreferrer"
                    className="font-display inline-flex items-center justify-center gap-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-sm font-bold text-emerald-300 transition-all duration-200 hover:bg-emerald-500/20 hover:border-emerald-400 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <MessageSquare size={18} className="shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINIMALIST & PROFESSIONAL FOOTER */}
      <footer className="border-t border-white/[.06] bg-[#02050c] py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-blue-700 font-display font-bold text-white shadow-md">
              TT
            </span>
            <div>
              <div className="font-display font-bold text-white text-sm">Md. Tauhidul Islam Tuhin</div>
              <div className="font-mono text-[11px] text-slate-400">
                OPERATIONS MANAGER & PERFORMANCE STRATEGIST
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white transition">
                {item.label}
              </a>
            ))}
          </div>

          <div className="font-mono text-xs text-slate-500">
            © 2026 Md. Tauhidul Islam Tuhin. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
