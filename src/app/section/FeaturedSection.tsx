"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const featuredItems = [
  {
    title: "Handcrafted Floral Tote",
    category: "Fashion Art",
    image: "/hardcoded/pic1.jpeg",
    price: "$120",
    badge: "Featured",
  },
  {
    title: "Abstract Canvas Painting",
    category: "Wall Decor",
    image: "/hardcoded/pic2.jpeg",
    price: "$240",
    badge: "Featured",
  },
  {
    title: "Custom Embroidery Hoop",
    category: "Custom Art",
    image: "/hardcoded/pic3.jpeg",
    price: "$90",
    badge: "Featured",
  },
  {
    title: "Luxury Hand Paint",
    category: "Premium Decor",
    image: "/hardcoded/pic1.jpeg",
    price: "$180",
    badge: "Featured",
  },
];

export default function FeaturedSection() {
  return (
    <section className="relative overflow-hidden pt-20 text-white sm:py-24">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-[10px] uppercase tracking-[0.45em] text-yellow-400 sm:text-[11px]">
            Featured Collection
          </p>

          <h2 className="font-serif text-3xl text-white sm:text-5xl">
            Curated Artistic Pieces
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-zinc-400 sm:mt-5 sm:text-base sm:leading-7">
            Explore handcrafted luxury pieces made with soul, elegance, and
            timeless artistry.
          </p>
        </div>

        {/* ================= SLIDER ================= */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3 sm:-ml-4">
            {featuredItems.map((item, index) => (
              <CarouselItem
                key={item.title}
                className="basis-1/2 pl-3 sm:pl-4 md:basis-1/2 xl:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] shadow-[0_0_40px_rgba(255,255,255,0.02)] backdrop-blur-3xl sm:rounded-[28px]"
                >
                  {/* IMAGE */}
                  <div className="relative h-[220px] overflow-hidden sm:h-[420px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* BADGE */}
                    <div className="absolute left-3 top-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-[8px] uppercase tracking-[0.25em] text-yellow-400 backdrop-blur-xl sm:left-4 sm:top-4 sm:text-[10px]">
                      {item.badge}
                    </div>

                    {/* SOFT GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/[0.06] to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 w-full p-3 sm:p-6">
                    {/* CATEGORY */}
                    <p className="mb-1 text-[7px] uppercase tracking-[0.25em] text-yellow-400 sm:mb-2 sm:text-[10px] sm:tracking-[0.3em]">
                      {item.category}
                    </p>

                    {/* TITLE */}
                    <h3 className="line-clamp-2 font-serif text-[15px] leading-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    {/* FOOTER */}
                    <div className="mt-3 flex items-center justify-between sm:mt-4">
                      <p className="text-xs font-medium text-zinc-200 sm:text-lg">
                        {item.price}
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1.5 text-[10px] text-yellow-400 backdrop-blur-xl transition hover:bg-yellow-500/20 sm:gap-2 sm:px-5 sm:py-2 sm:text-sm"
                      >
                        <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
                        View
                      </motion.button>
                    </div>
                  </div>

                  {/* GLASS BORDER */}
                  <div className="absolute inset-0 rounded-[22px] border border-white/5 sm:rounded-[28px]" />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
