"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Box, 
  Layers, 
  Tv, 
  Compass, 
  Camera, 
  Figma, 
  Flame, 
  Video 
} from "lucide-react";

const TOOLS_DATA = [
  {
    name: "Autodesk Maya",
    role: "3D Modeling & Character Animation",
    icon: Box,
    desc: "The industry standard for 3D CGI assets, character rigging, skinning, and cinematic keyframe animations."
  },
  {
    name: "Blender 3D",
    role: "Sculpting & Rendering Mastery",
    icon: Layers,
    desc: "Powerful open-source tool for architectural room layouts, photorealistic shading, and digital sculpture."
  },
  {
    name: "Unreal Engine 5",
    role: "Real-time Game Development",
    icon: Tv,
    desc: "Create immersive AAA game environments, visual blueprints, lighting compilation, and virtual sets."
  },
  {
    name: "Adobe Photoshop",
    role: "Concept Art & Matte Painting",
    icon: PaintbrushIcon,
    desc: "Master layout composition, matte paintings, texture mappings, and custom digital illustration."
  },
  {
    name: "Adobe After Effects",
    role: "Motion Graphics & Compositing",
    icon: Compass,
    desc: "Create movie title animations, broadcast layouts, rotoscoping trackers, and dynamic keyframe FX."
  },
  {
    name: "Figma Pro",
    role: "UI/UX Layouts & Prototyping",
    icon: Figma,
    desc: "Develop interactive mobile wires, design systems, and responsive web component architectures."
  },
  {
    name: "Foundry Nuke",
    role: "Advanced Node-Based Compositing",
    icon: Flame,
    desc: "The blockbuster studio choice for camera tracking, green screen extractions, and multi-pass CG layer nesting."
  },
  {
    name: "Adobe Premiere",
    role: "Audio/Video Post-Production",
    icon: Video,
    desc: "Stitch together commercial videos, correct color profiles, design sound profiles, and coordinate edits."
  }
];

// Custom local fallback icon for Paintbrush to avoid import collision
function PaintbrushIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M7.5 10.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z" />
      <path d="M11.5 7.5c.828 0 1.5-.672 1.5-1.5S12.328 4.5 11.5 4.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5z" />
      <path d="M16.5 9.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z" />
      <path d="M6 14c0-2 2-3 4-3s4 1 4 3-2 3-4 3-4-1-4-3z" />
    </svg>
  );
}

export default function Tools() {
  return (
    <section 
      id="tools" 
      data-section-theme="light" 
      className="relative py-28 bg-[#FFFFFF] overflow-hidden border-b border-[rgba(231, 107, 36,0.12)] text-text-black"
    >
      {/* Subtle light background mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(231, 107, 36,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(231, 107, 36,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#E76B24] font-semibold mb-4 border border-[rgba(231, 107, 36,0.2)] rounded-full px-4 py-1.5 bg-brand-tint font-sans">
            Industry Tooling
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-[#111111] tracking-tight mb-6 leading-tight uppercase">
            Master the <span className="text-[#E76B24]">CGI Software Suite</span>
          </h2>
          <p className="text-[#444444] text-sm sm:text-base leading-relaxed font-light">
            We focus on production-ready software. Step straight into production studios with deep expertise in industry-standard creation suites.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS_DATA.map((tool, idx) => {
            const IconComponent = tool.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-[#FFFFFF] border border-[rgba(231, 107, 36,0.12)] rounded-2xl p-6 shadow-sm hover:border-[#E76B24] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col items-start"
              >
                {/* Icon Container */}
                <div className="h-10 w-10 rounded-xl bg-brand-tint border border-[rgba(231, 107, 36,0.15)] flex items-center justify-center text-[#E76B24] group-hover:bg-[#E76B24] group-hover:text-white transition-all duration-300 mb-5 shadow-sm">
                  <IconComponent className="h-5 w-5" />
                </div>

                {/* Tool Name & Role */}
                <h3 className="font-display font-bold text-base text-[#111111] mb-1 uppercase">
                  {tool.name}
                </h3>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#E76B24] mb-4 font-sans block">
                  {tool.role}
                </span>

                {/* Description */}
                <p className="text-[#444444] text-xs leading-relaxed font-light">
                  {tool.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
