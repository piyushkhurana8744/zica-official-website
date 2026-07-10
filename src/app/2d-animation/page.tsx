"use client";

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: FUNDAMENTALS OF ART, DESIGN & COMPUTER GRAPHICS (6 MONTHS)",
    topics: [
      "Preface",
      "Principles of Design",
      "Sketching",
      "Still life",
      "Cartoon Drawing",
      "Digital illustration",
      "Computer Graphics",
      "Human Figure Study",
      "Anatomy study",
      "Animal Study (Skeleton)",
      "Perspective Study",
      "Colour Theory",
      "Story",
      "Character design",
      "Master Layout Design",
      "Layout & Background",
    ],
  },
  {
    title: "Module 02: 2D DIGITAL ANIMATION & PRODUCTION (6 MONTHS)",
    topics: [
      "Introduction to Digital 2D Animation (Adobe Animate / Harmony)",
      "Principles of 2D Digital Animation",
      "Keyframing, In-betweening & Cleanups",
      "Character Lip-Sync & Facial Expressions",
      "Acting for Animators & Scene Staging",
      "Digital Background Painting & Coloring",
      "Audio & Video Editing Basics",
      "2D Compositing & Camera Effects",
      "Final Showreel Development & Review",
    ],
  },
];

const CAREERS_LEFT = [
  "2D Animator",
  "Concept & Character Designer",
  "Storyboard Artist",
];

const CAREERS_RIGHT = [
  "Layout & Background Artist",
  "2D Compositor / Editor",
  "Vector Illustrator",
];

export default function TwoDAnimationPage() {
  return (
    <CoursePageTemplate
      courseId="2d-animation"
      courseName="2D Animation"
      heroTitle={
        <>
          2D <br />
          <span className="text-primary font-black">Animation Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Build a Strong Career Foundation with Our Practical, Job-Oriented 2D Animation Program Across Multiple Industries"
      heroBgImage="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "This is a comprehensive certificate program that deals with all the important aspects of 2D & Visual Effects.",
        "The student begins with learning all the creative development exercises with manual and digital 2D animation processes.",
        "Sequential learning from fundamentals to advanced visual effects.",
        "Learn from experienced professionals in the animation industry.",
        "Graduates are prepared with competitive skills and strong portfolios.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="Professional Program In 2D Animation"
      courseDuration="12 Months"
      professionalsIntro="This program has been developed based on the current requirement of 2D Animators in the world. The prerequisite for the program is good drawing skills. Student will learn all the aspects of 2D Animation film making from Pre-production, Production and Post production. Student will initially learn fundamental of Art and design by manual drawing and then they will learn character design, background painting, character animation, audio and video editing by using advance digital tools."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "Well laid out assessment procedure ensures the students acceptability as distinguished professionals in the world of Animation. ZICA's placement cell provides placement assistance to all ZICA students across the country. ZICA training academy is equipped with high-end animation tools, 2D animation facilities, 3D software, Visual FX Labs and Imaging Technologies.",
        },
        {
          title: "Be Industry Ready",
          description: "Students walk away with a rich portfolio comprising the best Digital paint, Matte paint, Character design, and 2D digital Animation portfolio. This portfolio will be a gateway to joining the animation industry.",
        },
      ]}
      programHighlights={[
        "Increase design and visualisation skills",
        "Learn the complete 2D Production Pipeline",
        "Continuous evaluation through competitions and activities",
        "Placement support",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
