"use client";

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: UNREAL ENGINE GAME DEVELOPMENT SYLLABUS",
    topics: [
      "Unreal Engine Game Development",
      "Blueprint",
      "Levels",
      "Audio",
      "Project",
    ],
  },
];

const CAREERS_LEFT = [
  "Game Art designer",
  "Level Designer",
  "Blueprint Scripter",
  "Technical Artist",
  "3D Modeler/Animator",
  "Cinematic Artist",
];

const CAREERS_RIGHT = [
  "Simulation Developer",
  "Visual Effects (VFX) Artist",
  "Architectural Visualization Artist",
  "Automotive Visualization Specialist",
  "Technical Director",
  "Interactive Media Designer",
];

export default function UnrealEnginePage() {
  return (
    <CoursePageTemplate
      courseId="unreal-engine"
      courseName="Unreal Engine"
      heroTitle={
        <>
          Unreal <br />
          <span className="text-primary font-black">Engine Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Master Unreal Engine to Create Stunning 3D Environments, Real-Time Interactive Experiences, and Immersive Games with Industry-Leading Tools and Techniques."
      heroBgImage="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "In-depth Understanding of Game Design Fundamentals: Learn the essential principles that drive engaging and immersive gameplay experiences.",
        "Mastery of Blueprint Scripting in Unreal Engine: Build complex game logic visually without writing a single line of code.",
        "End-to-End Audio Integration Techniques: Implement sound effects, background music, and voiceovers to elevate your game's atmosphere.",
        "Real-World Project-Based Development: Apply your skills through hands-on projects that simulate industry-level game development.",
        "Designing Intuitive UI/UX for Games: Create user interfaces that enhance gameplay and provide a seamless player experience.",
        "Optimisation and Debugging Strategies: Fine-tune performance and resolve issues to ensure a smooth, high-quality final product.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="Unreal Engine"
      courseDuration="10 Months"
      professionalsIntro="This Unreal Engine course provides a complete beginner-friendly roadmap to building interactive game environments from the ground up. Participants will explore core game design principles, including level design, blueprint scripting, character and enemy mechanics, collision systems, and final game packaging for distribution. Through hands-on tutorials covering everything from basic interface navigation to advanced audio integration, students will acquire the practical skills to transform their game concepts into fully functional experiences using Unreal Engine."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "Transitioning into a professional 3D artist using Blender involves developing expertise in key areas such as modeling, texturing, lighting, and animation. A strong, diverse portfolio is essential—demonstrating a range of creative and technical skills across various project types. Active participation in online communities not only provides valuable feedback but also opens doors for networking and collaboration. Staying current with industry trends and software updates is crucial to remain competitive.",
        },
        {
          title: "Be Industry Ready",
          description: "To prepare for a career in the 3D industry after learning Blender, it's essential to develop proficiency in 3D modeling, texturing, lighting, and animation. Build a well-rounded portfolio that highlights a range of styles and project types to showcase your versatility. Actively engage in online communities to receive feedback, build connections, and stay informed about the latest industry developments.",
        },
      ]}
      programHighlights={[
        "Essential Principles of Game Design - Understand the core elements that make games engaging and enjoyable.",
        "Expertise in Blueprint Scripting - Create complex gameplay systems using Unreal Engine's powerful visual scripting tools.",
        "Advanced Audio Integration Techniques - Incorporate immersive sound effects, music, and voiceovers to enhance the player experience.",
        "Real-World Project Implementation - Apply learned skills by building and refining fully functional game prototypes.",
        "Interactive UI/UX Development - Design user-friendly interfaces that support intuitive gameplay and seamless interaction.",
        "Optimization and Performance Tuning - Learn to debug and tune your projects for smooth performance across platforms.",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
