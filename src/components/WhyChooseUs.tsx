"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Palette, 
  Film, 
  BookOpen, 
  Wallet, 
  GraduationCap, 
  Laptop, 
  Cpu, 
  Trophy, 
  Smartphone, 
  Smile, 
  Tv, 
  Briefcase 
} from "lucide-react";

const FEATURES = [
  {
    icon: Palette,
    titleWhite: "India's Premiere Traditional &",
    titleRed: "Digital Animation Institute",
    description: "India's premier institute offering comprehensive training in both traditional and digital animation, nurturing the next generation of creative professionals.",
  },
  {
    icon: Film,
    titleWhite: "Emphasize on pre-production which",
    titleRed: "is very important",
    description: "Pre-production is the most critical phase of any project—it lays the foundation, ensuring clarity, efficiency, and a smooth execution. Without solid pre-production, even great ideas can fail.",
  },
  {
    icon: BookOpen,
    titleWhite: "Current industry standard &",
    titleRed: "career focused course curriculum",
    description: "Our curriculum is designed to meet current industry standards, blending practical skills with career-focused training to ensure you're job-ready from day one.",
  },
  {
    icon: Wallet,
    titleWhite: "Student",
    titleRed: "Loan Facility",
    description: "We offer a convenient student loan facility with flexible repayment options, making quality education accessible without financial stress.",
  },
  {
    icon: GraduationCap,
    titleWhite: "Collaboration with well-known university to",
    titleRed: "provide animation VFX degree",
    description: "We collaborate with a renowned university to offer an industry-recognized Animation and VFX degree, combining academic excellence with real-world training.",
  },
  {
    icon: Laptop,
    titleWhite: "Dedicated online and in-class",
    titleRed: "training platform for Students",
    description: "We provide a dedicated online and in-class training platform, ensuring flexible, interactive, and personalized learning experiences for every student.",
  },
  {
    icon: Cpu,
    titleWhite: "Access to world-class infrastructure",
    titleRed: "& latest software",
    description: "Students get access to world-class infrastructure and the latest industry-standard software, enabling hands-on experience with cutting-edge tools and technology.",
  },
  {
    icon: Trophy,
    titleWhite: "Monthly & yearly activities to enhance",
    titleRed: "competitive spirit among students",
    description: "We organize monthly and yearly activities designed to enhance the competitive spirit among students, fostering growth, teamwork, and a drive for excellence.",
  },
  {
    icon: Smartphone,
    titleWhite: "E-Studio an exclusive online app",
    titleRed: "for you to access e-books, on the got",
    description: "E-Studio is our exclusive online app that gives you easy access to e-books and learning resources, allowing you to study anytime, anywhere, right at your fingertips.",
  },
  {
    icon: Smile,
    titleWhite: "Fun-filled studio",
    titleRed: "study environment",
    description: "Our fun-filled studio study environment blends creativity with learning, offering an inspiring space where students can engage, collaborate, and thrive while enjoying their educational journey.",
  },
  {
    icon: Tv,
    titleWhite: "Guidance to develop your",
    titleRed: "own portfolio & show reel",
    description: "We provide expert guidance to help you develop your own portfolio and showreel, ensuring you showcase your skills and creativity in the best possible light for future career opportunities.",
  },
  {
    icon: Briefcase,
    titleWhite: "Opportunities for placements with",
    titleRed: "top animation & VFX studios",
    description: "We offer exclusive placement opportunities with top animation and VFX studios, giving students a direct pathway to kickstart their careers in the industry.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" data-section-theme="dark" className="relative py-24 bg-[#0A0A0A] overflow-hidden border-b border-[rgba(190,30,46,0.12)]">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-5xl mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6 uppercase">
            The Right Place to <span className="text-[#BE1E2E]">Achieve Your Goals</span>
          </h2>
          <p className="text-[#D1D5DB] text-sm sm:text-base leading-relaxed font-light">
            Zee Institute of Creative Art (<span className="text-[#BE1E2E] font-medium">ZICA</span>), established in <span className="text-[#BE1E2E] font-medium">1995</span>, is India&apos;s pioneering academy offering comprehensive training in both classical and digital animation. ZICA specializes in 2D Animation, 3D Animation, Visual Effects (VFX), Gaming, Graphic Design, Web Design, Digital Marketing, and Digital Photography, empowering youth with industry-relevant skills.
          </p>
        </div>

        {/* 12-Card Grid styled as Premium SaaS cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.04 }}
                className="flex flex-col items-start p-6 bg-[#181818] border border-[rgba(190,30,46,0.12)] rounded-2xl shadow-sm hover:border-[#BE1E2E] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon Container with Red Outline */}
                <div className="h-10 w-10 rounded-lg border border-[#BE1E2E] flex items-center justify-center text-[#BE1E2E] bg-[#0A0A0A] group-hover:bg-[#BE1E2E] group-hover:text-white transition-all duration-300 mb-4 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-sm sm:text-base text-white mb-2 leading-snug tracking-tight uppercase">
                  <span>{item.titleWhite} </span>
                  <span className="text-[#BE1E2E]">{item.titleRed}</span>
                </h3>

                {/* Description */}
                <p className="text-[#A1A1AA] text-xs sm:text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
