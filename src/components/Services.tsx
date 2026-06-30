"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const PROGRAMS = [
  {
    titleFirst: "Visual",
    titleRed: "Effects",
    subtitle: "Master the Art of VFX",
    description:
      "Industry-focused VFX programs blending foundational art, 3D animation, and advanced compositing. Build job-ready portfolios with hands-on filmmaking and simulation.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    href: "/vfx",
    duration: "24 Months",
    icon: "🎬",
    color: "from-rose-500/80 to-red-900/90",
  },
  {
    titleFirst: "Game Arts",
    titleRed: "& Design",
    subtitle: "Build Immersive Worlds",
    description:
      "Create immersive game environments, characters, and assets using Unity, Maya, and ZBrush. Blend concept art with 3D modeling and game engine integration.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
    href: "/game-design",
    duration: "12 Months",
    icon: "🎮",
    color: "from-violet-500/80 to-purple-900/90",
  },
  {
    titleFirst: "Digital",
    titleRed: "Photography",
    subtitle: "Capture Stunning Visuals",
    description:
      "Master the art and science of capturing stunning visuals with professional DSLR cameras. Learn composition, lighting, photo editing, and visual storytelling.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    href: "/digital-photography",
    duration: "6 Months",
    icon: "📸",
    color: "from-amber-500/80 to-orange-900/90",
  },
  {
    titleFirst: "Interior",
    titleRed: "Design",
    subtitle: "Design Beautiful Spaces",
    description:
      "Learn to design functional, aesthetic spaces. Covers space planning, materials, lighting, and 3D visualization for a career in interior and spatial design.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    href: "/interior-design",
    duration: "12 Months",
    icon: "🏠",
    color: "from-emerald-500/80 to-teal-900/90",
  },
  {
    titleFirst: "Digital",
    titleRed: "Marketing",
    subtitle: "Grow Brands Online",
    description:
      "Master SEO, social media, content marketing, Google Ads, and analytics to build powerful online brand presence and dynamic advertising campaigns.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    href: "/digital-marketing",
    duration: "6 Months",
    icon: "📈",
    color: "from-sky-500/80 to-blue-900/90",
  },
  {
    titleFirst: "Web",
    titleRed: "Design",
    subtitle: "Craft Digital Experiences",
    description:
      "Create responsive, user-friendly websites using HTML, CSS, JavaScript, and design tools like Figma. Blend creativity with technical skills for UI/UX careers.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    href: "/web-design",
    duration: "6 Months",
    icon: "💻",
    color: "from-cyan-500/80 to-indigo-900/90",
  },
  {
    titleFirst: "Fashion",
    titleRed: "Design",
    subtitle: "Create Original Collections",
    description:
      "Develop creativity, trend awareness, and technical skills in garment design, illustration, and fabric selection to build careers in the fashion industry.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
    href: "/fashion-design",
    duration: "12 Months",
    icon: "👗",
    color: "from-pink-500/80 to-rose-900/90",
  },
  {
    titleFirst: "Animation &",
    titleRed: "Graphics",
    subtitle: "Bring Stories to Life",
    description:
      "Combines artistic fundamentals with digital tools to master 2D/3D animation, motion graphics, and visual storytelling for studios and multimedia production.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    href: "/3d-animation",
    duration: "12 Months",
    icon: "✨",
    color: "from-fuchsia-500/80 to-purple-900/90",
  },
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative py-28 bg-[#050505] overflow-hidden"
    >
      {/* Background ambient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-red-950/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#BE1E2E] font-semibold mb-4 border border-[#BE1E2E]/20 rounded-full px-4 py-1.5 bg-[#BE1E2E]/5">
            Our Programs
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-6 leading-[1.15]">
            Discover Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BE1E2E] to-rose-400">
              Creative Programs
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Explore our diverse programs in Animation, VFX, Gaming, Interior
            Design, Graphic Design, Fashion Design, Digital Marketing, and
            Photography. Your canvas is waiting.
          </p>
        </motion.div>

        {/* Premium Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.image}
                  alt={`${program.titleFirst} ${program.titleRed}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Default Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60 group-hover:opacity-90 transition-opacity duration-500`}
              />

              {/* Dark bottom gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Icon Badge */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                {program.icon}
              </div>

              {/* Duration Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-[10px] font-semibold text-white/80 uppercase tracking-wider">
                {program.duration}
              </div>

              {/* Content Container */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-tight mb-1 drop-shadow-lg">
                  {program.titleFirst}{" "}
                  <span className="text-white/90">{program.titleRed}</span>
                </h3>

                {/* Subtitle */}
                <p className="text-white/60 text-xs font-medium tracking-wide uppercase mb-3">
                  {program.subtitle}
                </p>

                {/* Expandable Description */}
                <AnimatePresence>
                  {hoveredIdx === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/70 text-xs leading-relaxed mb-4">
                        {program.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CTA Button */}
                <Link href={program.href}>
                  <motion.div
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#BE1E2E] hover:bg-red-600 transition-all duration-300 shadow-[0_4px_15px_rgba(190,30,46,0.3)] hover:shadow-[0_6px_25px_rgba(190,30,46,0.5)] w-fit group/btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Explore Course
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </motion.div>
                </Link>
              </div>

              {/* Hover shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.03)_55%,transparent_60%)] bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out]" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-zinc-500 text-xs sm:text-sm mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Link
            href="/bvoc"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/80 text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-300"
          >
            View All Programs
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
