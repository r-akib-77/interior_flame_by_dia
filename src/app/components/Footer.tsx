"use client";

import Link from "next/link";

import { Mail, MapPin, ArrowUpRight, Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      {
        name: "Home",
        href: "/",
      },

      {
        name: "Shop",
        href: "/shop",
      },
      {
        name: "Cart",
        href: "/cart",
      },
      {
        name: "Custom Orders",
        href: "/custom-order",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative -mt-2 overflow-hidden border-t border-white/10 py-20 text-white sm:py-24">
      {/* ================= CUSTOM LUXURY BACKGROUND ================= */}

      {/* BASE */}
      <div className="absolute inset-0 bg-[#040404]" />

      {/* TOP GOLD LIGHT */}
      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[150px]" />

      {/* RIGHT ORANGE LIGHT */}
      <div className="absolute bottom-[-160px] right-[-120px] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[170px]" />

      {/* CENTER AMBIENT LIGHT */}
      <div className="absolute left-1/2 top-[10%] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-yellow-200/[0.03] blur-[120px]" />

      {/* VERTICAL FADE */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />

      {/* GOLD MESH */}
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,215,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.3)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* GOLD LINES */}
      <div className="absolute left-0 top-[120px] h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

      <div className="absolute bottom-[140px] left-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent" />

      {/* SIDE VIGNETTE */}
      <div className="absolute inset-y-0 left-0 w-[25%] bg-gradient-to-r from-black/70 to-transparent" />

      <div className="absolute inset-y-0 right-0 w-[25%] bg-gradient-to-l from-black/70 to-transparent" />

      {/* ARTISTIC ORBS */}
      <div className="absolute left-[12%] top-[30%] h-3 w-3 rounded-full bg-yellow-400/70 shadow-[0_0_20px_rgba(255,215,0,0.9)]" />

      <div className="absolute right-[18%] top-[22%] h-2 w-2 rounded-full bg-orange-300/80 shadow-[0_0_18px_rgba(255,200,120,0.8)]" />

      <div className="absolute bottom-[18%] left-[25%] h-2 w-2 rounded-full bg-yellow-300/70 shadow-[0_0_16px_rgba(255,215,0,0.7)]" />

      {/* NOISE TEXTURE */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-soft-light [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* GLASS FADE */}
      <div className="absolute inset-0 backdrop-blur-[70px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP ================= */}

        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          {/* BRAND */}
          <div>
            <div className="leading-tight">
              <h2 className="bg-gradient-to-r from-white via-zinc-200 to-yellow-100 bg-clip-text font-serif text-3xl text-transparent sm:text-4xl">
                Interior Flame
              </h2>

              <p className="mt-2 text-[9px] uppercase tracking-[0.45em] text-yellow-400 sm:text-[10px]">
                By Dia
              </p>
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400 sm:mt-8 sm:leading-8">
              Handcrafted artistic creations blending luxury, emotion, and
              timeless elegance through custom paintings, embroidered pieces,
              and soulful decor.
            </p>

            {/* ================= SOCIALS ================= */}

            <div className="mt-8 flex items-center gap-3 sm:gap-4">
              {/* INSTAGRAM */}
              <Link
                href="#"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-500 hover:border-yellow-500/20 hover:bg-yellow-500/[0.08] sm:h-12 sm:w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-zinc-400 transition duration-500 group-hover:text-yellow-400"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 0 1 3.95 3.95v8.5a3.95 3.95 0 0 1-3.95 3.95h-8.5a3.95 3.95 0 0 1-3.95-3.95v-8.5A3.95 3.95 0 0 1 7.75 3.8zm8.95 1.35a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8zM12 6.8A5.2 5.2 0 1 0 17.2 12 5.206 5.206 0 0 0 12 6.8zm0 1.8A3.4 3.4 0 1 1 8.6 12 3.404 3.404 0 0 1 12 8.6z" />
                </svg>
              </Link>

              {/* FACEBOOK */}
              <Link
                href="#"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-500 hover:border-yellow-500/20 hover:bg-yellow-500/[0.08] sm:h-12 sm:w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-zinc-400 transition duration-500 group-hover:text-yellow-400"
                >
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.2H8v3h2.4v8h3.1z" />
                </svg>
              </Link>

              {/* WHATSAPP */}
              <Link
                href="#"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-500 hover:border-yellow-500/20 hover:bg-yellow-500/[0.08] sm:h-12 sm:w-12"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="h-5 w-5 text-zinc-400 transition duration-500 group-hover:text-yellow-400"
                >
                  <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.824.902 5.438 2.438 7.57L3 29l5.594-2.344A12.938 12.938 0 0 0 16.001 29C23.18 29 29 23.18 29 16S23.18 3 16.001 3z" />
                </svg>
              </Link>

              {/* EMAIL */}
              <Link
                href="#"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition duration-500 hover:border-yellow-500/20 hover:bg-yellow-500/[0.08] sm:h-12 sm:w-12"
              >
                <Mail className="h-5 w-5 text-zinc-400 transition duration-500 group-hover:text-yellow-400" />
              </Link>
            </div>
          </div>

          {/* ================= NAVIGATION ================= */}

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                {section.title}
              </h3>

              <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-zinc-400 transition duration-300 hover:text-white"
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight className="h-4 w-4 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              Contact
            </h3>

            <div className="mt-6 space-y-6 sm:mt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] sm:h-11 sm:w-11">
                  <Mail className="h-5 w-5 text-yellow-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Email
                  </p>

                  <p className="mt-2 text-sm text-zinc-300">
                    hello@interiorflame.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] sm:h-11 sm:w-11">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Studio
                  </p>

                  <p className="mt-2 text-sm leading-7 text-zinc-300">
                    Dhaka , Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-zinc-500 sm:text-sm">
            © 2026 Interior Flame By Dia. All rights reserved.
          </p>

          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
            <div className="flex items-center gap-2 text-xs text-zinc-500 sm:text-sm">
              <span>Crafted with</span>

              <Heart className="h-4 w-4 fill-yellow-400 text-yellow-400" />

              <span>by Habiba Dia</span>
            </div>

            <div className="hidden h-4 w-px bg-white/10 sm:block" />

            <p className="text-[11px] uppercase tracking-[0.3em] text-yellow-400/80 sm:text-xs">
              Developed By VERTEXORA SOLUTIONS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
