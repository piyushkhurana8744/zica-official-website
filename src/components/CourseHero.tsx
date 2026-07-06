"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import BannerForm from "@/components/BannerForm";

interface CourseHeroProps {
  bgImage: string;
  category?: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  defaultCourse: string;
}

export default function CourseHero({
  bgImage,
  category = "COURSE DETAILS",
  title,
  subtitle,
  defaultCourse,
}: CourseHeroProps) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] w-full overflow-hidden bg-[#0B0F19] flex items-center justify-center pt-32 pb-20 border-b border-white/10">
      
      {/* Background Image — full width, bright & cinematic */}
      <div
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')`, filter: "brightness(1.6) contrast(1.05) saturate(1.1)" }}
      />
      {/* Thin top + bottom vignette — keeps image visible across full width */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/70 via-transparent to-[#0B0F19]/80 z-10" />
      {/* Left-side text legibility overlay — only 40% wide, semi-transparent */}
      <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#0B0F19]/80 to-transparent z-10" />

      {/* Floating Ambient Glow Light */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FF1F3D]/5 blur-[150px] pointer-events-none z-10 animate-pulse-slow" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Title & Description */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left relative z-10">
          
          {/* Subtitle / Path badge */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-[2px] bg-[#FF1F3D]" />
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#FF1F3D]">
              {category}
            </span>
          </div>

          {/* Large Title & Heading */}
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            {title}
          </h1>

          {/* Description */}
          <div className="text-zinc-300 text-sm sm:text-base max-w-xl leading-relaxed font-light">
            {subtitle}
          </div>

          {/* Fast track benefits badge list */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="flex items-center space-x-1 bg-white/5 border border-white/10 rounded-full px-3.5 py-1 text-xs text-zinc-300 shadow-sm">
              <Sparkles className="h-3 w-3 text-[#FF1F3D]" />
              <span>Industry-Led Curriculum</span>
            </span>
            <span className="flex items-center space-x-1 bg-white/5 border border-white/10 rounded-full px-3.5 py-1 text-xs text-zinc-300 shadow-sm">
              <Sparkles className="h-3 w-3 text-[#FF1F3D]" />
              <span>100% Placement Assistance</span>
            </span>
          </div>

        </div>

        {/* Right Column: Premium BannerForm Card with Cloudflare Turnstile */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <BannerForm title="DOWNLOAD BROCHURE" buttonText="DOWNLOAD" defaultCourse={defaultCourse} />
        </div>

      </div>
    </section>
  );
}
