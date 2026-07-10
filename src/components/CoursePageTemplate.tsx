"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";
import BannerForm from "@/components/BannerForm";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Module {
  title: string;
  topics: string[];
  hasFilmmaking?: boolean;
  filmmakingTopics?: string[];
}

interface CoursePageTemplateProps {
  courseId: string;
  courseName: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  heroBgImage: string;
  highlights: string[];
  highlightImages: string[];
  courseFullName: string;
  courseDuration: string;
  professionalsIntro: string;
  professionalsPoints: {
    title: string;
    description: string;
  }[];
  programHighlights: string[];
  modules: Module[];
  careersLeft?: string[];
  careersRight?: string[];
  children?: React.ReactNode;
}

export default function CoursePageTemplate({
  courseFullName,
  heroTitle,
  heroSubtitle,
  heroBgImage,
  highlights,
  highlightImages,
  courseDuration,
  professionalsIntro,
  professionalsPoints,
  programHighlights,
  modules,
  careersLeft,
  careersRight,
  children,
}: CoursePageTemplateProps) {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const toggleModule = (idx: number) => {
    setOpenModule(openModule === idx ? null : idx);
  };

  return (
    <div className="bg-[#FFFFFF]">
      <ScrollProgressBar />
      <MouseGlow />
      <Navbar />

      <main className="flex flex-col min-h-screen">
        
        {/* ═══════════════════════ HERO BANNER (Full-Width Edge-to-Edge) ═══════════════════════ */}
        <section 
          data-section-theme="dark" 
          className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-[#0A0A0A]"
          style={{ 
            backgroundImage: `url(${heroBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Full-width overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/50 z-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-transparent z-0" />
          
          {/* Ambient Accent Light */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[120px] pointer-events-none z-0" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-left">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-5 block font-sans">
                  COURSE DETAILS
                </span>
                <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-8">
                  {heroTitle}
                </h1>
                <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light italic max-w-2xl border-l-2 pl-4 border-[#E76B24]">
                  &ldquo;{heroSubtitle}&rdquo;
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                <BannerForm 
                  title="COURSE ENQUIRY" 
                  buttonText="SUBMIT ENQUIRY" 
                  defaultCourse={courseFullName} 
                  theme="dark"
                />
              </div>
            </div>
          </div>
        </section>

        <section data-section-theme="light" className="py-24 bg-[#FFFFFF] border-b border-[rgba(231, 107, 36,0.12)] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Bullet points */}
              <div className="text-left text-[#111111]">
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8 tracking-tight leading-tight text-[#111111] uppercase">
                  Course <span className="text-[#E76B24]">Highlights:</span>
                </h2>
                <ul className="space-y-4 text-[#444444] text-sm sm:text-base font-light">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#E76B24] mr-3 font-extrabold">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: 3 overlapping rounded rectangular images */}
              <div className="relative w-full h-[400px]">
                {/* Image 1 (Top Left) */}
                <motion.div
                  whileHover={{ scale: 1.04, zIndex: 30, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-0 left-0 w-[55%] h-[230px] rounded-2xl overflow-hidden shadow-md border border-[rgba(231, 107, 36,0.12)] bg-[#FFFFFF] cursor-pointer"
                >
                  <img
                    src={highlightImages[0] || "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400"}
                    alt="Course Highlight Item 1"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* Image 2 (Bottom Left) */}
                <motion.div
                  whileHover={{ scale: 1.04, zIndex: 30, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute bottom-0 left-4 w-[55%] h-[230px] rounded-2xl overflow-hidden shadow-md border border-[rgba(231, 107, 36,0.12)] bg-[#FFFFFF] cursor-pointer"
                >
                  <img
                    src={highlightImages[1] || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400"}
                    alt="Course Highlight Item 2"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* Image 3 (Right) */}
                <motion.div
                  whileHover={{ scale: 1.04, zIndex: 30, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-1/2 -translate-y-1/2 right-0 w-[45%] h-[280px] rounded-2xl overflow-hidden shadow-md border border-[rgba(231, 107, 36,0.12)] bg-[#FFFFFF] cursor-pointer"
                >
                  <img
                    src={highlightImages[2] || "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=400"}
                    alt="Course Highlight Item 3"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>

            </div>

            {/* Bottom Header details */}
            <div className="text-center mt-20 pt-8 border-t border-[rgba(231, 107, 36,0.12)]">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] uppercase">
                {courseFullName}
              </h3>
              <p className="text-[#E76B24] font-bold text-xl sm:text-2xl mt-2 font-sans">
                ({courseDuration})
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ LEARN FROM PROFESSIONALS (Light Gray bg) ═══════════════════════ */}
        <section data-section-theme="light" className="py-24 border-b border-[rgba(231, 107, 36,0.12)] bg-[#F5F5F5] relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Professionals Info & Highlights */}
              <div className="col-span-1 lg:col-span-7 flex flex-col text-left text-[#111111]">
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 tracking-tight leading-tight text-[#111111] uppercase">
                  Learn From <span className="text-[#E76B24]">Professionals</span>
                </h2>
                
                <p className="text-[#444444] text-sm sm:text-base leading-relaxed font-light mb-12">
                  {professionalsIntro}
                </p>

                {/* Subsections columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                  {professionalsPoints.map((pt, idx) => (
                    <div key={idx}>
                      <h3 className="font-display font-bold text-lg mb-3 text-[#111111] uppercase">
                        {pt.title.split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="text-[#E76B24]">{pt.title.split(" ").slice(-1)}</span>
                      </h3>
                      <p className="text-[#444444] text-xs sm:text-sm leading-relaxed font-light">
                        {pt.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Program Highlights bullet list */}
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl mb-6 tracking-tight leading-tight text-[#111111] uppercase">
                    Program <span className="text-[#E76B24]">Highlights:</span>
                  </h3>
                  <ul className="space-y-4 text-[#444444] text-sm sm:text-base font-light">
                    {programHighlights.map((ph, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#E76B24] mr-3 font-extrabold">•</span>
                        {ph}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Sticky Enquiry Form */}
              <div className="col-span-1 lg:col-span-5 flex justify-center lg:sticky lg:top-28">
                <BannerForm 
                  title="ENQUIRY FORM" 
                  buttonText="SUBMIT" 
                  defaultCourse={courseFullName} 
                  theme="light"
                />
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════ MODULE ACCORDIONS (White bg) ═══════════════════════ */}
        <section data-section-theme="light" className="py-24 border-b border-[rgba(231, 107, 36,0.12)] bg-[#FFFFFF] relative">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-center mb-16 tracking-tight leading-tight text-[#111111] uppercase">
              Program <span className="text-[#E76B24]">Structure</span>
            </h2>

            <div className="space-y-4">
              {modules.map((item, idx) => {
                const isOpen = openModule === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-[#F5F5F5] border border-[rgba(231, 107, 36,0.12)] rounded-2xl p-5 hover:shadow-sm hover:border-[#E76B24] transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleModule(idx)}
                      className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                    >
                      <span className={`font-sans font-semibold text-sm sm:text-base transition-colors duration-300 ${
                        isOpen ? "text-[#E76B24]" : "text-[#111111] group-hover:text-[#E76B24]"
                      }`}>
                        {item.title}
                      </span>
                      
                      {/* Plus / Minus Indicator */}
                      <div className="ml-4 flex-shrink-0 h-6 w-6 flex items-center justify-center text-[#111111]">
                        {isOpen ? (
                          <Minus className="h-4 w-4 text-[#E76B24]" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="pt-4 mt-4 border-t border-[rgba(231, 107, 36,0.12)] pl-4 border-l-2 border-[#E76B24]/60 space-y-4">
                            
                            {/* General Topics list */}
                            <ul className="space-y-2.5 text-[#444444] text-xs sm:text-sm font-light grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
                              {item.topics.map((topic, tIdx) => (
                                <li key={tIdx} className="flex items-center">
                                  <span className="text-[#E76B24] mr-2 font-bold">-</span>
                                  {topic}
                                </li>
                              ))}
                            </ul>

                            {/* Filmmaking subcategory (if active) */}
                            {item.hasFilmmaking && item.filmmakingTopics && (
                              <div className="mt-4 pt-4 border-t border-[rgba(231, 107, 36,0.12)] text-left">
                                <h4 className="text-[#111111] font-bold text-xs sm:text-sm tracking-wide mb-3 uppercase font-sans">
                                  Filmmaking
                                </h4>
                                <ul className="space-y-2 text-[#444444] text-xs sm:text-sm font-light grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {item.filmmakingTopics.map((fTopic, fIdx) => (
                                    <li key={fIdx} className="flex items-center">
                                      <span className="text-[#E76B24] mr-2 font-bold">-</span>
                                      {fTopic}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ CAREER AVENUES SECTION (Light Gray bg, Natively Handled) ═══════════════════════ */}
        {((careersLeft && careersLeft.length > 0) || (careersRight && careersRight.length > 0)) && (
          <section data-section-theme="light" className="py-24 border-b border-[rgba(231, 107, 36,0.12)] bg-[#F5F5F5] relative">
            <div className="max-w-5xl mx-auto px-6 text-left">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-center mb-4 tracking-tight leading-tight text-[#111111] uppercase">
                Career <span className="text-[#E76B24]">Avenues</span>
              </h2>
              <p className="text-[#444444] text-center text-xs sm:text-sm font-light mb-16 max-w-xl mx-auto">
                After successful completion of the said program, a student is eligible for the following job categories.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                {/* Left List */}
                {careersLeft && (
                  <div className="bg-[#FFFFFF] border border-[rgba(231, 107, 36,0.12)] rounded-2xl p-6 shadow-sm space-y-4">
                    {careersLeft.map((career, idx) => (
                      <div key={idx} className="flex items-center text-[#111111] text-sm sm:text-base font-medium">
                        <span className="text-[#E76B24] mr-3 font-bold font-sans">•</span>
                        {career}
                      </div>
                    ))}
                  </div>
                )}
                {/* Right List */}
                {careersRight && (
                  <div className="bg-[#FFFFFF] border border-[rgba(231, 107, 36,0.12)] rounded-2xl p-6 shadow-sm space-y-4">
                    {careersRight.map((career, idx) => (
                      <div key={idx} className="flex items-center text-[#111111] text-sm sm:text-base font-medium">
                        <span className="text-[#E76B24] mr-3 font-bold font-sans">•</span>
                        {career}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════ GET IN TOUCH (Premium Dark) ═══════════════════════ */}
        <section data-section-theme="dark" className="relative py-28 bg-[#0A0A0A] overflow-hidden">
          {/* Ambient glow orbs */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E76B24]/8 blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#E76B24]/5 blur-[100px] pointer-events-none" />
          {/* Grid mesh overlay */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E76B24" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Column */}
              <div className="flex flex-col items-start text-left">
                {/* Eyebrow */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xs font-bold tracking-[0.3em] text-[#E76B24] uppercase mb-5 block font-sans"
                >
                  Start Your Journey
                </motion.span>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05] uppercase mb-6"
                >
                  Get in <br />
                  <span className="text-[#E76B24]">Touch</span> With Us
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-white/55 text-sm sm:text-base font-light leading-relaxed mb-10 max-w-md"
                >
                  Our expert counsellors are ready to help you find the right course, understand fee structures, and plan your creative career path.
                </motion.p>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-10">
                  {[
                    { value: "30+", label: "Years of Legacy" },
                    { value: "50+", label: "Centers Pan India" },
                    { value: "10K+", label: "Students Trained" },
                    { value: "95%", label: "Placement Rate" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 + idx * 0.07 }}
                      className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 hover:border-[#E76B24]/30 transition-all duration-300 group"
                    >
                      <div className="font-display font-black text-2xl text-[#E76B24] mb-0.5">{stat.value}</div>
                      <div className="text-white/50 text-[10px] uppercase tracking-widest font-semibold font-sans">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Counsellor image card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full max-w-[340px] rounded-3xl overflow-hidden border border-white/10 bg-[#1A1A1A] shadow-2xl"
                >
                  <img
                    src="/images/counselling_cartoon.png"
                    alt="ZICA Academic Counsellor"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* Right Column: Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex justify-center lg:justify-end"
              >
                <BannerForm title="ENQUIRY FORM" buttonText="SUBMIT ENQUIRY" defaultCourse={courseFullName} theme="dark" className="bg-[#111111]/80 border-white/5" />
              </motion.div>

            </div>
          </div>
        </section>

        {children}
      </main>

      <Footer />
    </div>
  );
}


