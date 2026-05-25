"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navItems = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "CUSTOM ORDER",
    href: "/custom-order",
  },
  {
    name: "SHOP",
    href: "/shop",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      {/* BACKDROP */}
      <div className="absolute inset-0 border-b border-white/10 bg-black/40 backdrop-blur-2xl" />

      {/* GOLD GLOW */}
      <div className="absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

      <nav className="container relative z-20 mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="leading-tight">
            <h1 className="bg-gradient-to-r from-white via-zinc-200 to-yellow-100 bg-clip-text font-serif text-[24px] font-semibold tracking-tight text-transparent sm:text-[30px]">
              Interior Flame
            </h1>

            <div className="mt-1 flex items-center gap-2">
              <div className="h-[1px] w-5 bg-yellow-400/70" />

              <p className="text-[10px] font-medium uppercase tracking-[0.45em] text-yellow-400">
                By Dia
              </p>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-sm tracking-[0.2em] text-zinc-300 transition"
            >
              <span className="transition duration-300 group-hover:text-yellow-400">
                {item.name}
              </span>

              <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* CART */}
          <Link href="/cart">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.12)] backdrop-blur-xl transition hover:bg-yellow-500/20"
            >
              <ShoppingCart className="h-5 w-5" />

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">
                2
              </span>
            </motion.div>
          </Link>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div className="md:hidden">
          <Sheet>
            {/* MENU BUTTON */}
            <SheetTrigger asChild>
              <button className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:border-yellow-500/20 hover:bg-yellow-500/10">
                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* ICON */}
                <div className="relative flex flex-col gap-[4px]">
                  <span className="h-[2px] w-5 rounded-full bg-white transition-all duration-300 group-hover:bg-yellow-400" />

                  <span className="h-[2px] w-4 rounded-full bg-white transition-all duration-300 group-hover:w-5 group-hover:bg-yellow-400" />

                  <span className="h-[2px] w-5 rounded-full bg-white transition-all duration-300 group-hover:bg-yellow-400" />
                </div>
              </button>
            </SheetTrigger>

            {/* MOBILE PANEL */}
            <SheetContent className="w-[82%] border-l border-white/10 bg-black/95 p-0 text-white backdrop-blur-3xl">
              {/* ACCESSIBILITY FIX */}
              <VisuallyHidden>
                <SheetTitle>Mobile Navigation Menu</SheetTitle>
              </VisuallyHidden>

              {/* TOP */}
              <div className="relative overflow-hidden border-b border-white/10 px-6 pb-7 pt-10">
                {/* GLOW */}
                <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />

                {/* LOGO */}
                <div className="relative leading-tight">
                  <h2 className="bg-gradient-to-r from-white via-zinc-200 to-yellow-100 bg-clip-text font-serif text-[30px] font-semibold tracking-tight text-transparent">
                    Interior Flame
                  </h2>

                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-[1px] w-6 bg-yellow-400/70" />

                    <p className="text-[10px] uppercase tracking-[0.45em] text-yellow-400">
                      By Dia
                    </p>
                  </div>
                </div>
              </div>

              {/* NAV ITEMS */}
              <div className="flex flex-col gap-2 px-5 py-7">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-yellow-500/20 hover:bg-yellow-500/10"
                    >
                      <span className="text-sm tracking-[0.25em] text-zinc-300 transition duration-300 group-hover:text-yellow-400">
                        {item.name}
                      </span>

                      <span className="text-zinc-600 transition duration-300 group-hover:translate-x-1 group-hover:text-yellow-400">
                        →
                      </span>
                    </motion.div>
                  </Link>
                ))}

                {/* CART */}
                <Link href="/cart">
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 flex items-center justify-between rounded-2xl border border-yellow-500/20 bg-yellow-500/10 px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <ShoppingCart className="h-4 w-4 text-yellow-400" />

                      <span className="text-sm tracking-[0.25em] text-yellow-400">
                        CART
                      </span>
                    </div>

                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">
                      2
                    </div>
                  </motion.div>
                </Link>
              </div>

              {/* BOTTOM GLOW */}
              <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-yellow-500/10 blur-3xl" />
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
