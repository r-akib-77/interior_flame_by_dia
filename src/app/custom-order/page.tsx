"use client";

import { motion } from "framer-motion";

import { Send } from "lucide-react";

export default function CustomOrderPage() {
  const handleWhatsAppSubmit = () => {
    const name =
      (document.getElementById("name") as HTMLInputElement)?.value || "";

    const email =
      (document.getElementById("email") as HTMLInputElement)?.value || "";

    const category =
      (document.getElementById("category") as HTMLSelectElement)?.value || "";

    const message =
      (document.getElementById("message") as HTMLTextAreaElement)?.value || "";

    const text = `
NEW CUSTOM ORDER REQUEST

Name: ${name}

Email: ${email}

Category: ${category}

Vision:
${message}
`;

    const whatsappUrl = `https://wa.me/8801404601580?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* ================= CUSTOM SELECT OPTION STYLE ================= */}

      <style jsx global>{`
        select option {
          background-color: #0b0b0b;
          color: #f4f4f5;
        }

        select option:hover {
          background-color: #ca8a04;
          color: white;
        }
      `}</style>

      <main className="relative mt-5 min-h-screen overflow-hidden bg-[#050505] py-20 text-white sm:py-28">
        {/* ================= BACKGROUND ================= */}

        <div className="absolute inset-0 bg-[#050505]" />

        {/* GOLD GLOW */}
        <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-yellow-500/10 blur-[120px] sm:h-[420px] sm:w-[420px] sm:blur-[150px]" />

        {/* ORANGE GLOW */}
        <div className="absolute bottom-[-160px] right-[-120px] h-[380px] w-[380px] rounded-full bg-orange-500/10 blur-[130px] sm:h-[520px] sm:w-[520px] sm:blur-[170px]" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,215,0,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.25)_1px,transparent_1px)] bg-[size:70px_70px] sm:bg-[size:90px_90px]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* ================= HERO ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-4 text-[9px] uppercase tracking-[0.45em] text-yellow-400 sm:text-[10px]">
              Personalized Luxury Artwork
            </p>

            <h1 className="font-serif text-4xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Request a
              <span className="mt-2 block italic text-yellow-400">
                Custom Creation
              </span>
            </h1>

            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent sm:w-28" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:mt-8 sm:text-base sm:leading-8">
              Every handcrafted piece is thoughtfully designed with emotion,
              elegance, and artistic individuality tailored uniquely for you.
            </p>
          </motion.div>

          {/* ================= LUXURY SLIDERS ================= */}

          <section className="relative mt-14 overflow-hidden sm:mt-20">
            {/* TOP SLIDER */}
            <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-5 backdrop-blur-xl sm:py-6">
              {/* LEFT FADE */}
              <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#050505] to-transparent sm:w-24" />

              {/* RIGHT FADE */}
              <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#050505] to-transparent sm:w-24" />

              <motion.div
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  duration: 90,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex w-max items-center gap-14 sm:gap-20"
              >
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-14 sm:gap-20">
                    {[
                      "HANDCRAFTED LUXURY",
                      "CUSTOM ARTWORK",
                      "INTERIOR FLAME",
                      "PREMIUM DETAILING",
                      "EMOTIONAL ARTISTRY",
                      "DESIGNED BY DIA",
                    ].map((text) => (
                      <div
                        key={text}
                        className="flex items-center gap-4 sm:gap-5"
                      >
                        {/* ICON */}
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10 sm:h-12 sm:w-12">
                          <span className="font-serif text-lg text-yellow-400 sm:text-xl">
                            ✦
                          </span>
                        </div>

                        {/* TEXT */}
                        <h3 className="whitespace-nowrap font-serif text-sm tracking-[0.3em] text-white/90 sm:text-2xl">
                          {text}
                        </h3>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* BOTTOM SLIDER */}
            <div className="relative mt-5 overflow-hidden border-y border-yellow-500/10 bg-yellow-500/[0.03] py-5 sm:py-6">
              {/* LEFT FADE */}
              <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#050505] to-transparent sm:w-24" />

              {/* RIGHT FADE */}
              <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#050505] to-transparent sm:w-24" />

              <motion.div
                animate={{
                  x: [-1920, 0],
                }}
                transition={{
                  duration: 70,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex w-max items-center gap-14 sm:gap-20"
              >
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-14 sm:gap-20">
                    {[
                      "PAINTED TOTE BAGS",
                      "LUXURY DECOR",
                      "ARTISTIC EXPRESSIONS",
                      "HANDMADE WITH SOUL",
                      "TIMELESS ELEGANCE",
                      "WORLDWIDE COMMISSIONS",
                    ].map((text) => (
                      <div
                        key={text}
                        className="flex items-center gap-4 sm:gap-5"
                      >
                        {/* ORB */}
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_16px_rgba(255,215,0,0.9)] sm:h-3 sm:w-3" />

                        {/* TEXT */}
                        <h3 className="whitespace-nowrap text-[10px] uppercase tracking-[0.45em] text-yellow-100/90 sm:text-base">
                          {text}
                        </h3>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* ================= FORM ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
            className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-3xl sm:mt-24 sm:rounded-[40px]"
          >
            <div className="grid lg:grid-cols-2">
              {/* ================= LEFT SIDE ================= */}

              <div className="relative hidden overflow-hidden border-r border-white/10 bg-gradient-to-br from-yellow-500/[0.04] via-transparent to-orange-500/[0.03] p-10 lg:block">
                {/* TOP LIGHT */}
                <div className="absolute left-[-60px] top-[-60px] h-56 w-56 rounded-full bg-yellow-500/10 blur-[120px]" />

                {/* BOTTOM LIGHT */}
                <div className="absolute bottom-[-100px] right-[-80px] h-72 w-72 rounded-full bg-orange-500/10 blur-[140px]" />

                {/* GOLD LINE */}
                <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

                {/* GRID */}
                <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,215,0,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.25)_1px,transparent_1px)] bg-[size:70px_70px]" />

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.45em] text-yellow-400">
                      Start Your Journey
                    </p>

                    <h2 className="mt-6 max-w-md font-serif text-5xl leading-tight text-white">
                      Tell Dia About
                      <span className="mt-2 block italic text-yellow-400">
                        Your Vision
                      </span>
                    </h2>

                    <p className="mt-8 max-w-md text-sm leading-8 text-zinc-400">
                      Share your inspirations, luxury preferences, artistic
                      ideas, handcrafted concepts, colors, themes, or emotional
                      stories behind your custom creation.
                    </p>
                  </div>

                  {/* FEATURE LIST */}
                  <div className="mt-16 space-y-5">
                    {[
                      "Handcrafted Premium Artwork",
                      "Luxury Custom Design Experience",
                      "Direct WhatsApp Consultation",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-4">
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_14px_rgba(255,215,0,0.8)]" />

                        <p className="text-sm tracking-[0.2em] text-zinc-300">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* BIG WATERMARK */}
                  <div className="pointer-events-none absolute bottom-0 right-0 select-none font-serif text-[140px] leading-none text-white/[0.03]">
                    DIA
                  </div>
                </div>
              </div>

              {/* ================= RIGHT FORM ================= */}

              <div className="p-6 sm:p-10">
                <div className="space-y-5 sm:space-y-6">
                  {/* MOBILE HEADING */}
                  <div className="lg:hidden">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-yellow-400 sm:text-[10px]">
                      Start Your Journey
                    </p>

                    <h2 className="mt-4 font-serif text-3xl leading-tight text-white">
                      Tell Dia About Your Vision
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      Share your inspirations, themes, luxury ideas, and custom
                      artwork vision.
                    </p>
                  </div>

                  {/* NAME */}
                  <div>
                    <label className="mb-3 block text-sm text-zinc-300">
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-yellow-500/30 sm:px-5 sm:py-4"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-3 block text-sm text-zinc-300">
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-yellow-500/30 sm:px-5 sm:py-4"
                    />
                  </div>

                  {/* CATEGORY */}
                  <div>
                    <label className="mb-3 block text-sm text-zinc-300">
                      Select Category
                    </label>

                    <select
                      id="category"
                      className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition duration-300 focus:border-yellow-500/30 sm:px-5 sm:py-4"
                    >
                      <option>Exhibition</option>
                      <option>Painting</option>
                      <option>Wedding Customised Frames</option>
                      <option>Accessories</option>
                      <option>Texture & Collage Works</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="mb-3 block text-sm text-zinc-300">
                      Your Vision
                    </label>

                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Describe your custom artwork idea..."
                      className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-yellow-500/30 sm:px-5 sm:py-4"
                    />
                  </div>

                  {/* BUTTON */}
                  <motion.button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-yellow-500/20 bg-yellow-500/10 px-6 py-3 text-sm font-medium text-yellow-400 transition duration-500 hover:bg-yellow-500/20 sm:gap-3 sm:px-8 sm:py-4"
                  >
                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-3xl" />
                    </div>

                    <Send className="relative z-10 h-4 w-4" />

                    <span className="relative z-10">Submit Custom Request</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
