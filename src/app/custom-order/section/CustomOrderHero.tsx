"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
});

export default function CustomOrderHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8FF] px-4 pb-20 md:pt-16 pt-6">
      {/* Decorative Flower Top Left */}
      <div className="absolute left-0 top-10 text-blue-100">
        <svg width="180" height="180" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
        </svg>
      </div>

      {/* Decorative Flower Bottom Right */}
      <div className="absolute bottom-10 right-0 text-blue-100">
        <svg width="220" height="220" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
        </svg>
      </div>

      {/* Sparkles */}
      <div className="absolute left-[15%] top-[25%] text-blue-300">✦</div>

      <div className="absolute right-[20%] top-[18%] text-2xl text-blue-300">
        ✦
      </div>

      <div className="absolute left-[80%] top-[55%] text-blue-300">✦</div>

      {/* Decorative Dots */}
      <div className="absolute left-[12%] top-[60%] h-3 w-3 rounded-full bg-blue-300" />
      <div className="absolute right-[10%] top-[40%] h-2 w-2 rounded-full bg-sky-300" />
      <div className="absolute left-[75%] top-[25%] h-2 w-2 rounded-full bg-blue-200" />

      {/* Curved Artistic Line */}
      <svg
        className="absolute right-0 top-20 hidden text-blue-100 lg:block"
        width="400"
        height="300"
        viewBox="0 0 400 300"
        fill="none"
      >
        <path
          d="M400 20C280 20 260 200 120 200C60 200 20 180 0 150"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-medium text-blue-700 shadow-sm">
          <Sparkles size={16} />
          Handmade Custom Artwork
        </div>

        {/* Heading */}
        <h1
          className={`${playfair.className} mt-8 text-5xl font-bold leading-[0.9] tracking-[-0.05em] text-slate-900 md:text-7xl lg:text-8xl`}
        >
          Create Something
          <br />
          <span className="text-blue-700">Uniquely Yours</span>
        </h1>

        {/* Decorative Divider */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-blue-300" />
          <span className="text-blue-400">❀</span>
          <div className="h-px w-16 bg-blue-300" />
        </div>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
          Every piece is handcrafted to tell your story — whether it&apos;s a
          painted jacket, embroidered hoop, custom tote bag, or fine-art canvas
          designed exclusively for you.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="#order-form"
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
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-700
            "
          >
            Start Your Order
            <ArrowRight size={18} />
          </Link>

          <Link
            href="#process"
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
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            View Process
          </Link>
        </div>

        {/* Floating Info Cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <div className="rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-3xl font-bold text-blue-700">100%</p>
            <p className="mt-1 text-sm text-slate-600">Handmade</p>
          </div>

          <div className="rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-3xl font-bold text-blue-700">Custom</p>
            <p className="mt-1 text-sm text-slate-600">Designed For You</p>
          </div>

          <div className="rounded-[24px] border border-blue-100 bg-white p-5 shadow-sm">
            <p className="text-3xl font-bold text-blue-700">Premium</p>
            <p className="mt-1 text-sm text-slate-600">Materials & Finish</p>
          </div>
        </div>
      </div>
    </section>
  );
}
