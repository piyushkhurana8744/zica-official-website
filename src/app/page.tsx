import React from "react";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import MouseGlow from "@/components/MouseGlow";
import Hero from "@/components/Hero";
import CreativeShowcase from "@/components/CreativeShowcase";
import TrustedBy from "@/components/TrustedBy";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import StudentsWork from "@/components/StudentsWork";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
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
        <Hero />
        <CreativeShowcase />
        <Services />
        <StudentsWork />
        <TrustedBy />
        <WhyChooseUs />
        <Statistics />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Premium Footer */}
      <Footer />
    </>
  );
}
