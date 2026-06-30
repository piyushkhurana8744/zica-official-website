"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1920&auto=format&fit=crop",
    title: "Master the Art of",
    highlight: "Visual Effects (VFX)",
    subtitle: "Step into the world of CGI, green screen compositing, and Hollywood-style visual effects. Learn from industry professionals.",
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop",
    title: "Create Immersive Worlds in",
    highlight: "Game Development",
    subtitle: "Build AAA game environments, rig character model assets, and master Unreal Engine for state-of-the-art interactive gaming.",
  },
  {
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1920&auto=format&fit=crop",
    title: "Bring Characters to Life with",
    highlight: "3D Animation",
    subtitle: "Master rigging, Pixar-style animation principles, and motion capture workflows for professional film production pipelines.",
  },
  {
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1920&auto=format&fit=crop",
    title: "Unlock Creative Power in",
    highlight: "Blender Mastery",
    subtitle: "3D modeling, character sculpting, photorealistic architectural rendering, and product visualizations from scratch.",
  },
  {
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1920&auto=format&fit=crop",
    title: "Express Your Vision through",
    highlight: "2D Animation",
    subtitle: "Classical hand-drawn style, digital anime creation, character storyboard concepts, and drawing tablet workflows.",
  },
  {
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop",
    title: "Craft Visual Identity with",
    highlight: "Graphic Design",
    subtitle: "Brand identity, packaging layouts, digital poster compositions, UI layouts, and complete workspace mastery.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center pt-24 pb-12">
      
      {/* Background Slideshow Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            {/* Ken Burns Slow Zoom */}
            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.15 }}
              transition={{ duration: 6, ease: "linear" }}
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${HERO_SLIDES[currentSlide].image})` }}
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark Vignette Overlay & Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-black/15 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_30%,rgba(5,5,5,0.65)_100%)] z-10" />
      </div>

      {/* Floating Ambient Gradient Lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#BE1E2E]/10 blur-[150px] pointer-events-none z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-red-800/10 blur-[120px] pointer-events-none z-10 animate-pulse-slow" />

      {/* Hero Content Wrapper */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-between h-full w-full mt-auto mb-auto">
        
        {/* Middle Main Header area */}
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {/* Decorative Admissions Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-[#BE1E2E] animate-ping" />
            <span className="text-xs uppercase font-medium tracking-[0.25em] text-white/90">
              Admissions Open 2026 - 2027
            </span>
          </motion.div>

          {/* Dynamic Header Titles */}
          <div className="h-[140px] sm:h-[180px] md:h-[220px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ y: 50, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -50, opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col"
              >
                <h1 className="font-display font-light text-2xl sm:text-4xl md:text-6xl text-white tracking-tight leading-tight">
                  {HERO_SLIDES[currentSlide].title}
                </h1>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#BE1E2E] via-red-500 to-[#ffffff] leading-none mt-1 select-none">
                  {HERO_SLIDES[currentSlide].highlight}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white/60 text-base sm:text-lg md:text-xl max-w-3xl mt-4 leading-relaxed font-light"
          >
            {HERO_SLIDES[currentSlide].subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto"
          >
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-white bg-[#BE1E2E] hover:bg-red-700 transition-all duration-300 shadow-[0_4px_30px_rgba(190,30,46,0.4)] group"
            >
              <span>Explore Programs</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-white border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 group"
            >
              <Play className="mr-2 h-4 w-4 fill-white text-white group-hover:scale-110 transition-transform" />
              <span>Book Free Demo</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Statistics & Trust Badges Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-16 pt-8 border-t border-white/10 w-full max-w-4xl text-center"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">100%</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 mt-1">Placement Support</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">15+</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 mt-1">Industry Softwares</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">10,000+</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 mt-1">Alumni Globally</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">1995</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 mt-1">Pioneering Since</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 flex flex-col items-center cursor-pointer"
          onClick={() => {
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2 font-semibold">
            Scroll Down
          </span>
          <div className="h-8 w-[20px] rounded-full border border-white/20 p-1 flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#BE1E2E]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
