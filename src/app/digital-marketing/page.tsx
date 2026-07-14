import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Course in Delhi | ZICA Pitampura",
  description: "Learn SEO, SEM, Social Media, Google Ads & Analytics with live projects & certifications. Join Delhi’s top digital marketing course.",
  alternates: {
    canonical: "https://zicapitampura.com/digital-marketing/",
  },
  openGraph: {
    title: "Digital Marketing Course in Delhi | ZICA Pitampura",
    description: "Learn SEO, SEM, Social Media, Google Ads & Analytics with live projects & certifications. Join Delhi’s top digital marketing course.",
    url: "https://zicapitampura.com/digital-marketing/",
    siteName: "ZICA - Zee Institute of Creative Arts",
    type: "website",
  },
  twitter: {
    title: "Digital Marketing Course in Delhi | ZICA Pitampura",
    description: "Learn SEO, SEM, Social Media, Google Ads & Analytics with live projects & certifications. Join Delhi’s top digital marketing course.",
  },
  other: {
    "itemprop:title": "Digital Marketing Course in Delhi | ZICA Pitampura",
    "itemprop:description": "Learn SEO, SEM, Social Media, Google Ads & Analytics with live projects & certifications. Join Delhi’s top digital marketing course.",
  },
};

import React from "react";
import CoursePageTemplate from "@/components/CoursePageTemplate";

const MODULES = [
  {
    title: "Module 01: COURSE OUTLINE",
    topics: [
      "Introduction to Digital Marketing",
      "Search Marketing",
      "SEO (Search Engine Optimization)",
      "SEM (Search Engine Marketing)",
      "Content Marketing Manager",
      "Inbound Marketing Manager",
      "Web Analyst",
    ],
  },
];

const CAREERS_LEFT = [
  "Search Engine Optimiser",
  "SEM manager",
  "Social Media Marketing Manager",
];

const CAREERS_RIGHT = [
  "Content Marketing Manager",
  "Inbound Marketing Manager",
  "Web Analyst",
];

export default function DigitalMarketingPage() {
  return (
    <CoursePageTemplate
      courseId="digital-marketing"
      courseName="Digital Marketing"
      heroTitle={
        <>
          Digital <br />
          <span className="text-primary font-black">Marketing Courses at ZICA Pitampura</span>
        </>
      }
      heroSubtitle="Gain Practical Knowledge in SEO, Social Media, Content Marketing, and Analytics, Preparing You for a Successful Career in the Dynamic Digital Marketing Field."
      heroBgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
      highlights={[
        "Upon completion of ZICA's program, students receive a certificate and can also earn additional certifications from leading platforms like Google, Facebook, HubSpot, LinkedIn, and more.",
        "Enhance your technical expertise and improve your visualisation skills for real-world applications.",
        "Learn directly from Google-certified professionals with extensive industry experience.",
        "Gain proficiency in the latest digital marketing tools and platforms.",
        "Stay updated with emerging industry trends and best practices.",
        "Build a strong portfolio and network with professionals to jumpstart your career.",
      ]}
      highlightImages={[
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&auto=format&fit=crop",
      ]}
      courseFullName="Digital Marketing"
      courseDuration="6 Months"
      professionalsIntro="Digital marketing involves promoting products and services through digital platforms such as search engines, websites, social media, email, and mobile applications. Learn from Google-certified professionals and enroll in a course guided by industry experts. Gain in-depth knowledge of digital marketing strategies, including SEO, social media management, and email marketing. Build practical skills through hands-on projects and real-world campaigns. Stay current with the latest trends and tools in the digital marketing field. Receive personalized mentorship to master analytics and optimization techniques, preparing you to thrive in today's competitive digital environment."
      professionalsPoints={[
        {
          title: "Become a Professional Artist",
          description: "While digital marketing encompasses a broad range of activities, this program focuses on key areas such as digital marketing types and essential terminology, web advertising fundamentals, Google AdWords account setup, search engine marketing (SEM), display advertising, email marketing, mobile marketing, social media strategy, and Google Analytics. Gain a deep understanding of how these elements work together to drive success in modern business.",
        },
        {
          title: "Be Industry Ready",
          description: "By the end of the program, students will be equipped to either join an established digital marketing team or work independently, possessing a strong, in-depth understanding of digital marketing, social media strategies, and brand management.",
        },
      ]}
      programHighlights={[
        "Enhance your technical and visualisation skills, preparing you for real-world digital marketing challenges.",
        "Gain expertise in the entire digital marketing pipeline, from strategy development to execution.",
        "Benefit from dedicated placement support to help you secure opportunities in top organisations.",
        "Earn four industry-recognised certificates (ZICA, Google, Facebook, and HubSpot) to boost your credentials.",
        "Stay ahead of the curve with hands-on experience and continuous learning in the ever-evolving digital space.",
        "Develop a comprehensive understanding of data analytics, optimization, and performance tracking to maximize marketing effectiveness.",
      ]}
      modules={MODULES}
      careersLeft={CAREERS_LEFT}
      careersRight={CAREERS_RIGHT}
    />
  );
}
