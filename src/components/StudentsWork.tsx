"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StudentsWork() {
  return (
    <section id="students-work" className="relative py-24 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* Background grids & subtle glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Blender Donuts Image with White Frame */}
          <div className="col-span-1 lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-2.5 border-2 border-white bg-transparent max-w-[380px] w-full aspect-[3/4] shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/blender_donuts.png"
                alt="Student 3D Blender Donuts Render"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Column: Descriptions & Highlights */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Section Header info */}
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-300 block mb-3 font-sans">
                Entertainment, the ZICA way—through the eyes of our students.
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-6xl mb-8 tracking-tight">
                Student&apos;s <span className="text-[#BE1E2E]">Work</span>
              </h2>

              {/* Main descriptive paragraphs */}
              <p className="text-zinc-200 text-sm sm:text-base font-semibold leading-relaxed mb-4">
                Step Into a World of Limitless Creativity — Discover the Outstanding Creations of Our ZICA Students!
              </p>
              
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                Be amazed and inspired by the exceptional talent, imagination, and passion of our students as they bring ideas to life across diverse creative fields. From jaw-dropping data- and cutting-edge VFX, to immersive Gaming, stylish Interior and Fashion Design, impactful Digital Marketing, and stunning Photography — every project is a testament to their dedication and skill.
              </p>

              <p className="text-zinc-200 text-sm sm:text-base font-semibold leading-relaxed mb-10">
                This is where the future of creative entertainment begins — only at ZICA.
              </p>

              {/* 3-Column Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {/* Highlight 1 */}
                <div className="flex flex-col">
                  <h4 className="font-display font-bold text-lg mb-2">
                    <span className="text-white">Creative </span>
                    <span className="text-[#BE1E2E]">Brilliance</span>
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Celebrating the exceptional quality and imagination of student projects across all departments.
                  </p>
                </div>

                {/* Highlight 2 */}
                <div className="flex flex-col">
                  <h4 className="font-display font-bold text-lg mb-2">
                    <span className="text-white">Made By </span>
                    <span className="text-[#BE1E2E]">ZICA</span>
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Celebrating the exceptional quality and imagination of student projects across all departments. Tone: Elegant and inspiring.
                  </p>
                </div>

                {/* Highlight 3 */}
                <div className="flex flex-col">
                  <h4 className="font-display font-bold text-lg mb-2">
                    <span className="text-white">Future In </span>
                    <span className="text-[#BE1E2E]">Frame</span>
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Emphasizes that students&apos; work reflects their future careers and creative potential. Visionary and modern.
                  </p>
                </div>
              </div>

              {/* View Button */}
              <button className="px-8 py-3.5 rounded-full font-semibold text-white bg-[#BE1E2E] hover:bg-red-700 transition-all duration-300 shadow-[0_4px_15px_rgba(190,30,46,0.3)] hover:shadow-[0_6px_25px_rgba(190,30,46,0.45)] w-fit transform hover:scale-[1.02]">
                View Student&apos;s Work
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
