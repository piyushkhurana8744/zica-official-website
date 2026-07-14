import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Course in Delhi | ZICA Pitampura",
  description: "Learn UI/UX design with wireframing, prototyping & design systems. ZICA’s curriculum covers Figma, Adobe XD & usability best practices.",
  alternates: {
    canonical: "https://zicapitampura.com/ui-ux-2/",
  },
  openGraph: {
    title: "UI/UX Design Course in Delhi | ZICA Pitampura",
    description: "Learn UI/UX design with wireframing, prototyping & design systems. ZICA’s curriculum covers Figma, Adobe XD & usability best practices.",
    url: "https://zicapitampura.com/ui-ux-2/",
    siteName: "ZICA - Zee Institute of Creative Arts",
    type: "website",
  },
  twitter: {
    title: "UI/UX Design Course in Delhi | ZICA Pitampura",
    description: "Learn UI/UX design with wireframing, prototyping & design systems. ZICA’s curriculum covers Figma, Adobe XD & usability best practices.",
  },
  other: {
    "itemprop:title": "UI/UX Design Course in Delhi | ZICA Pitampura",
    "itemprop:description": "Learn UI/UX design with wireframing, prototyping & design systems. ZICA’s curriculum covers Figma, Adobe XD & usability best practices.",
  },
};

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: UI & UX DESIGN COURSE SYLLABUS",
    topics: [
      "Computer Graphics",
      "Introduction to UI/ UX design",
      "Introduction to Design Principles",
      "Colour Theory",
      "Typography",
      "Laws of UX design",
      "Problem Defining Documentation",
      "Defining the Research Data",
      "Digital Illustrations",
      "User Interface",
      "Collaborative Ideation",
      "Advance Wireframing and usability testing",
      "Design System and UI Design Advance",
      "Assignment / Project",
    ],
  },
];

const CAREERS_LEFT = [
  "UI/UX Designer",
  "Product Designer",
  "Interaction Designer",
];

const CAREERS_RIGHT = [
  "Visual Designer",
  "UX Researcher",
  "Information Architect",
];

export default function UiUxPage() {
  return (
    <CoursePageTemplate
      courseId="ui-ux"
      courseName="UI & UX"
      heroTitle={
        <>
          UI &amp; <br />
          <span className="text-primary font-black">UX Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Our UI & UX program equips you with the creative and technical skills to explore UI/UX design principles to create user-centered digital experiences."
      heroBgImage="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "Explore UI/UX design principles to create user-centered digital experiences.",
        "Master color theory and typography for visually compelling design projects.",
        "Conduct research and define problems for effective design documentation.",
        "Develop skills in digital illustrations and advanced wireframing techniques.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="UI & UX"
      courseDuration="8 Months"
      professionalsIntro="This comprehensive program is an immersive 8-month journey into UI & UX design, exploring foundational concepts such as design principles, color theory, and typography. Delve into the laws of UX and learn to define and document problems effectively. Harness digital illustration techniques and collaborative ideation strategies. Master advanced wireframing, usability testing, and design system implementation, culminating in real-world project assignments to solidify skills and expertise."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "To become a professional artist, master computer graphics, UI/UX design, and design principles. Study color theory, typography, and UX laws to create visually appealing and user-friendly designs. Develop skills in problem defining, research documentation, digital illustrations, and user interfaces. Engage in collaborative ideation, advanced wireframing, and usability testing. Utilize tools like Photoshop, Illustrator, Adobe XD, and Figma for practical experience. Complete projects to showcase your expertise and creativity.",
        },
        {
          title: "Be Industry Ready",
          description: "Mastering this UI/UX program equips you with essential skills like typography, color theory, and digital illustrations. You'll learn to use industry-standard tools such as Photoshop, Illustrator, and Figma. With hands-on projects, advanced wireframing, and usability testing, you'll develop a robust design system, making you industry-ready for a dynamic UI/UX career.",
        },
      ]}
      programHighlights={[
        "Learn computer graphics essentials for impactful and creative digital designs.",
        "Explore UI/UX design principles to create user-centered digital experiences.",
        "Master color theory and typography for visually compelling design projects.",
        "Conduct research and define problems for effective design documentation.",
        "Develop skills in digital illustrations and advanced wireframing techniques.",
        "Utilise industry-standard software for collaborative ideation and usability testing.",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
