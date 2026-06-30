"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function TrustedBy() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Enquiry submitted successfully!\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nCourse: ${formData.course}`);
  };

  return (
    <section id="trusted-by" className="relative py-24 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-red-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Recruiters Who Trust Us */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col text-white"
          >
            {/* Title */}
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6 tracking-tight leading-tight">
              Recruiters Who <span className="text-[#BE1E2E]">Trust Us</span>
            </h2>

            {/* Description */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic mb-8 font-light max-w-lg border-l-2 border-[#BE1E2E]/60 pl-4">
              &ldquo;Several reputed companies across the animation, VFX, and design industries have hired talented students from ZICA, recognizing their creative skills and professional training.&rdquo;
            </p>

            {/* Logos Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {/* Anibrain Logo Card */}
              <div className="h-20 sm:h-24 bg-white rounded-xl flex items-center justify-center p-3 shadow-md hover:scale-[1.03] transition-transform duration-300">
                <svg viewBox="0 0 200 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <rect x="15" y="12" width="30" height="30" fill="black" rx="4"/>
                  <text x="23" y="34" fontFamily="sans-serif" fontWeight="900" fontSize="24" fill="white">a</text>
                  <text x="52" y="34" fontFamily="sans-serif" fontWeight="900" fontSize="24" fill="black">nibrain</text>
                  <text x="52" y="44" fontFamily="sans-serif" fontSize="7" fill="gray" letterSpacing="0.8">DIGITAL STUDIO</text>
                </svg>
              </div>

              {/* BYJU'S Logo Card */}
              <div className="h-20 sm:h-24 bg-white rounded-xl flex items-center justify-center p-3 shadow-md hover:scale-[1.03] transition-transform duration-300">
                <svg viewBox="0 0 200 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 12 Q20 8 28 12 L38 28 Q33 34 25 34 L15 20 Z" fill="#802289"/>
                  <text x="45" y="32" fontFamily="sans-serif" fontWeight="900" fontSize="24" fill="#802289">BYJU&apos;S</text>
                  <text x="45" y="43" fontFamily="sans-serif" fontWeight="bold" fontSize="7.5" fill="gray">The Learning App</text>
                </svg>
              </div>

              {/* Assemblage Logo Card */}
              <div className="h-20 sm:h-24 bg-white rounded-xl flex items-center justify-center p-3 shadow-md hover:scale-[1.03] transition-transform duration-300">
                <svg viewBox="0 0 200 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <text x="10" y="32" fontFamily="sans-serif" fontWeight="900" fontSize="20" fill="#00B0FF" letterSpacing="1.2">
                    ASS<tspan fill="#FF3366">E</tspan>MBLAGE
                  </text>
                  <text x="12" y="43" fontFamily="sans-serif" fontSize="7.5" fill="gray" letterSpacing="0.8">Entertainment Pvt. Ltd.</text>
                </svg>
              </div>
            </div>

            {/* View All Button */}
            <button className="w-fit px-8 py-3 bg-[#BE1E2E] hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(190,30,46,0.25)] hover:shadow-[0_6px_20px_rgba(190,30,46,0.4)]">
              View All
            </button>
          </motion.div>

          {/* Right Column: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col text-white"
          >
            {/* Title */}
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-8 tracking-tight leading-tight">
              Enquiry <span className="text-[#BE1E2E]">Form</span>
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5 max-w-md w-full">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full bg-white text-black placeholder-zinc-500 rounded-md py-3.5 px-4 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#BE1E2E] transition-all"
                />
              </div>

              {/* Mobile Field */}
              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile No."
                  required
                  className="w-full bg-white text-black placeholder-zinc-500 rounded-md py-3.5 px-4 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#BE1E2E] transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID"
                  required
                  className="w-full bg-white text-black placeholder-zinc-500 rounded-md py-3.5 px-4 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#BE1E2E] transition-all"
                />
              </div>

              {/* Course Selection Dropdown */}
              <div className="relative">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full bg-white text-black rounded-md py-3.5 pl-4 pr-10 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#BE1E2E] appearance-none cursor-pointer transition-all"
                >
                  <option value="" disabled>Select Course</option>
                  <option value="Visual Effects (VFX)">Visual Effects (VFX)</option>
                  <option value="Game Arts & Design">Game Arts & Design</option>
                  <option value="Digital Photography">Digital Photography</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Fashion Design">Fashion Design</option>
                  <option value="Animation & Graphics">Animation & Graphics</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-600">
                  <ChevronDown className="h-5 w-5" />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-fit bg-[#BE1E2E] hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-md uppercase tracking-wider transition-all duration-300 hover:shadow-[0_4px_15px_rgba(190,30,46,0.3)] transform hover:scale-[1.02]"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
