"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

const CATEGORIES = ["All", "VFX", "3D Animation", "Game Art", "Motion Graphics"];

const PROJECTS = [
  {
    title: "Neon Dynasty",
    category: "3D Animation",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    creator: "Aditya Sen",
  },
  {
    title: "Metropolis 2099",
    category: "VFX",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
    creator: "Rohan Malhotra",
  },
  {
    title: "Chronicles of Eldoria",
    category: "Game Art",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    creator: "Priyanka Roy",
  },
  {
    title: "Retro-Wave Pulse",
    category: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    creator: "Vikram Sharma",
  },
];

export default function FeaturedWork() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="relative py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.35em] text-[#BE1E2E] font-bold">
            Student Showcase
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl mt-3 tracking-tight">
            Featured Student Work
          </h2>
          <p className="text-white/50 mt-4 leading-relaxed font-light">
            Witness the award-winning animations, hyper-realistic models, and cutting-edge visual effects created by our alumni.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? "text-white"
                  : "text-white/50 hover:text-white bg-white/5 hover:bg-white/10"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activePortfolioTab"
                  className="absolute inset-0 bg-[#BE1E2E] rounded-full z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.title}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-950 border border-white/5 cursor-pointer"
              >
                {/* Image Zoom */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[#BE1E2E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Focus Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-[#BE1E2E] flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 ease-out shadow-[0_0_20px_rgba(190,30,46,0.6)]">
                  <Eye className="h-5 w-5" />
                </div>

                {/* Details */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                  <span className="text-xs uppercase tracking-widest text-[#BE1E2E] font-bold mb-1">
                    {project.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mb-0.5">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-xs font-medium">
                    By {project.creator}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
