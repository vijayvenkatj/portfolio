import React from "react";
import Head from "next/head";
import HomePage from "@/components/hero/homepage";

export default function Page() {
  return (
    <>
      {/* SEO-Optimized Metadata */}
      <Head>
        <title>Vijay Venkat J | Full-Stack Developer & Cybersecurity Enthusiast</title>
        <meta name="description" content="Explore the portfolio of Vijay Venkat J, a full-stack developer specializing in React, Next.js, Node.js, and cybersecurity. Showcasing projects, blogs, and technical expertise." />
        <meta name="keywords" content="Full-Stack Developer, Next.js, React, Cybersecurity, Node.js, Portfolio" />
        <meta name="author" content="Vijay Venkat J" />
        
        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Vijay Venkat J | Full-Stack Developer & Cybersecurity Enthusiast" />
        <meta property="og:description" content="Discover my projects and expertise in Next.js, React, Node.js, and cybersecurity." />
        <meta property="og:url" content="https://vijayvenkatj.me/" />
        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://vijayvenkatj.me/" />
      </Head>

      {/* Render HomePage */}
      <HomePage />
    </>
  );
}
