"use client";

import React from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "SHANEL MORAES",
    role: "",
    quote: "ZICA has been an amazing place to be at; the teachers, as well as the staff have been very helpful since the beginning. Throughout the years I spent here, I have grown abundantly in knowledge and learnt various techniques used in the actual Animation field.",
    image: "/Trusted%20by/SHANEL%20MORAES.jpg",
  },
  {
    name: "SUMIT BADONIYA",
    role: "NY VFXWAALA AS 3D ARTIST",
    quote: "I would like to thank ZICA for providing quality education and guidance. Their focus on each student truly makes a difference. Specialized faculties helped us grow in our chosen creative fields. Their support and expertise played a big role in our development.",
    image: "/Trusted%20by/SUMIT%20BADONIYA.jpg",
  },
  {
    name: "AISHWARYA PILLAY",
    role: "NY VFXWAALA AS 3D ARTIST",
    quote: "ZICA has been a great place to learn; the faculty, as well as the staff has been very helpful since the beginning. Everyone at ZICA has been very supportive to me. Throughout the years I spent at ZICA, I've have grown abundantly in knowledge and learnt various techniques.",
    image: "/Trusted%20by/AISHWARYA%20PILLAY.jpg",
  },
  {
    name: "BHARGAVA A J",
    role: "MPC AS MODELING & TEXTURING ARTIST",
    quote: "I had a great experience at ZICA, where I explored the creative industry. The supportive environment helped me build skills and confidence. The training I received played a key role in shaping my career. I'm thankful for the guidance that helped me reach my goals.",
    image: "/Trusted%20by/BHARGAVA%20A%20J.jpg",
  },
  {
    name: "CHINMAYA PRADHAN",
    role: "NY VFXWAALA AS 3D ARTIST",
    quote: "I had a great experience at ZICA, where I explored the creative industry. The supportive environment helped me grow and gain confidence. Thank you ZICA BBSR and all the faculties for your hard work. I'm truly grateful for your support and guidance.",
    image: "/Trusted%20by/CHINMAYA%20PRADHAN.jpg",
  },
  {
    name: "VINI SHAH",
    role: "3D Animation | student",
    quote: "This course is amazing in its current form, offering so much to learn. I'm truly impressed by the quality and creativity throughout. I can't imagine how cool it will be once the entire course is completed. Looking forward to experiencing the full journey ahead.",
    image: "/Trusted%20by/VINI%20SHAH.jpg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8 max-w-5xl">
          <div className="flex flex-col">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-2">
              Let&apos;s Hear It From <br />
              <span className="text-[#BE1E2E]">Our Students</span>
            </h2>
          </div>
          {/* Big Orange Gradient Quote Mark */}
          <div className="text-8xl sm:text-[10rem] font-serif font-extrabold select-none leading-none h-16 sm:h-24 text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-[#BE1E2E]">
            &rdquo;
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-zinc-300 text-sm sm:text-base font-light mb-16 max-w-3xl leading-relaxed">
          Hear How ZICA&apos;s Industry-Focused Training and Supportive Environment Helped Students Achieve Their Dreams.
        </p>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Avatar Container with Red Border */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#BE1E2E] mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300">
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
                <p className="text-[#BE1E2E] font-bold text-xs sm:text-sm tracking-wider mb-4 uppercase">
                  {t.role}
                </p>
              )}
              {!t.role && <div className="h-4 mb-4" />}

              {/* Quote Text */}
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light px-3 sm:px-4">
                {t.quote}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
