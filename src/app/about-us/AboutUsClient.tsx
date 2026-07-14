"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Lightbulb,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Award,
  GraduationCap,
  Building2,
  Users,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";
import BannerForm from "@/components/BannerForm";

const CAMPUS_GALLERY = [
  "/images/infrastructure/zica_institue_1.jpg",
  "/images/infrastructure/zica_reception.jpg",
  "/images/infrastructure/classroom_1.jpg",
  "/images/infrastructure/classroom_3.jpg",
  "/images/infrastructure/classroom_4.jpg",
  "/images/infrastructure/classroom_5.jpg",
  "/images/infrastructure/classroom_6.jpg",
  "/images/infrastructure/classroom_7.jpg",
  "/images/infrastructure/zica_reception_2.jpg",
  "/images/infrastructure/zica_reception_3.jpg",
];

const STATS = [
  { value: "30+", label: "Years of Legacy", icon: Star },
  { value: "50+", label: "Centers Pan India", icon: Building2 },
  { value: "10K+", label: "Students Trained", icon: Users },
  { value: "95%", label: "Placement Rate", icon: GraduationCap },
];

const WHY_CHOOSE = [
  { icon: Award, color: "bg-primary text-white", title: "30 Years of Legacy", desc: "Over 30 years of excellence in media education, training thousands of creative professionals across India." },
  { icon: Users, color: "bg-primary text-white", title: "Expert Mentors", desc: "Learn directly from industry-certified veterans with extensive animation, VFX and design portfolios." },
  { icon: Building2, color: "bg-primary text-white", title: "Zee Group Network", desc: "Leverage connections with India’s media powerhouse to unlock premium job placements and opportunities." },
  { icon: Target, color: "bg-primary text-white", title: "100% Placement Help", desc: "Dedicated placement cell tracking your milestones to place you in premier design agencies worldwide." },
];

export default function AboutUsClient() {
  const [selectedCampusIndex, setSelectedCampusIndex] = useState<number | null>(null);

  return (
    <>
      <ScrollProgressBar />
      <MouseGlow />
      <Navbar />

      <main className="flex flex-col min-h-screen bg-white text-text-primary font-sans overflow-hidden pt-24">

        {/* ═══════════════════════ HERO BANNER (Full-Width Edge-to-Edge) ═══════════════════════ */}
        <section 
          data-section-theme="dark" 
          className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/60 z-0" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0A0A0A]/70 z-0" />
          
          {/* Ambient Glowing Blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[120px] pointer-events-none z-0" />

          {/* Grid Mesh Overlay */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-screen select-none z-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E76B24" strokeWidth="0.5" />
                  <circle cx="40" cy="0" r="1.2" fill="#E76B24" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#aboutGrid)" />
            </svg>
          </div>

          <div className="relative z-10 text-center flex flex-col items-center px-6 py-20">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-5xl sm:text-7xl text-white tracking-tight uppercase mb-6 drop-shadow-lg"
            >
              About <span className="text-primary">Us</span>
            </motion.h1>
            
            {/* Visual Divider */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-1 bg-primary mb-6 rounded-full"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center space-x-3 text-xs sm:text-sm font-semibold tracking-widest uppercase bg-black/35 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10"
            >
              <Link href="/" className="text-primary hover:text-brand-hover transition-colors duration-300">Homepage</Link>
              <span className="text-white/40">/</span>
              <span className="text-white/80">About Us</span>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════ ABOUT ZICA INTRO ═══════════════════════ */}
        <section data-section-theme="light" className="relative py-20 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left: Banner Form */}
              <div className="lg:col-span-5 flex justify-center md:justify-start w-full relative">
                <BannerForm title="ABOUT US ENQUIRY" buttonText="ENQUIRE NOW" theme="light" />
              </div>

              {/* Right: Narrative */}
              <div className="lg:col-span-7 flex flex-col text-left text-text-primary">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-4"
                >
                  Who We Are
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-display font-black text-3xl sm:text-5xl text-heading uppercase tracking-tight mb-6 leading-tight"
                >
                  India&apos;s Premier <span className="text-primary">Creative Arts</span> Institute
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="text-text-primary text-sm sm:text-base leading-relaxed font-light mb-5"
                >
                  ZICA is part of the Zee Group, India&apos;s Largest TV Network which comprises of Channels like Zee TV, Zee Cinema, Zee News, &amp; TV, &amp; Pictures etc. ZICA as a brand started its journey 30 years back in Mumbai.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="text-text-secondary text-sm sm:text-base leading-relaxed font-light mb-8"
                >
                  This institute is the brainchild of the Chairman of Zee Group Shri Subhash Chandra ji who is also known as the Media Baron of India. ZICA&apos;s mission is to provide world-class creative education, producing industry-ready professionals who can shape the future of media and entertainment.
                </motion.p>

                {/* Quick Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {STATS.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="bg-alt-section border border-border rounded-2xl p-4 text-center hover:border-primary/50 hover:shadow-sm transition-all duration-300 group cursor-pointer"
                    >
                      <stat.icon className="h-5 w-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="font-display font-black text-2xl text-heading mb-1">{stat.value}</div>
                      <div className="text-text-secondary text-[10px] uppercase tracking-widest font-semibold font-sans">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════ TARGET / VISION / MISSION ═══════════════════════ */}
        <section data-section-theme="light" className="relative py-24 bg-alt-section overflow-hidden border-b border-border">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-3 block font-sans">Our Foundation</span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-heading tracking-tight uppercase">
                What <span className="text-primary">Drives</span> Us
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Target, border: "hover:border-primary/50", title: "Our Target", desc: "To nurture creative minds and transform them into highly skilled digital artists capable of leading and reshaping the global media, design, and entertainment industries." },
                { icon: Eye, border: "hover:border-primary/50", title: "Our Vision", desc: "To become the global benchmark for creative education by integrating traditional artistic fundamentals with state-of-the-art software technology and industry pipelines." },
                { icon: Lightbulb, border: "hover:border-primary/50", title: "Our Mission", desc: "To provide state-of-the-art infrastructure, hands-on production experiences, and world-class guidance from industry experts to ensure ZICA graduates are fully industry-ready." },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative bg-white p-8 rounded-3xl border border-border ${card.border} transition-all duration-500 text-left group overflow-hidden shadow-sm`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.01] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className="h-14 w-14 rounded-2xl bg-brand-tint flex items-center justify-center text-primary mb-6 ring-1 ring-primary/10 group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-3 relative z-10 uppercase">{card.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-light relative z-10">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ INFRASTRUCTURE GALLERY ═══════════════════════ */}
        <section data-section-theme="light" className="relative py-24 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3 block font-sans">ZICA Environment</span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-heading tracking-tight uppercase mb-4">
                Our <span className="text-primary">Infrastructure</span>
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light">
                Take a virtual tour of our premium classrooms, animation workstations, sound studios, and creative spaces built to mirror real-world professional design agencies.
              </p>
            </div>

            {/* Masonry-style Gallery Grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {CAMPUS_GALLERY.map((imagePath, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setSelectedCampusIndex(idx)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className="relative break-inside-avoid rounded-2xl overflow-hidden border border-border hover:border-primary/50 shadow-sm hover:shadow-[0_8px_30px_rgba(231, 107, 36,0.12)] cursor-pointer group transition-all duration-300 bg-alt-section"
                >
                  <img
                    src={imagePath}
                    alt={`ZICA Campus Infrastructure ${idx + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex items-center gap-2 text-left">
                      <Camera className="h-4 w-4 text-white" />
                      <span className="text-white text-xs font-semibold">View Full Size</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ WHY CHOOSE ZICA ═══════════════════════ */}
        <section className="relative py-24 bg-brand-tint overflow-hidden border-b border-border">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.25em] text-primary uppercase mb-3 block font-sans">Our Edge</span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-heading tracking-tight uppercase mb-4">
                Why Choose <span className="text-primary">ZICA</span>
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
                With a robust legacy of over three decades, we provide unmatched training with modern facilities to empower your creative career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_CHOOSE.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white border border-border shadow-sm rounded-3xl p-7 hover:border-primary/55 hover:shadow-md transition-all duration-500 group text-left relative overflow-hidden cursor-pointer"
                >
                  <div className="h-12 w-12 rounded-2xl bg-brand-tint border border-primary/20 flex items-center justify-center text-primary mb-5 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-heading mb-2 uppercase">{item.title}</h4>
                  <p className="text-text-secondary text-sm font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ ENQUIRY FORM + STILL CONFUSED ═══════════════════════ */}
        <section className="relative py-28 bg-dark-section text-white overflow-hidden">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Get in Touch */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
              <div className="col-span-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-8 leading-tight uppercase">
                  Get in touch <br />
                  <span className="text-primary">With us</span>
                </h2>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full max-w-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white p-4"
                >
                  <img src="/images/counselling_cartoon.png" alt="Support Counselor" className="w-full h-auto object-contain rounded-2xl" loading="lazy" />
                </motion.div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <BannerForm title="ENQUIRE NOW" buttonText="SUBMIT ENQUIRY" theme="dark" className="bg-slate-950/80 border-white/5" />
              </div>
            </div>

            {/* Still Confused */}
            <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-2 leading-none uppercase">
                  Still <span className="text-primary">Confused!!!</span>
                </h3>
                <p className="text-white/60 text-sm sm:text-base font-light tracking-wide font-sans">Get Instant Clarity</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="tel:+917900400300" className="px-8 py-3.5 bg-primary hover:bg-brand-hover text-white font-bold text-xs uppercase tracking-wider rounded-full text-center transition-all duration-300 shadow-sm cursor-pointer font-sans">
                  Talk to Counsellor
                </a>
                <a href="/ZICA-BROCHURE.pdf" download className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-full text-center hover:bg-white/10 transition-all duration-300 shadow-sm cursor-pointer font-sans">
                  Download Brochure
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* ═══════════════════════ LIGHTBOX ═══════════════════════ */}
      <AnimatePresence>
        {selectedCampusIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 select-none"
            onClick={() => setSelectedCampusIndex(null)}
          >
            <button onClick={() => setSelectedCampusIndex(null)} className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-white/25 text-white transition-all duration-300 z-50 cursor-pointer">
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedCampusIndex((prev) => prev !== null ? (prev - 1 + CAMPUS_GALLERY.length) % CAMPUS_GALLERY.length : null); }}
              className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-white/25 text-white transition-all duration-300 z-50 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedCampusIndex((prev) => prev !== null ? (prev + 1) % CAMPUS_GALLERY.length : null); }}
              className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-white/25 text-white transition-all duration-300 z-50 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.img
              key={selectedCampusIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={CAMPUS_GALLERY[selectedCampusIndex]}
              alt="Campus Gallery Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
