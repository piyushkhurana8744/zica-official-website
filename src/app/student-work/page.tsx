"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  ChevronDown, 
  User, 
  Phone, 
  Mail, 
  BookOpen,
  Filter,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";

// Custom SVG WhatsApp icon for accuracy
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.988 4.492-9.988 10 0 1.758.459 3.41 1.259 4.858l-1.283 4.792 4.906-1.288c1.409.767 3.01 1.206 4.71 1.206 5.507 0 9.989-4.492 9.989-10s-4.482-10-9.989-10zm.012 18.064c-1.576 0-3.08-.431-4.385-1.246l-.314-.188-2.906.762.775-2.894-.207-.329c-.896-1.427-1.371-3.084-1.371-4.789 0-4.996 4.072-9.058 9.079-9.058 5.006 0 9.078 4.062 9.078 9.058-.001 4.997-4.073 9.08-9.08 9.08zm4.97-6.84c-.272-.137-1.614-.797-1.863-.889-.25-.09-.432-.137-.613.137-.182.273-.705.889-.864 1.072-.159.182-.318.204-.59.068-.272-.137-1.15-.424-2.19-1.353-.809-.723-1.356-1.616-1.515-1.889-.159-.273-.017-.42.119-.556.123-.122.272-.319.409-.478.136-.159.182-.272.272-.454.09-.182.045-.341-.022-.477-.068-.137-.613-1.477-.84-2.023-.222-.534-.443-.46-.613-.469-.159-.009-.341-.009-.523-.009-.181 0-.477.068-.727.341-.25.272-.953.932-.953 2.273s.976 2.637 1.112 2.819c.137.182 1.92 2.932 4.653 4.113.65.28 1.157.447 1.553.573.656.208 1.253.179 1.725.109.526-.079 1.614-.659 1.841-1.295.227-.637.227-1.183.159-1.295-.069-.114-.25-.182-.522-.319z" />
    </svg>
  );
}

const STUDENT_WORKS = [
  {
    title: "3D Character Sculpting",
    student: "Hiren Acharya",
    category: "3D Animation",
    image: "/images/student-work/student_work_1.jpg",
  },
  {
    title: "Cyberpunk VFX Environment",
    student: "Nachiket Jain",
    category: "VFX & Compositing",
    image: "/images/student-work/student_work_2.png",
  },
  {
    title: "Luxury Interior Concept",
    student: "Shruti Valam",
    category: "Interior Design",
    image: "/images/student-work/student_work_3.jpg",
  },
  {
    title: "Game Environment Assets",
    student: "Vikash Kaushal",
    category: "Game Arts",
    image: "/images/student-work/student_work_4.jpg",
  },
  {
    title: "Studio Fashion Photography",
    student: "Jyoti Prakash",
    category: "Photography",
    image: "/images/student-work/student_work_5.jpg",
  },
  {
    title: "Digital Audio & Editing Suite",
    student: "Andre D'souza",
    category: "VFX & Compositing",
    image: "/images/student-work/student_work_6.jpg",
  },
  {
    title: "Fantasy Matte Painting",
    student: "Rohan Patel",
    category: "VFX & Compositing",
    image: "/images/student-work/student_work_7.png",
  },
  {
    title: "Vibrant Character Illustration",
    student: "Arti Lakheta",
    category: "Graphic Design",
    image: "/images/student-work/student_work_8.png",
  },
];

const CATEGORIES = ["All", "3D Animation", "VFX & Compositing", "Interior Design", "Game Arts", "Photography", "Graphic Design"];

export default function StudentWorkPage() {
  const [selectedWorkIndex, setSelectedWorkIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWorks = activeCategory === "All"
    ? STUDENT_WORKS
    : STUDENT_WORKS.filter((w) => w.category === activeCategory);

  return (
    <>
      <ScrollProgressBar />
      <MouseGlow />
      <Navbar />

      <main className="flex flex-col min-h-screen bg-[#020617] text-white font-sans overflow-hidden">
        
        {/* Header Hero Section */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1E1B4B] via-[#0B0F19] to-[#020617] overflow-hidden flex flex-col items-center justify-center">
          
          {/* Neon Grid Mesh Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen select-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF1F3D" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="40" cy="0" r="1.5" fill="#C084FC" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Ambient Glowing Blobs */}
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 w-[500px] h-[250px] rounded-full bg-[#FF1F3D]/10 blur-[100px] pointer-events-none" />

          {/* Title & Breadcrumbs */}
          <div className="relative z-10 text-center flex flex-col items-center">
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase mb-4"
            >
              Student <span className="text-[#FF1F3D]">Works</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wide uppercase"
            >
              <Link href="/" className="text-[#FF1F3D] hover:text-red-500 transition-colors duration-300">
                Homepage
              </Link>
              <span className="text-zinc-400">/</span>
              <span className="text-zinc-200">Student Works</span>
            </motion.div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] sm:h-[120px]">
              <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,18,83.13,26.11,146.12,44.3,219.09,68.21,321.39,56.44Z" 
                fill="#020617"
              />
            </svg>
          </div>
        </section>

        {/* Hero Description Section */}
        <section className="relative pt-4 pb-16 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="max-w-5xl mx-auto text-center">
              <span className="text-xs font-bold tracking-[0.25em] text-[#FF1F3D] uppercase mb-4 block">
                CREATIVE PORTFOLIO
              </span>

              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase mb-6"
              >
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F3D] via-purple-500 to-indigo-500">Student Work</span>
              </motion.h1>

              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="font-display font-bold text-lg sm:text-2xl text-zinc-300 mb-6 leading-relaxed"
              >
                Where Passion Meets Production Readiness
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-zinc-350 text-base sm:text-lg leading-relaxed font-light mb-6 max-w-3xl mx-auto"
              >
                Every render, frame, and canvas showcase the practical skillsets honed at ZICA Pitampura. Explore high-quality CGI models, immersive gameplay layouts, luxurious blueprints, and stunning media assets created by our talented students.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Dynamic Portfolio Gallery Grid Section */}
        <section id="portfolio-grid" className="relative py-24 bg-[#0B0F19] border-t border-b border-white/5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF1F3D]/2 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                    activeCategory === category
                      ? "bg-[#FF1F3D] border-[#FF1F3D] text-white shadow-[0_4px_15px_rgba(255,31,61,0.3)]"
                      : "bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <AnimatePresence mode="popLayout">
              {filteredWorks.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
                >
                  {filteredWorks.map((work, idx) => (
                    <motion.div
                      key={work.title}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => setSelectedWorkIndex(STUDENT_WORKS.findIndex(w => w.title === work.title))}
                      className="group cursor-pointer flex flex-col"
                    >
                      {/* Image Card Container */}
                      <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF1F3D]/40 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] bg-[#020617]">
                        <img 
                          src={work.image} 
                          alt={work.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                          <span className="text-[10px] text-[#FF1F3D] font-bold uppercase tracking-widest mb-1">
                            {work.category}
                          </span>
                          <h4 className="text-white font-bold text-lg leading-tight mb-2">
                            {work.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-zinc-400 text-xs font-light">
                            <User className="h-3 w-3 text-[#FF1F3D]" />
                            <span>By {work.student}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-zinc-500 py-20 text-lg font-light"
                >
                  No student works found in &ldquo;{activeCategory}&rdquo;
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </section>



        {/* Banner Section: Still Confused!!! */}
        <section className="relative py-16 bg-[#020617] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
                Still <span className="text-[#FF1F3D]">Confused!!!</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base font-light mt-2 uppercase tracking-widest">
                Get Instant Clarity
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full sm:w-auto md:w-[240px]">
              <a 
                href="#work-enquiry"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("work-enquiry");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3.5 bg-[#FF1F3D] text-white text-xs font-extrabold uppercase tracking-widest rounded-full text-center hover:bg-red-600 transition-colors shadow-lg hover:shadow-[0_4px_15px_rgba(255,31,61,0.3)] cursor-pointer"
              >
                Talk to Counsellor
              </a>
              <a 
                href="tel:+917900400300"
                className="px-6 py-3.5 bg-[#FF1F3D] text-white text-xs font-extrabold uppercase tracking-widest rounded-full text-center hover:bg-red-600 transition-colors shadow-lg hover:shadow-[0_4px_15px_rgba(255,31,61,0.3)] cursor-pointer"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedWorkIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 select-none"
            onClick={() => setSelectedWorkIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedWorkIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-white/25 text-white transition-all duration-300 z-50 cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedWorkIndex((prev) => 
                  prev !== null ? (prev - 1 + STUDENT_WORKS.length) % STUDENT_WORKS.length : null
                );
              }}
              className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-white/25 text-white transition-all duration-300 z-50 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedWorkIndex((prev) => 
                  prev !== null ? (prev + 1) % STUDENT_WORKS.length : null
                );
              }}
              className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-white/25 text-white transition-all duration-300 z-50 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Lightbox Image & Card details */}
            <div className="flex flex-col items-center max-w-full max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={selectedWorkIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={STUDENT_WORKS[selectedWorkIndex].image}
                alt={STUDENT_WORKS[selectedWorkIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mt-6 text-center max-w-md"
              >
                <span className="text-xs text-[#FF1F3D] font-bold uppercase tracking-widest">
                  {STUDENT_WORKS[selectedWorkIndex].category}
                </span>
                <h3 className="text-white font-bold text-xl sm:text-2xl mt-1">
                  {STUDENT_WORKS[selectedWorkIndex].title}
                </h3>
                <p className="text-zinc-450 text-xs sm:text-sm mt-1 font-light flex items-center justify-center gap-1.5">
                  <User className="h-3 w-3 text-[#FF1F3D]" />
                  <span>Created by {STUDENT_WORKS[selectedWorkIndex].student}</span>
                </p>
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
