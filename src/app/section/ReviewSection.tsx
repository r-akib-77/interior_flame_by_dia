"use client";

import * as React from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sophia Williams",
    role: "Interior Collector",
    image: "/avatar/avatar1.jpg",
    review:
      "Every piece feels deeply personal and luxurious. The detailing and handcrafted finish exceeded my expectations beautifully.",
  },

  {
    name: "Emma Brown",
    role: "Fashion Client",
    image: "/avatar/avatar2.jpg",
    review:
      "Dia transformed my vision into wearable art. The embroidery and paintwork felt elegant, soulful, and incredibly premium.",
  },

  {
    name: "Olivia Johnson",
    role: "Art Enthusiast",
    image: "/avatar/avatar3.jpg",
    review:
      "The artwork brought warmth and emotion into my home. You can truly feel the passion behind every handcrafted detail.",
  },

  {
    name: "Charlotte Davis",
    role: "Luxury Decor Buyer",
    image: "/avatar/avatar1.jpg",
    review:
      "Beautiful craftsmanship and premium presentation. It felt more like receiving a gallery masterpiece than a product.",
  },
];

export default function ReviewSection() {
  return (
    <section className="relative overflow-hidden py-28 text-white">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}

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
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-yellow-400">
            Testimonials
          </p>

          <h2 className="font-serif text-4xl leading-tight text-white sm:text-6xl">
            What Clients
            <span className="mt-2 block italic text-yellow-400">
              Feel & Experience
            </span>
          </h2>

          <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <p className="mt-7 text-sm leading-8 text-zinc-400 sm:text-base">
            Every handcrafted piece carries emotion, elegance, and timeless
            artistic detail trusted by collectors worldwide.
          </p>
        </motion.div>

        {/* ================= REVIEW SLIDER ================= */}

        <Carousel
          plugins={[
            Autoplay({
              delay: 3200,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem
                key={review.name}
                className="basis-[92%] pl-4 sm:basis-1/2 xl:basis-1/3"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 50,
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
                    y: -8,
                  }}
                  className="group relative h-full overflow-hidden rounded-[36px] border border-white/10 bg-transparent p-8 transition duration-700 hover:border-yellow-500/20"
                >
                  {/* QUOTE ICON */}
                  <div className="absolute right-6 top-6 opacity-10">
                    <Quote className="h-20 w-20 text-yellow-400" />
                  </div>

                  {/* USER */}
                  <div className="relative z-10 flex items-center gap-4">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="relative h-16 w-16 overflow-hidden rounded-full border border-yellow-500/20 p-[2px]"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-full">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>

                    <div>
                      <h4 className="font-semibold text-white">
                        {review.name}
                      </h4>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-yellow-400">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  {/* STARS */}
                  <div className="relative z-10 mt-8 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: i * 0.08,
                        }}
                      >
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* REVIEW */}
                  <p className="relative z-10 mt-6 text-sm leading-8 text-zinc-300">
                    &quot;{review.review}&quot;
                  </p>

                  {/* BOTTOM LINE */}
                  <div className="relative z-10 mt-8 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/50 to-transparent" />

                    <div className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(255,215,0,0.9)]" />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
