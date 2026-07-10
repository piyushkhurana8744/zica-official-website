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
  theme?: "light" | "dark";
}

export default function BannerForm({
  title = "DOWNLOAD BROCHURE",
  buttonText = "DOWNLOAD",
  defaultCourse = "",
  className = "",
  theme = "dark",
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

  const isLight = theme === "light";

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={`w-full max-w-[365px] relative overflow-hidden rounded-[24px] border p-5 sm:p-6 backdrop-blur-2xl transition-all duration-300 ${
        isLight
          ? "bg-white border-[rgba(231, 107, 36,0.12)] shadow-[0_15px_40px_rgba(0,0,0,0.05)] text-[#111111]"
          : "bg-[#181818] border-[rgba(231, 107, 36,0.12)] shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white"
      } ${className}`}
    >
      {/* Subtle Ambient Glow */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[45px] pointer-events-none ${isLight ? "bg-[#E76B24]/5" : "bg-[#E76B24]/10"}`} />
      <div className={`absolute bottom-0 left-0 w-32 h-32 rounded-full blur-[45px] pointer-events-none ${isLight ? "bg-[#E76B24]/5" : "bg-[#E76B24]/10"}`} />

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center justify-center py-8 text-center relative z-10"
          >
            <div className="h-12 w-12 bg-[#22C55E]/20 border border-[#22C55E] rounded-full flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(34,197,94,0.3)]">
              <Check className="h-6 w-6 text-[#22C55E] stroke-[3]" />
            </div>
            <h3 className={`font-display font-black text-xl tracking-wide uppercase ${isLight ? "text-[#111111]" : "text-white"}`}>Enquiry Submitted!</h3>
            <p className={`text-xs mt-2.5 leading-relaxed font-light max-w-[240px] ${isLight ? "text-[#444444]" : "text-zinc-400"}`}>
              Thank you! Our academic counselor will contact you shortly with full brochure details.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className={`mt-6 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                isLight
                  ? "bg-[#F5F5F5] hover:bg-[#EDEDED] border-[rgba(231, 107, 36,0.12)] text-[#111111]"
                  : "bg-white/10 hover:bg-white/20 border-white/10 text-white"
              }`}
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
            className="space-y-3 relative z-10 text-left font-sans"
          >
            {/* Card Title */}
            <h3 className={`font-display italic font-black text-xl sm:text-2xl text-center tracking-wider uppercase mb-4 drop-shadow ${isLight ? "text-[#111111]" : "text-white"}`}>
              {title}
            </h3>

            {/* FULL NAME */}
            <div className="space-y-1">
              <label className={`text-[10px] font-extrabold uppercase tracking-widest block font-sans ${isLight ? "text-[#666666]" : "text-zinc-400"}`}>
                FULL NAME
              </label>
              <div className={`rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-all duration-200 border ${
                isLight
                  ? "bg-[#F5F5F5] hover:bg-[#EDEDED] focus-within:bg-[#EDEDED] border-[rgba(231, 107, 36,0.12)] focus-within:border-[#E76B24]"
                  : "bg-[#0A0A0A] hover:bg-[#121212] focus-within:bg-[#121212] border-[rgba(231, 107, 36,0.12)] focus-within:border-[#E76B24]"
              }`}>
                <User className="h-3.5 w-3.5 text-zinc-500 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Enter name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`text-xs font-medium bg-transparent w-full focus:outline-none ${
                    isLight ? "text-[#111111] placeholder:text-zinc-500" : "text-white placeholder:text-zinc-600"
                  }`}
                />
              </div>
            </div>

            {/* PHONE NUMBER */}
            <div className="space-y-1">
              <label className={`text-[10px] font-extrabold uppercase tracking-widest block font-sans ${isLight ? "text-[#666666]" : "text-zinc-400"}`}>
                PHONE NUMBER
              </label>
              <div className={`rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-all duration-200 border ${
                isLight
                  ? "bg-[#F5F5F5] hover:bg-[#EDEDED] focus-within:bg-[#EDEDED] border-[rgba(231, 107, 36,0.12)] focus-within:border-[#E76B24]"
                  : "bg-[#0A0A0A] hover:bg-[#121212] focus-within:bg-[#121212] border-[rgba(231, 107, 36,0.12)] focus-within:border-[#E76B24]"
              }`}>
                <Phone className="h-3.5 w-3.5 text-zinc-500 flex-shrink-0" />
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className={`text-xs font-medium bg-transparent w-full focus:outline-none ${
                    isLight ? "text-[#111111] placeholder:text-zinc-500" : "text-white placeholder:text-zinc-600"
                  }`}
                />
              </div>
            </div>

            {/* YOUR EMAIL */}
            <div className="space-y-1">
              <label className={`text-[10px] font-extrabold uppercase tracking-widest block font-sans ${isLight ? "text-[#666666]" : "text-zinc-400"}`}>
                YOUR EMAIL
              </label>
              <div className={`rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-all duration-200 border ${
                isLight
                  ? "bg-[#F5F5F5] hover:bg-[#EDEDED] focus-within:bg-[#EDEDED] border-[rgba(231, 107, 36,0.12)] focus-within:border-[#E76B24]"
                  : "bg-[#0A0A0A] hover:bg-[#121212] focus-within:bg-[#121212] border-[rgba(231, 107, 36,0.12)] focus-within:border-[#E76B24]"
              }`}>
                <Mail className="h-3.5 w-3.5 text-zinc-500 flex-shrink-0" />
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`text-xs font-medium bg-transparent w-full focus:outline-none ${
                    isLight ? "text-[#111111] placeholder:text-zinc-500" : "text-white placeholder:text-zinc-600"
                  }`}
                />
              </div>
            </div>

            {/* INTERESTED ON... */}
            <div className="space-y-1">
              <label className={`text-[10px] font-extrabold uppercase tracking-widest block font-sans ${isLight ? "text-[#666666]" : "text-zinc-400"}`}>
                INTERESTED ON...
              </label>
              <div className={`relative rounded-xl px-3.5 py-2.5 flex items-center gap-3 transition-all duration-200 border ${
                isLight
                  ? "bg-[#F5F5F5] hover:bg-[#EDEDED] focus-within:bg-[#EDEDED] border-[rgba(231, 107, 36,0.12)] focus-within:border-[#E76B24]"
                  : "bg-[#0A0A0A] hover:bg-[#121212] focus-within:bg-[#121212] border-[rgba(231, 107, 36,0.12)] focus-within:border-[#E76B24]"
              }`}>
                <BookOpen className="h-3.5 w-3.5 text-zinc-500 flex-shrink-0" />
                <select
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className={`text-xs font-medium bg-transparent w-full focus:outline-none appearance-none cursor-pointer pr-6 ${
                    isLight ? "text-[#111111]" : "text-white"
                  }`}
                >
                  <option value="" disabled className={isLight ? "bg-white text-zinc-400" : "bg-[#181818] text-zinc-500"}>Select Course</option>
                  {COURSES.map((courseOption, idx) => (
                    <option key={idx} value={courseOption} className={isLight ? "bg-white text-[#111111]" : "bg-[#181818] text-white"}>
                      {courseOption}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3.5 h-3.5 w-3.5 text-zinc-500 pointer-events-none" />
              </div>
            </div>

            {/* CLOUDFLARE TURNSTILE INTEGRATION BOX */}
            <div className="my-4">
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
                theme={isLight ? "light" : "dark"}
              />
            </div>

            {/* Checkbox agreement */}
            <label className="flex items-start space-x-2.5 cursor-pointer select-none pt-0.5">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5 rounded border-zinc-350 bg-white text-[#E76B24] focus:ring-[#E76B24] focus:ring-offset-0 focus:ring-1 h-3.5 w-3.5 cursor-pointer flex-shrink-0"
              />
              <span className={`text-[10px] font-medium leading-tight font-sans ${isLight ? "text-[#666666]" : "text-zinc-400"}`}>
                I agree to the Zica <a href="/terms-conditions" className="text-[#E76B24] hover:underline font-bold">Terms & Conditions</a> and <a href="/privacy-policy" className="text-[#E76B24] hover:underline font-bold">Privacy Policy</a>
              </span>
            </label>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#E76B24] hover:bg-[#C65516] text-white font-black text-sm uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_4px_12px_rgba(231, 107, 36,0.25)] hover:shadow-[0_6px_15px_rgba(231, 107, 36,0.45)] transform hover:scale-[1.02] cursor-pointer mt-4"
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
