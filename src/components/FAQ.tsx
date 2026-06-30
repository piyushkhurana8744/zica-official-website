"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  {
    question: "Are drawing skills compulsory for doing the animation Program?",
    answer: "For 2D animation drawing skills is a must. If you are more interested in the 3D animation, then you will suffice without drawing.",
  },
  {
    question: "Which course I should prefer after Grade 12th?",
    answer: "After 12th you should opt for a career-oriented program. The duration of the program should be 2 years or more.",
  },
  {
    question: "What type of Courses available at ZICA? What is the difference between 1 Year & 2 Year Program?",
    answer: "ZICA has programs from 2D animation, 3D animation, Visual Effects, Graphic design, Web design, Interior design, Fashion Design etc. The duration of the program varies from 3 months to 3 years.\n\nTwo-to-three-year programs are career oriented and comprehensive programs for 10th or 12th pass students. One year programs are very focused industry standard programs for the students who are studying or completed Graduation or Post-Graduation.",
  },
  {
    question: "Is your faculty from Industry?",
    answer: "Yes. We hire faculties with a minimum of 2 years of production and 2 years of training experience.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Open the first FAQ by default
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
  });

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
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
    <section id="faq" className="relative py-24 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: FAQ Info and Accordion */}
          <div className="col-span-1 lg:col-span-7 flex flex-col text-white">
            
            {/* Header Title */}
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight leading-tight mb-4">
              Frequently Asked <span className="text-[#BE1E2E]">Question</span>
            </h2>
            
            {/* Header Subtitle */}
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light mb-12 max-w-xl">
              Find quick answers to common questions about our courses, admissions, fees, career opportunities, and more at ZICA India. Need more help? Contact our support team anytime!
            </p>

            {/* Accordion List */}
            <div className="space-y-4">
              {FAQS.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-zinc-800 pb-5"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full py-4 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                    >
                      <span className={`font-sans font-medium text-sm sm:text-base transition-colors duration-300 ${
                        isOpen ? "text-[#BE1E2E]" : "text-white group-hover:text-zinc-300"
                      }`}>
                        {item.question}
                      </span>
                      
                      {/* Arrow Icon */}
                      <div className={`ml-4 flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? "bg-[#BE1E2E] text-white" 
                          : "bg-transparent border border-white text-white"
                      }`}>
                        {isOpen ? (
                          <ChevronUp className="h-3.5 w-3.5" />
                        ) : (
                          <ChevronDown className="h-3.5 w-3.5" />
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
                          <div className="pt-2 pb-2 text-zinc-400 text-xs sm:text-sm leading-relaxed font-light whitespace-pre-line">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Enquiry Form Card */}
          <div className="col-span-1 lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white text-black p-8 rounded-2xl shadow-2xl w-full max-w-md border border-zinc-100"
            >
              {/* Form Title */}
              <h3 className="font-display font-bold text-2xl text-center text-[#BE1E2E] mb-6">
                Enquiry Form
              </h3>

              {/* Form fields */}
              <form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
                
                {/* Name */}
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

                {/* Mobile No. */}
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

                {/* Email ID */}
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

                {/* Course Selection */}
                <div className="relative">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white text-black rounded-md py-3 pl-4 pr-10 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#BE1E2E] appearance-none cursor-pointer transition-all"
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
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#BE1E2E] hover:bg-red-700 text-white font-semibold rounded-md transition-all duration-300 hover:shadow-[0_4px_12px_rgba(190,30,46,0.3)] transform hover:scale-[1.01]"
                  >
                    Submit
                  </button>
                </div>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
