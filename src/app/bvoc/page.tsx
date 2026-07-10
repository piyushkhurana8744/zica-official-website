"use client";

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: FUNDAMENTALS OF ART, DESIGN & COMPUTER GRAPHICS (6 MONTHS)",
    topics: [
      "Fundamentals of Drawing & Anatomy",
      "Color Theory & Light Study",
      "Perspective & Composition Guides",
      "Digital Painting in Adobe Photoshop",
      "Vector Design in Adobe Illustrator",
      "Concepts of Pre-Visualization & Scripting",
    ],
  },
  {
    title: "Module 02: 3D DIGITAL ART (6 MONTHS)",
    topics: [
      "Introduction to 3D Workspaces (Autodesk Maya)",
      "Hard Surface & Organic Modeling",
      "Texture Painting & Substance Painter Workflows",
      "UV Mapping & Layout Optimization",
      "Shading & Materials Setup",
      "Rendering Basics with Arnold",
    ],
  },
  {
    title: "Module 03: LIGHTING, RIGGING & CHARACTER ANIMATION (6 MONTHS)",
    topics: [
      "Character Setup & Anatomy Rigging",
      "Skinning & Blendshapes",
      "Principles of Keyframe Animation",
      "Facial Expressions & Lip Syncing",
      "Production Studio Lighting Techniques",
      "Camera Composition & Path Animation",
    ],
  },
  {
    title: "Module 04: DYNAMICS AND MOTION GRAPHICS (6 MONTHS)",
    topics: [
      "Particle Systems & Simulation (Maya/Houdini)",
      "Rigid Body & Soft Body Dynamics",
      "Motion Design in Adobe After Effects",
      "Typography & Infographics Animation",
      "Audio Editing & Sound Synchronization",
      "Pre-production for Motion Design Projects",
    ],
  },
  {
    title: "Module 05: VISUAL EFFECTS (6 MONTHS)",
    topics: [
      "Introduction to Advanced Compositing (Foundry Nuke)",
      "Rotoscopy & Paint Operations",
      "Chroma Keying & Green Screen Extraction",
      "Matchmoving & 3D Camera Tracking",
      "Multi-Pass CG Integration",
      "Color Correction & Grading Pipelines",
    ],
  },
  {
    title: "Module 06: ADVANCED VISUAL EFFECTS (6 MONTHS)",
    topics: [
      "Advanced Pyrotechnics & Fluid Simulations",
      "Procedural Destruction & Crowd Simulations",
      "Deep Compositing Workflows",
      "Unreal Engine for Real-Time Production",
      "Final Showreel Development & Review",
      "Studio Placements Preparation",
    ],
  },
];

const CAREERS_LEFT = [
  "3D Modeler",
  "VFX Compositor",
  "Character Animator",
  "Motion Graphics Artist",
  "Game Designer",
];

const CAREERS_RIGHT = [
  "Texturing & Shading Artist",
  "Rigging TD (Technical Director)",
  "Lighting Artist",
  "Production Coordinator",
  "Rotoscopy/Paint Artist",
];

export default function BVocPage() {
  return (
    <CoursePageTemplate
      courseId="bvoc"
      courseName="B.Voc Degree"
      heroTitle={
        <>
          B.Voc <br />
          <span className="text-primary font-black">Animation & Multimedia at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Our B.Voc Degree program equips you with the creative and technical skills to plan, design, and transform residential and commercial environments."
      heroBgImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "Comprehensive Animation and Visual Effects (VFX) program to develop creative minds",
        "Practical projects with industry-standard software.",
        "Sequential learning from fundamentals to advanced visual effects.",
        "Learn from experienced professionals in the animation industry.",
        "Graduates are prepared with competitive skills and strong portfolios.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="B.Voc Degree"
      courseDuration="36 Months"
      professionalsIntro="This in-depth degree program offers extensive training in art, design, and digital media. Students gain hands-on experience in illustration, 3D modeling, rigging, animation, dynamics, and advanced visual effects. Using industry-standard software like Maya, ZBrush, Houdini, and others, the curriculum prepares students with the creative and technical skills needed to thrive in the fast-paced world of digital media and visual effects production."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "To pursue a career as a professional artist, begin by mastering the fundamentals of sketching and design. Progress to advanced skills in 3D modeling, animation, and visual effects, while developing proficiency in industry-standard software such as Maya, After Effects, Nuke, and Houdini. Build a compelling portfolio that highlights a variety of projects, and stay current with evolving industry trends. Consistent networking and lifelong learning are key to establishing and growing a successful career in the digital arts.",
        },
        {
          title: "Be Industry Ready",
          description: "By the end of this comprehensive program, students will be fully prepared for the industry, having mastered core principles of art and design, 3D digital creation, and advanced animation techniques. They will develop strong proficiency in Maya for modeling, texturing, rigging, and animation, along with expertise in dynamics, motion graphics, and visual effects. Through hands-on training and practical projects, the curriculum ensures graduates are ready to take on real-world challenges in the animation and VFX sectors.",
        },
      ]}
      programHighlights={[
        "Develop essential skills through a structured journey from foundational concepts to advanced techniques.",
        "Work on practical, hands-on projects using industry-standard software.",
        "Follow a sequential learning path that builds from core fundamentals to complex visual effects.",
        "Learn directly from seasoned professionals with real-world animation industry experience.",
        "Graduate with competitive, job-ready skills and a diverse, professional-quality portfolio.",
        "Master advanced compositing, motion tracking, and procedural visual effects for high-end production work.",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
