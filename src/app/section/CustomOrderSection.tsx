"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Sparkles, Palette, Heart, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Consultation & Concept",
    desc: "Connect with Dia through our custom portal. Share your vision, favorite motifs, fabric desires, wedding themes, or color palette ideas.",
    icon: Sparkles,
  },

  {
    number: "02",
    title: "Visual Mockup Sketch",
    desc: "Dia creates a hand-drawn colored sketch of the garment, tote painting, or alignment layout for your review before creation.",
    icon: Palette,
  },

  {
    number: "03",
    title: "Handmade Creation",
    desc: "Each brush stroke and thread stitch is lovingly handcrafted using premium materials and timeless artistic techniques.",
    icon: Heart,
  },

  {
    number: "04",
    title: "Luxury Delivery",
    desc: "Your masterpiece is beautifully wrapped, sealed, and delivered safely with signature packaging and premium presentation.",
    icon: Gift,
  },
];

export default function CustomCreationSection() {
  const [cards, setCards] = useState(steps);

  const handleSwipe = () => {
    setCards((prev) => {
      const updated = [...prev];

      const first = updated.shift();

      if (first) {
        updated.push(first);
      }

      return updated;
    });
  };

  return (
    <section className="relative pt-24 text-white">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-yellow-400">
            Individual Commissioning
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
            Request Custom Creations
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <p className="mt-6 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Have a specific garment fit, anniversary hoop, tote painting, or
            flower motif close to your heart? Dia personally reviews every
            handcrafted concept before creation begins.
          </p>
        </div>

        {/* ================= MOBILE STACK ================= */}

        <div className="relative mx-auto flex h-[470px] max-w-[320px] items-center justify-center lg:hidden">
          <AnimatePresence>
            {cards.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  drag={index === 0 ? "x" : false}
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  onDragEnd={(e, info) => {
                    if (index === 0 && Math.abs(info.offset.x) > 80) {
                      handleSwipe();
                    }
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    y: 40,
                  }}
                  animate={{
                    opacity: index > 2 ? 0 : 1,
                    scale: 1,
                    y: index * 16,
                    rotate: index % 2 === 0 ? -2 : 2,
                    zIndex: cards.length - index,
                  }}
                  exit={{
                    opacity: 0,
                    x: -200,
                    rotate: -12,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="absolute w-full cursor-grab active:cursor-grabbing"
                >
                  {/* MOBILE CARD */}
                  <div className="group relative overflow-hidden rounded-[34px] border border-[#2a2a2a] bg-[#111111] p-7 shadow-[0_15px_35px_rgba(0,0,0,0.45)] transition duration-500">
                    {/* TOP */}
                    <div className="flex items-start justify-between">
                      {/* NUMBER */}
                      <h3 className="text-5xl font-semibold tracking-tight text-yellow-400/70">
                        {step.number}
                      </h3>

                      {/* ICON */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#2d2d2d] bg-[#1a1a1a]">
                        <Icon className="h-6 w-6 text-yellow-400" />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-10">
                      <h4 className="font-serif text-2xl leading-snug text-white">
                        {step.title}
                      </h4>

                      <p className="mt-5 text-sm leading-7 text-zinc-400">
                        {step.desc}
                      </p>
                    </div>

                    {/* BOTTOM */}
                    <div className="mt-8 flex items-center justify-between">
                      <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/40 to-transparent" />

                      <ArrowRight className="ml-4 h-5 w-5 text-yellow-400/70" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ================= DESKTOP GRID ================= */}

        <div className="hidden gap-7 lg:grid lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative min-h-[360px] overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-500 hover:border-yellow-500/20 hover:bg-yellow-500/[0.03]"
              >
                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                  <div className="absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />
                </div>

                {/* NUMBER */}
                <h3 className="text-6xl font-semibold tracking-tight text-yellow-400/70">
                  {step.number}
                </h3>

                {/* ICON */}
                <div className="absolute right-7 top-7 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-xl">
                  <Icon className="h-6 w-6 text-yellow-400" />
                </div>

                {/* CONTENT */}
                <div className="mt-12">
                  <h4 className="font-serif text-2xl leading-snug text-white">
                    {step.title}
                  </h4>

                  <p className="mt-5 text-sm leading-7 text-zinc-400">
                    {step.desc}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="absolute bottom-7 left-8 right-8 flex items-center justify-between">
                  <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/40 to-transparent" />

                  <ArrowRight className="ml-4 h-5 w-5 text-yellow-400/70 transition duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= CTA BUTTON ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="mt-20 flex justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group relative overflow-hidden rounded-full border border-yellow-500/20 bg-yellow-500/[0.08] px-5 py-3 shadow-[0_0_40px_rgba(255,215,0,0.08)] backdrop-blur-xl transition duration-500 hover:border-yellow-500/40 hover:bg-yellow-500/[0.12] sm:px-8 sm:py-4"
          >
            {/* ANIMATED SHINE */}
            <motion.div
              animate={{
                x: ["-120%", "120%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl"
            />

            <Link href="/custom-order">
              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-3xl" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                {/* ICON */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10 sm:h-10 sm:w-10">
                  <Sparkles className="h-4 w-4 text-yellow-400 sm:h-5 sm:w-5" />
                </div>

                {/* TEXT */}
                <div className="text-left leading-tight">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-yellow-400 sm:text-[10px] sm:tracking-[0.35em]">
                    Begin Your Artwork
                  </p>

                  <h4 className="mt-1 font-serif text-sm text-white sm:text-lg">
                    Request Custom Order
                  </h4>
                </div>

                {/* ARROW */}
                <ArrowRight className="h-4 w-4 text-yellow-400 transition duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </div>
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
