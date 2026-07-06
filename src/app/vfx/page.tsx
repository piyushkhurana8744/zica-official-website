"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";
import BannerForm from "@/components/BannerForm";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MODULES = [
  {
    title: "Module 01: FUNDAMENTALS OF ART, DESIGN & COMPUTER GRAPHICS (6 MONTHS)",
    topics: [
      "Introduction",
      "Fundamentals of Art",
      "Computer Graphics",
      "Principles of Design",
      "Perspective",
      "Color Theory",
      "Storyboard",
    ],
    hasFilmmaking: true,
    filmmakingTopics: [
      "Foundation",
      "Screen Writing",
      "Direction – 1",
      "Acting",
      "Cinematography",
      "Film Editing",
      "Sound Design",
      "Direction – 2",
      "Other Formats",
    ],
  },
  {
    title: "Module 02: 3D CG ASSETS & CHARACTERS (6 MONTHS)",
    topics: [
      "3D Modelling & Hard Surface Layout",
      "Organic & Character Modeling Basics",
      "UV Mapping & Layout Coordinates",
      "Advanced Texturing & Substance Painter Setup",
      "CGI Studio Lighting & Multi-Light Layouts",
      "Arnold Shader Materials & Rendering Pipelines",
    ],
  },
  {
    title: "Module 03: DYNAMICS, MATCHMOVING & TRACKING (6 MONTHS)",
    topics: [
      "Introduction to Dynamic Simulation Systems",
      "Particles, Rigid & Soft Body Dynamics",
      "Fluid Dynamics (Water, Liquid Effects)",
      "Pyrotechnics (Flame, Smoke & Explosions)",
      "Matchmoving & 3D Camera Tracking Basics",
      "Object Tracking & Rotomation Pipelines",
    ],
  },
  {
    title: "Module 04: COMPOSITING & VFX FILM PROJECT (6 MONTHS)",
    topics: [
      "Introduction to Node-Based Compositing (Foundry Nuke)",
      "Advanced Rotoscopy & Paint Clean Plates",
      "Green Screen Chroma Keying & Color Extraction",
      "Multi-Pass CG Integration & Timelines",
      "VFX Production Workflows & Pipeline Coordination",
      "Final Year VFX Short Film Project & Presentation",
    ],
  },
];

export default function VfxPage() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "Visual Effects (VFX)",
  });

  const toggleModule = (idx: number) => {
    setOpenModule(openModule === idx ? null : idx);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Enquiry submitted successfully!\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nCourse: ${formData.course}`);
  };

  return (
    <>
      <ScrollProgressBar />
      <MouseGlow />
      <Navbar />

      <main className="flex flex-col min-h-screen pt-20 bg-[#050505] text-white font-sans">
        
        {/* Cinematic Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1200&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/70" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-left drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-semibold mb-4 block">
                  COURSE DETAILS
                </span>
                <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight leading-tight mb-8">
                  Visual <br />
                  <span className="text-[#BE1E2E]">(VFX) Courses at ZICA Pitampura</span>
                </h1>
                <p className="text-zinc-300 text-sm sm:text-lg leading-relaxed font-light italic">
                  &ldquo;Our visual effects program equips you with the creative and technical skills to plan, design, and transform program to cater to exceedingly growing demand in the industry&rdquo;
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                <BannerForm title="COURSE ENQUIRY" buttonText="SUBMIT ENQUIRY" defaultCourse="Visual Effects (VFX)" />
              </div>
            </div>
          </div>
        </section>

        {/* Course Highlights Section */}
        <section className="py-24 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Bullet points */}
              <div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8 tracking-tight leading-tight">
                  Course <span className="text-[#BE1E2E]">Highlights:</span>
                </h2>
                <ul className="space-y-4 text-zinc-300 text-sm sm:text-base font-light">
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Comprehensive Animation and Visual Effects (VFX) program to develop creative minds
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Practical projects with industry-standard software.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Sequential learning from fundamentals to advanced visual effects.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Learn from experienced professionals in the animation industry.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Graduates are prepared with competitive skills and strong portfolios.
                  </li>
                </ul>
              </div>

              {/* Right Column: 3 overlapping rounded rectangular images */}
              <div className="relative w-full h-[400px]">
                {/* Image 1 (Top Left) */}
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 30, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-0 left-0 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=400&auto=format&fit=crop"
                    alt="Course Highlight Item 1"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Image 2 (Bottom Left) */}
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 30, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute bottom-0 left-4 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop"
                    alt="Course Highlight Item 2"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Image 3 (Right) */}
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 30, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-1/2 -translate-y-1/2 right-0 w-[45%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=400&auto=format&fit=crop"
                    alt="Course Highlight Item 3"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

            </div>

            {/* Bottom Header details */}
            <div className="text-center mt-20">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                PDP In Filmmaking Visual Effects
              </h3>
              <p className="text-[#BE1E2E] font-bold text-xl sm:text-2xl mt-2">
                (24 Months)
              </p>
            </div>
          </div>
        </section>

        {/* Learn From Professionals & Enquiry Form */}
        <section className="py-24 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Professionals Info & Highlights */}
              <div className="col-span-1 lg:col-span-7 flex flex-col">
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 tracking-tight leading-tight">
                  Learn From <span className="text-[#BE1E2E]">Professionals</span>
                </h2>
                
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                  This program has been designed to deal with Filmmaking by using Live Action, 3D Animation &amp; Visual Effects. The first module deals with Fundamentals of Art, Design &amp; Composition. A student then understands the basics of Photography and Filmmaking. The second module covers CG Assets &amp; Characters, Rigging &amp; Animation that is required for a VFX film. The third module deals with Dynamics &amp; Tracking. The fourth module combines CG with live action footage using timelines and a node-based compositing software. At the end of the program, the student develops a Visual Effects short film using Live Action &amp; CG.
                </p>

                {/* Subsections columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="font-display font-bold text-lg mb-3">
                      Become a <span className="text-[#BE1E2E]">Professional Artist</span>
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      A well laid out assessment procedure ensures the students&apos; acceptability as distinguished professionals in the world of Visual Effects. ZICA&apos;s placement cell provides placement assistance to all ZICA students across the country. ZICA training academy is equipped with high-end animation tools, 2D animation facilities, 3D software, Visual FX Labs and Imaging Technologies.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-3">
                      Be Industry <span className="text-[#BE1E2E]">Ready</span>
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      Students walk away with a rich portfolio comprising of live action, 3D and VFX project. This portfolio will be a gateway to joining animation and visual effect industry.
                    </p>
                  </div>
                </div>

                {/* Program Highlights bullet list */}
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl mb-6 tracking-tight leading-tight">
                    Program <span className="text-[#BE1E2E]">Highlights:</span>
                  </h3>
                  <ul className="space-y-4 text-zinc-300 text-sm sm:text-base font-light">
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Develop essential skills through a structured journey from foundational concepts to advanced techniques.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Work on practical, hands-on projects using industry-standard software.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Follow a sequential learning path that builds from core fundamentals to complex visual effects.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Learn directly from seasoned professionals with real-world animation industry experience.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Graduate with competitive, job-ready skills and a diverse, professional-quality portfolio.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Master advanced compositing, motion tracking, and procedural visual effects for high-end production work.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Sticky Enquiry Form */}
              <div className="col-span-1 lg:col-span-5 flex justify-center lg:sticky lg:top-28">
                <BannerForm title="ENQUIRY FORM" buttonText="SUBMIT" defaultCourse="Visual Effects (VFX)" />
              </div>

            </div>
          </div>
        </section>

        {/* Module Accordions Section */}
        <section className="py-24 border-b border-white/5 relative bg-[#090909]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-center mb-16 tracking-tight leading-tight">
              VFX Program <span className="text-[#BE1E2E]">Structure</span>
            </h2>

            <div className="space-y-4">
              {MODULES.map((item, idx) => {
                const isOpen = openModule === idx;
                return (
                  <div key={idx} className="border-b border-zinc-800 pb-5">
                    <button
                      onClick={() => toggleModule(idx)}
                      className="w-full py-4 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                    >
                      <span className={`font-sans font-semibold text-sm sm:text-base transition-colors duration-300 ${
                        isOpen ? "text-[#BE1E2E]" : "text-white group-hover:text-zinc-300"
                      }`}>
                        {item.title}
                      </span>
                      
                      {/* Plus / Minus Indicator */}
                      <div className="ml-4 flex-shrink-0 h-6 w-6 flex items-center justify-center text-white">
                        {isOpen ? (
                          <Minus className="h-4 w-4 text-[#BE1E2E]" />
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
                          <div className="pt-2 pb-4 pl-4 border-l-2 border-[#BE1E2E]/40 mt-1 space-y-4">
                            
                            {/* General Topics list */}
                            <ul className="space-y-2 text-zinc-400 text-xs sm:text-sm font-light grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {item.topics.map((topic, tIdx) => (
                                <li key={tIdx} className="flex items-center">
                                  <span className="text-[#BE1E2E] mr-2 font-bold">-</span>
                                  {topic}
                                </li>
                              ))}
                            </ul>

                            {/* Filmmaking subcategory (if active) */}
                            {item.hasFilmmaking && item.filmmakingTopics && (
                              <div className="mt-4 pt-4 border-t border-zinc-800/60">
                                <h4 className="text-white font-semibold text-xs sm:text-sm tracking-wide mb-3 uppercase">
                                  Filmmaking
                                </h4>
                                <ul className="space-y-2 text-zinc-400 text-xs sm:text-sm font-light grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {item.filmmakingTopics.map((fTopic, fIdx) => (
                                    <li key={fIdx} className="flex items-center">
                                      <span className="text-[#BE1E2E] mr-2 font-bold">-</span>
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

      </main>

      <Footer />
    </>
  );
}
