import type { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";

export const metadata: Metadata = {
  title: "About Zee Institute of Creative Arts (ZICA) Pitampura",
  description: "Zee Institute of Creative Arts (ZICA) Pitampura is the best institute for VFX, Animation, Graphic Design in Pitampura, Delhi with 100% Job Assistance.",
  alternates: {
    canonical: "https://zicapitampura.com/about-us",
  },
  openGraph: {
    title: "About Zee Institute of Creative Arts (ZICA) Pitampura",
    description: "Zee Institute of Creative Arts (ZICA) Pitampura is the best institute for VFX, Animation, Graphic Design in Pitampura, Delhi with 100% Job Assistance.",
    url: "https://zicapitampura.com/about-us",
    siteName: "ZICA - Zee Institute of Creative Arts",
    type: "website",
  },
  twitter: {
    title: "About Zee Institute of Creative Arts (ZICA) Pitampura",
    description: "Zee Institute of Creative Arts (ZICA) Pitampura is the best institute for VFX, Animation, Graphic Design in Pitampura, Delhi with 100% Job Assistance.",
  },
  other: {
    "itemprop:title": "About Zee Institute of Creative Arts (ZICA) Pitampura",
    "itemprop:description": "Zee Institute of Creative Arts (ZICA) Pitampura is the best institute for VFX, Animation, Graphic Design in Pitampura, Delhi with 100% Job Assistance.",
  },
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}