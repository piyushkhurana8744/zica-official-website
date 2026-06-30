"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MODULES = [
  {
    title: "Module 01 (PROGRAM IN GAME ART)",
    topics: [
      "Introduction to Game Art",
      "Computer Graphics",
      "3D Modelling",
      "Human Figure Study",
      "Character design",
      "Organic / Character Modelling",
      "Texturing",
      "Lighting",
      "Rigging",
      "Character Animation",
    ],
  },
  {
    title: "Module 02: (ADVANCED PROGRAM IN GAME & ART DESIGN)",
    topics: [
      "Advance Character Sculpting for Game",
      "Advance Texturing",
      "FOLIAGE & PARTICLES / FX",
      "Level Design",
    ],
  },
];

export default function GameDesignPage() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "Game Arts & Design",
  });

  const toggleModule = (idx: number) => {
    setOpenModule(openModule === idx ? null : idx);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Enquiry submitted successfully!\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nCourse: ${formData.course}`);
  };

  return (
    <>
      <ScrollProgressBar />
      <MouseGlow />
      <Navbar />

      <main className="flex flex-col min-h-screen pt-20 bg-[#050505] text-white font-sans">
        
        {/* Cinematic Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/70" />
          
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-semibold mb-4 block">
              COURSE DETAILS
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight leading-tight mb-8">
              Game <br />
              <span className="text-[#BE1E2E]">Design Courses at ZICA Pitampura</span>
            </h1>
            <p className="text-zinc-300 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-light italic">
              &ldquo;Our Game Design program equips you with the creative and technical skills to train students in the art of creating organic and character models.&rdquo;
            </p>
          </div>
        </section>

        {/* Course Highlights Section */}
        <section className="py-24 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Bullet points */}
              <div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8 tracking-tight leading-tight">
                  Course <span className="text-[#BE1E2E]">Highlights:</span>
                </h2>
                <ul className="space-y-4 text-zinc-300 text-sm sm:text-base font-light">
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Learn to create concept Game Art, Storyboard, Digital Paint, Matte paint, Crate props, environment and character.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    To provide students with a foundational understanding of the principles and concepts specific to the field of game art.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    To teach the fundamental principles of computer graphics, including pixel manipulation, rendering, and image processing.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    To train students in the art of creating organic and character models with a focus on topology, realism, and aesthetics.
                  </li>
                </ul>
              </div>

              {/* Right Column: 3 overlapping rounded rectangular images */}
              <div className="relative w-full h-[400px]">
                {/* Image 1 (Top Left) */}
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 30, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-0 left-0 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop"
                    alt="Course Highlight Item 1"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Image 2 (Bottom Left) */}
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 30, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute bottom-0 left-4 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop"
                    alt="Course Highlight Item 2"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Image 3 (Right) */}
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 30, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-1/2 -translate-y-1/2 right-0 w-[45%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop"
                    alt="Course Highlight Item 3"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

            </div>

            {/* Bottom Header details */}
            <div className="text-center mt-20">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Professional Program In Advanced Game Art
              </h3>
              <p className="text-[#BE1E2E] font-bold text-xl sm:text-2xl mt-2">
                (12 Months)
              </p>
            </div>
          </div>
        </section>

        {/* Learn From Professionals & Enquiry Form */}
        <section className="py-24 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Professionals Info & Highlights */}
              <div className="col-span-1 lg:col-span-7 flex flex-col">
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 tracking-tight leading-tight">
                  Learn From <span className="text-[#BE1E2E]">Professionals</span>
                </h2>
                
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                  The learning objectives for advanced game art and design encompass a broad range of skills and knowledge that are crucial for individuals aiming to excel in the field of game development. Develop a deep understanding of fundamental art principles such as color theory, composition, perspective, and visual storytelling. Proficiently use industry-standard 3D modeling software to create complex 3D assets, characters, and environments. Acquire expertise in high-resolution sculpting using tools like ZBrush for creating intricate character and prop models.
                </p>

                {/* Subsections columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="font-display font-bold text-lg mb-3">
                      Become a <span className="text-[#BE1E2E]">Professional Artist</span>
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      Develop skills in character concept art, design, and character sheet creation, ensuring the consistency and appeal of in-game characters. Create immersive game environments by mastering level design, terrain modeling, and the use of assets like buildings, props, and terrain textures. Become proficient in game engines like Unreal Engine or Unity, including asset import, scene setup, and scripting for interactivity.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-3">
                      Be Industry <span className="text-[#BE1E2E]">Ready</span>
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      Master the art of conveying narrative and storytelling elements through gameplay, level design, and environmental storytelling. Create a professional portfolio showcasing a diverse range of high-quality game art and design work that demonstrates your skills and creativity.
                    </p>
                  </div>
                </div>

                {/* Program Highlights bullet list */}
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl mb-6 tracking-tight leading-tight">
                    Program <span className="text-[#BE1E2E]">Highlights:</span>
                  </h3>
                  <ul className="space-y-4 text-zinc-300 text-sm sm:text-base font-light">
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Increase design and visualisation skills
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Learn the complete Game Art production pipeline
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Continuous evaluation through examination, competitions and activities
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Sticky Enquiry Form */}
              <div className="col-span-1 lg:col-span-5 flex justify-center lg:sticky lg:top-28">
                <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-full max-w-md border border-zinc-100">
                  <h3 className="font-display font-bold text-2xl text-center text-[#BE1E2E] mb-6">
                    Enquiry Form
                  </h3>
                  <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        required
                        className="w-full bg-white text-black placeholder-zinc-500 rounded-md py-3 px-4 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#BE1E2E] transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Mobile No."
                        required
                        className="w-full bg-white text-black placeholder-zinc-500 rounded-md py-3 px-4 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#BE1E2E] transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email ID"
                        required
                        className="w-full bg-white text-black placeholder-zinc-500 rounded-md py-3 px-4 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#BE1E2E] transition-all"
                      />
                    </div>
                    <div className="relative">
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white text-black rounded-md py-3 pl-4 pr-10 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#BE1E2E] appearance-none cursor-pointer transition-all"
                      >
                        <option value="Game Arts & Design">Game Arts & Design</option>
                        <option value="Visual Effects (VFX)">Visual Effects (VFX)</option>
                        <option value="3D Animations">3D Animations</option>
                        <option value="2D ANIMATION">2D ANIMATION</option>
                        <option value="B.Voc Degree">B.Voc Degree</option>
                        <option value="Digital Photography">Digital Photography</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Fashion Design">Fashion Design</option>
                        <option value="Animation & Graphics">Animation & Graphics</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500">
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-[#BE1E2E] hover:bg-red-700 text-white font-semibold rounded-md transition-all duration-300 hover:shadow-[0_4px_12px_rgba(190,30,46,0.3)] transform hover:scale-[1.01]"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Module Accordions Section */}
        <section className="py-24 border-b border-white/5 relative bg-[#090909]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-center mb-16 tracking-tight leading-tight">
              Game Art Program <span className="text-[#BE1E2E]">Structure</span>
            </h2>

            <div className="space-y-4">
              {MODULES.map((item, idx) => {
                const isOpen = openModule === idx;
                return (
                  <div key={idx} className="border-b border-zinc-800 pb-5">
                    <button
                      onClick={() => toggleModule(idx)}
                      className="w-full py-4 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                    >
                      <span className={`font-sans font-semibold text-sm sm:text-base transition-colors duration-300 ${
                        isOpen ? "text-[#BE1E2E]" : "text-white group-hover:text-zinc-300"
                      }`}>
                        {item.title}
                      </span>
                      
                      {/* Plus / Minus Indicator */}
                      <div className="ml-4 flex-shrink-0 h-6 w-6 flex items-center justify-center text-white">
                        {isOpen ? (
                          <Minus className="h-4 w-4 text-[#BE1E2E]" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="pt-2 pb-4 pl-4 border-l-2 border-[#BE1E2E]/40 mt-1">
                            <ul className="space-y-2 text-zinc-400 text-xs sm:text-sm font-light grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {item.topics.map((topic, tIdx) => (
                                <li key={tIdx} className="flex items-center">
                                  <span className="text-[#BE1E2E] mr-2 font-bold">-</span>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
