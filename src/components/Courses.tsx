"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Film, Gamepad, Paintbrush, ArrowRight } from "lucide-react";

const COURSES_DATA = [
  {
    title: "B.Voc Degree in Media Arts",
    category: "3-Year Degree Program",
    duration: "36 Months",
    icon: GraduationCap,
    desc: "A fully accredited university degree blending traditional artistic fundamentals with high-end digital workflows in Animation & VFX.",
    badge: "Degree Program",
    highlights: ["University Collaboration", "Placement Partner Zee Media", "Semester Internships"],
    href: "/bvoc"
  },
  {
    title: "3D Animation Master",
    category: "Specialization Track",
    duration: "12 Months",
    icon: Film,
    desc: "Master organic character modeling, advanced skeletal rigging, facial shape animations, and production pipeline lighting.",
    badge: "Most Popular",
    highlights: ["Maya & ZBrush Studio", "Character Sculpting Focus", "Personal Showreel Guidance"],
    href: "/3d-animation"
  },
  {
    title: "VFX Compositing Specialist",
    category: "Advanced Track",
    duration: "24 Months",
    icon: Film,
    desc: "Step into node-based compositing, green screen chroma extraction, matchmoving, dynamic particle FX, and visual simulation.",
    badge: "Industry Favorite",
    highlights: ["Foundry Nuke Mastery", "Green Screen Compositing", "Dynamic Physics Simulations"],
    href: "/vfx"
  },
  {
    title: "Game Arts & Design",
    category: "Gaming Track",
    duration: "12 Months",
    icon: Gamepad,
    desc: "Create immersive environments, rig AAA props, and learn real-time blueprint scripting in Unreal Engine and Unity.",
    badge: "Fast Track",
    highlights: ["Level Design in Unreal", "Game Art Assets Rigging", "Game Engine Compilation"],
    href: "/game-design"
  }
];

export default function Courses() {
  return (
    <section 
      id="courses" 
      data-section-theme="light" 
      className="relative py-28 bg-[#FFFFFF] overflow-hidden border-b border-[rgba(190,30,46,0.12)] text-text-black"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-primary/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#BE1E2E] font-semibold mb-4 border border-[rgba(190,30,46,0.2)] rounded-full px-4 py-1.5 bg-brand-tint font-sans">
            Specialized Tracks
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight mb-6 leading-tight uppercase">
            Industry <span className="text-[#BE1E2E]">Flagship Courses</span>
          </h2>
          <p className="text-[#444444] text-sm sm:text-base leading-relaxed font-light">
            Kickstart your digital art career. Our structured pathways align directly with recruiters from top global animation, gaming, and VFX studios.
          </p>
        </div>

        {/* 4-Card Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES_DATA.map((course, idx) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative bg-[#FFFFFF] border border-[rgba(190,30,46,0.12)] rounded-2xl p-6 shadow-sm hover:border-[#BE1E2E] hover:scale-[1.02] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Badge & Duration */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-brand-tint border border-[rgba(190,30,46,0.2)] text-[#BE1E2E] px-2.5 py-1 rounded-full font-sans">
                      {course.badge}
                    </span>
                    <span className="text-[10px] font-semibold text-[#666666] font-sans uppercase">
                      {course.duration}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-brand-tint border border-[rgba(190,30,46,0.15)] flex items-center justify-center text-[#BE1E2E] group-hover:bg-[#BE1E2E] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-[#111111] leading-snug tracking-tight uppercase group-hover:text-[#BE1E2E] transition-colors duration-200">
                      {course.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#444444] text-xs leading-relaxed font-light mb-6">
                    {course.desc}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 mb-8 border-t border-[rgba(190,30,46,0.06)] pt-4">
                    {course.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-center text-[11px] font-medium text-[#666666]">
                        <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                        {hl}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore button & pricing info */}
                <div className="mt-auto">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#666666] mb-4 font-sans uppercase tracking-wider">
                    <span>Pricing</span>
                    <span className="text-[#BE1E2E] font-bold">Scholarship Available</span>
                  </div>

                  <Link href={course.href}>
                    <div className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold text-white bg-[#BE1E2E] hover:bg-[#A31827] transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md">
                      <span>Explore Curriculum</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
