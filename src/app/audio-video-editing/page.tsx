import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Audio & Video Editing Course in Pitampura | ZICA",
  description: "Join ZICA Pitampura's Digital Audio & Video Editing course. Learn video editing, sound design, motion graphics, VFX etc.",
  alternates: {
    canonical: "https://zicapitampura.com/digital-audio-and-video-editing/",
  },
  openGraph: {
    title: "Digital Audio & Video Editing Course in Pitampura | ZICA",
    description: "Join ZICA Pitampura's Digital Audio & Video Editing course. Learn video editing, sound design, motion graphics, VFX etc.",
    url: "https://zicapitampura.com/digital-audio-and-video-editing/",
    siteName: "ZICA - Zee Institute of Creative Arts",
    type: "website",
  },
  twitter: {
    title: "Digital Audio & Video Editing Course in Pitampura | ZICA",
    description: "Join ZICA Pitampura's Digital Audio & Video Editing course. Learn video editing, sound design, motion graphics, VFX etc.",
  },
  other: {
    "itemprop:title": "Digital Audio & Video Editing Course in Pitampura | ZICA",
    "itemprop:description": "Join ZICA Pitampura's Digital Audio & Video Editing course. Learn video editing, sound design, motion graphics, VFX etc.",
  },
};

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: DIGITAL AUDIO & VIDEO EDITING SYLLABUS",
    topics: [
      "Overview of Editing",
      "Computer Graphics",
      "Audio Editing",
      "Video Editing",
      "Motion Graphics",
    ],
  },
];

const CAREERS_LEFT = [
  "Video Editor",
  "Audio Editor",
  "Motion Graphics Designer",
];

const CAREERS_RIGHT = [
  "Title Sequence Designer",
  "Broadcast Designer",
  "Multimedia Artist",
  "Interactive Media Designer",
];

export default function AudioVideoEditingPage() {
  return (
    <CoursePageTemplate
      courseId="audio-video-editing"
      courseName="Digital Audio and Video Editing"
      heroTitle={
        <>
          Digital Audio And <br />
          <span className="text-primary font-black">Video Editing Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Learn the Art of Digital Audio and Video Editing with Industry-Standard Tools, Mastering the Skills to Create High-Quality Content for Film, TV, and Online Media."
      heroBgImage="https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "Master the art of shooting and editing video and sound to create compelling films.",
        "Gain hands-on experience with industry-standard digital audio and video editing tools, ensuring professional-level output.",
        "Develop a diverse set of skills, from technical proficiency to creative and analytical thinking, to enhance your storytelling abilities.",
        "Explore the entire production pipeline, including pre-production planning, filming techniques, and post-production editing.",
        "Learn how to manipulate audio, sync sound with visuals, and create polished, high-quality content.",
        "Stay ahead of industry trends and continuously refine your skills to create impactful, engaging media that stands out in the digital world.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="Program In Digital Audio and Video Editing"
      courseDuration="3 Months"
      professionalsIntro="Video editing plays a crucial role in merging images, videos, and music to create an emotional connection and immerse viewers in the story. This program equips students with the skills to create both personal and professional videos, emphasizing the importance of attention to detail. Throughout the course, students will learn how to eliminate unwanted footage, establish a seamless flow, incorporate effects and graphics, add music, and adjust the style, pace, or mood to enhance the overall impact of the video."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "Starting the journey of mastering digital audio and video editing empowers individuals to become skilled professionals in the creative arts. By gaining technical proficiency in editing software, mastering sound and visual elements, and understanding the art of storytelling, students are equipped to craft captivating narratives, stunning visuals, and immersive experiences. This expertise paves the way for exciting careers in film, music production, advertising, and multimedia, enabling students to unleash their creativity and thrive in the dynamic field of digital media arts.",
        },
        {
          title: "Be Industry Ready",
          description: "Gain industry-ready skills through comprehensive digital audio and video editing education. Master editing software, audio engineering, and video production techniques. Learn the art of storytelling, visual composition, and sound design to enhance your creative projects. With hands-on practice, students build a professional portfolio that prepares them for careers in film, television, advertising, and multimedia production. This well-rounded training ensures students are equipped to meet industry standards and excel in the ever-evolving world of digital media.",
        },
      ]}
      programHighlights={[
        "Enhance your design and visualisation skills through practical exercises and projects.",
        "Master a range of multimedia tools and techniques essential for creating compelling content.",
        "Participate in continuous evaluations, including competitions and activities, to test and improve your abilities.",
        "Gain hands-on experience with industry-standard software and tools used by professionals.",
        "Refine your creative process and approach to problem-solving through real-world projects.",
        "Receive personalised feedback from experts to further develop your skills and ensure continuous improvement.",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
