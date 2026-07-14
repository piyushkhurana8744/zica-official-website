import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Animation Training Institute | ZICA Pitampura",
  description: "Master 3D animation tools like Maya &Blender. ZICA Pitampura offers job-ready training in modeling, rigging, texturing & rendering.",
  alternates: {
    canonical: "https://zicapitampura.com/3d-animations",
  },
  openGraph: {
    title: "3D Animation Training Institute | ZICA Pitampura",
    description: "Master 3D animation tools like Maya &Blender. ZICA Pitampura offers job-ready training in modeling, rigging, texturing & rendering.",
    url: "https://zicapitampura.com/3d-animations",
    siteName: "ZICA - Zee Institute of Creative Arts",
    type: "website",
  },
  twitter: {
    title: "3D Animation Training Institute | ZICA Pitampura",
    description: "Master 3D animation tools like Maya &Blender. ZICA Pitampura offers job-ready training in modeling, rigging, texturing & rendering.",
  },
  other: {
    "itemprop:title": "3D Animation Training Institute | ZICA Pitampura",
    "itemprop:description": "Master 3D animation tools like Maya &Blender. ZICA Pitampura offers job-ready training in modeling, rigging, texturing & rendering.",
  },
};

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: FUNDAMENTALS OF ART, DESIGN & COMPUTER GRAPHICS (6 MONTHS)",
    topics: [
      "Preface",
      "Sketching",
      "Human Figure Study",
      "Animal Study",
      "Perspective Study",
      "Colour Theory",
      "Story",
      "Master Layout Design",
      "Character Design",
      "Digital Illustration",
      "Storyboard",
      "Computer Graphics",
      "Digital 2D Animation",
    ],
  },
  {
    title: "Module 02: 3D DIGITAL ART (6 MONTHS)",
    topics: [
      "Video & Audio Editing",
      "Stopmotion",
      "3D Modelling",
      "Advanced Texturing",
      "Lighting",
      "Rigging",
    ],
  },
  {
    title: "Module 03: 3D CHARACTER ANIMATION (6 MONTHS)",
    topics: [
      "Body Mechanics & Weight Study",
      "Character Acting & Expressions",
      "Facial Rigging & Lip Syncing",
      "Walk/Run Cycles & Complex Locomotion",
      "Camera Composition & Path Animation",
    ],
  },
  {
    title: "Module 04: DYNAMICS & FX (6 MONTHS)",
    topics: [
      "Particle Systems & Simulation (Maya/Houdini)",
      "Rigid Body & Soft Body Dynamics",
      "Pyrotechnics, Fire & Smoke Simulations",
      "Fluid Dynamics & Water Effects",
      "Crowd Simulations & System Workflows",
    ],
  },
  {
    title: "Module 05: ADVANCED VFX & COMPOSITING (6 MONTHS)",
    topics: [
      "3D Camera Matchmoving & Tracking",
      "Advanced Rotoscopy & Clean Plate Paint",
      "Green Screen Chroma Keying & Color Extraction",
      "Multi-Pass CGI Integration in Foundry Nuke",
      "Rotomation & Digital Prep Pipelines",
    ],
  },
  {
    title: "Module 06: REAL-TIME PRODUCTION & SHOWREEL (6 MONTHS)",
    topics: [
      "Virtual Production Layout & Lighting",
      "Unreal Engine Integration & Scene Design",
      "Industry Portfolio Development",
      "Final Showreel Development & Presentation",
      "Studio Placements Preparation",
    ],
  },
];

const CAREERS_LEFT = [
  "3D Animator",
  "Character Modeler",
  "Rigging Artist",
];

const CAREERS_RIGHT = [
  "FX Simulation Lead",
  "Compositor",
  "Lighting & Shading TD",
];

export default function ThreeDAnimationPage() {
  return (
    <CoursePageTemplate
      courseId="3d-animation"
      courseName="3D Animation"
      heroTitle={
        <>
          3D <br />
          <span className="text-primary font-black">Animation Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Build a Strong Career Foundation with Our Practical, Job-Oriented 3D Animation Program Across Multiple Industries"
      heroBgImage="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "This is a comprehensive certificate program that deals with all the important aspects of 2D, 3D & Visual Effects.",
        "The student begins with learning all the creative development exercises with manual and digital 2D animation processes.",
        "Sequential learning from fundamentals to advanced visual effects.",
        "Learn from experienced professionals in the animation industry.",
        "Graduates are prepared with competitive skills and strong portfolios.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="PCDP In 3D Animation Visual Effects"
      courseDuration="36 Months"
      professionalsIntro="This is a comprehensive certificate program that deals with all the important aspects of 2D, 3D & Visual Effects. The student begins with learning all the creative development exercises with manual and digital 2D animation processes. The second module starts with all the basic elements of 3D digital art which in the later module progresses into advanced 3D Digital art and character animation. The remaining modules of the program deal with different aspects of Dynamics, tracking, and advanced Visual effects which are generally used in production studios."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "The program is designed by keeping in mind of the current & upcoming industry opportunities. The latest module, techniques and digital tools will make you a professional who can be employed immediately.",
        },
        {
          title: "Be Industry Ready",
          description: "The program is designed by keeping in mind of the current & upcoming industry opportunities. The latest module, techniques and digital tools will make you a professional who can be employed immediately.",
        },
      ]}
      programHighlights={[
        "Increase design and visualisation skills",
        "Learn the complete Pre-Production, Production and Post-Production Pipeline",
        "Introduction of the Augmented and Virtual Reality module",
        "Continuous evaluation through competitions and activities",
        "Placement support",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
