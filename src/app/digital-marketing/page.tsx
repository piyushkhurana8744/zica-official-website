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
    title: "Module 01: Module Outline",
    topics: [
      "Introduction to Digital Marketing.",
      "Search Marketing",
      "SEO (Search Engine Optimization)",
      "SEM (Search Engine Marketing)",
      "Content Marketing Manager",
      "Inbound Marketing Manager",
      "Web Analyst",
    ],
  },
];

const CAREERS_LEFT = [
  "Search Engine Optimiser",
  "SEM manager",
  "Social Media Marketing Manager",
];

const CAREERS_RIGHT = [
  "Content Marketing Manager",
  "Inbound Marketing Manager",
  "Web Analyst",
];

export default function DigitalMarketingPage() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "Digital Marketing",
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
        <section className="relative min-h-[60vh] flex items-center justify-center py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/70" />
          
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-semibold mb-4 block">
              COURSE DETAILS
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight leading-tight mb-8">
              Digital <span className="text-[#BE1E2E]">Marketing Courses at ZICA Pitampura</span>
            </h1>
            <p className="text-zinc-300 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-light italic">
              &ldquo;Gain Practical Knowledge in SEO, Social Media, Content Marketing, and Analytics, Preparing You for a Successful Career in the Dynamic Digital Marketing Field.&rdquo;
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
                  Course <span className="text-[#BE1E2E]">Highlights</span>
                </h2>
                <ul className="space-y-4 text-zinc-300 text-sm sm:text-base font-light">
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Upon completion of ZICA&apos;s program, students receive a certificate and can also earn additional certifications from leading platforms like Google, Facebook, HubSpot, LinkedIn, and more.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Enhance your technical expertise and improve your visualisation skills for real-world applications.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Learn directly from Google-certified professionals with extensive industry experience.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Gain proficiency in the latest digital marketing tools and platforms.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Stay updated with emerging industry trends and best practices.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Build a strong portfolio and network with professionals to jumpstart your career.
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
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
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop"
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
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop"
                    alt="Course Highlight Item 3"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

            </div>

            {/* Bottom Header details */}
            <div className="text-center mt-20">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Program In Digital Marketing
              </h3>
              <p className="text-[#BE1E2E] font-bold text-xl sm:text-2xl mt-2">
                (6 Months)
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
                  Digital marketing involves promoting products and services through digital platforms such as search engines, websites, social media, email, and mobile applications. Learn from Google-certified professionals and enroll in a course guided by industry experts. Gain in-depth knowledge of digital marketing strategies, including SEO, social media management, and email marketing. Build practical skills through hands-on projects and real-world campaigns. Stay current with the latest trends and tools in the digital marketing field. Receive personalized mentorship to master analytics and optimization techniques, preparing you to thrive in today&apos;s competitive digital environment.
                </p>

                {/* Subsections columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="font-display font-bold text-lg mb-3">
                      Become a <span className="text-[#BE1E2E]">Professional Artist</span>
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      While digital marketing encompasses a broad range of activities, this program focuses on key areas such as digital marketing types and essential terminology, web advertising fundamentals, Google AdWords account setup, search engine marketing (SEM), display advertising, email marketing, mobile marketing, social media strategy, and Google Analytics. Gain a deep understanding of how these elements work together to drive success in modern business.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-3">
                      Be Industry <span className="text-[#BE1E2E]">Ready</span>
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      By the end of the program, students will be equipped to either join an established digital marketing team or work independently, possessing a strong, in-depth understanding of digital marketing, social media strategies, and brand management.
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
                      Enhance your technical and visualisation skills, preparing you for real-world digital marketing challenges.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Gain expertise in the entire digital marketing pipeline, from strategy development to execution.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Benefit from dedicated placement support to help you secure opportunities in top organisations.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Earn four industry-recognised certificates (ZICA, Google, Facebook, and HubSpot) to boost your credentials.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Stay ahead of the curve with hands-on experience and continuous learning in the ever-evolving digital space.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      Develop a comprehensive understanding of data analytics, optimization, and performance tracking to maximize marketing effectiveness.
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
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Visual Effects (VFX)">Visual Effects (VFX)</option>
                        <option value="3D Animations">3D Animations</option>
                        <option value="2D ANIMATION">2D ANIMATION</option>
                        <option value="B.Voc Degree">B.Voc Degree</option>
                        <option value="Game Arts & Design">Game Arts & Design</option>
                        <option value="Digital Photography">Digital Photography</option>
                        <option value="Interior Design">Interior Design</option>
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
              Digital Marketing Program <span className="text-[#BE1E2E]">Structure</span>
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
              Upon completing the program, students are fully prepared to explore a variety of exciting and rewarding career opportunities in the dynamic field of digital marketing.
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
                <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-full max-w-md border border-zinc-100">
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
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Visual Effects (VFX)">Visual Effects (VFX)</option>
                        <option value="3D Animations">3D Animations</option>
                        <option value="2D ANIMATION">2D ANIMATION</option>
                        <option value="B.Voc Degree">B.Voc Degree</option>
                        <option value="Game Arts & Design">Game Arts & Design</option>
                        <option value="Digital Photography">Digital Photography</option>
                        <option value="Interior Design">Interior Design</option>
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
                        className="w-full py-3 bg-[#BE1E2E] hover:bg-red-700 text-white font-semibold rounded-md transition-all duration-300 shadow-[0_4px_15px_rgba(190,30,46,0.3)]"
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

      </main>

      <Footer />
    </>
  );
}
