"use client";

import React from "react";
import { motion } from "framer-motion";
import BannerForm from "@/components/BannerForm";

export default function FinalCTA() {
  return (
    <section id="contact" data-section-theme="dark" className="relative py-24 bg-[#0A0A0A] overflow-hidden border-t border-[rgba(231, 107, 36,0.12)]">
      {/* Animated Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text Column */}
          <div className="col-span-1 lg:col-span-7 flex flex-col text-left">
            <span className="text-xs uppercase tracking-[0.35em] text-[#E76B24] font-bold mb-4 font-sans">
              Take the Leap
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight select-none uppercase">
              Still Confused?<br />
              <span className="text-[#E76B24]">Get Instant Clarity</span>
            </h2>
            <p className="text-[#D1D5DB] text-base sm:text-lg mt-6 leading-relaxed font-light">
              Book a personal consultation session with our expert career counselors. We will review your goals, introduce you to studio tools, and map out your perfect creative roadmap.
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <a href="tel:+919719040300" className="px-6 py-4 rounded-2xl bg-[#181818] border border-[rgba(231, 107, 36,0.12)] hover:border-[#E76B24] hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer">
                <span className="text-xs text-[#A1A1AA] block uppercase tracking-wider font-semibold">Call Counselor</span>
                <span className="text-lg font-bold text-white mt-1 block hover:text-[#E76B24] transition-colors">+91 97190 40300</span>
              </a>
              <a href="mailto:info@zicapitampura.com" className="px-6 py-4 rounded-2xl bg-[#181818] border border-[rgba(231, 107, 36,0.12)] hover:border-[#E76B24] hover:scale-[1.02] hover:shadow-lg transition-all duration-300 cursor-pointer">
                <span className="text-xs text-[#A1A1AA] block uppercase tracking-wider font-semibold">Write Email</span>
                <span className="text-lg font-bold text-white mt-1 block hover:text-[#E76B24] transition-colors break-all">info@zicapitampura.com</span>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end relative">
            <BannerForm title="ENQUIRY FORM" buttonText="SUBMIT" theme="dark" className="bg-[#181818] border border-[rgba(231, 107, 36,0.12)] shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
