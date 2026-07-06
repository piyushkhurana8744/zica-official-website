"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Target,
  Lightbulb,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  ChevronDown,
  User,
  Phone,
  Mail,
  BookOpen,
  Award,
  GraduationCap,
  Building2,
  Sparkles,
  Users,
  Monitor,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";
import BannerForm from "@/components/BannerForm";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.988 4.492-9.988 10 0 1.758.459 3.41 1.259 4.858l-1.283 4.792 4.906-1.288c1.409.767 3.01 1.206 4.71 1.206 5.507 0 9.989-4.492 9.989-10s-4.482-10-9.989-10zm.012 18.064c-1.576 0-3.08-.431-4.385-1.246l-.314-.188-2.906.762.775-2.894-.207-.329c-.896-1.427-1.371-3.084-1.371-4.789 0-4.996 4.072-9.058 9.079-9.058 5.006 0 9.078 4.062 9.078 9.058-.001 4.997-4.073 9.08-9.08 9.08zm4.97-6.84c-.272-.137-1.614-.797-1.863-.889-.25-.09-.432-.137-.613.137-.182.273-.705.889-.864 1.072-.159.182-.318.204-.59.068-.272-.137-1.15-.424-2.19-1.353-.809-.723-1.356-1.616-1.515-1.889-.159-.273-.017-.42.119-.556.123-.122.272-.319.409-.478.136-.159.182-.272.272-.454.09-.182.045-.341-.022-.477-.068-.137-.613-1.477-.84-2.023-.222-.534-.443-.46-.613-.469-.159-.009-.341-.009-.523-.009-.181 0-.477.068-.727.341-.25.272-.953.932-.953 2.273s.976 2.637 1.112 2.819c.137.182 1.92 2.932 4.653 4.113.65.28 1.157.447 1.553.573.656.208 1.253.179 1.725.109.526-.079 1.614-.659 1.841-1.295.227-.637.227-1.183.159-1.295-.069-.114-.25-.182-.522-.319z" />
    </svg>
  );
}

const COURSES = [
  "2D ANIMATION", "3D Animations", "Animation & Graphics", "Blender Mastery",
  "B.Voc Degree", "Digital Audio And Video Editing", "Digital Marketing",
  "Digital Photography", "Fashion Design", "Game Arts & Design", "GRAPHIC DESIGN",
  "Interior Design", "MOTION GRAPHICS", "UI & UX", "Unreal Engine",
  "Visual Effects (VFX)", "Web Design",
];

const CAMPUS_GALLERY = [
  "/images/infrastructure/zica_institue_1.jpg",
  "/images/infrastructure/zica_reception.jpg",
  "/images/infrastructure/classroom_1.jpg",
  "/images/infrastructure/classroom_3.jpg",
  "/images/infrastructure/classroom_4.jpg",
  "/images/infrastructure/classroom_5.jpg",
  "/images/infrastructure/classroom_6.jpg",
  "/images/infrastructure/classroom_7.jpg",
  "/images/infrastructure/zica_reception_2.jpg",
  "/images/infrastructure/zica_reception_3.jpg",
];

const STATS = [
  { value: "30+", label: "Years of Legacy", icon: Star },
  { value: "50+", label: "Centers Pan India", icon: Building2 },
  { value: "10K+", label: "Students Trained", icon: Users },
  { value: "95%", label: "Placement Rate", icon: GraduationCap },
];

const WHY_CHOOSE = [
  { icon: Award, color: "from-[#FF1F3D] to-rose-600", title: "30 Years of Legacy", desc: "Over 30 years of excellence in media education, training thousands of creative professionals across India." },
  { icon: Users, color: "from-violet-500 to-purple-600", title: "Expert Mentors", desc: "Learn directly from industry-certified veterans with extensive animation, VFX and design portfolios." },
  { icon: Building2, color: "from-emerald-500 to-green-600", title: "Zee Group Network", desc: "Leverage connections with India\u2019s media powerhouse to unlock premium job placements and opportunities." },
  { icon: Target, color: "from-amber-500 to-orange-600", title: "100% Placement Help", desc: "Dedicated placement cell tracking your milestones to place you in premier design agencies worldwide." },
];

export default function AboutUsPage() {
  const [formData, setFormData] = useState({ name: "", mobile: "", email: "", course: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCampusIndex, setSelectedCampusIndex] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.email || !formData.course) {
      alert("Please fill in all details.");
      return;
    }
    setIsSubmitting(true);
    try {
      const { submitEnquiry } = await import("@/utils/formSubmit");
      await submitEnquiry(formData);
    } catch (err) {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ScrollProgressBar />
      <MouseGlow />
      <Navbar />

      <main className="flex flex-col min-h-screen bg-[#020617] text-white font-sans overflow-hidden">

        {/* ═══════════════════════ HERO HEADER ═══════════════════════ */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1E1B4B] via-[#0B0F19] to-[#020617] overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen select-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF1F3D" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="40" cy="0" r="1.5" fill="#C084FC" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#aboutGrid)" />
            </svg>
          </div>
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 w-[500px] h-[250px] rounded-full bg-[#FF1F3D]/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase mb-4"
            >
              About <span className="text-[#FF1F3D]">Us</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wide uppercase"
            >
              <Link href="/" className="text-[#FF1F3D] hover:text-red-500 transition-colors duration-300">Homepage</Link>
              <span className="text-zinc-400">/</span>
              <span className="text-zinc-200">About Us</span>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] sm:h-[120px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,18,83.13,26.11,146.12,44.3,219.09,68.21,321.39,56.44Z" fill="#020617" />
            </svg>
          </div>
        </section>

        {/* ═══════════════════════ ABOUT ZICA INTRO ═══════════════════════ */}
        <section className="relative pt-4 pb-20 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left: Floating sidebar + Banner Form */}
              <div className="lg:col-span-5 flex flex-col md:flex-row items-start gap-6 relative">
                <div className="flex flex-row md:flex-col items-center gap-4 self-stretch md:self-start z-20">
                  <Link href="/" className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-[#FF1F3D]/50 hover:bg-[#FF1F3D]/10 text-white transition-all duration-300 group shadow-md">
                    <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                  <div className="flex md:flex-col items-stretch rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#090D16]">
                    <div className="flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white px-3.5 py-5 transition-colors cursor-pointer select-none">
                      <div className="flex items-center gap-2 whitespace-nowrap text-xs font-bold [writing-mode:vertical-lr] rotate-180 uppercase tracking-widest">
                        <Mail className="h-3.5 w-3.5 rotate-90" />
                        <span>Contact Us</span>
                      </div>
                    </div>
                    <a href="https://wa.me/917900400300" target="_blank" rel="noopener noreferrer" className="h-12 w-12 flex items-center justify-center bg-[#22C55E] hover:bg-[#1eab50] text-white transition-colors cursor-pointer" title="Chat on WhatsApp">
                      <WhatsAppIcon className="h-6 w-6" />
                    </a>
                    <a href="tel:+917900400300" className="h-12 w-12 flex items-center justify-center bg-[#FF1F3D] hover:bg-red-700 text-white transition-colors cursor-pointer" title="Call Us">
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="flex-1 flex justify-center md:justify-start w-full">
                  <BannerForm title="ABOUT US ENQUIRY" buttonText="ENQUIRE NOW" />
                </div>
              </div>

              {/* Right: Narrative */}
              <div className="lg:col-span-7 flex flex-col text-left">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xs font-bold tracking-[0.25em] text-[#FF1F3D] uppercase mb-4"
                >
                  Who We Are
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight mb-6 leading-tight"
                >
                  India&apos;s Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F3D] to-orange-500">Creative Arts</span> Institute
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-5"
                >
                  ZICA is part of the Zee Group, India&apos;s Largest TV Network which comprises of Channels like Zee TV, Zee Cinema, Zee News, &amp; TV, &amp; Pictures etc. ZICA as a brand started its journey 30 years back in Mumbai.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light mb-8"
                >
                  This institute is the brainchild of the Chairman of Zee Group Shri Subhash Chandra ji who is also known as the Media Baron of India. ZICA&apos;s mission is to provide world-class creative education, producing industry-ready professionals who can shape the future of media and entertainment.
                </motion.p>

                {/* Quick Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {STATS.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 text-center hover:border-[#FF1F3D]/30 transition-all duration-300 group"
                    >
                      <stat.icon className="h-5 w-5 text-[#FF1F3D] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="font-display font-black text-2xl text-white mb-1">{stat.value}</div>
                      <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-semibold">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════ TARGET / VISION / MISSION ═══════════════════════ */}
        <section className="relative py-24 bg-[#000000] overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.25em] text-[#FF1F3D] uppercase mb-3 block">Our Foundation</span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
                What <span className="text-[#FF1F3D]">Drives</span> Us
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Target, color: "amber", gradient: "from-amber-500/20 to-amber-600/5", border: "hover:border-amber-500/40", title: "Our Target", desc: "To nurture creative minds and transform them into highly skilled digital artists capable of leading and reshaping the global media, design, and entertainment industries." },
                { icon: Eye, color: "violet", gradient: "from-violet-500/20 to-violet-600/5", border: "hover:border-violet-500/40", title: "Our Vision", desc: "To become the global benchmark for creative education by integrating traditional artistic fundamentals with state-of-the-art software technology and industry pipelines." },
                { icon: Lightbulb, color: "rose", gradient: "from-rose-500/20 to-rose-600/5", border: "hover:border-rose-500/40", title: "Our Mission", desc: "To provide state-of-the-art infrastructure, hands-on production experiences, and world-class guidance from industry experts to ensure ZICA graduates are fully industry-ready." },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative bg-gradient-to-b ${card.gradient} p-8 rounded-3xl border border-white/[0.06] ${card.border} transition-all duration-500 text-left group overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                  <div className={`h-14 w-14 rounded-2xl bg-${card.color}-500/10 flex items-center justify-center text-${card.color}-500 mb-6 ring-1 ring-${card.color}-500/20 group-hover:scale-110 transition-transform duration-300`}>
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">{card.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light relative z-10">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ INFRASTRUCTURE GALLERY ═══════════════════════ */}
        <section className="relative py-24 bg-[#020617] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="max-w-3xl mx-auto mb-16">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF1F3D] uppercase mb-3 block">ZICA Environment</span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4">
                Our <span className="text-[#FF1F3D]">Infrastructure</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Take a virtual tour of our premium classrooms, animation workstations, sound studios, and creative spaces built to mirror real-world professional design agencies.
              </p>
            </div>

            {/* Masonry-style Gallery Grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {CAMPUS_GALLERY.map((imagePath, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setSelectedCampusIndex(idx)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className="relative break-inside-avoid rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF1F3D]/50 shadow-md hover:shadow-[0_8px_30px_rgba(255,31,61,0.15)] cursor-pointer group transition-all duration-300"
                >
                  <img
                    src={imagePath}
                    alt={`ZICA Campus Infrastructure ${idx + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex items-center gap-2">
                      <Camera className="h-4 w-4 text-white" />
                      <span className="text-white text-xs font-semibold">View Full Size</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ WHY CHOOSE ZICA ═══════════════════════ */}
        <section className="relative py-24 bg-[#000000] overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF1F3D]/3 rounded-full blur-[160px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.25em] text-[#FF1F3D] uppercase mb-3 block">Our Edge</span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4">
                Why Choose <span className="text-[#FF1F3D]">ZICA</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
                With a robust legacy of over three decades, we provide unmatched training with modern facilities to empower your creative career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_CHOOSE.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white/[0.02] border border-white/[0.06] rounded-3xl p-7 hover:border-white/15 transition-all duration-500 group text-left relative overflow-hidden"
                >
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ ENQUIRY FORM + STILL CONFUSED ═══════════════════════ */}
        <section className="relative py-28 bg-[#020617] border-t border-white/5">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF1F3D]/3 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Get in Touch */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
              <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-8 leading-tight"
                >
                  Get in touch <br />
                  <span className="text-[#FF1F3D]">With us</span>
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full max-w-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white p-4"
                >
                  <img src="/images/counselling_cartoon.png" alt="Support Counselor" className="w-full h-auto object-contain rounded-2xl" />
                </motion.div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <BannerForm title="ENQUIRE NOW" buttonText="SUBMIT ENQUIRY" />
              </div>
            </div>

            {/* Still Confused */}
            <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-2 leading-none">
                  Still <span className="text-[#FF1F3D]">Confused!!!</span>
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base font-light tracking-wide">Get Instant Clarity</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="tel:+917900400300" className="px-8 py-3.5 bg-[#FF1F3D] hover:bg-red-700 text-white font-bold text-sm tracking-wide rounded-full text-center transition-all duration-300 shadow-lg cursor-pointer">
                  Talk to Counsellor
                </a>
                <a href="/ZICA-BROCHURE.pdf" download className="px-8 py-3.5 bg-[#FF1F3D] hover:bg-red-700 text-white font-bold text-sm tracking-wide rounded-full text-center transition-all duration-300 shadow-lg cursor-pointer">
                  Download Brochure
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* ═══════════════════════ LIGHTBOX ═══════════════════════ */}
      <AnimatePresence>
        {selectedCampusIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10 select-none"
            onClick={() => setSelectedCampusIndex(null)}
          >
            <button onClick={() => setSelectedCampusIndex(null)} className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-white/25 text-white transition-all duration-300 z-50 cursor-pointer">
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedCampusIndex((prev) => prev !== null ? (prev - 1 + CAMPUS_GALLERY.length) % CAMPUS_GALLERY.length : null); }}
              className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-white/25 text-white transition-all duration-300 z-50 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedCampusIndex((prev) => prev !== null ? (prev + 1) % CAMPUS_GALLERY.length : null); }}
              className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/15 hover:bg-white/15 hover:border-white/25 text-white transition-all duration-300 z-50 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.img
              key={selectedCampusIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={CAMPUS_GALLERY[selectedCampusIndex]}
              alt="Campus Gallery Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}