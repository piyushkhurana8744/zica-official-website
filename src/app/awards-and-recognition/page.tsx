"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Phone,
  Trophy,
  Medal,
  Star,
  Sparkles,
  Crown,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.988 4.492-9.988 10 0 1.758.459 3.41 1.259 4.858l-1.283 4.792 4.906-1.288c1.409.767 3.01 1.206 4.71 1.206 5.507 0 9.989-4.492 9.989-10s-4.482-10-9.989-10zm.012 18.064c-1.576 0-3.08-.431-4.385-1.246l-.314-.188-2.906.762.775-2.894-.207-.329c-.896-1.427-1.371-3.084-1.371-4.789 0-4.996 4.072-9.058 9.079-9.058 5.006 0 9.078 4.062 9.078 9.058-.001 4.997-4.073 9.08-9.08 9.08zm4.97-6.84c-.272-.137-1.614-.797-1.863-.889-.25-.09-.432-.137-.613.137-.182.273-.705.889-.864 1.072-.159.182-.318.204-.59.068-.272-.137-1.15-.424-2.19-1.353-.809-.723-1.356-1.616-1.515-1.889-.159-.273-.017-.42.119-.556.123-.122.272-.319.409-.478.136-.159.182-.272.272-.454.09-.182.045-.341-.022-.477-.068-.137-.613-1.477-.84-2.023-.222-.534-.443-.46-.613-.469-.159-.009-.341-.009-.523-.009-.181 0-.477.068-.727.341-.25.272-.953.932-.953 2.273s.976 2.637 1.112 2.819c.137.182 1.92 2.932 4.653 4.113.65.28 1.157.447 1.553.573.656.208 1.253.179 1.725.109.526-.079 1.614-.659 1.841-1.295.227-.637.227-1.183.159-1.295-.069-.114-.25-.182-.522-.319z" />
    </svg>
  );
}

const AWARDS = [
  { year: "2024", title: "Best Animation Institute", org: "National Education Excellence Awards", icon: Trophy, color: "from-amber-400 to-yellow-600" },
  { year: "2023", title: "Outstanding Creative Education", org: "India Education Summit", icon: Crown, color: "from-violet-400 to-purple-600" },
  { year: "2022", title: "Excellence in VFX Training", org: "CG Society India Awards", icon: Sparkles, color: "from-[#BE1E2E] to-rose-600" },
  { year: "2021", title: "Top Animation Academy", org: "Digital India Design Awards", icon: Star, color: "from-emerald-400 to-green-600" },
  { year: "2020", title: "Best Placement Record", org: "EdTech Excellence Awards", icon: Medal, color: "from-cyan-400 to-blue-600" },
  { year: "2019", title: "Innovation in Curriculum", org: "Creative Industry Awards", icon: Zap, color: "from-orange-400 to-red-500" },
];

const HIGHLIGHTS = [
  { value: "30+", label: "Years of Excellence" },
  { value: "50+", label: "Awards Won" },
  { value: "1M+", label: "Lives Impacted" },
  { value: "50+", label: "Pan India Centers" },
];

export default function AwardsAndRecognitionPage() {
  return (
    <>
      <ScrollProgressBar />
      <MouseGlow />
      <Navbar />

      <main className="flex flex-col min-h-screen bg-[#0A0A0A] text-white font-sans overflow-hidden">

        {/* ═══════════════ HERO ═══════════════ */}
        <section data-section-theme="dark" className="relative pt-32 pb-24 bg-gradient-to-b from-[#0A0A0A] via-[#141414] to-[#0A0A0A] overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen select-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="awardGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#BE1E2E" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="40" cy="0" r="1.5" fill="#BE1E2E" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#awardGrid)" />
            </svg>
          </div>

          {/* Ambient Glowing Blobs */}
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#BE1E2E]/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 w-[500px] h-[250px] rounded-full bg-[#BE1E2E]/5 blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase mb-4"
            >
              Awards & <span className="text-[#BE1E2E]">Recognition</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wide uppercase"
            >
              <Link href="/" className="text-[#BE1E2E] hover:text-red-500 transition-colors duration-300">Homepage</Link>
              <span className="text-zinc-400">/</span>
              <span className="text-zinc-200">Awards & Recognition</span>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] sm:h-[120px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,18,83.13,26.11,146.12,44.3,219.09,68.21,321.39,56.44Z" fill="#141414" />
            </svg>
          </div>
        </section>

        {/* ═══════════════ TROPHY + INTRO ═══════════════ */}
        <section data-section-theme="dark" className="relative pt-4 pb-20 bg-[#141414]">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left: Sidebar */}
              <div className="lg:col-span-3 flex flex-col items-start gap-6 relative">
                <div className="flex flex-row md:flex-col items-center gap-4 self-stretch md:self-start z-20">
                  <Link href="/" className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-[#BE1E2E]/50 hover:bg-[#BE1E2E]/10 text-white transition-all duration-300 group shadow-md">
                    <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex md:flex-col items-stretch rounded-2xl overflow-hidden border border-[rgba(190,30,46,0.12)] shadow-xl bg-[#0A0A0A]">
                    <div className="flex items-center justify-center bg-[#BE1E2E] hover:bg-[#A31827] text-white px-3.5 py-5 transition-colors cursor-pointer select-none">
                      <div className="flex items-center gap-2 whitespace-nowrap text-xs font-bold [writing-mode:vertical-lr] rotate-180 uppercase tracking-widest">
                        <Mail className="h-3.5 w-3.5 rotate-90" />
                        <span>Contact Us</span>
                      </div>
                    </div>
                    <a href="https://wa.me/917900400300" target="_blank" rel="noopener noreferrer" className="h-12 w-12 flex items-center justify-center bg-[#22C55E] hover:bg-[#1eab50] text-white transition-colors cursor-pointer" title="Chat on WhatsApp">
                      <WhatsAppIcon className="h-6 w-6" />
                    </a>
                    <a href="tel:+917900400300" className="h-12 w-12 flex items-center justify-center bg-[#BE1E2E] hover:bg-[#A31827] text-white transition-colors cursor-pointer" title="Call Us">
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Narrative + Highlights */}
              <div className="lg:col-span-9 flex flex-col text-left">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xs font-bold tracking-[0.25em] text-[#BE1E2E] uppercase mb-4"
                >
                  A Legacy of Excellence
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-6 leading-tight"
                >
                  ZICA Awards & <span className="text-[#BE1E2E]">Recognition</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-5"
                >
                  ZICA is part of the Zee Group, India&apos;s Largest TV Network which comprises of Channels like Zee TV, Zee Cinema, Zee News, &amp; TV, &amp; Pictures etc. ZICA as a brand started its journey 30 years back in Mumbai.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light mb-8"
                >
                  This institute is the brainchild of the Chairman of Zee Group Shri Subhash Chandra ji who is also known as the Media Baron of India. Over 30 years, ZICA has received numerous national and international accolades for its contributions to creative education.
                </motion.p>

                {/* Highlights Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {HIGHLIGHTS.map((h, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 text-center hover:border-[#BE1E2E]/30 transition-all duration-300"
                    >
                      <div className="font-display font-black text-2xl text-[#BE1E2E] mb-1">{h.value}</div>
                      <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-semibold">{h.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════ AWARDS TIMELINE ═══════════════ */}
        <section data-section-theme="dark" className="relative py-24 bg-[#0A0A0A] overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.25em] text-[#BE1E2E] uppercase mb-3 block">Our Achievements</span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
                Award <span className="text-[#BE1E2E]">Timeline</span>
              </h2>
            </div>

            {/* Timeline Grid */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#BE1E2E]/30 to-transparent md:-translate-x-px" />

              <div className="space-y-12">
                {AWARDS.map((award, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.08 }}
                      className={`relative flex items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                    >
                      {/* Dot on Timeline */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#BE1E2E] border-4 border-[#0A0A0A] z-10 shadow-[0_0_15px_rgba(190,30,46,0.4)]" />

                      {/* Content Card */}
                      <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                        <div className={`bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-[#BE1E2E]/30 transition-all duration-300 group`}>
                          <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
                            <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                              <award.icon className="h-5 w-5" />
                            </div>
                            <span className="text-[#BE1E2E] text-sm font-black tracking-wide">{award.year}</span>
                          </div>
                          <h3 className="text-white font-bold text-lg mb-1">{award.title}</h3>
                          <p className="text-zinc-500 text-xs uppercase tracking-wider font-semibold">{award.org}</p>
                        </div>
                      </div>

                      {/* Spacer for other side */}
                      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ ENQUIRY + CTA ═══════════════ */}
        <section data-section-theme="dark" className="relative py-28 bg-[#141414] border-t border-[rgba(190,30,46,0.12)]">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/2 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Still Confused */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-2 leading-none">
                  Still <span className="text-[#BE1E2E]">Confused!!!</span>
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base font-light tracking-wide">Get Instant Clarity</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="tel:+917900400300" className="px-8 py-3.5 bg-[#BE1E2E] hover:bg-[#A31827] text-white font-bold text-sm tracking-wide rounded-full text-center transition-all duration-300 shadow-lg cursor-pointer">
                  Talk to Counsellor
                </a>
                <a href="/ZICA-BROCHURE.pdf" download className="px-8 py-3.5 bg-[#BE1E2E] hover:bg-[#A31827] text-white font-bold text-sm tracking-wide rounded-full text-center transition-all duration-300 shadow-lg cursor-pointer">
                  Download Brochure
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
