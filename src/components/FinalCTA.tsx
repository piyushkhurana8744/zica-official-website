"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import Turnstile, { TurnstileRef } from "./Turnstile";

const COURSES = [
  "Select a Course...",
  "Visual Effects (VFX) - 2 Year Pro",
  "3D & 2D Animation - 1 Year",
  "Game Arts & Design - 2 Year Pro",
  "Graphic & Web Design - 1 Year",
  "Interior Design - 1 Year",
  "Digital Photography - 6 Month",
];

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileRef>(null);
  const [agreeTerms, setAgreeTerms] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert("Please complete the Cloudflare security verification.");
      return;
    }
    if (!formData.name || !formData.mobile || !formData.email || !formData.course) {
      alert("Please fill in all the details.");
      return;
    }
    setIsSubmitting(true);
    try {
      const { submitEnquiry } = await import("@/utils/formSubmit");
      await submitEnquiry({
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        course: formData.course,
        token: turnstileToken,
      });
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", mobile: "", email: "", course: "" });
      setTurnstileToken("");
    } catch (err) {
      setIsSubmitting(false);
      turnstileRef.current?.reset();
      setTurnstileToken("");
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Animated Red Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#BE1E2E]/10 rounded-full blur-[160px] pointer-events-none animate-pulse-slow z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Column */}
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.35em] text-[#BE1E2E] font-bold mb-4">
              Take the Leap
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight select-none">
              Still Confused?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-white">Get Instant Clarity</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg mt-6 leading-relaxed font-light">
              Book a personal consultation session with our expert career counselors. We will review your goals, introduce you to studio tools, and map out your perfect creative roadmap.
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-xs text-white/40 block uppercase tracking-wider font-semibold">Call Counselor</span>
                <span className="text-lg font-bold text-white mt-1 block hover:text-[#BE1E2E] transition-colors cursor-pointer">+91 97190 40300</span>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/5">
                <span className="text-xs text-white/40 block uppercase tracking-wider font-semibold">Write Email</span>
                <span className="text-lg font-bold text-white mt-1 block hover:text-[#BE1E2E] transition-colors cursor-pointer">info@zicapitampura.com</span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="relative">
            <div className="glass-premium rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              <h3 className="font-display font-bold text-2xl text-white mb-6">
                Admission Enquiry Form
              </h3>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="enquiry-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-semibold">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-[#BE1E2E] focus:ring-1 focus:ring-[#BE1E2E] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-semibold">Mobile Number</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-[#BE1E2E] focus:ring-1 focus:ring-[#BE1E2E] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-semibold">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-[#BE1E2E] focus:ring-1 focus:ring-[#BE1E2E] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-semibold">Choose Program</label>
                      <select
                        required
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-black border border-white/10 text-white text-sm focus:border-[#BE1E2E] focus:ring-1 focus:ring-[#BE1E2E] outline-none transition-all cursor-pointer"
                      >
                        {COURSES.map((course, idx) => (
                          <option key={idx} value={idx === 0 ? "" : course} disabled={idx === 0}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* CLOUDFLARE TURNSTILE INTEGRATION BOX */}
                    <div className="my-5">
                      <Turnstile
                        ref={turnstileRef}
                        onVerify={(token) => {
                          setTurnstileToken(token);
                        }}
                        onExpire={() => {
                          setTurnstileToken("");
                        }}
                        onError={() => {
                          setTurnstileToken("");
                        }}
                        theme="dark"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center py-4 rounded-xl text-sm font-semibold text-white bg-[#BE1E2E] hover:bg-red-700 disabled:bg-[#BE1E2E]/50 transition-all duration-300 shadow-[0_4px_20px_rgba(190,30,46,0.35)] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <span className="flex items-center space-x-2">
                          <span>Submit Enquiry</span>
                          <Send className="h-4 w-4" />
                        </span>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-box"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 className="h-16 w-16 text-[#BE1E2E] mb-6 animate-bounce" />
                    <h4 className="font-display font-bold text-xl text-white">Enquiry Received!</h4>
                    <p className="text-white/50 text-sm mt-3 max-w-xs leading-relaxed font-light">
                      Thank you for contacting us. A senior studio counselor will call you in the next 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-xs font-semibold uppercase tracking-wider text-[#BE1E2E] hover:text-red-400 transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
