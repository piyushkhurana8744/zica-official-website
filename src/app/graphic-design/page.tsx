"use client";

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: Fundamental Of Art, Design, Illustration And Computer Graphics (6 Months)",
    topics: [
      "Fundamentals of Drawing",
      "Principle of Design",
      "Colour Theory",
      "Digital Illustrations – 1",
      "Computer Graphics",
      "Digital Illustrations – 2",
    ],
  },
  {
    title: "Module 02: Layout Design, Ui, Motion Graphics, 3d Photorealistic Design (6 Months)",
    topics: [
      "Layout Design",
      "Design for Printing, Advertising and Packaging",
      "Video Editing",
      "Audio Editing",
      "Motion Graphics",
      "User Interface – 1",
      "User Interface – 2",
      "Photorealistic 3D Design",
      "Project",
    ],
  },
];

const CAREERS_LEFT = [
  "Graphic Designer",
  "Brand Identity Specialist",
  "Ad Campaign Designer",
];

const CAREERS_RIGHT = [
  "Packaging Designer",
  "Illustrator / Concept Artist",
  "Studio Creative Lead",
];

export default function GraphicDesignPage() {
  return (
    <CoursePageTemplate
      courseId="graphic-design"
      courseName="Graphic Design"
      heroTitle={
        <>
          Graphic <br />
          <span className="text-primary font-black">Design Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Build a Strong Career Foundation with Our Practical, Job-Oriented Graphic Design Program Across Multiple Industries"
      heroBgImage="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "Comprehensive Graphic design program to cater extremely growing demand in the industry.",
        "A wide range of graphic design job opportunities.",
        "Introduction of Augmented and Virtual Reality.",
        "Create an outstanding portfolio.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="GRAPHIC DESIGN"
      courseDuration="12 Months"
      professionalsIntro="Graphic designers create visual concepts to communicate ideas that inspire, inform or captivate consumers. Students will develop the overall layout and production design for advertisements, brochures, magazines and corporate reports. The graphic design industry has been evolved with a more presentable design due to which we have updated the program with the latest tools and technologies so that student can create outstanding artworks."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "This program is divided into two parts, the first part deals with fundamental of art, design, digital illustration and computer graphics. We focus on teaching how to make business collaterals such as logos, posters, marketing collaterals, package design etc. by using digital tools. The second module of the program deals with design prototyping, Design for Printing, Advertising, Packaging and Photorealistic 3D Design. At the end of the module, students will also get an opportunity to create an outstanding project.",
        },
        {
          title: "Be Industry Ready",
          description: "Students walk away with a rich portfolio comprising of text, image, illustrations, logo design etc. This portfolio will be a gateway to joining the graphic design industry.",
        },
      ]}
      programHighlights={[
        "Increase design and visualization skills",
        "Learn complete Graphic Design production pipeline",
        "Continuous evaluation through examination, competitions, and activities",
        "Placement support",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
