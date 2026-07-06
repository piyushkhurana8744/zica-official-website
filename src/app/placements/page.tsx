"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Search, 
  ChevronDown, 
  ArrowRight,
  Sparkles,
  Briefcase,
  ChevronRight,
  User,
  Phone,
  Mail,
  BookOpen
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";
import BannerForm from "@/components/BannerForm";

// Custom SVG WhatsApp icon for accurate branding
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.988 4.492-9.988 10 0 1.758.459 3.41 1.259 4.858l-1.283 4.792 4.906-1.288c1.409.767 3.01 1.206 4.71 1.206 5.507 0 9.989-4.492 9.989-10s-4.482-10-9.989-10zm.012 18.064c-1.576 0-3.08-.431-4.385-1.246l-.314-.188-2.906.762.775-2.894-.207-.329c-.896-1.427-1.371-3.084-1.371-4.789 0-4.996 4.072-9.058 9.079-9.058 5.006 0 9.078 4.062 9.078 9.058-.001 4.997-4.073 9.08-9.08 9.08zm4.97-6.84c-.272-.137-1.614-.797-1.863-.889-.25-.09-.432-.137-.613.137-.182.273-.705.889-.864 1.072-.159.182-.318.204-.59.068-.272-.137-1.15-.424-2.19-1.353-.809-.723-1.356-1.616-1.515-1.889-.159-.273-.017-.42.119-.556.123-.122.272-.319.409-.478.136-.159.182-.272.272-.454.09-.182.045-.341-.022-.477-.068-.137-.613-1.477-.84-2.023-.222-.534-.443-.46-.613-.469-.159-.009-.341-.009-.523-.009-.181 0-.477.068-.727.341-.25.272-.953.932-.953 2.273s.976 2.637 1.112 2.819c.137.182 1.92 2.932 4.653 4.113.65.28 1.157.447 1.553.573.656.208 1.253.179 1.725.109.526-.079 1.614-.659 1.841-1.295.227-.637.227-1.183.159-1.295-.069-.114-.25-.182-.522-.319z" />
    </svg>
  );
}

// 6 Student Testimonials matching original state
const TESTIMONIALS = [
  {
    name: "SHANEL MORAES",
    role: "",
    quote: "ZICA has been an amazing place to be at; the teachers, as well as the staff have been very helpful since the beginning. Throughout the years I spent here, I have grown abundantly in knowledge and learnt various techniques used in the actual Animation field.",
    image: "/Trusted by/SHANEL MORAES.jpg",
  },
  {
    name: "SUMIT BADONIYA",
    role: "NY VFXWAALA AS 3D ARTIST",
    quote: "I would like to thank ZICA for providing quality education and guidance. Their focus on each student truly makes a difference. Specialized faculties helped us grow in our chosen creative fields. Their support and expertise played a big role in our development.",
    image: "/Trusted by/SUMIT BADONIYA.jpg",
  },
  {
    name: "AISHWARYA PILLAY",
    role: "NY VFXWAALA AS 3D ARTIST",
    quote: "ZICA has been a great place to learn; the faculty, as well as the staff has been very helpful since the beginning. Everyone at ZICA has been very supportive to me. Throughout the years I spent at ZICA, I've have grown abundantly in knowledge and learnt various techniques.",
    image: "/Trusted by/AISHWARYA PILLAY.jpg",
  },
  {
    name: "BHARGAVA A J",
    role: "MPC AS MODELING & TEXTURING ARTIST",
    quote: "I had a great experience at ZICA, where I explored the creative industry. The supportive environment helped me build skills and confidence. The training I received played a key role in shaping my career. I'm thankful for the guidance that helped me reach my goals.",
    image: "/Trusted by/BHARGAVA A J.jpg",
  },
  {
    name: "CHINMAYA PRADHAN",
    role: "NY VFXWAALA AS 3D ARTIST",
    quote: "I had a great experience at ZICA, where I explored the creative industry. The supportive environment helped me grow and gain confidence. Thank you ZICA BBSR and all the faculties for your hard work. I'm truly grateful for your support and guidance.",
    image: "/Trusted by/CHINMAYA PRADHAN.jpg",
  },
  {
    name: "VINI SHAH",
    role: "3D Animation | student",
    quote: "This course is amazing in its current form, offering so much to learn. I'm truly impressed by the quality and creativity throughout. I can't imagine how cool it will be once the entire course is completed. Looking forward to experiencing the full journey ahead.",
    image: "/Trusted by/VINI SHAH.jpg",
  },
];

// Placed Students Grid (33 items from mockups) — all use comnpany_11.jpg placeholder logo
const PLACED_STUDENTS = [
  { name: "Vikash Kaushal", companyLogo: "/comnpany_11.jpg" },
  { name: "Nachiket Jain", companyLogo: "/comnpany_11.jpg" },
  { name: "Nikhil Tiwari", companyLogo: "/comnpany_11.jpg" },
  { name: "Karunakar Ojha", companyLogo: "/comnpany_11.jpg" },
  { name: "Shruti Valam", companyLogo: "/comnpany_11.jpg" },
  { name: "Arti Lakheta", companyLogo: "/comnpany_11.jpg" },
  { name: "Kirk Pereira", companyLogo: "/comnpany_11.jpg" },
  { name: "Shivali Devalkar", companyLogo: "/comnpany_11.jpg" },
  { name: "Bhakti Dhamapurkar", companyLogo: "/comnpany_11.jpg" },
  { name: "Harshada Gavitre", companyLogo: "/comnpany_11.jpg" },
  { name: "Shruti Valam", companyLogo: "/comnpany_11.jpg" },
  { name: "Rohit Sharma", companyLogo: "/comnpany_11.jpg" },
  { name: "Sunita Pradhan", companyLogo: "/comnpany_11.jpg" },
  { name: "Dhriti Moity", companyLogo: "/comnpany_11.jpg" },
  { name: "Rohan Patel", companyLogo: "/comnpany_11.jpg" },
  { name: "Drishti Gupta", companyLogo: "/comnpany_11.jpg" },
  { name: "Jyoti Prakash Jana", companyLogo: "/comnpany_11.jpg" },
  { name: "Jil Patel", companyLogo: "/comnpany_11.jpg" },
  { name: "Krios Digital", companyLogo: "/comnpany_11.jpg" },
  { name: "Akhil Soni", companyLogo: "/comnpany_11.jpg" },
  { name: "Biplab Tanti", companyLogo: "/comnpany_11.jpg" },
  { name: "Prashanta Mohanty", companyLogo: "/comnpany_11.jpg" },
  { name: "Sachin Garg", companyLogo: "/comnpany_11.jpg" },
  { name: "Ramandeep Sharma", companyLogo: "/comnpany_11.jpg" },
  { name: "Andre D'souza", companyLogo: "/comnpany_11.jpg" },
  { name: "Raj Surve", companyLogo: "/comnpany_11.jpg" },
  { name: "Sumit Shrimali", companyLogo: "/comnpany_11.jpg" },
  { name: "Ashish Kantharia", companyLogo: "/comnpany_11.jpg" },
  { name: "Mohip Ghosh", companyLogo: "/comnpany_11.jpg" },
  { name: "Hiren Achrya", companyLogo: "/comnpany_11.jpg" },
  { name: "Sameer Nautiyal", companyLogo: "/comnpany_11.jpg" },
  { name: "Ajit Pawar", companyLogo: "/comnpany_11.jpg" },
  { name: "Chahak Dalal", companyLogo: "/comnpany_11.jpg" },
];

// Company Logo Assets (company_1.png to company_9.png and comapny_10.png)
const COMPANY_LOGOS = [
  "/company_1.png",
  "/company_2.png",
  "/company_3.png",
  "/company_4.png",
  "/company_5.png",
  "/company_6.png",
  "/company_7.png",
  "/company_8.png",
  "/company_9.png",
  "/comapny_10.png",
];

const COURSES = [
  "Visual Effects (VFX)",
  "Game Arts & Design",
  "Digital Photography",
  "Interior Design",
  "Digital Marketing",
  "Web Design",
  "Fashion Design",
  "Animation & Graphics",
];

export default function PlacementsPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredPlacements = PLACED_STUDENTS.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <ScrollProgressBar />
      <MouseGlow />
      <Navbar />

      <main className="flex flex-col min-h-screen bg-[#020617] text-white font-sans overflow-hidden">
        
        {/* Header Hero Section */}
        <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1E1B4B] via-[#0B0F19] to-[#020617] overflow-hidden flex flex-col items-center justify-center">
          
          {/* Neon Grid Mesh Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen select-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF1F3D" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="40" cy="0" r="1.5" fill="#C084FC" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Ambient Glowing Blobs */}
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 w-[500px] h-[250px] rounded-full bg-[#FF1F3D]/10 blur-[100px] pointer-events-none" />

          {/* Title & Breadcrumbs */}
          <div className="relative z-10 text-center flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight uppercase mb-4"
            >
              Our <span className="text-[#FF1F3D]">Placements</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wide uppercase"
            >
              <Link href="/" className="text-[#FF1F3D] hover:text-red-500 transition-colors duration-300">
                Homepage
              </Link>
              <span className="text-zinc-400">/</span>
              <span className="text-zinc-200">Placements</span>
            </motion.div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] sm:h-[120px]">
              <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,18,83.13,26.11,146.12,44.3,219.09,68.21,321.39,56.44Z" 
                fill="#020617"
              />
            </svg>
          </div>
        </section>

        {/* Hero Banner Grid Section */}
        <section className="relative pt-4 pb-16 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading and Floating Controls */}
              <div className="lg:col-span-7 flex flex-col md:flex-row items-start gap-6 relative">
                
                {/* Floating Contact Block */}
                <div className="flex flex-row md:flex-col items-center gap-4 self-stretch md:self-start z-20">
                  <Link 
                    href="/" 
                    className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-[#FF1F3D]/50 hover:bg-[#FF1F3D]/10 text-white transition-all duration-300 group shadow-md"
                  >
                    <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                  
                  <div className="flex md:flex-col items-stretch rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#090D16]">
                    <div className="flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white px-3.5 py-5 transition-colors cursor-pointer select-none">
                      <div className="flex items-center gap-2 whitespace-nowrap text-xs font-bold [writing-mode:vertical-lr] rotate-180 uppercase tracking-widest">
                        <Mail className="h-3.5 w-3.5 rotate-90" />
                        <span>Enquire Now</span>
                      </div>
                    </div>

                    <a 
                      href="https://wa.me/917900400300"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 flex items-center justify-center bg-[#22C55E] hover:bg-[#1eab50] text-white transition-colors cursor-pointer"
                      title="Chat on WhatsApp"
                    >
                      <WhatsAppIcon className="h-6 w-6" />
                    </a>

                    <a 
                      href="tel:+917900400300"
                      className="h-12 w-12 flex items-center justify-center bg-[#FF1F3D] hover:bg-red-655 text-white transition-colors cursor-pointer"
                      title="Call Us"
                    >
                      <Phone className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Banner Titles */}
                <div className="flex-1 flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#FF1F3D] uppercase mb-3">
                    Student Placements
                  </span>
                  
                  <motion.h2 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-display font-black text-4xl sm:text-6xl text-white mb-6 tracking-tight leading-tight"
                  >
                    A Platform To Recognise <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FF1F3D] to-red-600">
                      The Best Talent
                    </span>
                  </motion.h2>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light mb-6"
                  >
                    At Zee Institute of Creative Art (ZICA), our students undergo high-impact, industry-focused training that bridges traditional art principles with cutting-edge digital production pipelines. 
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light"
                  >
                    Through regular feedback sessions, professional portfolios, and dedicated placement cells, we empower our students to get recruited by premier production houses and studios across the globe.
                  </motion.p>
                </div>

              </div>

              {/* Right Column: Hero Banner Form */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                <BannerForm title="PLACEMENT ENQUIRY" buttonText="SUBMIT" />
              </div>

            </div>
          </div>
        </section>

        {/* ZICA's Placement Cell Grid Section */}
        <section id="placement-grid" className="relative py-24 bg-[#0B0F19] border-t border-b border-white/5">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF1F3D]/2 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            
            {/* Section Header */}
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mb-4 text-center">
                ZICA&apos;s <span className="text-[#FF1F3D]">Placement Cell</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light mb-8">
                Discover Our Programs - Animation, Visual design, Gaming, Interior Design, Fashion Design, Digital Marketing, Web design and much more. <br />
                <span className="text-[#FF1F3D] font-bold">Your canvas is ready—start creating your masterpiece today!</span>
              </p>

              {/* Interactive Search Bar */}
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search placed students by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#020617]/90 border border-white/10 rounded-full py-3.5 pl-12 pr-6 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#FF1F3D] focus:ring-1 focus:ring-[#FF1F3D] transition-all duration-300 shadow-xl"
                />
                <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              </div>
            </div>

            {/* Placements Cards Grid */}
            <AnimatePresence mode="popLayout">
              {filteredPlacements.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto"
                >
                  {filteredPlacements.map((student, idx) => (
                    <motion.div
                      key={`${student.name}-${idx}`}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      {/* Logo Square Container */}
                      <div className="w-full aspect-[4/3] bg-white rounded-2xl flex items-center justify-center p-6 sm:p-8 shadow-lg hover:shadow-2xl border border-white/10 hover:border-[#FF1F3D]/30 transition-all duration-300 transform hover:scale-[1.03]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={student.companyLogo} 
                          alt={`${student.name}'s hiring company`} 
                          className="max-w-full max-h-full object-contain filter group-hover:brightness-105 transition-all duration-300"
                        />
                      </div>

                      {/* Placed Student Name */}
                      <div className="mt-4 text-white font-bold text-base sm:text-lg tracking-wide group-hover:text-[#FF1F3D] transition-colors duration-300">
                        {student.name}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mt-0.5">
                        ZICA Placed Alumnus
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-zinc-500 py-16 text-lg font-light"
                >
                  No placed student found matching &ldquo;{searchQuery}&rdquo;
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </section>

        {/* New Section: Few Companies Where ZICA Students Have Been Hired */}
        <section className="relative py-24 bg-[#020617] border-b border-white/5 overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.25em] text-[#FF1F3D] uppercase mb-3 block"
            >
              Hiring Partners
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4 text-center"
            >
              Few Companies Where <span className="text-[#FF1F3D]">ZICA</span> <br />
              <span className="text-[#FF1F3D]">Students</span> Have Been Hired
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-sm sm:text-base font-light mb-16 max-w-3xl leading-relaxed text-center mx-auto"
            >
              We, at ZICA, provide our students with an appropriate environment to develop their skills which meet industry requirements. Our students have been placed across various levels in top most animation &amp; production companies.
            </motion.p>

            {/* Infinite Scrolling Marquee */}
            <div className="relative">
              {/* Gradient edge fades */}
              <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

              {/* Row 1 — scrolls left */}
              <div className="mb-6 overflow-hidden group/marquee">
                <div className="flex w-max animate-[marqueeLeft_30s_linear_infinite] group-hover/marquee:[animation-play-state:paused]">
                  {[...COMPANY_LOGOS, ...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, idx) => (
                    <div
                      key={`r1-${idx}`}
                      className="mx-3 flex-shrink-0 w-40 sm:w-48 h-24 sm:h-28 bg-white rounded-2xl flex items-center justify-center p-5 sm:p-6 shadow-lg border border-zinc-200/50 hover:shadow-xl hover:border-[#FF1F3D]/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <img src={logo} alt="Hiring Company Logo" className="max-w-full max-h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 — scrolls right */}
              <div className="overflow-hidden group/marquee2">
                <div className="flex w-max animate-[marqueeRight_35s_linear_infinite] group-hover/marquee2:[animation-play-state:paused]">
                  {[...COMPANY_LOGOS.slice().reverse(), ...COMPANY_LOGOS.slice().reverse(), ...COMPANY_LOGOS.slice().reverse()].map((logo, idx) => (
                    <div
                      key={`r2-${idx}`}
                      className="mx-3 flex-shrink-0 w-40 sm:w-48 h-24 sm:h-28 bg-white rounded-2xl flex items-center justify-center p-5 sm:p-6 shadow-lg border border-zinc-200/50 hover:shadow-xl hover:border-[#FF1F3D]/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <img src={logo} alt="Hiring Company Logo" className="max-w-full max-h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Let's Hear It From Our Students Testimonials Section */}
        <section id="testimonials" className="relative py-28 bg-[#020617] border-b border-white/5">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF1F3D]/2 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Header Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
              
              {/* Left Column: Title */}
              <div className="lg:col-span-6 text-left flex flex-col justify-end">
                <motion.h2 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight"
                >
                  Let&apos;s Hear It From <br />
                  <span className="text-[#FF1F3D]">Our Students</span>
                </motion.h2>
              </div>

              {/* Right Column: Giant quotation and Description */}
              <div className="lg:col-span-6 flex flex-col md:flex-row items-center gap-6 text-left relative">
                {/* Big Orange/Red Gradient Quote Mark */}
                <div className="text-8xl sm:text-[10rem] font-serif font-extrabold select-none leading-none text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-[#FF1F3D] absolute -left-12 -top-12 opacity-25">
                  &ldquo;
                </div>
                <div className="relative z-10 pl-6 border-l border-white/10">
                  <h4 className="font-display font-bold text-lg text-white mb-2 uppercase tracking-wide">
                    The Right Place to Achieve Your Goals
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                    Zee Institute of Creative Art (ZICA) provides a highly supportive, creative ecosystem with industry-experienced faculty guiding each student through their specialized learning curve.
                  </p>
                </div>
              </div>

            </div>

            {/* Sub-caption */}
            <p className="text-zinc-400 text-sm sm:text-base font-light mb-16 max-w-3xl leading-relaxed text-left">
              Hear How ZICA&apos;s Industry-Focused Training and Supportive Environment Helped Students Achieve Their Dreams.
            </p>

            {/* Testimonials 6-Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.06 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center group bg-[#090D16]/40 p-8 rounded-[24px] border border-white/5 hover:border-[#FF1F3D]/20 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {/* Avatar Container with Red Border */}
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#FF1F3D] mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h4 className="font-display font-bold text-white tracking-wide text-base sm:text-lg mb-1 uppercase">
                    {t.name}
                  </h4>

                  {/* Role / Subtext */}
                  {t.role && (
                    <p className="text-[#FF1F3D] font-bold text-xs sm:text-sm tracking-wider mb-4 uppercase">
                      {t.role}
                    </p>
                  )}
                  {!t.role && <div className="h-4 mb-4" />}

                  {/* Quote Text */}
                  <p className="text-zinc-350 text-xs sm:text-sm leading-relaxed font-light px-3 sm:px-4">
                    {t.quote}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Lead Capture Enquiry Form */}
        <section id="placement-enquiry" className="relative py-28 bg-[#0B0F19] border-b border-white/10">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF1F3D]/3 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column Text & Graphic */}
              <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-8"
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/counselling_cartoon.png"
                    alt="Support Counselor Cartoon"
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </motion.div>
              </div>

              {/* Right Column Form Card (White background card matching mockup exactly) */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <BannerForm title="PLACEMENT ENQUIRY" buttonText="SUBMIT ENQUIRY" />
              </div>

            </div>
          </div>
        </section>

        {/* Banner Section: Still Confused!!! */}
        <section className="relative py-16 bg-[#020617] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight uppercase">
                Still <span className="text-[#FF1F3D]">Confused!!!</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base font-light mt-2 uppercase tracking-widest">
                Get Instant Clarity
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full sm:w-auto md:w-[240px]">
              <a 
                href="#placement-enquiry"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("placement-enquiry");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3.5 bg-[#FF1F3D] text-white text-xs font-extrabold uppercase tracking-widest rounded-full text-center hover:bg-red-600 transition-colors shadow-lg hover:shadow-[0_4px_15px_rgba(255,31,61,0.3)] cursor-pointer"
              >
                Talk to Counsellor
              </a>
              <a 
                href="tel:+917900400300"
                className="px-6 py-3.5 bg-[#FF1F3D] text-white text-xs font-extrabold uppercase tracking-widest rounded-full text-center hover:bg-red-600 transition-colors shadow-lg hover:shadow-[0_4px_15px_rgba(255,31,61,0.3)] cursor-pointer"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}