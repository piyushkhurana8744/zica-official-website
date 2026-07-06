"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, ArrowRight, Sparkles, Film, Gamepad, Paintbrush, Video, Award } from "lucide-react";
import { useRouter } from "next/navigation";

// Categorized courses for the Mega Menu
const MEGA_MENU_CATEGORIES = [
  {
    title: "Animation & VFX",
    icon: Film,
    items: [
      { name: "B.Voc Degree", desc: "3-Year Comprehensive Degree", href: "/bvoc" },
      { name: "2D Animation", desc: "Classical & Digital 2D film art", href: "/2d-animation" },
      { name: "3D Animation", desc: "Modeling, Rigging & Character animation", href: "/3d-animation" },
      { name: "Visual Effects (VFX)", desc: "Compositing, CGI & Green Screen", href: "/vfx" },
      { name: "Motion Graphics", desc: "Broadcast design & Title animations", href: "/motion-graphics" },
      { name: "Audio & Video Editing", desc: "Post-production & mixing workflows", href: "/audio-video-editing" },
    ],
  },
  {
    title: "Game Design & 3D",
    icon: Gamepad,
    items: [
      { name: "Game Arts & Design", desc: "AAA environments & characters", href: "/game-design" },
      { name: "Blender Mastery", desc: "Clay modeling, sculpts & rendering", href: "/blender-mastery" },
      { name: "Unreal Engine", desc: "Blueprint scripting & Level Design", href: "/unreal-engine" },
    ],
  },
  {
    title: "Design & Digital Arts",
    icon: Paintbrush,
    items: [
      { name: "Graphic Design", desc: "Branding, layout guides & compositions", href: "/graphic-design" },
      { name: "UI & UX", desc: "Mobile prototyping & interactive wireframes", href: "/ui-ux" },
      { name: "Web Design", desc: "Responsive layouts & web architectures", href: "/web-design" },
      { name: "Interior Design", desc: "Luxurious architectural room renders", href: "/interior-design" },
      { name: "Fashion Design", desc: "Models, fabrics & tailoring guides", href: "/fashion-design" },
      { name: "Digital Marketing", desc: "Metrics tracking & social campaigns", href: "/digital-marketing" },
      { name: "Digital Photography", desc: "Studio lighting & DSLR workflows", href: "/digital-photography" },
    ],
  },
];

// All courses flattened for CMD+K search
const ALL_COURSES = [
  { name: "B.Voc Degree", href: "/bvoc", category: "Animation & VFX" },
  { name: "2D Animation", href: "/2d-animation", category: "Animation & VFX" },
  { name: "3D Animation", href: "/3d-animation", category: "Animation & VFX" },
  { name: "Visual Effects (VFX)", href: "/vfx", category: "Animation & VFX" },
  { name: "Motion Graphics", href: "/motion-graphics", category: "Animation & VFX" },
  { name: "Digital Audio And Video Editing", href: "/audio-video-editing", category: "Animation & VFX" },
  { name: "Game Arts & Design", href: "/game-design", category: "Game Design & 3D" },
  { name: "Blender Mastery", href: "/blender-mastery", category: "Game Design & 3D" },
  { name: "Unreal Engine", href: "/unreal-engine", category: "Game Design & 3D" },
  { name: "Graphic Design", href: "/graphic-design", category: "Design & Digital Arts" },
  { name: "UI & UX", href: "/ui-ux", category: "Design & Digital Arts" },
  { name: "Web Design", href: "/web-design", category: "Design & Digital Arts" },
  { name: "Interior Design", href: "/interior-design", category: "Design & Digital Arts" },
  { name: "Fashion Design", href: "/fashion-design", category: "Design & Digital Arts" },
  { name: "Digital Marketing", href: "/digital-marketing", category: "Design & Digital Arts" },
  { name: "Digital Photography", href: "/digital-photography", category: "Design & Digital Arts" },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Navigation states
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  
  // Search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle Scroll Direction & Shrinking (Headroom)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled state for backdrop styling
      setScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 80 && currentScrollY > lastScrollY) {
        setHidden(true);
        setActiveDropdown(null);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Keyboard shortcut CMD+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Autofocus input when modal opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSearchQuery("");
    }
  }, [searchOpen]);

  // Filtered courses
  const filteredCourses = ALL_COURSES.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigateToCourse = (href: string) => {
    setSearchOpen(false);
    setMobileMenuOpen(false);
    router.push(href);
  };

  return (
    <>
      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md">
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="bg-zinc-950 border border-white/10 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden"
            >
              {/* Input Header */}
              <div className="flex items-center px-4 border-b border-white/5">
                <Search className="h-5 w-5 text-zinc-400 mr-3" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search courses (e.g. VFX, Blender...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-zinc-500 py-4 outline-none text-sm"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-xs uppercase tracking-wider text-zinc-500 hover:text-white border border-white/10 px-2.5 py-1 rounded"
                >
                  ESC
                </button>
              </div>

              {/* Match List */}
              <div className="max-h-[300px] overflow-y-auto p-4 space-y-1">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course, idx) => (
                    <button
                      key={idx}
                      onClick={() => navigateToCourse(course.href)}
                      className="w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-white/5 transition-colors group cursor-pointer"
                    >
                      <div>
                        <div className="text-white text-sm font-medium group-hover:text-[#BE1E2E] transition-colors">
                          {course.name}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-0.5">
                          {course.category}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-zinc-600 group-hover:text-white transition-colors" />
                    </button>
                  ))
                ) : (
                  <div className="text-zinc-500 text-sm text-center py-6">
                    No courses found matching &ldquo;{searchQuery}&rdquo;
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Sticky Navbar */}
      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl py-3 border-b border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo Only - Enlarged */}
          <a href="/" className="flex items-center select-none group cursor-pointer">
            <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-95">
              <img
                src="/ZICA-LOGO.png"
                alt="ZICA Logo"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300"
              />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-sm font-sans font-medium text-white/80 hover:text-white transition-colors py-2 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BE1E2E] transition-all group-hover:w-full" />
            </a>

            {/* Courses (Stripe Mega Menu Trigger) */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown("courses")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1.5 text-sm font-sans font-medium text-white/80 hover:text-white focus:outline-none transition-colors cursor-pointer">
                <span>Courses</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === "courses" ? "rotate-180 text-[#BE1E2E]" : ""}`} />
              </button>

              {/* Mega Dropdown Panel */}
              <AnimatePresence>
                {activeDropdown === "courses" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-zinc-950/95 border border-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-xl w-[900px] z-50 grid grid-cols-4 gap-8"
                  >
                    {/* Columns 1, 2, 3: Course Categories */}
                    {MEGA_MENU_CATEGORIES.map((cat, idx) => {
                      const Icon = cat.icon;
                      return (
                        <div key={idx} className="flex flex-col space-y-4">
                          <div className="flex items-center space-x-2 border-b border-white/5 pb-2 text-zinc-400">
                            <Icon className="h-4 w-4 text-[#BE1E2E]" />
                            <span className="text-[10px] uppercase font-bold tracking-wider">{cat.title}</span>
                          </div>
                          <ul className="space-y-3">
                            {cat.items.map((item, iIdx) => (
                              <li key={iIdx}>
                                <a
                                  href={item.href}
                                  className="block rounded-lg p-2 hover:bg-white/5 transition-colors group"
                                >
                                  <div className="text-[13px] font-semibold text-zinc-100 group-hover:text-[#BE1E2E] transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-[10px] text-zinc-500 font-light mt-0.5">
                                    {item.desc}
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}

                    {/* Column 4: Admissions / Counselling CTA Card */}
                    <div className="bg-white/5 border border-white/5 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3">
                        <Sparkles className="h-5 w-5 text-[#BE1E2E] animate-pulse" />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider bg-[#BE1E2E] text-white px-2 py-0.5 rounded font-bold">
                          Admissions Open
                        </span>
                        <h4 className="font-display font-bold text-white text-base mt-3">
                          Book a Free Demo
                        </h4>
                        <p className="text-zinc-400 text-xs mt-2 font-light leading-relaxed">
                          Kickstart your creative career with industry-oriented courses. Book a free counselling session with our expert mentors today.
                        </p>
                      </div>
                      <a
                        href="#contact"
                        onClick={() => setActiveDropdown(null)}
                        className="inline-flex items-center justify-center text-center mt-6 py-2 px-4 rounded bg-[#BE1E2E] hover:bg-red-700 text-white text-xs font-semibold tracking-wide transition-colors group cursor-pointer"
                      >
                        <span>Book Demo</span>
                        <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="/about-us" className="text-sm font-sans font-medium text-white/80 hover:text-white transition-colors py-2 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BE1E2E] transition-all group-hover:w-full" />
            </a>
            <a href="/student-work" className="text-sm font-sans font-medium text-white/80 hover:text-white transition-colors py-2 relative group">
              Student Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BE1E2E] transition-all group-hover:w-full" />
            </a>
            <a href="/awards-and-recognition" className="text-sm font-sans font-medium text-white/80 hover:text-white transition-colors py-2 relative group">
              Awards
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BE1E2E] transition-all group-hover:w-full" />
            </a>
            <a href="/placements" className="text-sm font-sans font-medium text-white/80 hover:text-white transition-colors py-2 relative group">
              Placements
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BE1E2E] transition-all group-hover:w-full" />
            </a>
          </div>

          {/* Right Area Controls */}
          <div className="flex items-center space-x-4">
            
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-white/70 hover:text-white bg-white/5 border border-white/10 rounded-full transition-colors flex items-center space-x-1.5 focus:outline-none cursor-pointer"
            >
              <Search className="h-4 w-4" />
              <span className="text-[10px] font-medium text-zinc-400 hidden sm:inline-block px-1">
                ⌘K
              </span>
            </button>

            {/* Enroll Now CTA & Phone Number */}
            <div className="flex flex-col items-end">
              <a
                href="#contact"
                className="bg-gradient-to-r from-[#FF1F3D] to-red-600 hover:from-red-600 hover:to-red-700 text-white font-extrabold px-5 py-2 rounded-full text-xs uppercase tracking-wider shadow-[0_4px_15px_rgba(255,31,61,0.4)] hover:shadow-[0_6px_20px_rgba(255,31,61,0.6)] transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 cursor-pointer select-none"
              >
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span>ENROLL NOW</span>
              </a>
              <a href="tel:+917900400300" className="text-[11px] font-bold text-zinc-300 hover:text-white mt-1 hidden sm:flex items-center gap-1 tracking-wider cursor-pointer">
                <span className="text-[#FF1F3D]">📞</span>
                <span>+91 79004 00300</span>
              </a>
            </div>

            {/* Mobile Menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              <Menu className="h-6 w-6" />
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer layout */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg lg:hidden flex flex-col justify-between p-6 overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                {/* Mini Logo - Enlarged & Text Removed */}
                <a href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="/ZICA-LOGO.png"
                      alt="ZICA Logo"
                      className="h-12 sm:h-14 w-auto object-contain transition-all duration-300"
                    />
                  </div>
                </a>
                
                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/80 hover:text-white transition-colors focus:outline-none cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Links list */}
              <div className="flex flex-col space-y-4">
                <a
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/85 hover:text-white py-1 block font-sans"
                >
                  Home
                </a>

                {/* Course Categories Drawer Accordions */}
                <div>
                  <button
                    onClick={() => setMobileCategoryOpen(mobileCategoryOpen === "courses" ? null : "courses")}
                    className="w-full flex items-center justify-between text-lg font-medium text-white/85 hover:text-white py-1 focus:outline-none font-sans"
                  >
                    <span>Courses</span>
                    <ChevronDown className={`h-4 w-4 transform transition-transform ${mobileCategoryOpen === "courses" ? "rotate-180 text-[#BE1E2E]" : ""}`} />
                  </button>
                  {mobileCategoryOpen === "courses" && (
                    <div className="pl-4 mt-2 space-y-4 border-l border-zinc-800">
                      {MEGA_MENU_CATEGORIES.map((cat, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                            {cat.title}
                          </div>
                          {cat.items.map((item, iIdx) => (
                            <a
                              key={iIdx}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-sm text-zinc-300 hover:text-white py-1.5 block font-sans"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/85 hover:text-white py-1 block font-sans"
                >
                  About Us
                </a>

                <a
                  href="/student-work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/85 hover:text-white py-1 block font-sans"
                >
                  Student Works
                </a>

                <a
                  href="/awards-and-recognition"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/85 hover:text-white py-1 block font-sans"
                >
                  Awards
                </a>

                <a
                  href="/placements"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/85 hover:text-white py-1 block font-sans"
                >
                  Placements
                </a>
              </div>
            </div>

            {/* Mobile bottom CTA */}
            <div className="pt-8">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#BE1E2E] to-red-500 shadow-[0_4px_15px_rgba(190,30,46,0.3)]"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
