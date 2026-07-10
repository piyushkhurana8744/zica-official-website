"use client";

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

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

const CAREERS_LEFT = [
  "Fashion Designer",
  "Garment Illustrator",
  "Pattern Maker",
];

const CAREERS_RIGHT = [
  "Costume Designer",
  "Fashion Stylist",
  "Sustainable Designer",
];

export default function FashionDesignPage() {
  return (
    <CoursePageTemplate
      courseId="fashion-design"
      courseName="Fashion Design"
      heroTitle={
        <>
          Fashion <br />
          <span className="text-primary font-black">Design Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Explore the World of Fashion Design through Practical Learning, Industry Insights, and Cutting-Edge Tools, Setting You Up for a Successful Career in the Fashion World."
      heroBgImage="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "The program covers a broad spectrum of topics, including drawing, design principles, garment construction, textiles, CAD software, and fashion marketing.",
        "Students have the opportunity to apply their knowledge through hands-on design projects, draping, pattern making, and garment construction, allowing them to develop practical design skills.",
        "The curriculum includes modules on fashion forecasting, merchandising, export-import business, and quality control, preparing students to understand and navigate the real-world challenges of the fashion industry.",
        "Students are equipped with essential digital design skills through training through industry standard software, which are vital for contemporary fashion design and presentation.",
        "The program emphasizes portfolio development, enabling students to showcase their work and secure opportunities in the fashion industry, whether in design, styling, photography, or other related fields.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="PDP In Fashion Design"
      courseDuration="24 Months"
      professionalsIntro="Fashion design is the art of creating clothing and accessories that blend design, aesthetics, and natural beauty. It is shaped by cultural and social influences, evolving over time and across different regions. Fashion designers approach their craft in various ways, developing clothing and accessories by anticipating and responding to changing consumer preferences. Designers research emerging trends and re-interpret them for their audience, working with a broad range of fabrics, colors, patterns, and styles."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "Becoming a professional fashion designer requires a blend of creativity, technical expertise, and an understanding of industry trends. Begin by mastering the fundamentals of drawing, design principles, and garment construction. Learn to use industry-standard software for digital design and gain practical experience through projects and internships. Build a compelling portfolio that highlights your unique style and adaptability.",
        },
        {
          title: "Be Industry Ready",
          description: "In today's ever-evolving fashion industry, designers have a wide range of career opportunities. They can work with renowned fashion houses, launch their own labels, or pursue freelance projects. Beyond traditional roles, fashion designers also explore careers in costume design, fashion journalism, and styling for film, television, and advertising.",
        },
      ]}
      programHighlights={[
        "Comprehensive Curriculum: Offers a well-rounded education covering both the creative and technical aspects of fashion design, ensuring students build a solid foundation.",
        "Practical Experience: Emphasises hands-on learning through projects, workshops, and internships that simulate real industry scenarios.",
        "Industry-Relevant Program: Designed in alignment with current industry trends and demands to prepare students for the modern fashion landscape.",
        "Digital Design Skills: Provides training in essential digital tools and software used in today's fashion industry, enabling students to stay competitive.",
        "Portfolio Development: Focuses on helping students create a diverse and professional portfolio that showcases their creativity, technical skills, and personal style.",
        "Expert Faculty & Mentorship: Learn from experienced professionals who guide you with industry insights and personalized feedback.",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
