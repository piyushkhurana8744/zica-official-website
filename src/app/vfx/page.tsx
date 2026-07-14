import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VFX Course in Delhi | ZICA Pitampura",
  description: "Explore the world of VFX with advanced training in compositing, motion graphics & CGI. Launch your VFX career with ZICA Pitampura.",
  alternates: {
    canonical: "https://zicapitampura.com/visual-effects-vfx-2/",
  },
  openGraph: {
    title: "VFX Course in Delhi | ZICA Pitampura",
    description: "Explore the world of VFX with advanced training in compositing, motion graphics & CGI. Launch your VFX career with ZICA Pitampura.",
    url: "https://zicapitampura.com/visual-effects-vfx-2/",
    siteName: "ZICA - Zee Institute of Creative Arts",
    type: "website",
  },
  twitter: {
    title: "VFX Course in Delhi | ZICA Pitampura",
    description: "Explore the world of VFX with advanced training in compositing, motion graphics & CGI. Launch your VFX career with ZICA Pitampura.",
  },
  other: {
    "itemprop:title": "VFX Course in Delhi | ZICA Pitampura",
    "itemprop:description": "Explore the world of VFX with advanced training in compositing, motion graphics & CGI. Launch your VFX career with ZICA Pitampura.",
  },
};

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: FUNDAMENTALS OF ART, DESIGN & COMPUTER GRAPHICS (6 MONTHS)",
    topics: [
      "Introduction",
      "Fundamentals of Art",
      "Computer Graphics",
      "Principles of Design",
      "Perspective",
      "Color Theory",
      "Storyboard",
    ],
    hasFilmmaking: true,
    filmmakingTopics: [
      "Foundation",
      "Screen Writing",
      "Direction – 1",
      "Acting",
      "Cinematography",
      "Film Editing",
      "Sound Design",
      "Direction – 2",
      "Other Formats",
    ],
  },
  {
    title: "Module 02: 3D CG ASSETS & CHARACTERS (6 MONTHS)",
    topics: [
      "3D Modelling & Hard Surface Layout",
      "Organic & Character Modeling Basics",
      "UV Mapping & Layout Coordinates",
      "Advanced Texturing & Substance Painter Setup",
      "CGI Studio Lighting & Multi-Light Layouts",
      "Arnold Shader Materials & Rendering Pipelines",
    ],
  },
  {
    title: "Module 03: DYNAMICS, MATCHMOVING & TRACKING (6 MONTHS)",
    topics: [
      "Introduction to Dynamic Simulation Systems",
      "Particles, Rigid & Soft Body Dynamics",
      "Fluid Dynamics (Water, Liquid Effects)",
      "Pyrotechnics (Flame, Smoke & Explosions)",
      "Matchmoving & 3D Camera Tracking Basics",
      "Object Tracking & Rotomation Pipelines",
    ],
  },
  {
    title: "Module 04: COMPOSITING & VFX FILM PROJECT (6 MONTHS)",
    topics: [
      "Introduction to Node-Based Compositing (Foundry Nuke)",
      "Advanced Rotoscopy & Paint Clean Plates",
      "Green Screen Chroma Keying & Color Extraction",
      "Multi-Pass CG Integration & Timelines",
      "VFX Production Workflows & Pipeline Coordination",
      "Final Year VFX Short Film Project & Presentation",
    ],
  },
];

const CAREERS_LEFT = [
  "VFX Compositor",
  "Matchmove Technical Director",
  "Roto & Paint Artist",
];

const CAREERS_RIGHT = [
  "FX Simulation Artist",
  "3D CG Tracking Specialist",
  "VFX Production Supervisor",
];

export default function VfxPage() {
  return (
    <CoursePageTemplate
      courseId="vfx"
      courseName="VFX"
      heroTitle={
        <>
          Visual <br />
          <span className="text-primary font-black">(VFX) Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Our visual effects program equips you with the creative and technical skills to plan, design, and transform program to cater to exceedingly growing demand in the industry"
      heroBgImage="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "Comprehensive Animation and Visual Effects (VFX) program to develop creative minds",
        "Practical projects with industry-standard software.",
        "Sequential learning from fundamentals to advanced visual effects.",
        "Learn from experienced professionals in the animation industry.",
        "Graduates are prepared with competitive skills and strong portfolios.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="Visual Effects (VFX)"
      courseDuration="24 Months"
      professionalsIntro="This program has been designed to deal with Filmmaking by using Live Action, 3D Animation & Visual Effects. The first module deals with Fundamentals of Art, Design & Composition. A student then understands the basics of Photography and Filmmaking. The second module covers CG Assets & Characters, Rigging & Animation that is required for a VFX film. The third module deals with Dynamics & Tracking. The fourth module combines CG with live action footage using timelines and a node-based compositing software. At the end of the program, the student develops a Visual Effects short film using Live Action & CG."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "A well laid out assessment procedure ensures the students' acceptability as distinguished professionals in the world of Visual Effects. ZICA's placement cell provides placement assistance to all ZICA students across the country. ZICA training academy is equipped with high-end animation tools, 2D animation facilities, 3D software, Visual FX Labs and Imaging Technologies.",
        },
        {
          title: "Be Industry Ready",
          description: "Students walk away with a rich portfolio comprising of live action, 3D and VFX project. This portfolio will be a gateway to joining animation and visual effect industry.",
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
