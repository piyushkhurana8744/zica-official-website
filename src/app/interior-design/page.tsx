import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Diploma in Delhi | ZICA Pitampura",
  description: "Get certified in interior design. Learn space planning, 3D visualization & material selection with practical studio-based training.",
  alternates: {
    canonical: "https://zicapitampura.com/interior-design/",
  },
  openGraph: {
    title: "Interior Design Diploma in Delhi | ZICA Pitampura",
    description: "Get certified in interior design. Learn space planning, 3D visualization & material selection with practical studio-based training.",
    url: "https://zicapitampura.com/interior-design/",
    siteName: "ZICA - Zee Institute of Creative Arts",
    type: "website",
  },
  twitter: {
    title: "Interior Design Diploma in Delhi | ZICA Pitampura",
    description: "Get certified in interior design. Learn space planning, 3D visualization & material selection with practical studio-based training.",
  },
  other: {
    "itemprop:title": "Interior Design Diploma in Delhi | ZICA Pitampura",
    "itemprop:description": "Get certified in interior design. Learn space planning, 3D visualization & material selection with practical studio-based training.",
  },
};

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: INTERIOR DESIGN COURSE SYLLABUS",
    topics: [
      "History of Interior furniture Design (Indian & Western)",
      "Concept of Interior Design",
      "Fundamental of Art",
      "Free-Hand Drawing",
      "Design development",
      "Space planning",
      "Services, Techniques, Theory & Practical",
    ],
  },
];

const CAREERS_LEFT = [
  "Interior Designer",
  "Furniture Designer",
  "Space Planner",
];

const CAREERS_RIGHT = [
  "Commercial Designer",
  "Residential Designer",
  "3D Visualization Artist",
];

export default function InteriorDesignPage() {
  return (
    <CoursePageTemplate
      courseId="interior-design"
      courseName="Interior Design"
      heroTitle={
        <>
          Interior <br />
          <span className="text-primary font-black">Design Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Develop the Skills to Design Inspiring Interiors that Enhance Lives, from Residential to Commercial Spaces, with Our Expert-Led Interior Design Programs."
      heroBgImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "To introduce students to the fundamental principles, concepts, and theories of interior design as a discipline.",
        "To specialise in designing residential interiors, considering homeowners' unique requirements and preferences.",
        "To learn advanced computer rendering techniques for creating realistic 3d walkthroughs of interior spaces.",
        "To gain expertise in designing restaurant and hospitality spaces, considering customer experience and functional requirements.",
        "To develop research and communication skills essential for academic and professional advancement.",
        "To expand and update the professional portfolio with advanced and specialised projects.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="PDP In Interior Design"
      courseDuration="24 Months"
      professionalsIntro="The Interior Design program explores both the artistic and technical aspects of enhancing interior spaces. It equips students with the skills to design environments that are not only visually appealing but also functional, comfortable, and conducive to the well-being of the people who use them. Through a balanced approach to creativity and practicality, the program prepares students to transform residential, commercial, and institutional spaces with purpose and style."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "This program provides comprehensive training in design principles, art fundamentals, drawing techniques, furniture design, material sourcing, interior graphics, and construction services. Students also gain hands-on experience with CAD, building materials, and real-world case studies to build a strong foundation in interior design. To prepare students for the future, the program incorporates exposure to emerging technologies such as Augmented Reality (AR) and Virtual Reality (VR).",
        },
        {
          title: "Be Industry Ready",
          description: "By the end of the program, students graduate with a well-rounded portfolio showcasing a variety of 3D interior design layouts, including living rooms, bedrooms, offices, restaurants, and commercial spaces. This professional portfolio serves as a powerful gateway to securing opportunities with leading interior design firms.",
        },
      ]}
      programHighlights={[
        "Enhance your design and visualisation abilities through structured, hands-on learning.",
        "Gain in-depth knowledge of the complete interior design production pipeline from concept to execution.",
        "Stay engaged and motivated with continuous assessments, design competitions, and creative activities.",
        "Participate in regular site visits and interact with industry professionals to gain real-world exposure and practical insights.",
        "Build strong technical skills by working with industry-standard tools like AutoCAD, SketchUp, and 3ds Max.",
        "Develop a professional portfolio that reflects creativity, functionality, and industry-readiness.",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
