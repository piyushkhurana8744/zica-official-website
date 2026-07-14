import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Photography Course | ZICA Pitampura",
  description: "Learn to capture professional photos with DSLR training, lighting techniques & photo editing using Lightroom & Photoshop at ZICA Pitampura.",
  alternates: {
    canonical: "https://zicapitampura.com/digital-photography/",
  },
  openGraph: {
    title: "Digital Photography Course | ZICA Pitampura",
    description: "Learn to capture professional photos with DSLR training, lighting techniques & photo editing using Lightroom & Photoshop at ZICA Pitampura.",
    url: "https://zicapitampura.com/digital-photography/",
    siteName: "ZICA - Zee Institute of Creative Arts",
    type: "website",
  },
  twitter: {
    title: "Digital Photography Course | ZICA Pitampura",
    description: "Learn to capture professional photos with DSLR training, lighting techniques & photo editing using Lightroom & Photoshop at ZICA Pitampura.",
  },
  other: {
    "itemprop:title": "Digital Photography Course | ZICA Pitampura",
    "itemprop:description": "Learn to capture professional photos with DSLR training, lighting techniques & photo editing using Lightroom & Photoshop at ZICA Pitampura.",
  },
};

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: DIGITAL PHOTOGRAPHY SYLLABUS",
    topics: [
      "History",
      "Digital Camera",
      "Camera Lenses",
      "Photography Techniques",
      "Digital Photo Editing",
      "Post-Photography Session",
    ],
  },
];

const CAREERS_LEFT = [
  "Portrait Photographer",
  "Wedding Photographer",
  "Commercial Photographer",
  "Fashion Photographer",
  "Photojournalist",
  "Food Photographer",
];

const CAREERS_RIGHT = [
  "Travel Photographer",
  "Wildlife Photographer",
  "Architectural Photographer",
  "Sports Photographer",
  "Event Photographer",
  "Product Photographer",
];

export default function DigitalPhotographyPage() {
  return (
    <CoursePageTemplate
      courseId="digital-photography"
      courseName="Digital Photography"
      heroTitle={
        <>
          Digital <br />
          <span className="text-primary font-black">Photography Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Capture the World Through Your Lens with Our Comprehensive Digital Photography Program Designed for Aspiring Professionals."
      heroBgImage="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "Uncover the essentials of digital photography—from understanding camera types and gear care to mastering exposure in any environment.",
        "Get hands-on with lenses and filters, learning how each choice shapes the story your image tells.",
        "Explore the art of composition, lighting, and motion to bring your creative vision to life across various photography styles.",
        "Transform raw shots into polished visuals using advanced editing techniques, tonal control, and contrast adjustments.",
        "Blend imagination with precision as you dive into photo recreation, artistic integration, colour calibration, and professional-grade printing.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1452784444945-3f422708fe5e?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="Program In Digital Photography"
      courseDuration="3 Months"
      professionalsIntro="Advancements in technology have significantly reduced the cost of digital cameras and editing software, making it easier for aspiring photographers to produce stunning images without a large investment. With powerful in-camera features and user-friendly editing tools, digital photography offers a fresh, accessible platform for creative expression, distinct from traditional film photography."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "Students will gain in-depth knowledge of digital photography, including exposure control, lens and optical principles, creative techniques, and various photographic styles. The course covers essential elements such as composition, visual storytelling, lighting methods, depth of field, and aperture control. Learners will also master photo editing using Photoshop and Lightroom, blending artistic vision with technical skill, and understanding color management and printing. Whether pursued as a hobby or a professional career path, this program offers valuable skills for every photography enthusiast.",
        },
        {
          title: "Be Industry Ready",
          description: "By the end of the Digital Photography course, students will emerge as industry-ready professionals equipped with a solid grasp of photography's history, digital camera functionality, and lens technology. They'll master advanced shooting techniques, photo editing, color management, and professional printing. With practical experience and a sharpened creative eye, graduates will be fully prepared to thrive in the dynamic world of digital photography and meet the demands of the professional landscape.",
        },
      ]}
      programHighlights={[
        "Enhance your visual storytelling and technical photography skills through structured, hands-on learning.",
        "Learn directly from seasoned professional photographers with years of industry experience.",
        "Master advanced photo editing tools, including tonal correction, contrast control, and creative enhancement techniques.",
        "Build a strong foundation in lighting, composition, and camera handling for both studio and outdoor photography.",
        "Develop a professional portfolio that reflects your unique style and creative growth.",
        "Gain insights into industry trends, workflow optimization, and real-world applications to kickstart your career or hobby.",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
