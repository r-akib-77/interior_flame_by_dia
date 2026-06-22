import type { Metadata } from "next";
import "./globals.css";

import { Inter, Instrument_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingSocials from "@/components/FloatingSocials";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: {
    default: "Interior Flame By Dia",
    template: "%s | Interior Flame By Dia",
  },

  description:
    "Interior Flame By Dia creates handcrafted paintings, custom embroidery hoops, wedding customized frames, hand-painted attire, accessories, and texture & collage artworks designed with creativity and passion.",

  keywords: [
    "Interior Flame By Dia",
    "Handmade Art",
    "Custom Artwork",
    "Canvas Painting",
    "Wedding Frames",
    "Embroidery Hoop",
    "Hand Painted Jacket",
    "Hand Painted Attire",
    "Luxury Art",
    "Bangladesh Artist",
    "Custom Gifts",
    "Wall Art",
    "Texture Art",
    "Collage Artwork",
    "Art Commission",
    "Personalized Artwork",
  ],

  authors: [
    {
      name: "Habiba Dia",
    },
  ],

  creator: "Habiba Dia",

  publisher: "Interior Flame By Dia",
  category: "Art & Handmade Crafts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable}`}>
        <main className="pt-36">
          <Navbar />
          {children}
          <FloatingSocials />
          <Footer />
        </main>
      </body>
    </html>
  );
}
