"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CAROUSEL_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
    title: "Skeletal Character Rigging",
    label: "3D Animation",
  },
  {
    url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop",
    title: "Chroma Key Suite",
    label: "Visual Effects (VFX)",
  },
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    title: "Unreal Level Editor",
    label: "Game Environment",
  },
  {
    url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop",
    title: "Organic Mesh Sculpting",
    label: "Blender Modeling",
  },
  {
    url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop",
    title: "Vivid Studio Capture",
    label: "Digital Photography",
  },
];

export default function CreativeShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section data-section-theme="light" className="relative py-24 bg-[#FFFFFF] overflow-hidden border-b border-[rgba(231, 107, 36,0.12)]">
      {/* Background grids/glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(231, 107, 36,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(231, 107, 36,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Stacked Carousel */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center min-h-[450px]">
            <div className="relative w-[280px] sm:w-[320px] h-[380px] flex items-center justify-center perspective-[1000px]">
              {CAROUSEL_IMAGES.map((img, idx) => {
                const offset = (idx - activeIndex + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length;
                const isVisible = offset === 0 || offset === 1 || offset === CAROUSEL_IMAGES.length - 1;
                
                if (!isVisible) return null;

                let zIndex = 10 - offset;
                let rotateY = -10;
                let rotateZ = -6;
                let translateX = 0;
                let scale = 1;
                let opacity = 1;

                if (offset === 0) {
                  // Active card (front)
                  rotateY = -12;
                  rotateZ = -6;
                  translateX = -20;
                  scale = 1;
                  zIndex = 30;
                  opacity = 1;
                } else if (offset === 1) {
                  // Second card
                  rotateY = 12;
                  rotateZ = 6;
                  translateX = 35;
                  scale = 0.95;
                  zIndex = 20;
                  opacity = 0.85;
                } else {
                  // Third card
                  rotateY = 0;
                  rotateZ = 0;
                  translateX = 60;
                  scale = 0.9;
                  zIndex = 10;
                  opacity = 0.5;
                }

                return (
                  <motion.div
                    key={img.url}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity,
                      scale,
                      x: translateX,
                      rotateY,
                      rotateZ,
                      z: -offset * 50,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 25,
                    }}
                    style={{ zIndex }}
                    className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-[rgba(231, 107, 36,0.12)] cursor-pointer origin-center bg-white"
                    onClick={() => setActiveIndex(idx)}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${img.url})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Card details */}
                    <div className="absolute bottom-6 left-6 right-6 text-left">
                      <span className="text-[10px] uppercase tracking-widest text-[#E76B24] font-bold font-sans">
                        {img.label}
                      </span>
                      <h4 className="font-display font-bold text-lg text-white mt-1 uppercase">
                        {img.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Manual controls */}
            <div className="flex items-center space-x-4 mt-8">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-[rgba(231, 107, 36,0.12)] bg-white hover:bg-[#F5F5F5] text-[#111111] shadow-sm hover:shadow transition-all cursor-pointer focus:outline-none"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-xs tracking-widest font-semibold text-[#666666] font-sans">
                0{activeIndex + 1} / 0{CAROUSEL_IMAGES.length}
              </span>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-[rgba(231, 107, 36,0.12)] bg-white hover:bg-[#F5F5F5] text-[#111111] shadow-sm hover:shadow transition-all cursor-pointer focus:outline-none"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Title & Descriptions */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center text-left text-[#111111]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading from Screenshot */}
              <h2 className="font-display font-light text-2xl sm:text-3.5xl text-[#111111] tracking-tight mb-8 leading-tight uppercase">
                Entertainment, the <span className="text-[#E76B24] font-extrabold">ZICA way—through</span> the eyes of our students.
              </h2>
              
              <p className="text-[#111111] text-xs sm:text-sm font-semibold leading-relaxed mb-4">
                Step Into a World of Limitless Creativity – Discover the Outstanding Creations of Our ZICA Students!
              </p>
              
              <p className="text-[#444444] text-xs sm:text-sm leading-relaxed font-normal mb-8">
                Be amazed and inspired by the exceptional talent, imagination, and passion of our students as they bring ideas to life across diverse creative fields. From jaw-dropping animations and cutting-edge VFX, to immersive Gaming, stylish Interior and Fashion Design, impactful Digital Marketing, and stunning Photography — every project is a testament to their dedication and skill. This is where the future of creative entertainment begins — only at ZICA.
              </p>

              <a href="#services" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white bg-[#E76B24] hover:bg-[#C65516] shadow-sm transition-all duration-300 w-fit transform hover:scale-[1.02] cursor-pointer">
                Explore Courses
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
