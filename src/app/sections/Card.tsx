"use client";

import CountUp from "@/components/CountUp";

export default function ArtistStats() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-10 bg-blue-300" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-blue-600">
              Our Journey
            </span>

            <div className="h-px w-10 bg-blue-300" />
          </div>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Crafted With Passion,
            <br />
            <span className="text-blue-700">Measured By Trust</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            end={4800}
            title="Hours Crafted"
            description="Every brush stroke and embroidery detail crafted with patience and soul."
          />

          <StatCard
            end={180}
            title="Artworks Created"
            description="Custom paintings, tote bags, apparel, hoops, and handcrafted decor."
          />

          <StatCard
            end={940}
            title="Happy Clients"
            description="Trusted by art lovers who appreciate handmade elegance and authenticity."
          />

          <StatCard
            end={650}
            title="Orders Delivered"
            description="Successfully delivered handcrafted collections across different cities."
          />
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  end: number;
  title: string;
  description: string;
};

function StatCard({ end, title, description }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-blue-100/80 bg-white/90 p-5 md:p-6 backdrop-blur-xl shadow-[0_15px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)]">
      {/* Hover Glow */}
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-100 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

      {/* Decorative Flower */}
      <svg
        className="absolute right-4 top-4 h-8 w-8 text-blue-100 transition duration-500 group-hover:rotate-12"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
      </svg>

      {/* Dot */}
      <div className="absolute left-5 top-5 h-2 w-2 rounded-full bg-blue-400" />

      {/* Number */}
      <h3 className="relative text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        <CountUp end={end} duration={2500} suffix="+" />
      </h3>

      {/* Divider */}
      <div className="mt-3 h-px w-10 bg-blue-200" />

      {/* Title */}
      <h4 className="mt-3 text-base font-semibold text-slate-900 md:text-lg">
        {title}
      </h4>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>

      {/* Bottom Accent */}
      <div className="mt-5 flex items-center gap-2">
        <span className="text-xs text-blue-400">✦</span>

        <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent" />
      </div>

      {/* Corner Accent */}
      <div className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-full bg-gradient-to-tl from-blue-50 to-transparent opacity-70" />
    </div>
  );
}
