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
      "Fundamentals of Drawing & Anatomy",
      "Color Theory & Light Study",
      "Perspective & Composition Guides",
      "Digital Painting in Adobe Photoshop",
      "Vector Design in Adobe Illustrator",
      "Concepts of Pre-Visualization & Scripting",
    ],
  },
  {
    title: "Module 02: 3D DIGITAL ART (6 MONTHS)",
    topics: [
      "Introduction to 3D Workspaces (Autodesk Maya)",
      "Hard Surface & Organic Modeling",
      "Texture Painting & Substance Painter Workflows",
      "UV Mapping & Layout Optimization",
      "Shading & Materials Setup",
      "Rendering Basics with Arnold",
    ],
  },
  {
    title: "Module 03: LIGHTING, RIGGING & CHARACTER ANIMATION (6 MONTHS)",
    topics: [
      "Character Setup & Anatomy Rigging",
      "Skinning & Blendshapes",
      "Principles of Keyframe Animation",
      "Facial Expressions & Lip Syncing",
      "Production Studio Lighting Techniques",
      "Camera Composition & Path Animation",
    ],
  },
  {
    title: "Module 04: DYNAMICS AND MOTION GRAPHICS (6 MONTHS)",
    topics: [
      "Particle Systems & Simulation (Maya/Houdini)",
      "Rigid Body & Soft Body Dynamics",
      "Motion Design in Adobe After Effects",
      "Typography & Infographics Animation",
      "Audio Editing & Sound Synchronization",
      "Pre-production for Motion Design Projects",
    ],
  },
  {
    title: "Module 05: VISUAL EFFECTS (6 MONTHS)",
    topics: [
      "Introduction to Advanced Compositing (Foundry Nuke)",
      "Rotoscopy & Paint Operations",
      "Chroma Keying & Green Screen Extraction",
      "Matchmoving & 3D Camera Tracking",
      "Multi-Pass CG Integration",
      "Color Correction & Grading Pipelines",
    ],
  },
  {
    title: "Module 06: ADVANCED VISUAL EFFECTS (6 MONTHS)",
    topics: [
      "Advanced Pyrotechnics & Fluid Simulations",
      "Procedural Destruction & Crowd Simulations",
      "Deep Compositing Workflows",
      "Unreal Engine for Real-Time Production",
      "Final Showreel Development & Review",
      "Studio Placements Preparation",
    ],
  },
];

const CAREERS = [
  "3D Modeler",
  "VFX Compositor",
  "Character Animator",
  "Motion Graphics Artist",
  "Game Designer",
  "Texturing & Shading Artist",
  "Rigging TD (Technical Director)",
  "Lighting Artist",
  "Production Coordinator",
  "Rotoscopy/Paint Artist",
];

export default function BVocPage() {
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

      <main className="flex flex-col min-h-screen pt-20 bg-[#050505] text-white">
        
        {/* Cinematic Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/70" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-left drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-semibold mb-4 block">
                  COURSE DETAILS
                </span>
                <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight leading-tight mb-8">
                  B.Voc <br />
                  <span className="text-[#BE1E2E]">Animation &amp; Multimedia at ZICA Pitampura</span>
                </h1>
                <p className="text-zinc-300 text-sm sm:text-lg leading-relaxed font-light italic">
                  &ldquo;Our B.Voc Degree program equips you with the creative and technical skills to plan, design, and transform residential and commercial environments.&rdquo;
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                <BannerForm title="COURSE ENQUIRY" buttonText="SUBMIT ENQUIRY" defaultCourse="B.Voc Degree" />
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
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop"
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
                    src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop"
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
                    src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=400&auto=format&fit=crop"
                    alt="Course Highlight Item 3"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

            </div>

            {/* Bottom Header details */}
            <div className="text-center mt-20">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                B.Voc. in Animation &amp; Visual Effects
              </h3>
              <p className="text-[#BE1E2E] font-bold text-xl sm:text-2xl mt-2">
                (36 Months)
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
                  This in-depth degree program offers extensive training in art, design, and digital media. Students gain hands-on experience in illustration, 3D modeling, rigging, animation, dynamics, and advanced visual effects. Using industry-standard software like Maya, ZBrush, Houdini, and others, the curriculum prepares students with the creative and technical skills needed to thrive in the fast-paced world of digital media and visual effects production.
                </p>

                {/* Subsections columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="font-display font-bold text-lg mb-3">
                      Become a <span className="text-[#BE1E2E]">Professional Artist</span>
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      To pursue a career as a professional artist, begin by mastering the fundamentals of sketching and design. Progress to advanced skills in 3D modeling, animation, and visual effects, while developing proficiency in industry-standard software such as Maya, After Effects, Nuke, and Houdini. Build a compelling portfolio that highlights a variety of projects, and stay current with evolving industry trends. Consistent networking and lifelong learning are key to establishing and growing a successful career in the digital arts.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-3">
                      Be Industry <span className="text-[#BE1E2E]">Ready</span>
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      By the end of this comprehensive program, students will be fully prepared for the industry, having mastered core principles of art and design, 3D digital creation, and advanced animation techniques. They will develop strong proficiency in Maya for modeling, texturing, rigging, and animation, along with expertise in dynamics, motion graphics, and visual effects. Through hands-on training and practical projects, the curriculum ensures graduates are ready to take on real-world challenges in the animation and VFX sectors.
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
                <BannerForm title="ENQUIRY FORM" buttonText="SUBMIT" defaultCourse="B.Voc Degree" />
              </div>

            </div>
          </div>
        </section>

        {/* Module Accordions Section */}
        <section className="py-24 border-b border-white/5 relative bg-[#090909]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-center mb-16 tracking-tight leading-tight">
              B.Voc Program <span className="text-[#BE1E2E]">Structure</span>
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
                          <div className="pt-2 pb-4 pl-4 border-l-2 border-[#BE1E2E]/40 mt-1">
                            <ul className="space-y-2 text-zinc-400 text-xs sm:text-sm font-light">
                              {item.topics.map((topic, tIdx) => (
                                <li key={tIdx} className="flex items-center">
                                  <span className="text-[#BE1E2E] mr-2 font-bold">-</span>
                                  {topic}
                                </li>
                              ))}
                            </ul>
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

        {/* Career Avenues Section */}
        <section className="py-24 relative">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 tracking-tight leading-tight">
              Career <span className="text-[#BE1E2E]">Avenues</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {CAREERS.map((career, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/5 rounded-xl py-4 px-3 flex items-center justify-center text-center shadow-lg hover:border-[#BE1E2E]/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="text-zinc-200 text-xs sm:text-sm font-medium tracking-wide">
                    {career}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
