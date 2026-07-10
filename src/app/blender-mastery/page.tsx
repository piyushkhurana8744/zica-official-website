"use client";

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: BLENDER MASTERY SYLLABUS",
    topics: [
      "Interface & Modeling",
      "Unwrap & Texture",
      "Materials",
      "Lighting & Rendering",
      "Rigging",
      "Dynamics & FX",
      "Animation",
    ],
  },
];

const CAREERS_LEFT = [
  "3D Asset Modeler",
  "Texture Artist",
  "Character Rigger",
];

const CAREERS_RIGHT = [
  "FX Simulation Artist",
  "3D Animator",
  "Lighting & Rendering Artist",
];

export default function BlenderMasteryPage() {
  return (
    <CoursePageTemplate
      courseId="blender-mastery"
      courseName="Blender Mastery"
      heroTitle={
        <>
          Blender <br />
          <span className="text-primary font-black">Mastery Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Master the Art of 3D Design, Modeling, Animation, and Rendering with Our Comprehensive Blender Program—From Basics to Pro-Level Projects."
      heroBgImage="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "A Well-Structured Learning Path That Covers Everything from Basics to Advanced Techniques",
        "Engage in Hands-On Projects to Apply Your Skills in Real-World Scenarios",
        "Receive In-Depth Training in Rigging, Animation, and Advanced Blender Tools",
        "Integrate Advanced Features to Create High-Quality 3d Models and Animations",
        "Gain Expertise in Various Blender Applications, Including Game Design, VFX, and Animation",
        "Learn from Industry Professionals and Stay Ahead with the Latest Trends and Techniques",
      ]}
      highlightImages={[
        "/images/bvoc_climbing_boy.png",
        "/images/blender_donuts.png",
        "/images/bvoc_cliff_city.png",
      ]}
      courseFullName="Blender Mastery"
      courseDuration="10 Months"
      professionalsIntro="This Blender program offers an all-encompassing curriculum for 3D modeling and animation, starting with the fundamentals such as creating and modifying mesh objects, applying modifiers for symmetrical designs, and progressing to advanced techniques like Boolean operations and UV mapping. Students will dive into rigging for both character animation and mechanical applications. The program also explores particle systems, dynamics, and simulations in detail. Animation principles, keyframing, graph editors, and pose libraries are covered to ensure a strong foundation. Finally, learners will explore advanced features like non-linear animation editing and audio integration, providing a well-rounded and thorough learning experience."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "Become proficient in Blender's interface, 3d modelling, texturing, and material creation. Master lighting, rendering, rigging, dynamics, VFX, and animation techniques. Learn keyframing, graph editing, and non-linear animation to bring your projects to life. Build a versatile portfolio that demonstrates your abilities, stay informed about industry trends, and regularly seek feedback to enhance your skills, ensuring you're fully prepared for a professional career in 3d modelling and animation.",
        },
        {
          title: "Be Industry Ready",
          description: "Master advanced techniques such as Boolean operations, UV mapping, and non-linear animation editing. Create a strong portfolio that highlights a wide range of projects. Keep up with the latest industry trends, collaborate with fellow creators, and pursue internships or freelance work to gain hands-on experience and build credibility in the 3D modeling and animation field.",
        },
      ]}
      programHighlights={[
        "Thorough and Structured Learning Journey, Covering Core and Advanced Concepts",
        "Practical, Hands-On Experience with Real-World Projects and Techniques",
        "In-Depth Training in Rigging, Animation, and Character Development",
        "Seamless Integration of Cutting-Edge Features and Tools",
        "Develop a Strong Portfolio That Showcases Your Mastery of 3D Modeling and Animation",
        "Receive Expert Guidance and Feedback to Perfect Your Skills and Techniques",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
