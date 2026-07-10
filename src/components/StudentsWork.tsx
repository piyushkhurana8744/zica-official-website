"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STUDENT_IMAGES = [
  "/images/student-work/student_work_1.jpg",
  "/images/student-work/student_work_2.png",
  "/images/student-work/student_work_3.jpg",
  "/images/student-work/student_work_4.jpg",
  "/images/student-work/student_work_5.jpg",
  "/images/student-work/student_work_6.jpg",
  "/images/student-work/student_work_7.png",
  "/images/student-work/student_work_8.png",
];

export default function StudentsWork() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STUDENT_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="students-work" data-section-theme="light" className="relative py-24 bg-[#FFFFFF] overflow-hidden border-b border-[rgba(190,30,46,0.12)]">
      {/* Background grids & subtle glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(190,30,46,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(190,30,46,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#BE1E2E]/2 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Auto-playing Student Work Carousel with White Frame */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-2 border border-[rgba(190,30,46,0.12)] bg-[#0A0A0A] rounded-2xl max-w-[460px] w-full aspect-[4/3] shadow-lg overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={STUDENT_IMAGES[activeIndex]}
                  alt={`ZICA Student Work Render ${activeIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-contain rounded-xl"
                  loading="lazy"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + STUDENT_IMAGES.length) % STUDENT_IMAGES.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/95 border border-[rgba(190,30,46,0.12)] text-[#111111] hover:bg-[#BE1E2E] hover:text-white transition-colors cursor-pointer z-10 shadow-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % STUDENT_IMAGES.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/95 border border-[rgba(190,30,46,0.12)] text-[#111111] hover:bg-[#BE1E2E] hover:text-white transition-colors cursor-pointer z-10 shadow-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex space-x-2 mt-4">
              {STUDENT_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-6 bg-[#BE1E2E]" : "w-2 bg-[#EDEDED]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Descriptions & Highlights */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left text-[#111111]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Section Header info */}
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#666666] block mb-3 font-sans">
                Entertainment, the ZICA way—through the eyes of our students.
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-6xl mb-8 tracking-tight text-[#111111] uppercase">
                Student&apos;s <span className="text-[#BE1E2E]">Work</span>
              </h2>

              {/* Main descriptive paragraphs */}
              <p className="text-[#111111] text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Step Into a World of Limitless Creativity — Discover the Outstanding Creations of Our ZICA Students!
              </p>
              
              <p className="text-[#444444] text-xs sm:text-sm leading-relaxed font-light mb-4">
                Be amazed and inspired by the exceptional talent, imagination, and passion of our students as they bring ideas to life across diverse creative fields. From jaw-dropping animations and cutting-edge VFX, to immersive Gaming, stylish Interior and Fashion Design, impactful Digital Marketing, and stunning Photography — every project is a testament to their dedication and skill.
              </p>

              <p className="text-[#111111] text-sm sm:text-base font-semibold leading-relaxed mb-10">
                This is where the future of creative entertainment begins — only at ZICA.
              </p>

              {/* 3-Column Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {/* Highlight 1 */}
                <div className="flex flex-col">
                  <h4 className="font-display font-bold text-lg mb-2 uppercase">
                    <span className="text-[#111111]">Creative </span>
                    <span className="text-[#BE1E2E]">Brilliance</span>
                  </h4>
                  <p className="text-[#666666] text-xs leading-relaxed font-light">
                    Celebrating the exceptional quality and imagination of student projects across all departments.
                  </p>
                </div>

                {/* Highlight 2 */}
                <div className="flex flex-col">
                  <h4 className="font-display font-bold text-lg mb-2 uppercase">
                    <span className="text-[#111111]">Made By </span>
                    <span className="text-[#BE1E2E]">ZICA</span>
                  </h4>
                  <p className="text-[#666666] text-xs leading-relaxed font-light">
                    Celebrating the exceptional quality and imagination of student projects across all departments. Tone: Elegant and inspiring.
                  </p>
                </div>

                {/* Highlight 3 */}
                <div className="flex flex-col">
                  <h4 className="font-display font-bold text-lg mb-2 uppercase">
                    <span className="text-[#111111]">Future In </span>
                    <span className="text-[#BE1E2E]">Frame</span>
                  </h4>
                  <p className="text-[#666666] text-xs leading-relaxed font-light">
                    Emphasizes that students&apos; work reflects their future careers and creative potential. Visionary and modern.
                  </p>
                </div>
              </div>

              {/* View Button Link */}
              <Link href="/student-work" className="inline-block px-8 py-3.5 rounded-full font-semibold text-white bg-[#BE1E2E] hover:bg-[#A31827] hover:scale-[1.02] hover:shadow-[0_4px_15px_rgba(190,30,46,0.2)] transition-all duration-300 w-fit text-center select-none cursor-pointer text-xs uppercase tracking-wider font-sans">
                View Student&apos;s Work
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
