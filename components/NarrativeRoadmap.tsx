'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, Award, GraduationCap, ChevronDown, CheckCircle2,
  Calendar, Building2, ShieldCheck, Sparkles, MapPin
} from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'leadership' | 'specialist';
  location: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'scaleup',
    role: 'Operations Manager – Night Shift',
    company: 'ScaleUp Ads Agency | Betopia Group',
    period: '2023 – Present',
    type: 'leadership',
    location: 'Dhaka, Bangladesh (US/EU Shift)',
    summary:
      'Directing end-to-end digital marketing operations, supervising multi-disciplinary teams across Google Ads, Meta Ads, and Technical SEO to hit aggressive KPI and revenue benchmarks.',
    highlights: [
      'Led and supervised dedicated Google Ads, Meta Ads, and SEO specialists, maintaining strict service delivery standards.',
      'Identified underperforming accounts and engineered corrective optimization plans, saving at-risk and cancellation-flagged retainers.',
      'Monitored KPIs, revenue targets, and delivery timelines across active enterprise ad accounts.',
      'Trained and mentored team members on server-side tracking setups, GTM, CAPI implementation, and attribution best practices.',
      'Facilitated daily scrums, cross-functional sprints, and handled executive client escalations.'
    ],
    metrics: [
      { label: 'Specialists Managed', value: '15+' },
      { label: 'Client Retention Rate', value: '94%' },
      { label: 'Shift Coverage', value: '24/7 Ops' }
    ],
    tags: ['Operations Leadership', 'KPI Management', 'Google Ads', 'Meta Ads', 'Escalation Resolution']
  },
  {
    id: 'bdcalling',
    role: 'Digital Marketing Team Leader',
    company: 'bdCalling IT Ltd.',
    period: '2022 – Present',
    type: 'leadership',
    location: 'Dhaka, Bangladesh',
    summary:
      'Leading a high-performance digital marketing unit responsible for planning, executing, and scaling Google Ads and Meta Ads campaigns for global brands.',
    highlights: [
      'Spearheaded campaign strategies aligned with client revenue goals, target ROAS, and CAC boundaries.',
      'Enforced rigorous quality control protocols, inspecting conversion tracking accuracy and ad creatives before launch.',
      'Conducted direct technical and strategic consultations with international clients.',
      'Trained internal talent on advanced tracking, Google Analytics 4, and Looker Studio reporting.'
    ],
    metrics: [
      { label: 'Campaigns Launched', value: '500+' },
      { label: 'Avg ROAS Delivered', value: '4.8x' },
      { label: 'Client Retention', value: '99%' }
    ],
    tags: ['Team Leadership', 'Campaign Strategy', 'Quality Control', 'Budget Optimization']
  },
  {
    id: 'mojarkena',
    role: 'Facebook Ads Expert',
    company: 'Mojarkena',
    period: '2020 – 2021',
    type: 'specialist',
    location: 'Dhaka, Bangladesh',
    summary:
      'Managed full-funnel Meta/Facebook advertising campaigns from audience architecture and pixel configuration to creative testing and retargeting scale.',
    highlights: [
      'Developed tailored acquisition funnels and audience segmentation frameworks for e-commerce and local brands.',
      'Monitored conversion data continuously to adjust bids, reallocate budgets to top ad sets, and reduce CPA.',
      'Conducted iterative A/B testing on ad creative angles, headlines, and landing page offers.'
    ],
    metrics: [
      { label: 'Creative Sets Tested', value: '300+' },
      { label: 'Peak ROAS Achieved', value: '2700%' },
      { label: 'Campaign Focus', value: 'Direct Response' }
    ],
    tags: ['Meta Ads', 'Audience Testing', 'Direct Response', 'A/B Testing']
  }
];

const credentials = [
  {
    title: 'Digital Marketing Level-4 NTVQF',
    org: 'BTEB (Bangladesh Technical Education Board)',
    badge: 'Govt. Accredited',
    year: 'Official Standard'
  },
  {
    title: 'NSDA / NSDS Digital Marketing Training (Level 3)',
    org: 'National Skills Development Authority',
    badge: 'National Standard',
    year: 'Completed'
  },
  {
    title: 'Digital Marketing Professional Certification',
    org: 'Skilluper',
    badge: 'Advanced Institute',
    year: '2021'
  },
  {
    title: 'Facebook Ads Expert Certification',
    org: 'Mojarkena',
    badge: 'Paid Social',
    year: '2020 – 2021'
  },
  {
    title: 'Digital Marketing Master Program',
    org: 'Creative IT Institute',
    badge: 'Foundational',
    year: '2019'
  }
];

const education = [
  {
    degree: "Bachelor's Degree",
    institution: 'Tongi Government College',
    session: 'Session: 2019 – 2020'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Nazmul Smrity Government College',
    session: 'Graduated 2019'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Uttar Nakshi High School',
    session: 'Graduated 2017'
  }
];

export function NarrativeRoadmap() {
  const [expandedId, setExpandedId] = useState<string>('scaleup');
  const [activeTab, setActiveTab] = useState<'experience' | 'credentials'>('experience');

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Tab Switcher */}
      <div className="mb-10 flex justify-center">
        <div className="inline-flex rounded-2xl border border-white/10 bg-slate-900/80 p-1.5 backdrop-blur-lg">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition ${
              activeTab === 'experience'
                ? 'bg-blue text-white shadow-lg shadow-blue-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase size={16} />
            Agency Leadership & Career (2019–Present)
          </button>
          <button
            onClick={() => setActiveTab('credentials')}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition ${
              activeTab === 'credentials'
                ? 'bg-blue text-white shadow-lg shadow-blue-500/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Award size={16} />
            Certifications & Education
          </button>
        </div>
      </div>

      {/* Experience Tab Content */}
      {activeTab === 'experience' && (
        <div className="relative border-l-2 border-blue/20 pl-6 sm:pl-10 ml-4 sm:ml-8 space-y-10">
          {experiences.map((item, index) => {
            const isExpanded = expandedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl border ${
                    item.period.includes('Present')
                      ? 'border-blue bg-blue text-white shadow-lg shadow-blue-500/30 ring-4 ring-blue/20'
                      : 'border-white/20 bg-slate-900 text-slate-400'
                  }`}
                >
                  <Building2 size={18} />
                </div>

                {/* Card Container */}
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 sm:p-8 shadow-xl backdrop-blur-xl transition hover:border-white/20">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {item.role}
                        </h3>
                        {item.period.includes('Present') && (
                          <span className="font-mono flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-400">
                        <span className="font-semibold text-blue-400">{item.company}</span>
                        <span>•</span>
                        <span className="font-mono flex items-center gap-1 text-slate-400">
                          <Calendar size={13} /> {item.period}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin size={13} /> {item.location}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedId(isExpanded ? '' : item.id)}
                      className="flex items-center gap-1 text-xs font-semibold text-blue hover:text-blue-300 transition"
                    >
                      {isExpanded ? 'Show Less' : 'View Impact Details'}
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300 font-sans">{item.summary}</p>

                  {/* Highlight Metrics with Monospace Fonts */}
                  <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-4 rounded-2xl border border-white/[.06] bg-white/[.02] p-3 sm:p-4 text-center">
                    {item.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-mono text-base sm:text-2xl font-black text-white">
                          {m.value}
                        </div>
                        <div className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Action Items */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 border-t border-white/10 pt-4">
                          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-400">
                            Key Operational Deliverables & Achievements
                          </h4>
                          <ul className="mt-3 space-y-2 text-sm text-slate-300">
                            {item.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Skill Badges */}
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[.06] pt-4">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono rounded-lg border border-white/10 bg-white/[.03] px-2.5 py-1 text-[11px] text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Credentials Tab Content */}
      {activeTab === 'credentials' && (
        <div className="space-y-8">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <ShieldCheck className="text-blue" size={20} />
              <h3 className="font-display text-lg font-bold text-white">
                Government & Industry Qualifications
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {credentials.map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg backdrop-blur-xl"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono rounded-full border border-blue/30 bg-blue/10 px-2.5 py-0.5 text-[10px] font-bold text-blue uppercase tracking-wider">
                      {c.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-400">{c.year}</span>
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold text-white">{c.title}</h4>
                  <p className="mt-1 text-xs font-semibold text-slate-400">{c.org}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="text-blue-400" size={20} />
              <h3 className="font-display text-lg font-bold text-white">Academic Degrees</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {education.map((e, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg backdrop-blur-xl"
                >
                  <span className="font-mono text-xs text-blue-300 font-semibold">{e.session}</span>
                  <h4 className="mt-2 font-display text-base font-bold text-white">{e.degree}</h4>
                  <p className="mt-1 text-xs text-slate-400">{e.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-blue/20 bg-blue/5 p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-blue-200">
              <Sparkles size={16} className="text-blue-400" />
              <span className="font-display">Multi-Industry Experience Verticals</span>
            </div>
            <p className="mt-1.5 text-xs text-slate-400 font-sans">
              Tauhid has spearheaded ad operations across 11+ industry verticals:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                'Technology',
                'Digital Services',
                'E-commerce',
                'Fashion & Apparel',
                'Food & Beverage',
                'Sports & Fitness',
                'Finance',
                'Real Estate',
                'Retail Goods',
                'Pet Products',
                'Education'
              ].map((ind) => (
                <span
                  key={ind}
                  className="font-mono rounded-lg border border-white/10 bg-white/[.04] px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
