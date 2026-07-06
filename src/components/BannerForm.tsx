"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone, Mail, BookOpen, ChevronDown, Check } from "lucide-react";
import Turnstile, { TurnstileRef } from "./Turnstile";

const COURSES = [
  "2D ANIMATION",
  "3D Animations",
  "Animation & Graphics",
  "Blender Mastery",
  "B.Voc Degree",
  "Digital Audio And Video Editing",
  "Digital Marketing",
  "Digital Photography",
  "Fashion Design",
  "Game Arts & Design",
  "GRAPHIC DESIGN",
  "Interior Design",
  "MOTION GRAPHICS",
  "UI & UX",
  "Unreal Engine",
  "Visual Effects (VFX)",
  "Web Design",
];

interface BannerFormProps {
  title?: string;
  buttonText?: string;
  defaultCourse?: string;
  className?: string;
}

export default function BannerForm({
  title = "DOWNLOAD BROCHURE",
  buttonText = "DOWNLOAD",
  defaultCourse = "",
  className = "",
}: BannerFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: defaultCourse,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [turnstileVerified, setTurnstileVerified] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileRef>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 8, y: -y * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }
    if (!turnstileToken) {
      alert("Please complete the Cloudflare security verification.");
      return;
    }
    if (!formData.name || !formData.mobile || !formData.email || !formData.course) {
      alert("Please fill in all details.");
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
      setSubmitted(true);
      setTurnstileToken("");
      setTurnstileVerified(false);
    } catch (err) {
      setIsSubmitting(false);
      turnstileRef.current?.reset();
      setTurnstileToken("");
      setTurnstileVerified(false);
    }
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={`w-full max-w-[430px] relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111318]/95 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl ${className}`}
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF1F3D]/10 rounded-full blur-[50px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none" />

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-12 text-center relative z-10"
          >
            <div className="h-16 w-16 bg-[#22C55E]/20 border border-[#22C55E] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <Check className="h-8 w-8 text-[#22C55E] stroke-[3]" />
            </div>
            <h3 className="font-display font-black text-2xl text-white tracking-wide uppercase">Enquiry Submitted!</h3>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed font-light max-w-xs">
              Thank you! Our academic counselor will contact you shortly with full brochure details.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer border border-white/10"
            >
              Submit Another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4 relative z-10 text-left font-sans"
          >
            {/* Card Title */}
            <h3 className="font-display italic font-black text-2xl sm:text-3xl text-white text-center tracking-wider uppercase mb-6 drop-shadow">
              {title}
            </h3>

            {/* FULL NAME */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold text-zinc-400 uppercase tracking-widest block font-sans">
                FULL NAME
              </label>
              <div className="bg-[#1c1f26] hover:bg-[#22262f] focus-within:bg-[#22262f] border border-white/10 focus-within:border-zinc-500 rounded-xl px-4 py-3.5 flex items-center gap-3.5 transition-all duration-200 shadow-inner">
                <User className="h-4 w-4 text-zinc-500 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Enter name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-sm font-medium text-white placeholder:text-zinc-600 bg-transparent w-full focus:outline-none"
                />
              </div>
            </div>

            {/* PHONE NUMBER */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold text-zinc-400 uppercase tracking-widest block font-sans">
                PHONE NUMBER
              </label>
              <div className="bg-[#1c1f26] hover:bg-[#22262f] focus-within:bg-[#22262f] border border-white/10 focus-within:border-zinc-500 rounded-xl px-4 py-3.5 flex items-center gap-3.5 transition-all duration-200 shadow-inner">
                <Phone className="h-4 w-4 text-zinc-500 flex-shrink-0" />
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="text-sm font-medium text-white placeholder:text-zinc-600 bg-transparent w-full focus:outline-none"
                />
              </div>
            </div>

            {/* YOUR EMAIL */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold text-zinc-400 uppercase tracking-widest block font-sans">
                YOUR EMAIL
              </label>
              <div className="bg-[#1c1f26] hover:bg-[#22262f] focus-within:bg-[#22262f] border border-white/10 focus-within:border-zinc-500 rounded-xl px-4 py-3.5 flex items-center gap-3.5 transition-all duration-200 shadow-inner">
                <Mail className="h-4 w-4 text-zinc-500 flex-shrink-0" />
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="text-sm font-medium text-white placeholder:text-zinc-600 bg-transparent w-full focus:outline-none"
                />
              </div>
            </div>

            {/* INTERESTED ON... */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-extrabold text-zinc-400 uppercase tracking-widest block font-sans">
                INTERESTED ON...
              </label>
              <div className="relative bg-[#1c1f26] hover:bg-[#22262f] focus-within:bg-[#22262f] border border-white/10 focus-within:border-zinc-500 rounded-xl px-4 py-3.5 flex items-center gap-3.5 transition-all duration-200 shadow-inner">
                <BookOpen className="h-4 w-4 text-zinc-500 flex-shrink-0" />
                <select
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="text-sm font-medium text-white bg-transparent w-full focus:outline-none appearance-none cursor-pointer pr-6"
                >
                  <option value="" disabled className="bg-[#111318] text-zinc-500">Select Course</option>
                  {COURSES.map((courseOption, idx) => (
                    <option key={idx} value={courseOption} className="bg-[#111318] text-white">
                      {courseOption}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 h-4 w-4 text-zinc-500 pointer-events-none" />
              </div>
            </div>

            {/* CLOUDFLARE TURNSTILE INTEGRATION BOX */}
            <div className="my-5">
              <Turnstile
                ref={turnstileRef}
                onVerify={(token) => {
                  setTurnstileToken(token);
                  setTurnstileVerified(true);
                }}
                onExpire={() => {
                  setTurnstileToken("");
                  setTurnstileVerified(false);
                }}
                onError={() => {
                  setTurnstileToken("");
                  setTurnstileVerified(false);
                }}
                theme="dark"
              />
            </div>

            {/* Checkbox agreement */}
            <label className="flex items-start space-x-3 cursor-pointer select-none pt-1">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5 rounded border-zinc-700 bg-zinc-800 text-[#FF1F3D] focus:ring-[#FF1F3D] focus:ring-offset-0 focus:ring-1 h-4 w-4 cursor-pointer flex-shrink-0"
              />
              <span className="text-xs text-zinc-400 font-medium leading-tight font-sans">
                I agree to the Zica <a href="/terms-conditions" className="text-[#FF1F3D] hover:underline font-bold">Terms & Conditions</a> and <a href="/privacy-policy" className="text-[#FF1F3D] hover:underline font-bold">Privacy Policy</a>
              </span>
            </label>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#FF1F3D] hover:bg-red-600 text-white font-black text-base uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_4px_25px_rgba(255,31,61,0.5)] hover:shadow-[0_6px_30px_rgba(255,31,61,0.7)] transform hover:scale-[1.02] cursor-pointer mt-5"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
              ) : (
                buttonText
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
