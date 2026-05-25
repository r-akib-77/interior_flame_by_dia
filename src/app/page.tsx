import React from "react";

import HeroSection from "./section/HeroSection";
import FeaturedSection from "./section/FeaturedSection";
import AboutArtist from "./section/AboutArtsist";
import CustomCreationSection from "./section/CustomOrderSection";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* ================= GLOBAL LUXURY BACKGROUND ================= */}

      {/* WARM BASE GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#5a3814_0%,transparent_26%),radial-gradient(circle_at_bottom_right,#2a1820_0%,transparent_28%),radial-gradient(circle_at_center,#0d0d0d_0%,#050505_100%)]" />

      {/* GOLDEN GLOW */}
      <div className="absolute left-[-120px] top-[-120px] h-[520px] w-[520px] rounded-full bg-amber-400/10 blur-[140px]" />

      {/* ROSE GLOW */}
      <div className="absolute bottom-[-180px] right-[-120px] h-[600px] w-[600px] rounded-full bg-rose-500/10 blur-[160px]" />

      {/* CENTER LIGHT */}
      <div className="absolute left-1/2 top-[20%] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[130px]" />

      {/* SOFT VIGNETTE */}
      <div className="absolute inset-0 bg-black/20" />

      {/* GRID EFFECT */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* NOISE TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* GLASS OVERLAY */}
      <div className="absolute inset-0 backdrop-blur-[100px]" />

      {/* ================= FLOATING LIGHTS ================= */}

      <div className="absolute left-[10%] top-[30%] h-3 w-3 rounded-full bg-amber-300/70 shadow-[0_0_20px_rgba(251,191,36,0.8)]" />

      <div className="absolute right-[15%] top-[20%] h-2 w-2 rounded-full bg-rose-300/70 shadow-[0_0_18px_rgba(253,164,175,0.8)]" />

      <div className="absolute bottom-[20%] left-[20%] h-2 w-2 rounded-full bg-yellow-200/70 shadow-[0_0_18px_rgba(254,240,138,0.8)]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10">
        {/* MAIN GLASS WRAPPER */}
        <div className="relative mx-auto max-w-[1600px] border-x border-white/[0.06] bg-white/[0.025] shadow-[0_0_120px_rgba(255,255,255,0.03)] backdrop-blur-3xl">
          {/* TOP LIGHT */}
          <div className="absolute left-1/2 top-0 h-[1px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

          {/* HERO */}
          <HeroSection />

          {/* FEATURED */}
          <FeaturedSection />

          {/* ABOUT */}
          <AboutArtist />

          {/* CUSSOM ORDER */}
          <CustomCreationSection />
        </div>
      </div>
    </main>
  );
}
