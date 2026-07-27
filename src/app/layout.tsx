import type { Metadata } from "next";
import { Inter, Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import FloatingContactWidgets from "@/components/FloatingContactWidgets";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZICA | Zee Institute of Creative Art - Animation, VFX & Design",
  description: "India's premier creative institute offering specialized courses in 2D/3D Animation, VFX, Game Design, Interior Design, Graphic Design, and more.",
  icons: {
    icon: "/zica-favicon.ico",
    shortcut: "/zica-favicon.ico",
    apple: "/zica-favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head />
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
          <FloatingContactWidgets />
        </ThemeProvider>
      </body>
    </html>
  );
}
