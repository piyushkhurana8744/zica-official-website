"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
  },
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="services"
      data-section-theme="light"
      className="relative py-28 bg-[#FFFFFF] overflow-hidden border-b border-[rgba(231, 107, 36,0.12)]"
    >
      {/* Background ambient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-primary/2 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#E76B24] font-semibold mb-4 border border-[rgba(231, 107, 36,0.2)] rounded-full px-4 py-1.5 bg-brand-tint font-sans">
            Our Programs
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight mb-6 leading-[1.15] uppercase">
            Discover Our <span className="text-[#E76B24]">Creative Programs</span>
          </h2>
          <p className="text-[#444444] text-sm sm:text-base leading-relaxed font-light">
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
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-[rgba(231, 107, 36,0.12)] shadow-sm hover:border-[#E76B24] hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              {/* Card Image Cover */}
              <div className="h-44 w-full overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.image}
                  alt={`${program.titleFirst} ${program.titleRed}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-[9px] font-bold text-white uppercase tracking-wider font-sans">
                  {program.duration}
                </div>

                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/95 shadow-sm border border-[rgba(231, 107, 36,0.12)] flex items-center justify-center text-base transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {program.icon}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  {/* Subtitle */}
                  <p className="text-[#E76B24] text-[10px] font-bold tracking-widest uppercase mb-1 font-sans">
                    {program.subtitle}
                  </p>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-[#111111] tracking-tight leading-tight mb-3 uppercase">
                    {program.titleFirst}{" "}
                    <span className="text-[#E76B24]">{program.titleRed}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-[#444444] text-xs leading-relaxed font-light mb-4 line-clamp-3">
                    {program.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link href={program.href}>
                  <motion.div
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#E76B24] hover:bg-[#C65516] hover:scale-[1.02] hover:shadow-[0_4px_15px_rgba(231, 107, 36,0.2)] transition-all duration-300 shadow-sm w-full group/btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(105deg,transparent_40%,rgba(231, 107, 36,0.02)_45%,rgba(231, 107, 36,0.04)_50%,rgba(231, 107, 36,0.02)_55%,transparent_60%)] bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out]" />
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
          <p className="text-text-secondary text-xs sm:text-sm mb-4 font-light">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Link
            href="/bvoc"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(231, 107, 36,0.12)] text-neutral-600 hover:text-white hover:bg-[#E76B24] hover:border-[#E76B24] hover:scale-[1.02] hover:shadow-md transition-all duration-300 text-sm font-medium"
          >
            <span>View All Programs</span>
            <svg
              className="w-4 h-4 text-text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
