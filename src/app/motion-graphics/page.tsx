"use client";

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: MOTION GRAPHICS SYLLABUS",
    topics: [
      "Introduction to Motion Graphics",
      "Computer Graphics",
      "Digital Illustrations",
      "Video Editing",
      "Audio Editing",
      "Motion Graphics",
      "3D Object based Particle Plug-in",
      "Particle simulations and 3D effects for motion graphics",
    ],
  },
];

const CAREERS_LEFT = [
  "Motion Graphics Designer",
  "Video Editor / Compositor",
  "Broadcast Designer",
];

const CAREERS_RIGHT = [
  "Title Animator",
  "FX Developer",
  "Multimedia Layout Artist",
];

export default function MotionGraphicsPage() {
  return (
    <CoursePageTemplate
      courseId="motion-graphics"
      courseName="Motion Graphics"
      heroTitle={
        <>
          Motion <br />
          <span className="text-primary font-black">Graphics Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Our motion graphics program equips you with integration of Creative and Technical Skills."
      heroBgImage="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "Comprehensive Multimedia Skills Development.",
        "Advanced Motion Graphics and 3D Effects.",
        "Hands-on Experience with Industry-Standard Software.",
        "Integration of Creative and Technical Skills.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="PROGRAM IN MOTION GRAPHICS"
      courseDuration="6 Months"
      professionalsIntro="Explore the dynamic world of motion graphics through a comprehensive 6-month program. Delve into the fundamentals of design, animation, and compositing, mastering techniques from basic setting to advanced editing. Learn to craft captivating visuals, integrate audio seamlessly, and bring concepts to life with 3D elements and particle systems. Develop a diverse skill set in digital artistry and animation for a range of creative projects."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "Learn the fundamentals of motion graphics, computer graphics, and digital illustrations. Hone video and audio editing skills. Gain proficiency in Photoshop, Illustrator, Premiere, Audition, After Effects, Element 3D, and Trapcode. Build a strong portfolio showcasing your expertise in particle simulations and 3D effects. Stay updated on industry trends, seek feedback, and continuously refine your craft to ensure professional growth.",
        },
        {
          title: "Be Industry Ready",
          description: "Master motion graphics, computer graphics, and digital illustrations. Develop video and audio editing expertise using Photoshop, Illustrator, Premiere, Audition, and After Effects. Specialize in 3D effects with Element 3D and Trapcode. Build a strong portfolio, stay current with industry trends, and seek feedback to refine your skills for industry readiness.",
        },
      ]}
      programHighlights={[
        "Comprehensive Multimedia Skills Development",
        "Advanced Motion Graphics and 3D Effects",
        "Hands-on Experience with Industry-Standard Software",
        "Integration of Creative and Technical Skills",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
