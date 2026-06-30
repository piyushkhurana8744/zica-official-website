"use client";

import React from "react";
import { Youtube, Instagram, Facebook, Phone, Mail, Navigation } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-12 border-t border-white/5 overflow-hidden">
      
      {/* Background equalizer/grid decoration overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop')" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Footer main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Power by & Placement Partner + Description (Span 5 for layout spacing) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Logos side-by-side */}
            <div className="flex items-start space-x-8">
              
              {/* Power By Zee Learn */}
              <div className="flex flex-col space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#BE1E2E]">
                  Power by
                </span>
                <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full overflow-hidden bg-transparent">
                  <img
                    src="/footer/ZLL_Logo.png"
                    alt="Zee Learn Logo"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Placement Partner Zee Media */}
              <div className="flex flex-col space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#BE1E2E]">
                  Placement Partner
                </span>
                <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full overflow-hidden bg-transparent">
                  <img
                    src="/footer/Zee_Media_logo.png"
                    alt="Zee Media Logo"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

            </div>

            {/* Paragraph text */}
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light max-w-md">
              Reflect on your teaching or work is are is performance, seek feedback from gat supervisors, and continuously strive to improve your skills
            </p>
          </div>

          {/* Column 2: Page Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#BE1E2E] mb-6">
              PAGE LINKS
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/" className="flex items-center text-zinc-300 hover:text-white transition-colors text-sm font-light">
                  <span className="mr-2 text-white">➔</span> Home
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="flex items-center text-zinc-300 hover:text-white transition-colors text-sm font-light">
                  <span className="mr-2 text-white">➔</span> About
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center text-zinc-300 hover:text-white transition-colors text-sm font-light">
                  <span className="mr-2 text-white">➔</span> Our Programes
                </a>
              </li>
              <li>
                <a href="#students-work" className="flex items-center text-zinc-300 hover:text-white transition-colors text-sm font-light">
                  <span className="mr-2 text-white">➔</span> Student Zone
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Information (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#BE1E2E] mb-6">
              INFORMATION
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center text-zinc-300 hover:text-white transition-colors text-sm font-light">
                  <span className="mr-2 text-white">➔</span> Client Support
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-zinc-300 hover:text-white transition-colors text-sm font-light">
                  <span className="mr-2 text-white">➔</span> Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-zinc-300 hover:text-white transition-colors text-sm font-light">
                  <span className="mr-2 text-white">➔</span> Privacy Police
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#BE1E2E] mb-6">
              CONTACT INFO
            </h4>
            <ul className="space-y-4">
              
              {/* Phone */}
              <li className="flex items-start">
                <div className="mr-3 mt-0.5 text-white">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="tel:+917900400300" className="text-zinc-300 hover:text-white transition-colors text-sm font-light">
                  +917900400300
                </a>
              </li>

              {/* Email */}
              <li className="flex items-start">
                <div className="mr-3 mt-0.5 text-white">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:info@Pitampura.com" className="text-zinc-300 hover:text-white transition-colors text-sm font-light break-all">
                  info@Pitampura.com
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-white">
                  <Navigation className="h-4 w-4 transform rotate-45" />
                </div>
                <span className="text-zinc-300 text-sm font-light leading-relaxed">
                  1st floor, 150, Kapil Vihar, Pitampura, Delhi 110034
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Social Icons - Centered under columns as in layout screenshot */}
        <div className="flex justify-center items-center space-x-6 py-6 border-t border-white/5">
          <a href="#" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#BE1E2E] hover:bg-white/10 transition-all duration-300">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#BE1E2E] hover:bg-white/10 transition-all duration-300">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="#" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#BE1E2E] hover:bg-white/10 transition-all duration-300">
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30 font-light">
          <p>© {new Date().getFullYear()} ZICA Pitampura. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
