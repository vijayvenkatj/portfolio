import React from "react";
import Head from "next/head";
import HomePage from "@/components/hero/homepage";

export default function Page() {
  return (
    <>
      <Head>
          <title>Vijay Venkat J | Full-Stack Developer & Cybersecurity Enthusiast</title>
          <meta name="description" content="Explore the portfolio of Vijay Venkat J, a full-stack developer specializing in React, Next.js, Node.js, and cybersecurity. Showcasing projects, blogs, and technical expertise." />
          <meta name="keywords" content="Full-Stack Developer, Next.js, React, Cybersecurity, Node.js, Portfolio" />
          <meta name="author" content="Vijay Venkat J" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          {/* Open Graph for Social Sharing */}
          <meta property="og:title" content="Vijay Venkat J | Full-Stack Developer & Cybersecurity Enthusiast" />
          <meta property="og:description" content="Discover my projects and expertise in Next.js, React, Node.js, and cybersecurity." />
          <meta property="og:url" content="https://vijayvenkatj.me/" />
          <meta property="og:type" content="website" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Vijay Venkat J | Full-Stack Developer & Cybersecurity Enthusiast" />
          <meta name="twitter:description" content="Explore the portfolio of Vijay Venkat J, a full-stack developer specializing in React, Next.js, Node.js, and cybersecurity." />

          {/* Canonical URL */}
          <link rel="canonical" href="https://vijayvenkatj.me/" />

          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vijay Venkat J",
              "jobTitle": "Full-Stack Developer & Cybersecurity Enthusiast",
              "url": "https://vijayvenkatj.me/",
              "sameAs": [
                "https://github.com/vijayvenkatj",
                "https://linkedin.com/in/vijayvenkatj",
              ]
            })}
          </script>
      </Head>

      {/* Render HomePage */}
      <HomePage />
    </>
  );
}
