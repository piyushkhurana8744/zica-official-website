"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";
import BannerForm from "@/components/BannerForm";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MODULES = [
  {
    title: "Module Outline",
    topics: [
      "History",
      "Digital Camera",
      "Camera Lenses",
      "Photography Techniques",
      "Digital Photo Editing",
      "Post-Photography Session",
    ],
  },
];

const CAREERS_LEFT = [
  "Portrait Photographer",
  "Wedding Photographer",
  "Commercial Photographer",
  "Fashion Photographer",
  "Photojournalist",
  "Food Photographer",
];

const CAREERS_RIGHT = [
  "Travel Photographer",
  "Wildlife Photographer",
  "Architectural Photographer",
  "Sports Photographer",
  "Event Photographer",
  "Product Photographer",
];

export default function DigitalPhotographyPage() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "Digital Photography",
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
        <section className="relative min-h-[60vh] flex items-center justify-center py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/70" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-left drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-semibold mb-4 block">
                  COURSE DETAILS
                </span>
                <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight leading-tight mb-8">
                  Digital <span className="text-[#BE1E2E]">Photography Courses at ZICA Pitampura</span>
                </h1>
                <p className="text-zinc-300 text-sm sm:text-lg leading-relaxed font-light italic">
                  &ldquo;Capture the World Through Your Lens with Our Comprehensive Digital Photography Program Designed for Aspiring Professionals.&rdquo;
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                <BannerForm title="COURSE ENQUIRY" buttonText="SUBMIT ENQUIRY" defaultCourse="Digital Photography" />
              </div>
            </div>
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
                    Uncover the essentials of digital photography—from understanding camera types and gear care to mastering exposure in any environment.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Get hands-on with lenses and filters, learning how each choice shapes the story your image tells.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Explore the art of composition, lighting, and motion to bring your creative vision to life across various photography styles.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Transform raw shots into polished visuals using advanced editing techniques, tonal control, and contrast adjustments.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Blend imagination with precision as you dive into photo recreation, artistic integration, colour calibration, and professional-grade printing.
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
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop"
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
                    src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=400&auto=format&fit=crop"
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
                    src="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?q=80&w=400&auto=format&fit=crop"
                    alt="Course Highlight Item 3"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

            </div>

            {/* Bottom Header details */}
            <div className="text-center mt-20">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Program In Digital Photography
              </h3>
              <p className="text-[#BE1E2E] font-bold text-xl sm:text-2xl mt-2">
                (3 Months)
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
                  Advancements in technology have significantly reduced the cost of digital cameras and editing software, making it easier for aspiring photographers to produce stunning images without a large investment. With powerful in-camera features and user-friendly editing tools, digital photography offers a fresh, accessible platform for creative expression, distinct from traditional film photography.
                </p>

                {/* Subsections columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="font-display font-bold text-lg mb-3">
                      Become a <span className="text-[#BE1E2E]">Professional Artist</span>
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      Students will gain in-depth knowledge of digital photography, including exposure control, lens and optical principles, creative techniques, and various photographic styles. The course covers essential elements such as composition, visual storytelling, lighting methods, depth of field, and aperture control. Learners will also master photo editing using Photoshop and Lightroom, blending artistic vision with technical skill, and understanding color management and printing. Whether pursued as a hobby or a professional career path, this program offers valuable skills for every photography enthusiast.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-3">
                      Be Industry <span className="text-[#BE1E2E]">Ready</span>
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      By the end of the Digital Photography course, students will emerge as industry-ready professionals equipped with a solid grasp of photography&apos;s history, digital camera functionality, and lens technology. They&apos;ll master advanced shooting techniques, photo editing, color management, and professional printing. With practical experience and a sharpened creative eye, graduates will be fully prepared to thrive in the dynamic world of digital photography and meet the demands of the professional landscape.
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
                      Enhance your visual storytelling and technical photography skills through structured, hands-on learning.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Learn directly from seasoned professional photographers with years of industry experience.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Master advanced photo editing tools, including tonal correction, contrast control, and creative enhancement techniques.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Build a strong foundation in lighting, composition, and camera handling for both studio and outdoor photography.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Develop a professional portfolio that reflects your unique style and creative growth.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Gain insights into industry trends, workflow optimization, and real-world applications to kickstart your career or hobby.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Sticky Enquiry Form */}
              <div className="col-span-1 lg:col-span-5 flex justify-center lg:sticky lg:top-28">
                <BannerForm title="ENQUIRY FORM" buttonText="SUBMIT" defaultCourse="Digital Photography" />
              </div>

            </div>
          </div>
        </section>

        {/* Module Accordions Section */}
        <section className="py-24 border-b border-white/5 relative bg-[#090909]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-center mb-16 tracking-tight leading-tight">
              Digital Photography Program <span className="text-[#BE1E2E]">Structure</span>
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

        {/* Career Avenues Section */}
        <section className="py-24 border-b border-white/5 relative">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-center mb-4 tracking-tight leading-tight">
              Career <span className="text-[#BE1E2E]">Avenues</span>
            </h2>
            <p className="text-zinc-400 text-center text-xs sm:text-sm font-light mb-16">
              Upon completing the program, students are fully prepared to explore a wide array of exciting and rewarding career opportunities in the field of digital photography.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Left List */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 shadow-xl space-y-4">
                {CAREERS_LEFT.map((career, idx) => (
                  <div key={idx} className="flex items-center text-zinc-200 text-sm sm:text-base font-medium">
                    <span className="text-[#BE1E2E] mr-3 font-bold">•</span>
                    {career}
                  </div>
                ))}
              </div>
              {/* Right List */}
              <div className="bg-white/5 border border-white/5 rounded-2xl p-6 shadow-xl space-y-4">
                {CAREERS_RIGHT.map((career, idx) => (
                  <div key={idx} className="flex items-center text-zinc-200 text-sm sm:text-base font-medium">
                    <span className="text-[#BE1E2E] mr-3 font-bold">•</span>
                    {career}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch With Us Section */}
        <section className="py-24 relative bg-[#090909]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Title & Creator Illustration */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="font-display font-bold text-4xl sm:text-5xl mb-12 tracking-tight leading-tight">
                  Get in touch <span className="text-[#BE1E2E]">With us</span>
                </h2>
                
                {/* Premium Inline SVG Girl Illustration */}
                <div className="relative w-80 h-80 flex items-center justify-center select-none bg-white/5 border border-white/10 rounded-full p-8 shadow-2xl backdrop-blur-md">
                  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {/* Background decor circles */}
                    <circle cx="50" cy="40" r="8" fill="#BE1E2E" opacity="0.3" />
                    <circle cx="160" cy="150" r="12" fill="#BE1E2E" opacity="0.2" />
                    <circle cx="170" cy="50" r="6" fill="#fff" opacity="0.1" />

                    {/* Chat Bubble left */}
                    <g transform="translate(15, 60)">
                      <rect x="0" y="0" width="34" height="20" rx="6" fill="#BE1E2E" />
                      <polygon points="10,20 15,25 18,20" fill="#BE1E2E" />
                      <circle cx="9" cy="10" r="2" fill="white" />
                      <circle cx="17" cy="10" r="2" fill="white" />
                      <circle cx="25" cy="10" r="2" fill="white" />
                    </g>

                    {/* Chat Bubble right */}
                    <g transform="translate(145, 60)">
                      <rect x="0" y="0" width="34" height="20" rx="6" fill="#fff" opacity="0.9" />
                      <polygon points="20,20 23,25 28,20" fill="#fff" opacity="0.9" />
                      <rect x="6" y="8" width="22" height="4" rx="2" fill="#333" />
                    </g>

                    {/* Phone/Enquiry Icon bottom left */}
                    <g transform="translate(25, 130)">
                      <circle cx="12" cy="12" r="12" fill="#BE1E2E" />
                      <path d="M9 7h2.5l1.5 3-1.5 1a8 8 0 0 0 4 4l1-1.5 3 1.5V15a1 1 0 0 1-1 1A11 11 0 0 1 7 8a1 1 0 0 1 2-1z" fill="white" transform="scale(0.8) translate(3,3)" />
                    </g>

                    {/* Desk & PC */}
                    <rect x="40" y="160" width="120" height="6" fill="#777" rx="3" />
                    {/* PC Stand */}
                    <rect x="95" y="130" width="10" height="30" fill="#444" />
                    <ellipse cx="100" cy="160" rx="15" ry="4" fill="#333" />
                    {/* PC Screen */}
                    <rect x="65" y="90" width="70" height="42" rx="4" fill="#111" stroke="#333" strokeWidth="2" />
                    <rect x="68" y="93" width="64" height="36" rx="2" fill="#1e1e24" />
                    {/* Code lines on screen */}
                    <rect x="74" y="98" width="20" height="3" fill="#BE1E2E" rx="1" />
                    <rect x="74" y="104" width="35" height="3" fill="#fff" rx="1" opacity="0.7" />
                    <rect x="74" y="110" width="25" height="3" fill="#BE1E2E" rx="1" />

                    {/* Girl Character */}
                    {/* Body/Torso */}
                    <path d="M75 160 L125 160 L115 125 L85 125 Z" fill="#FBC02D" /> 
                    {/* Neck */}
                    <rect x="96" y="117" width="8" height="10" fill="#FFCC80" />
                    {/* Head */}
                    <circle cx="100" cy="105" r="14" fill="#FFCC80" />
                    {/* Hair */}
                    <path d="M86 102 C86 90, 114 90, 114 102 L116 116 L108 116 L100 110 L92 116 L84 116 Z" fill="#5D4037" />
                    <rect x="92" y="96" width="16" height="6" fill="#5D4037" rx="2" />
                    {/* Headphones */}
                    <path d="M87 105 A13 13 0 0 1 113 105" fill="none" stroke="#212121" strokeWidth="3" />
                    <rect x="84" y="102" width="5" height="10" rx="2.5" fill="#BE1E2E" />
                    <rect x="111" y="102" width="5" height="10" rx="2.5" fill="#BE1E2E" />
                    {/* Mic */}
                    <path d="M86 109 Q92 115 96 112" fill="none" stroke="#212121" strokeWidth="1.5" />
                    
                    {/* Hands */}
                    <circle cx="80" cy="145" r="4" fill="#FFCC80" />
                    <circle cx="120" cy="145" r="4" fill="#FFCC80" />
                  </svg>
                </div>
              </div>

              {/* Right Column: Enquiry Form Box */}
              <div className="flex justify-center">
                <BannerForm title="ENQUIRY FORM" buttonText="SUBMIT" defaultCourse="Digital Photography" />
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
