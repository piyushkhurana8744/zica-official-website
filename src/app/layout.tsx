import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import FloatingContactWidgets from "@/components/FloatingContactWidgets";

export const metadata: Metadata = {
  title: "ZICA | Zee Institute of Creative Art - Animation, VFX & Design",
  description: "India's premier creative institute offering specialized courses in 2D/3D Animation, VFX, Game Design, Interior Design, Graphic Design, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingContactWidgets />
      </body>
    </html>
  );
}

