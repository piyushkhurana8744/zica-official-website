"use client";

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: WEB DESIGN SYLLABUS",
    topics: [
      "Website Design concept",
      "Web Animation",
      "Scripting with Animate",
      "Website Basic",
      "Web Script",
      "Web Layout",
      "Server-Side Script",
      "Responsive Layout – UI",
      "Video Editing",
    ],
  },
];

const CAREERS_LEFT = [
  "UI Designer",
  "UX Designer",
  "Website creator",
];

const CAREERS_RIGHT = [
  "Web Animator",
  "Video Editor",
];

export default function WebDesignPage() {
  return (
    <CoursePageTemplate
      courseId="web-design"
      courseName="Web Design"
      heroTitle={
        <>
          Web <br />
          <span className="text-primary font-black">Design Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Our Web Design program equips you with the creative and technical skills to create an outstanding web design portfolio."
      heroBgImage="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "A complete web design program as per current market trend.",
        "Incredible placement record.",
        "Create an outstanding web design portfolio.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="Program in Web Design"
      courseDuration="6 Months"
      professionalsIntro="Web Design typically includes a combination of text, images, animation, audio-video & other interactive forms of media, embedded in the presentable form for web/internet. Learn website design from seasoned professionals. Gain insights into HTML, CSS, and JavaScript, and master design principles. Through proficiency in responsive design. Get hands-on experience and feedback. Build a portfolio showcasing your skills."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "By mastering website design, students can transform into professional artists of the digital realm. They cultivate expertise in combining technical skills, creativity, and user-centered design principles. Through proficiency in HTML, CSS, and design software, they craft visually captivating and functional web experiences.",
        },
        {
          title: "Be Industry Ready",
          description: "A website designer must be industry-ready, possessing a solid understanding of web development languages (HTML, CSS, JavaScript), design principles, and responsive design. They should excel in using industry-standard design software and tools.",
        },
      ]}
      programHighlights={[
        "Increase design and visualization skills",
        "Learn complete Web Design pipeline",
        "Continuous evaluation through competitions and activities",
        "Placement support",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
