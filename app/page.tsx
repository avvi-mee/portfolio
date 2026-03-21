"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProject from "@/components/FeaturedProject";
import WhatIBuild from "@/components/WhatIBuild";
import SelectedWork from "@/components/SelectedWork";
import StartupSection from "@/components/StartupSection";
import ContactSection from "@/components/ContactSection";

// Load Three.js background only on client (no SSR)
const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cream-100">
      {/* 3D Background - fixed, pointer-events-none */}
      <ThreeBackground />

      {/* Page content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeaturedProject />
        <WhatIBuild />
        <SelectedWork />
        <StartupSection />
        <ContactSection />
      </div>
    </main>
  );
}
