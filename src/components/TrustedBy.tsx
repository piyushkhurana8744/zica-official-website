"use client";

import React from "react";
import { motion } from "framer-motion";
import BannerForm from "@/components/BannerForm";

export default function TrustedBy() {
  return (
    <section id="trusted-by" className="relative py-24 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-red-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
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

          {/* Right Column: Enquiry Form (using BannerForm with Cloudflare Turnstile) */}
          <div className="flex justify-center lg:justify-end">
            <BannerForm title="ENQUIRY FORM" buttonText="SUBMIT" />
          </div>

        </div>
      </div>
    </section>
  );
}
