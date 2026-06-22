"use client";

import { motion } from "framer-motion";

const row1 = [
  "EXHIBITION ART",
  "PAINTINGS",
  "WEDDING FRAMES",
  "HAND-PAINTED ATTIRE",
  "ACCESSORIES",
  "TEXTURE & COLLAGE",
];

const row2 = [
  "CUSTOM PORTRAITS",
  "CANVAS ART",
  "EMBROIDERY HOOPS",
  "HOME DECOR",
  "LUXURY GIFTS",
  "ART COMMISSIONS",
];

export default function ArtRibbon() {
  return (
    <section className="overflow-hidden py-3">
      <div className="relative">
        {/* Row 1 */}
        <div className="md:-rotate-2 rotate-[-5deg] border-y border-blue-100 bg-white">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-10 py-5"
          >
            {[...row1, ...row1, ...row1].map((item, index) => (
              <div key={index} className="flex items-center gap-10">
                <span className="h-2 w-2 rounded-full bg-blue-500" />

                <span className="text-[9px] font-semibold tracking-[0.25em] text-slate-700 sm:text-[10px] md:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="mt-3 rotate-[2deg] border-y border-blue-100 bg-white">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-10 py-5"
          >
            {[...row2, ...row2, ...row2].map((item, index) => (
              <div key={index} className="flex items-center gap-10">
                <span className="h-2 w-2 rounded-full bg-blue-400" />

                <span className="text-[9px] font-semibold tracking-[0.25em] text-blue-700 sm:text-[10px] md:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
