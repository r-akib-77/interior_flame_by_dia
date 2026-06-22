import React from "react";
import HeroSection from "./sections/Hero";
import AboutArtist from "./sections/About";
import ArtistStats from "./sections/Card";
import CustomOrderProcess from "./sections/CustomOrderProcess";
import ArtRibbon from "./sections/ArtRibbon";

export default function page() {
  return (
    <>
      <HeroSection />
      <ArtRibbon />
      <AboutArtist />
      <ArtistStats />
      <CustomOrderProcess />
    </>
  );
}
