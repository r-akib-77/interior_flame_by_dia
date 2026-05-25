"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  {
    number: "4,800+",
    title: "Hours Crafted",
    desc: "Every brush stroke and embroidery detail crafted with patience and soul.",
  },
  {
    number: "180+",
    title: "Artworks Created",
    desc: "Custom paintings, tote bags, apparel, hoops, and handcrafted decor.",
  },
  {
    number: "940+",
    title: "Happy Clients",
    desc: "Trusted by art lovers who appreciate handmade elegance and authenticity.",
  },
  {
    number: "650+",
    title: "Orders Delivered",
    desc: "Successfully delivered handcrafted collections across different cities.",
  },
];

export default function AboutArtist() {
  return (
    <section className="relative overflow-hidden py-20 text-white sm:py-24">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* GLOW */}
            <div className="absolute bottom-8 left-6 h-24 w-24 rounded-full border border-yellow-500/20 bg-yellow-500/10 blur-2xl sm:h-28 sm:w-28" />

            {/* IMAGE CARD */}
            <motion.div
              whileHover={{
                rotate: 0,
                scale: 1.02,
              }}
              transition={{ duration: 0.5 }}
              className="relative rotate-[-4deg] overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-2 shadow-[0_0_50px_rgba(255,215,0,0.08)] backdrop-blur-3xl sm:rounded-[32px] sm:p-3"
            >
              <div className="relative h-[340px] w-[240px] overflow-hidden rounded-[18px] sm:h-[520px] sm:w-[360px] sm:rounded-[24px]">
                <Image
                  src="/about/artist.jpeg"
                  alt="Artist"
                  fill
                  className="object-cover transition duration-700 hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* LABEL */}
                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-yellow-400 sm:text-[10px] sm:tracking-[0.3em]">
                    Featured Artist
                  </p>

                  <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                    Habiba Dia
                  </h3>
                </div>
              </div>

              {/* GLASS BORDER */}
              <div className="absolute inset-0 rounded-[24px] border border-white/5 sm:rounded-[32px]" />
            </motion.div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* SMALL TITLE */}
            <p className="mb-3 text-[9px] uppercase tracking-[0.4em] text-yellow-400 sm:mb-4 sm:text-[10px] sm:tracking-[0.45em]">
              Our Soul & Story
            </p>

            {/* HEADING */}
            <h2 className="font-serif text-3xl leading-tight text-white sm:text-5xl">
              Meet the Artist:
              <span className="mt-2 block italic text-yellow-400 sm:ml-2 sm:inline">
                Habiba Dia
              </span>
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-6 space-y-4 text-sm leading-7 text-zinc-400 sm:mt-8 sm:space-y-5 sm:text-base sm:leading-8">
              <p>
                Hello and welcome. I am Habiba Dia, the artist and creative soul
                behind{" "}
                <span className="font-semibold text-yellow-400">
                  Interior Flame By Dia
                </span>
                . My work blends handcrafted elegance with emotional
                storytelling, transforming everyday items into timeless artistic
                expressions.
              </p>

              <p>
                From hand-painted fashion and luxury tote bags to embroidered
                hoops and fine-art canvases, every creation is designed with
                warmth, individuality, and artistic depth.
              </p>

              <p>
                I believe handmade art should feel personal, emotional, and
                unforgettable — something that lives beautifully inside both
                homes and hearts.
              </p>
            </div>

            {/* SIGNATURE */}
            <div className="mt-8 sm:mt-10">
              <h3
                style={{
                  fontFamily: "var(--font-caveat)",
                }}
                className="text-5xl leading-none tracking-wide text-yellow-400 sm:text-6xl"
              >
                Habiba Dia
              </h3>

              <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-zinc-500 sm:text-[10px] sm:tracking-[0.35em]">
                Founder & Fabric Artist
              </p>
            </div>

            {/* LINE */}
            <div className="my-8 h-px w-full bg-gradient-to-r from-yellow-500/20 via-white/10 to-transparent sm:my-10" />

            {/* STATS */}
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {stats.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="group rounded-xl border border-white/5 bg-white/[0.03] p-3 shadow-[0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-2xl transition duration-300 hover:border-yellow-500/10 hover:bg-yellow-500/[0.03]"
                >
                  {/* NUMBER */}
                  <h4 className="flex items-center justify-center gap-2 text-lg font-semibold text-white lg:justify-start">
                    <span className="text-sm text-yellow-400">✦</span>

                    {item.number}
                  </h4>

                  {/* TITLE */}
                  <p className="mt-1 text-xs font-medium text-white">
                    {item.title}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
