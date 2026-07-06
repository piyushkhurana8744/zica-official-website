"use client";

import React, { useState } from "react";
import { Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.012 2c-5.506 0-9.988 4.492-9.988 10 0 1.758.459 3.41 1.259 4.858l-1.283 4.792 4.906-1.288c1.409.767 3.01 1.206 4.71 1.206 5.507 0 9.989-4.492 9.989-10s-4.482-10-9.989-10zm.012 18.064c-1.576 0-3.08-.431-4.385-1.246l-.314-.188-2.906.762.775-2.894-.207-.329c-.896-1.427-1.371-3.084-1.371-4.789 0-4.996 4.072-9.058 9.079-9.058 5.006 0 9.078 4.062 9.078 9.058-.001 4.997-4.073 9.08-9.08 9.08zm4.97-6.84c-.272-.137-1.614-.797-1.863-.889-.25-.09-.432-.137-.613.137-.182.273-.705.889-.864 1.072-.159.182-.318.204-.59.068-.272-.137-1.15-.424-2.19-1.353-.809-.723-1.356-1.616-1.515-1.889-.159-.273-.017-.42.119-.556.123-.122.272-.319.409-.478.136-.159.182-.272.272-.454.09-.182.045-.341-.022-.477-.068-.137-.613-1.477-.84-2.023-.222-.534-.443-.46-.613-.469-.159-.009-.341-.009-.523-.009-.181 0-.477.068-.727.341-.25.272-.953.932-.953 2.273s.976 2.637 1.112 2.819c.137.182 1.92 2.932 4.653 4.113.65.28 1.157.447 1.553.573.656.208 1.253.179 1.725.109.526-.079 1.614-.659 1.841-1.295.227-.637.227-1.183.159-1.295-.069-.114-.25-.182-.522-.319z" />
    </svg>
  );
}

export default function FloatingContactWidgets() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  return (
    <>
      {/* ═══════════════════════ RIGHT SIDEBAR FIXED BAR ═══════════════════════ */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
        <AnimatePresence>
          {!isSidebarHidden && (
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col shadow-2xl rounded-l-2xl overflow-hidden border border-r-0 border-white/10"
            >
              {/* Call Button */}
              <a
                href="tel:+917900400300"
                title="Call Us Now"
                className="w-12 h-14 bg-[#FF1F3D] hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Phone className="h-6 w-6 animate-pulse" />
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917900400300"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="w-12 h-14 bg-[#25D366] hover:bg-[#1eab50] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <WhatsAppIcon className="h-7 w-7" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarHidden(!isSidebarHidden)}
          title={isSidebarHidden ? "Show Contact Bar" : "Hide Contact Bar"}
          className="w-6 h-12 bg-black/90 hover:bg-black text-white/70 hover:text-white border border-r-0 border-white/15 rounded-l-lg flex items-center justify-center transition-colors cursor-pointer shadow-lg"
        >
          <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isSidebarHidden ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* ═══════════════════════ BOTTOM RIGHT FLOATING CALL ME WIDGET ═══════════════════════ */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Call Me Pill */}
        <a
          href="tel:+917900400300"
          className="bg-[#111827]/95 hover:bg-black text-white border border-white/15 px-5 py-2.5 rounded-full flex items-center gap-2 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:border-[#FF1F3D]/50 group cursor-pointer"
        >
          <Phone className="h-4 w-4 text-[#FF1F3D] group-hover:scale-110 transition-transform" />
          <span className="text-xs font-extrabold tracking-wider uppercase">Call Me</span>
        </a>

        {/* Circular Pulsing Phone Button with Green Status Dot */}
        <a
          href="tel:+917900400300"
          title="Call Institute"
          className="relative w-14 h-14 bg-[#FF1F3D] hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(255,31,61,0.5)] transition-all duration-300 transform hover:scale-110 group cursor-pointer"
        >
          {/* Ping animation ring */}
          <span className="absolute inset-0 rounded-full bg-[#FF1F3D] animate-ping opacity-75 pointer-events-none" />
          
          <Phone className="h-6 w-6 relative z-10 animate-bounce" style={{ animationDuration: "2s" }} />

          {/* Green Online Status Dot */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#22C55E] border-2 border-[#020617] rounded-full z-20 shadow" />
        </a>
      </div>
    </>
  );
}
