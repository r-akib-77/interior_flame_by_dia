"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 text-white sm:py-28">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ================= IMAGE SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative order-1 flex items-center justify-center py-10 lg:order-2"
          >
            {/* MAIN IMAGE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -8, 0], rotate: [-2, 0, -2] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="group relative h-[390px] w-[280px] overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] shadow-[0_0_60px_rgba(255,215,0,0.08)] backdrop-blur-3xl sm:h-[500px] sm:w-[360px] md:h-[560px] md:w-[420px]"
            >
              <Image
                src="/heroImage/pic3.jpeg"
                alt="Interior Flame Artwork"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* TEXT */}
              <p className="absolute bottom-6 left-6 font-serif text-base italic tracking-wide text-zinc-100">
                Acrylic Canvas Still Life
              </p>
            </motion.div>

            {/* TOP RIGHT FLOAT CARD */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              animate={{ y: [0, 10, 0], rotate: [-6, -4, -6] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="group absolute right-[-10px] top-[10px] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-3xl sm:right-[-25px]"
            >
              <Image
                src="/heroImage/pic1.jpeg"
                alt="Decor"
                width={220}
                height={220}
                className="h-[120px] w-[120px] object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[170px] sm:w-[170px] md:h-[220px] md:w-[220px]"
              />
            </motion.div>

            {/* BOTTOM RIGHT CIRCLE */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              animate={{ y: [0, -10, 0], rotate: [4, 6, 4] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="group absolute bottom-[-10px] right-[0px] overflow-hidden rounded-full border-[6px] border-black shadow-[0_0_40px_rgba(255,255,255,0.12)]"
            >
              <Image
                src="/heroImage/pic2.jpeg"
                alt="Fashion"
                width={240}
                height={240}
                className="h-[140px] w-[140px] object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[190px] sm:w-[190px] md:h-[240px] md:w-[240px]"
              />
            </motion.div>

            {/* STARS */}
            <div className="absolute left-[-5px] top-1/4 text-2xl text-yellow-500">
              ✦
            </div>

            <div className="absolute right-[-5px] top-1/2 text-2xl text-yellow-500">
              ✦
            </div>

            {/* EXTRA GLOW */}
            <div className="absolute h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-3xl" />
          </motion.div>

          {/* ================= TEXT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 space-y-8 text-center lg:order-1 lg:text-left"
          >
            {/* BADGE */}
            <div className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-[10px] uppercase tracking-[0.35em] text-yellow-400 backdrop-blur-xl">
              ✨ Exquisite Handcrafted Collections
            </div>

            {/* HERO TEXT */}
            <div className="space-y-5">
              <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Where Art Meets
                <span className="mt-2 block italic text-zinc-400">
                  Everyday Living
                </span>
              </h1>

              <p className="mx-auto max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
                Premium hand-painted fashion, custom-embroidered anniversary
                hoops, and fine-art canvases designed to bring organic warmth
                and soul of pure artistry to your home and wardrobe.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="w-full rounded-full border border-white/10 bg-white text-black transition hover:bg-zinc-200 sm:w-auto"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Custom Order
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-yellow-500/30 bg-yellow-500/10 text-yellow-400 backdrop-blur-xl hover:bg-yellow-500/20 sm:w-auto"
              >
                <Heart className="mr-2 h-4 w-4" />
                Explore Now
              </Button>
            </div>

            {/* TRUSTED */}
            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center lg:justify-start">
              <div className="flex -space-x-4">
                <Image
                  src="/avatar/avatar1.jpg"
                  alt="avatar"
                  width={48}
                  height={48}
                  className="h-10 w-10 rounded-full border-2 border-black object-cover shadow-lg sm:h-12 sm:w-12"
                />

                <Image
                  src="/avatar/avatar2.jpg"
                  alt="avatar"
                  width={48}
                  height={48}
                  className="h-10 w-10 rounded-full border-2 border-black object-cover shadow-lg sm:h-12 sm:w-12"
                />

                <Image
                  src="/avatar/avatar3.jpg"
                  alt="avatar"
                  width={48}
                  height={48}
                  className="h-10 w-10 rounded-full border-2 border-black object-cover shadow-lg sm:h-12 sm:w-12"
                />
              </div>

              <p className="text-sm text-zinc-400">
                Trusted by{" "}
                <span className="font-semibold text-yellow-400">500+</span> Art
                Lovers
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
