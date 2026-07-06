"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Footer from "@/components/Footer";
import BannerForm from "@/components/BannerForm";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MODULES = [
  {
    title: "Module 01: Duration: 6 Months",
    topics: [
      "Drawing + geometry",
      "Basic design – elements and principals of design + colour theory",
      "Fashion model drawing + illustration",
      "Design project – theme concept mood board",
      "Basic pattern making",
      "Basic garment construction",
      "History of art & design -Indian and Western",
      "Introduction to embroideries – Basic Embroidery and Indian Embroidery",
      "Textile Science 1 – Fiber to Fabric",
    ],
  },
];

export default function FashionDesignPage() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    course: "Fashion Design",
  });

  const toggleModule = (idx: number) => {
    setOpenModule(openModule === idx ? null : idx);
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
    <>
      <ScrollProgressBar />
      <MouseGlow />
      <Navbar />

      <main className="flex flex-col min-h-screen pt-20 bg-[#050505] text-white font-sans">
        
        {/* Cinematic Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/70" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-left drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-semibold mb-4 block">
                  COURSE DETAILS
                </span>
                <h1 className="font-display font-bold text-4xl sm:text-6xl tracking-tight leading-tight mb-8">
                  Fashion <span className="text-[#BE1E2E]">Design Courses at ZICA Pitampura</span>
                </h1>
                <p className="text-zinc-300 text-sm sm:text-lg leading-relaxed font-light italic">
                  &ldquo;Explore the World of Fashion Design through Practical Learning, Industry Insights, and Cutting-Edge Tools, Setting You Up for a Successful Career in the Fashion World.&rdquo;
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                <BannerForm title="COURSE ENQUIRY" buttonText="SUBMIT ENQUIRY" defaultCourse="Fashion Design" />
              </div>
            </div>
          </div>
        </section>

        {/* Course Highlights Section */}
        <section className="py-24 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Column: Bullet points */}
              <div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8 tracking-tight leading-tight">
                  Course <span className="text-[#BE1E2E]">Highlights:</span>
                </h2>
                <ul className="space-y-4 text-zinc-300 text-sm sm:text-base font-light">
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    The program covers a broad spectrum of topics, including drawing, design principles, garment construction, textiles, CAD software, and fashion marketing.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Students have the opportunity to apply their knowledge through hands-on design projects, draping, pattern making, and garment construction, allowing them to develop practical design skills.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    The curriculum includes modules on fashion forecasting, merchandising, export-import business, and quality control, preparing students to understand and navigate the real-world challenges of the fashion industry.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    Students are equipped with essential digital design skills through training through industry standard software, which are vital for contemporary fashion design and presentation.
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                    The program emphasizes portfolio development, enabling students to showcase their work and secure opportunities in the fashion industry, whether in design, styling, photography, or other related fields.
                  </li>
                </ul>
              </div>

              {/* Right Column: 3 overlapping rounded rectangular images */}
              <div className="relative w-full h-[400px]">
                {/* Image 1 (Top Left) */}
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 30, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-0 left-0 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400&auto=format&fit=crop"
                    alt="Course Highlight Item 1"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Image 2 (Bottom Left) */}
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 30, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute bottom-0 left-4 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400&auto=format&fit=crop"
                    alt="Course Highlight Item 2"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Image 3 (Right) */}
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 30, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-1/2 -translate-y-1/2 right-0 w-[45%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=400&auto=format&fit=crop"
                    alt="Course Highlight Item 3"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

            </div>

            {/* Bottom Header details */}
            <div className="text-center mt-20">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                PDP In Fashion Design
              </h3>
              <p className="text-[#BE1E2E] font-bold text-xl sm:text-2xl mt-2">
                (24 Months)
              </p>
            </div>
          </div>
        </section>

        {/* Learn From Professionals & Enquiry Form */}
        <section className="py-24 border-b border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Professionals Info & Highlights */}
              <div className="col-span-1 lg:col-span-7 flex flex-col">
                <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 tracking-tight leading-tight">
                  Learn From <span className="text-[#BE1E2E]">Professionals</span>
                </h2>
                
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-4">
                  This in-depth degree program offers extensive training in art, design, and digital media. Students gain hands-on experience in illustration, 3D modeling, rigging, animation, dynamics, and advanced visual effects. Using industry-standard software like Maya, ZBrush, Houdini, and others, the curriculum prepares students with the creative and technical skills needed to thrive in the fast-paced world of digital media and visual effects production.
                </p>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                  Fashion design is the art of creating clothing and accessories that blend design, aesthetics, and natural beauty. It is shaped by cultural and social influences, evolving over time and across different regions. Fashion designers approach their craft in various ways, developing clothing and accessories by anticipating and responding to changing consumer preferences. Designers research emerging trends and reinterpret them for their audience, working with a broad range of materials, colors, patterns, and styles. While everyday clothing typically follows conventional styles, unique and bold designs are often sought for special occasions, such as evening wear or party dresses.
                </p>

                {/* Subsections columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="font-display font-bold text-lg mb-3">
                      Become a <span className="text-[#BE1E2E]">Professional Artist</span>
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      Becoming a professional fashion designer requires a blend of creativity, technical expertise, and an understanding of industry trends. Begin by mastering the fundamentals of drawing, design principles, and garment construction. Learn to use industry-standard software for digital design and gain practical experience through projects and internships. Build a compelling portfolio that highlights your unique style and adaptability. Engage with the fashion community and stay informed about emerging trends. With dedication and persistence, you can build a successful career in fashion design, expressing your artistic vision through clothing and making your mark in the dynamic world of fashion.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-3">
                      Be Industry <span className="text-[#BE1E2E]">Ready</span>
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      In today&apos;s ever-evolving fashion industry, designers have a wide range of career opportunities. They can work with renowned fashion houses, launch their own labels, or pursue freelance projects. Beyond traditional roles, fashion designers also explore careers in costume design, fashion journalism, and styling for film, television, and advertising. The growth of e-commerce and social media has unlocked new possibilities in online retail and personal branding. Additionally, emerging fields like sustainable fashion and tech-integrated wearables present innovative and promising career paths. With constant innovation, the fashion industry offers diverse and fulfilling opportunities for creative professionals.
                    </p>
                  </div>
                </div>

                {/* Program Highlights bullet list */}
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl mb-6 tracking-tight leading-tight">
                    Program <span className="text-[#BE1E2E]">Highlights:</span>
                  </h3>
                  <ul className="space-y-4 text-zinc-300 text-sm sm:text-base font-light">
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      <strong>Comprehensive Curriculum:</strong> Offers a well-rounded education covering both the creative and technical aspects of fashion design, ensuring students build a solid foundation.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      <strong>Practical Experience:</strong> Emphasises hands-on learning through projects, workshops, and internships that simulate real industry scenarios.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      <strong>Industry-Relevant Program:</strong> Designed in alignment with current industry trends and demands to prepare students for the modern fashion landscape.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      <strong>Digital Design Skills:</strong> Provides training in essential digital tools and software used in today&apos;s fashion industry, enabling students to stay competitive.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      <strong>Portfolio Development:</strong> Focuses on helping students create a diverse and professional portfolio that showcases their creativity, technical skills, and personal style.
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BE1E2E] mr-2 font-bold">•</span>
                      <strong>Expert Faculty &amp; Mentorship:</strong> Learn from experienced professionals who guide you with industry insights and personalized feedback.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Sticky Enquiry Form */}
              <div className="col-span-1 lg:col-span-5 flex justify-center lg:sticky lg:top-28">
                <BannerForm title="ENQUIRY FORM" buttonText="SUBMIT" defaultCourse="Fashion Design" />
              </div>

            </div>
          </div>
        </section>

        {/* Module Accordions Section */}
        <section className="py-24 border-b border-white/5 relative bg-[#090909]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-center mb-16 tracking-tight leading-tight">
              Fashion Design Program <span className="text-[#BE1E2E]">Structure</span>
            </h2>

            <div className="space-y-4">
              {MODULES.map((item, idx) => {
                const isOpen = openModule === idx;
                return (
                  <div key={idx} className="border-b border-zinc-800 pb-5">
                    <button
                      onClick={() => toggleModule(idx)}
                      className="w-full py-4 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                    >
                      <span className={`font-sans font-semibold text-sm sm:text-base transition-colors duration-300 ${
                        isOpen ? "text-[#BE1E2E]" : "text-white group-hover:text-zinc-300"
                      }`}>
                        {item.title}
                      </span>
                      
                      {/* Plus / Minus Indicator */}
                      <div className="ml-4 flex-shrink-0 h-6 w-6 flex items-center justify-center text-white">
                        {isOpen ? (
                          <Minus className="h-4 w-4 text-[#BE1E2E]" />
                        ) : (
                          <Plus className="h-4 w-4" />
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
                          <div className="pt-2 pb-4 pl-4 border-l-2 border-[#BE1E2E]/40 mt-1">
                            <ul className="space-y-2 text-zinc-400 text-xs sm:text-sm font-light grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {item.topics.map((topic, tIdx) => (
                                <li key={tIdx} className="flex items-center">
                                  <span className="text-[#BE1E2E] mr-2 font-bold">-</span>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
