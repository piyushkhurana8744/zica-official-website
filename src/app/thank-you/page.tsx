"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";
import { Phone, CheckCircle, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <>
      <ScrollProgressBar />
      <MouseGlow />
      <Navbar />

      <main data-section-theme="dark" className="relative min-h-[85vh] w-full overflow-hidden bg-[#0A0A0A] flex flex-col items-center justify-center pt-32 pb-20 border-b border-[rgba(190,30,46,0.12)] font-sans">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#BE1E2E]/5 blur-[160px] pointer-events-none z-10 animate-pulse-slow" />

        {/* Content Container */}
        <div className="relative z-20 max-w-2xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1A1A1A] border border-[rgba(190,30,46,0.12)] rounded-[32px] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Inner background highlight */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#BE1E2E]/5 rounded-full blur-[40px] pointer-events-none" />

            <div className="flex flex-col items-center">
              {/* Success Badge with animated scale */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="h-20 w-20 bg-[#BE1E2E]/10 border border-[#BE1E2E]/35 rounded-full flex items-center justify-center mb-8"
              >
                <CheckCircle className="h-10 w-10 text-[#BE1E2E]" />
              </motion.div>

              <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase mb-4 leading-tight">
                Thank You!
              </h1>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light max-w-md mb-8">
                Your enquiry has been successfully submitted. Our senior academic counsellor will get in touch with you shortly.
              </p>

              {/* Call-to-action details */}
              <div className="w-full border-t border-white/10 pt-8 mt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:8800505151"
                  className="bg-[#BE1E2E] hover:bg-[#A31827] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(190,30,46,0.25)] hover:shadow-[0_6px_35px_rgba(190,30,46,0.35)] transform hover:scale-[1.02] inline-flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  <span>Talk to Counsellor</span>
                </a>
                
                <a
                  href="https://wa.me/918800505151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] inline-flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
