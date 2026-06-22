"use client";

import {
  Palette,
  MessageCircleHeart,
  Paintbrush,
  PackageCheck,
} from "lucide-react";

export default function CustomOrderProcess() {
  const steps = [
    {
      icon: Palette,
      number: "01",
      title: "Share Your Idea",
      description:
        "Send your inspiration, photo, name, quote, or custom concept you'd love to transform into art.",
    },
    {
      icon: MessageCircleHeart,
      number: "02",
      title: "Design Discussion",
      description:
        "We'll discuss colors, style, materials, and every detail to make your piece truly personal.",
    },
    {
      icon: Paintbrush,
      number: "03",
      title: "Handcrafted Creation",
      description:
        "Each artwork is carefully painted, embroidered, and crafted by hand with artistic precision.",
    },
    {
      icon: PackageCheck,
      number: "04",
      title: "Delivered With Love",
      description:
        "Your finished artwork is beautifully packaged and delivered safely to your doorstep.",
    },
  ];

  return (
    <section className="relative pb-5 ">
      {/* Decorative SVG */}
      <div className="absolute left-4 top-6 -z-10 text-blue-100 md:left-8 md:top-12">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-10 text-center md:mb-16">
          <div className="inline-flex items-center gap-3">
            <span className="text-lg text-blue-400">❀</span>

            <div className="h-px w-8 bg-blue-300 md:w-10" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-600 md:text-xs">
              Custom Artwork Process
            </span>

            <div className="h-px w-8 bg-blue-300 md:w-10" />

            <span className="text-lg text-blue-400">❀</span>
          </div>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
            How Your
            <span className="text-blue-700"> Custom Order </span>
            Comes To Life
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-lg">
            Every masterpiece begins with a conversation and ends with a
            handcrafted creation made especially for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-blue-100
                  bg-white
                  p-4
                  md:rounded-[34px]
                  md:p-7
                  shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(37,99,235,0.10)]
                "
              >
                {/* Number Watermark */}
                <div className="absolute right-3 top-2 text-5xl font-black text-blue-50 md:right-5 md:text-7xl">
                  {step.number}
                </div>

                {/* Decorative Flower */}
                <svg
                  className="absolute bottom-2 right-2 h-12 w-12 text-blue-50 md:bottom-4 md:right-4 md:h-20 md:w-20"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
                </svg>

                {/* Sparkle */}
                <div className="absolute right-3 top-3 text-sm text-blue-300 md:right-5 md:top-5 md:text-xl">
                  ✦
                </div>

                {/* Decorative Dots */}
                <div className="absolute bottom-5 left-3 h-1.5 w-1.5 rounded-full bg-blue-300 md:h-2 md:w-2" />
                <div className="absolute bottom-8 left-6 h-1 w-1 rounded-full bg-sky-300 md:h-1.5 md:w-1.5" />

                {/* Icon */}
                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-50
                    to-blue-100
                    text-blue-700
                    shadow-sm
                    md:h-16
                    md:w-16
                    md:rounded-2xl
                  "
                >
                  <Icon className="h-5 w-5 md:h-7 md:w-7" />
                </div>

                {/* Decorative Line */}
                <div className="mt-3 flex items-center gap-2 md:mt-5">
                  <div className="h-px w-5 bg-blue-300 md:w-8" />

                  <span className="text-xs text-blue-300 md:text-base">❀</span>

                  <div className="h-px w-8 bg-blue-100 md:w-16" />
                </div>

                {/* Title */}
                <h3 className="mt-3 text-sm font-semibold text-slate-900 md:mt-5 md:text-xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-5 text-slate-600 md:mt-4 md:text-base md:leading-relaxed">
                  {descriptionShort(step.description)}
                </p>

                {/* Bottom Accent */}
                <div className="mt-4 flex items-center gap-2 md:mt-6">
                  <span className="text-xs text-blue-400 md:text-base">✦</span>

                  <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function descriptionShort(text: string) {
  return text;
}
