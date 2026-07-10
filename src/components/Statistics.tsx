"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMiliseconds / incrementTime));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-extrabold text-5xl sm:text-7xl text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const STATS = [
  { value: 30, suffix: "+", label: "Years of ZEE Group Legacy" },
  { value: 10000, suffix: "+", label: "Students Placed Nationally" },
  { value: 95, suffix: "%", label: "Direct Placement Rate" },
  { value: 18, suffix: "+", label: "Studio Softwares Handled" },
];

export default function Statistics() {
  return (
    <section data-section-theme="dark" className="relative py-20 bg-[#0A0A0A] border-y border-[rgba(190,30,46,0.12)] overflow-hidden text-white">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-zinc-400 text-xs sm:text-sm uppercase tracking-widest font-semibold mt-3 max-w-[200px] mx-auto leading-relaxed font-sans">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
