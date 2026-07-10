import React from "react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Hero from "@/components/Hero";
import CreativeShowcase from "@/components/CreativeShowcase";
import TrustedBy from "@/components/TrustedBy";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import StudentsWork from "@/components/StudentsWork";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import Tools from "@/components/Tools";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Global Integrations */}
      <ScrollProgressBar />
      <MouseGlow />
      <Navbar />

      {/* Main Sections */}
      <main className="flex flex-col min-h-screen">
        {/* Hero Section (Black background) */}
        <Hero />
        
        {/* Showcase & Services (White background) */}
        <CreativeShowcase />
        <Services />
        
        {/* Recruiters & Core Benefits (Black background) */}
        <TrustedBy />
        <WhyChooseUs />
        
        {/* Courses Catalog & Student Projects (White background) */}
        <Courses />
        <StudentsWork />
        
        {/* Counters & Testimonials Carousel (Black background) */}
        <Statistics />
        <Testimonials />
        
        {/* Tooling Suite & FAQ accordion (White background) */}
        <Tools />
        <FAQ />
        
        {/* Contact Form Section (Black background) */}
        <FinalCTA />
      </main>

      {/* Premium Footer (Pure Black background) */}
      <Footer />
    </>
  );
}
