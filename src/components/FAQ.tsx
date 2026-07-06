"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import BannerForm from "@/components/BannerForm";

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

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
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

          {/* Right Column: Enquiry Form Card (using BannerForm with Cloudflare Turnstile) */}
          <div className="col-span-1 lg:col-span-5 flex justify-center lg:sticky lg:top-28">
            <BannerForm title="ENQUIRY FORM" buttonText="SUBMIT" />
          </div>

        </div>
      </div>
    </section>
  );
}
