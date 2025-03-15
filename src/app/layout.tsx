import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickyGlassNavbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Vijay Venkat J",
  description: "Portfolio website of Vijay Venkat J",
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
      </body>
    </html>
  );
}
