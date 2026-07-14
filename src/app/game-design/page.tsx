import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Art Design Course in Delhi | ZICA Pitampura",
  description: "Design game characters & immersive environments. Learn game art using Unity, Unreal, and Blender at ZICA Pitampura. 100% Job Assistance.",
  alternates: {
    canonical: "https://zicapitampura.com/game-art-design-2/",
  },
  openGraph: {
    title: "Game Art Design Course in Delhi | ZICA Pitampura",
    description: "Design game characters & immersive environments. Learn game art using Unity, Unreal, and Blender at ZICA Pitampura. 100% Job Assistance.",
    url: "https://zicapitampura.com/game-art-design-2/",
    siteName: "ZICA - Zee Institute of Creative Arts",
    type: "website",
  },
  twitter: {
    title: "Game Art Design Course in Delhi | ZICA Pitampura",
    description: "Design game characters & immersive environments. Learn game art using Unity, Unreal, and Blender at ZICA Pitampura. 100% Job Assistance.",
  },
  other: {
    "itemprop:title": "Game Art Design Course in Delhi | ZICA Pitampura",
    "itemprop:description": "Design game characters & immersive environments. Learn game art using Unity, Unreal, and Blender at ZICA Pitampura. 100% Job Assistance.",
  },
};

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: PROGRAM IN GAME ART",
    topics: [
      "Introduction to Game Art",
      "Computer Graphics",
      "3D Modelling",
      "Human Figure Study",
      "Character design",
      "Organic / Character Modelling",
      "Texturing",
      "Lighting",
      "Rigging",
      "Character Animation",
    ],
  },
  {
    title: "Module 02: ADVANCED PROGRAM IN GAME & ART DESIGN",
    topics: [
      "Advance Character Sculpting for Game",
      "Advance Texturing",
      "FOLIAGE & PARTICLES / FX",
      "Level Design",
    ],
  },
];

const CAREERS_LEFT = [
  "Game Concept Artist",
  "3D Game Modeler",
  "Game Character Designer",
];

const CAREERS_RIGHT = [
  "Game Texture Specialist",
  "Game Level Designer",
  "Environment Artist",
];

export default function GameDesignPage() {
  return (
    <CoursePageTemplate
      courseId="game-design"
      courseName="Game Arts & Design"
      heroTitle={
        <>
          Game <br />
          <span className="text-primary font-black">Design Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Our Game Design program equips you with the creative and technical skills to train students in the art of creating organic and character models."
      heroBgImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "Learn to create concept Game Art, Storyboard, Digital Paint, Matte paint, Crate props, environment and character.",
        "To provide students with a foundational understanding of the principles and concepts specific to the field of game art.",
        "To teach the fundamental principles of computer graphics, including pixel manipulation, rendering, and image processing.",
        "To train students in the art of creating organic and character models with a focus on topology, realism, and aesthetics.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="Professional Program In Advanced Game Art"
      courseDuration="12 Months"
      professionalsIntro="The learning objectives for advanced game art and design encompass a broad range of skills and knowledge that are crucial for individuals aiming to excel in the field of game development. Develop a deep understanding of fundamental art principles such as color theory, composition, perspective, and visual storytelling. Proficiently use industry-standard 3D modeling software to create complex 3D assets, characters, and environments."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "Develop skills in character concept art, design, and character sheet creation, ensuring the consistency and appeal of in-game characters. Create immersive game environments by mastering level design, terrain modeling, and the use of assets like buildings, props, and terrain textures. Become proficient in game engines like Unreal Engine or Unity.",
        },
        {
          title: "Be Industry Ready",
          description: "Master the art of conveying narrative and storytelling elements through gameplay, level design, and environmental storytelling. Create a professional portfolio showcasing a diverse range of high-quality game art and design work that demonstrates your skills and creativity.",
        },
      ]}
      programHighlights={[
        "Increase design and visualisation skills",
        "Learn the complete Game Art production pipeline",
        "Continuous evaluation through examination, competitions and activities",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
