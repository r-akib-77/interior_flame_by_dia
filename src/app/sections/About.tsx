"use client";

import Image from "next/image";
import { Playfair_Display, Great_Vibes } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const signature = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AboutArtist() {
  return (
    <section className="relative overflow-hidden bg-white px-4 ">
      {/* Decorative Elements */}

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <div className="relative mx-auto max-w-[520px]">
            {/* Blue Glow */}

            {/* Decorative Flower */}
            <div className="absolute -left-10 top-10 z-20">
              <svg
                className="h-16 w-16 text-blue-300"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
              </svg>
            </div>

            {/* Decorative Sparkle */}
            <div className="absolute -right-4 top-16 z-20 text-3xl text-blue-300">
              ✦
            </div>

            {/* Background Card */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-[5deg] rounded-[40px] border border-blue-100 bg-white shadow-xl" />

            {/* Main Image */}
            <div className="relative rotate-[-3deg] overflow-hidden rounded-[40px] border-4 border-white bg-slate-100 shadow-[0_35px_90px_rgba(15,23,42,0.15)] transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">
              <Image
                src="/about/artist.jpeg"
                alt="Habiba Dia"
                width={700}
                height={900}
                className="
        h-full
        w-full
        object-cover
        contrast-[1.08]
        saturate-[1.15]
        brightness-[1.02]
      "
              />
            </div>

            {/* Bottom Badge */}
            <div className="absolute -bottom-6 -right-6 rounded-[30px] border border-blue-100/50 bg-white/95 px-6 py-5 backdrop-blur-xl shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
              <p className="text-[10px] uppercase tracking-[0.4em] text-blue-500">
                Founder
              </p>

              <h4
                className={`${signature.className} mt-1 text-4xl text-blue-700`}
              >
                Habiba Dia
              </h4>

              <div className="mt-2 flex items-center gap-3">
                <div className="h-px w-8 bg-blue-300" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                  Fabric Artist
                </span>
              </div>

              <div className="absolute right-4 top-4 text-blue-200">✦</div>
            </div>

            {/* Floating Dots */}
            <div className="absolute right-10 top-0 h-3 w-3 rounded-full bg-blue-300" />
            <div className="absolute left-0 bottom-16 h-2 w-2 rounded-full bg-sky-300" />
            <div className="absolute right-6 bottom-24 h-2 w-2 rounded-full bg-blue-200" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-10 bg-blue-300" />

              <span className="text-xs font-medium uppercase tracking-[0.35em] text-blue-600">
                About The Artist
              </span>
            </div>

            <h2
              className={`${playfair.className} mt-5 text-5xl font-bold leading-tight text-slate-900 md:text-6xl`}
            >
              Our Soul
              <br />
              <span className="text-blue-700">& Story</span>
            </h2>

            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                Meet The Artist
              </p>

              <h3
                className={`${playfair.className} mt-2 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl`}
              >
                Habiba <span className="text-blue-700">Dia</span>
              </h3>
            </div>

            <div className="mt-8">
              <div className="mb-4 text-5xl leading-none text-blue-200">❝</div>

              <div className="max-w-2xl space-y-6 text-[17px] leading-8 text-slate-600 md:text-lg">
                <p>
                  Hello and welcome. I am{" "}
                  <span className="font-semibold text-slate-900">
                    Habiba Dia
                  </span>
                  , the artist and creative soul behind{" "}
                  <span className="font-medium text-blue-700">
                    Interior Flame By Dia
                  </span>
                  . My work blends handcrafted elegance with emotional
                  storytelling, transforming everyday items into timeless
                  artistic expressions.
                </p>

                <p>
                  From hand-painted fashion and luxury tote bags to embroidered
                  hoops and fine-art canvases, every creation is thoughtfully
                  designed with warmth, individuality, and artistic depth.
                </p>

                <blockquote className="border-l-2 border-blue-200 pl-5 italic text-slate-700">
                  “I believe handmade art should feel personal, emotional, and
                  unforgettable — something that lives beautifully inside both
                  homes and hearts.”
                </blockquote>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-10">
              <h4
                className={`${signature.className} text-5xl text-blue-700 md:text-6xl`}
              >
                Habiba Dia
              </h4>

              <p className="mt-1 text-sm uppercase tracking-[0.25em] text-slate-500">
                Founder & Fabric Artist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
