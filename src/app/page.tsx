import React from "react";
import HeroSection from "./sections/Hero";
import AboutArtist from "./sections/About";
import ArtistStats from "./sections/Card";
import CustomOrderProcess from "./sections/CustomOrderProcess";

export default function page() {
  return (
    <>
      <HeroSection />
      <AboutArtist />
      <ArtistStats />
      <CustomOrderProcess />  
    </>
  );
}
