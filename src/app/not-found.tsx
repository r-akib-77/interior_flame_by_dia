"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowRight, Sparkles, Star } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden pt-36 md:pt-24 bg-[#040404] px-4 py-16 text-white sm:px-6">
      {/* ================= ULTRA LUXURY BACKGROUND ================= */}

      {/* BASE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#5c3b11_0%,transparent_26%),radial-gradient(circle_at_bottom_right,#2d1408_0%,transparent_28%),radial-gradient(circle_at_center,#101010_0%,#040404_100%)]" />

      {/* GOLD LIGHT */}
      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[140px] sm:h-[620px] sm:w-[620px]" />

      {/* ORANGE LIGHT */}
      <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[150px] sm:h-[650px] sm:w-[650px]" />

      {/* CENTER LIGHT */}
      <div className="absolute left-1/2 top-[35%] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ================= FLOATING PARTICLES ================= */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-[12%] top-[18%]"
      >
        <Star className="h-4 w-4 text-yellow-400/80" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 18, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-[15%] top-[22%]"
      >
        <Star className="h-3 w-3 text-white/70" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -18, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-[18%] left-[20%]"
      >
        <Star className="h-3 w-3 text-yellow-400/70" />
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        {/* TOP LABEL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-yellow-500/10 bg-yellow-500/[0.05] px-5 py-2 backdrop-blur-xl"
        >
          <div className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_14px_rgba(255,215,0,0.9)]" />

          <p className="text-[9px] uppercase tracking-[0.45em] text-yellow-400 sm:text-[10px]">
            Lost In The Gallery
          </p>
        </motion.div>

        {/* 404 */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative"
        >
          {/* GIANT GLOW */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[220px] w-[220px] rounded-full bg-yellow-500/10 blur-[120px]" />
          </div>

          <h1 className="relative font-serif text-[110px] font-semibold leading-none tracking-[-0.05em] text-white sm:text-[220px]">
            {/* STROKE */}
            <span className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-transparent bg-clip-text text-transparent blur-2xl">
              404
            </span>
            404
          </h1>
        </motion.div>

        {/* TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
        >
          <h2 className="font-serif text-3xl leading-tight text-white sm:text-6xl">
            This Artwork
            <span className="mt-2 block italic text-yellow-400">
              Never Existed
            </span>
          </h2>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
          className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-lg"
        >
          The page you are looking for may have been removed, relocated, or
          perhaps never painted into existence. Return to the curated collection
          and continue exploring handcrafted luxury artistry.
        </motion.p>

        {/* DIVIDER */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mx-auto mt-10 h-px w-40 bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent"
        />

        {/* BUTTON */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 0.7,
          }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 px-7 py-4 text-[11px] tracking-[0.28em] text-yellow-400 shadow-[0_0_60px_rgba(255,215,0,0.08)] backdrop-blur-2xl transition duration-500 hover:border-yellow-500/40 hover:scale-[1.02]"
          >
            {/* BUTTON GLOW */}
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl" />
            </div>

            <Sparkles className="relative z-10 h-4 w-4" />

            <span className="relative z-10">RETURN HOME</span>

            <ArrowRight className="relative z-10 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
