"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F8FF] via-[#FBFCFF] to-[#F5F9FF] px-4 py-2 md:py-24">
      {/* =========================
      DECORATIVE FLOWERS
========================= */}

      {/* Main Top Left */}
      <div className="pointer-events-none absolute -left-14 -top-6 opacity-80 md:-left-20 md:-top-10">
        <Image
          src="/decor/flower-1.png"
          alt=""
          width={220}
          height={220}
          className="rotate-[-18deg] md:h-[280px] md:w-[280px]"
        />
      </div>

      {/* Main Top Right */}
      <div className="pointer-events-none absolute -right-10 top-10 opacity-70 md:right-0 md:top-20">
        <Image
          src="/decor/flower-2.png"
          alt=""
          width={160}
          height={160}
          className="rotate-[15deg] md:h-[220px] md:w-[220px]"
        />
      </div>

      {/* Desktop Floating */}
      <div className="pointer-events-none absolute right-[10%] top-[35%] hidden opacity-60 lg:block">
        <Image
          src="/decor/flower-small.png"
          alt=""
          width={90}
          height={90}
          className="animate-float"
        />
      </div>

      {/* Desktop Bottom Right */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 opacity-75 md:-bottom-20 md:-right-20">
        <Image
          src="/decor/flower-1.png"
          alt=""
          width={260}
          height={260}
          className="rotate-[190deg] scale-x-[-1]"
        />
      </div>

      {/* Desktop Bottom Left */}
      <div className="pointer-events-none absolute bottom-10 left-4 hidden opacity-50 lg:block">
        <Image
          src="/decor/flower-small.png"
          alt=""
          width={70}
          height={70}
          className="animate-float"
        />
      </div>

      {/* =========================
      MOBILE FLOWERS
========================= */}

      {/* Mobile Top Right */}
      <div className="pointer-events-none absolute right-2 top-28 opacity-40 md:hidden">
        <Image
          src="/decor/flower-small.png"
          alt=""
          width={70}
          height={70}
          className="rotate-12"
        />
      </div>

      {/* Mobile Left Heading */}
      <div className="pointer-events-none absolute left-2 top-[22%] opacity-35 md:hidden">
        <Image
          src="/decor/flower-small.png"
          alt=""
          width={55}
          height={55}
          className="-rotate-12"
        />
      </div>

      {/* Mobile Right Heading */}
      <div className="pointer-events-none absolute right-2 top-[32%] opacity-35 md:hidden">
        <Image
          src="/decor/flower-small.png"
          alt=""
          width={65}
          height={65}
          className="rotate-[20deg]"
        />
      </div>

      {/* Mobile Image Area Left */}
      <div className="pointer-events-none absolute left-0 top-[48%] opacity-40 md:hidden">
        <Image
          src="/decor/flower-small.png"
          alt=""
          width={75}
          height={75}
          className="-rotate-[20deg]"
        />
      </div>

      {/* Mobile Image Area Right */}
      <div className="pointer-events-none absolute right-0 top-[58%] opacity-40 md:hidden">
        <Image
          src="/decor/flower-small.png"
          alt=""
          width={80}
          height={80}
          className="rotate-[25deg]"
        />
      </div>

      {/* Mobile Bottom Left */}
      <div className="pointer-events-none absolute bottom-36 -left-5 opacity-50 md:hidden">
        <Image
          src="/decor/flower-2.png"
          alt=""
          width={110}
          height={110}
          className="-rotate-45"
        />
      </div>

      {/* Mobile Bottom Right */}
      <div className="pointer-events-none absolute bottom-20 right-0 opacity-45 md:hidden">
        <Image
          src="/decor/flower-small.png"
          alt=""
          width={65}
          height={65}
          className="rotate-45"
        />
      </div>

      {/* Mobile Trust Section Flower */}
      <div className="pointer-events-none absolute left-6 top-[82%] opacity-30 md:hidden">
        <Image
          src="/decor/flower-small.png"
          alt=""
          width={55}
          height={55}
          className="animate-float"
        />
      </div>

      {/* Mobile Bottom Center */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 opacity-25 md:hidden">
        <Image
          src="/decor/flower-small.png"
          alt=""
          width={45}
          height={45}
          className="animate-float"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
              <span className="text-blue-500">✦</span>

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                Where Creativity Blooms
              </span>

              <span className="text-blue-500">✦</span>
            </div>

            <div className="relative">
              {/* Watercolor Flower Top Left */}
              <Image
                src="/decor/flower-small.png"
                alt=""
                width={90}
                height={90}
                className="pointer-events-none absolute -left-10 -top-10 rotate-[-20deg] opacity-80"
              />

              {/* Watercolor Flower Top Right */}
              <Image
                src="/decor/flower-small.png"
                alt=""
                width={70}
                height={70}
                className="pointer-events-none absolute right-0 top-0 rotate-[20deg] opacity-70"
              />

              {/* Watercolor Flower Bottom Right */}
              <Image
                src="/decor/flower-small.png"
                alt=""
                width={80}
                height={80}
                className="pointer-events-none absolute -bottom-4 right-8 rotate-[40deg] opacity-60"
              />

              {/* Sparkles */}
              <div className="absolute left-[12%] top-8 text-xl text-blue-300">
                ✦
              </div>

              <div className="absolute right-[15%] top-12 text-lg text-sky-300">
                ✦
              </div>

              <div className="absolute left-[55%] -top-2 text-sm text-blue-400">
                ✦
              </div>

              <div className="absolute right-[30%] bottom-6 text-sm text-sky-400">
                ✦
              </div>

              {/* Decorative Dots */}
              <div className="absolute left-0 top-20 h-3 w-3 rounded-full bg-blue-300/70" />

              <div className="absolute right-4 top-24 h-2 w-2 rounded-full bg-sky-300/70" />

              <div className="absolute left-10 bottom-4 h-2 w-2 rounded-full bg-blue-200/70" />

              <div className="absolute right-20 bottom-0 h-3 w-3 rounded-full bg-sky-200/70" />

              {/* Large Blur Glow */}
              <div className="absolute left-10 top-10 -z-10 h-40 w-40 rounded-full bg-blue-100/50 blur-3xl" />

              {/* Heading */}
              <h1
                className={`${playfair.className} relative z-10 mt-6 text-[3.8rem] font-black leading-[0.95] tracking-[-0.07em] text-slate-900 sm:text-[5rem] md:text-[6rem] lg:text-[7rem]`}
              >
                Where Art Meets
                <br />
                <span className="inline-block pb-2 bg-gradient-to-r from-blue-700 via-sky-600 to-blue-500 bg-clip-text text-transparent">
                  Everyday Living
                </span>
              </h1>
              {/* Small Caption Accent */}
              <div className="mt-4 flex items-center gap-3">
                <div className="h-[2px] w-12 bg-blue-300" />
                <span className="text-xs uppercase tracking-[0.3em] text-blue-500">
                  Handcrafted Luxury
                </span>
              </div>
            </div>

            <div className="mt-4 h-[4px] w-32 rounded-full bg-gradient-to-r from-blue-500 to-blue-700" />

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Premium hand-painted fashion, custom-embroidered anniversary
              hoops, and fine-art canvases designed to bring organic warmth and
              soul of pure artistry to your home and wardrobe.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-2xl bg-blue-600 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700">
                Custom Order
              </button>

              <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-medium text-slate-800 transition-all duration-300 hover:bg-slate-50">
                Explore Now
              </button>
            </div>

            {/* Trust Section */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md">
                  <Image
                    src="/avatar/avatar1.jpg"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md">
                  <Image
                    src="/avatar/avatar2.jpg"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md">
                  <Image
                    src="/avatar/avatar3.jpg"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="text-lg font-semibold text-slate-900">
                  Trusted by{" "}
                  <span className="text-blue-600">500+ Art Lovers</span>
                </p>

                <p className="text-sm text-slate-500">
                  Handcrafted pieces delivered worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            {/* Mobile Layout */}
            <div className="relative mx-auto h-[500px] w-full max-w-[340px] lg:hidden">
              {/* Circle */}
              <div className="absolute left-4 top-0 h-[110px] w-[110px] overflow-hidden rounded-full border-4 border-white bg-white z-10 scale-120 shadow-xl">
                <Image
                  src="/heroImage/pic2.png"
                  alt="Painted Fashion"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Main Image */}
              <div className="absolute left-1/2 top-12 h-[340px] w-[260px] -translate-x-1/2 overflow-hidden rounded-[32px] border-4 border-white bg-white shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
                <Image
                  src="/heroImage/pic3.png"
                  alt="Art Canvas"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Square */}
              <div className="absolute bottom-0 right-4 h-[140px] w-[140px] overflow-hidden rounded-[24px] border-4 border-white bg-white shadow-xl">
                <Image
                  src="/heroImage/pic1.png"
                  alt="Embroidery Hoop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Desktop Layout - UNCHANGED */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="relative h-[560px] overflow-hidden rounded-[32px] bg-white shadow-xl">
                <Image
                  src="/heroImage/pic3.png"
                  alt="Art Canvas"
                  fill
                  priority
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="space-y-4">
                <div className="relative h-[270px] overflow-hidden rounded-[32px] bg-white shadow-xl">
                  <Image
                    src="/heroImage/pic2.png"
                    alt="Painted Fashion"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                <div className="relative h-[270px] overflow-hidden rounded-[32px] bg-white shadow-xl">
                  <Image
                    src="/heroImage/pic1.png"
                    alt="Embroidery Hoop"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
