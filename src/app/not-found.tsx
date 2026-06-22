"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F8FF] px-4">
      {/* Decorative Flowers */}{" "}
      <div className="absolute -left-16 -top-10 opacity-60">
        {" "}
        <Image src="/decor/flower-1.png" alt="" width={220} height={220} />{" "}
      </div>
      ```
      <div className="absolute -right-12 top-16 opacity-50">
        <Image src="/decor/flower-2.png" alt="" width={180} height={180} />
      </div>
      <div className="absolute bottom-10 left-10 opacity-30">
        <Image src="/decor/flower-small.png" alt="" width={70} height={70} />
      </div>
      <div className="absolute bottom-16 right-10 opacity-30">
        <Image src="/decor/flower-small.png" alt="" width={90} height={90} />
      </div>
      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm text-blue-700 shadow-sm">
          <Sparkles size={16} />
          Lost In The Gallery
        </div>

        {/* 404 */}
        <h1
          className={`${playfair.className} mt-8 text-[7rem] font-black leading-none tracking-[-0.08em] text-blue-700 md:text-[10rem]`}
        >
          404
        </h1>

        {/* Heading */}
        <h2
          className={`${playfair.className} text-4xl font-bold text-slate-900 md:text-6xl`}
        >
          Artwork Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          It seems this piece has wandered away from the gallery. Let’s guide
          you back to a collection filled with handcrafted beauty, artistic
          warmth, and timeless creations.
        </p>

        {/* Decorative Divider */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-blue-300" />
          <span className="text-blue-400">❀</span>
          <div className="h-px w-12 bg-blue-300" />
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-blue-600
          px-8
          py-4
          font-medium
          text-white
          shadow-lg
          transition
          hover:-translate-y-1
          hover:bg-blue-700
        "
          >
            <ArrowLeft size={18} />
            Return Home
          </Link>

          <Link
            href="/shop"
            className="
          rounded-2xl
          border
          border-blue-100
          bg-white
          px-8
          py-4
          font-medium
          text-slate-800
          shadow-sm
          transition
          hover:-translate-y-1
        "
          >
            Explore Collection
          </Link>
        </div>

        {/* Signature */}
        <div className="mt-14">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            Interior Flame By Dia
          </p>
        </div>
      </div>
    </main>
  );
}
