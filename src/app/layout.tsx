import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickyGlassNavbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Vijay Venkat J | Full-Stack Developer & Cybersecurity Enthusiast",
  description: "Explore the portfolio of Vijay Venkat J, a full-stack developer specializing in React, Next.js, Node.js, and cybersecurity. Showcasing projects, blogs, and technical expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <StickyGlassNavbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
