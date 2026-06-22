"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Custom Order",
      href: "/custom-order",
    },
    {
      name: "Shop",
      href: "/shop",
    },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 py-5">
      <div className="mx-auto max-w-7xl">
        <nav
          className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-blue-200/40
              bg-white/70
              backdrop-blur-2xl
              shadow-[0_20px_60px_rgba(37,99,235,0.10)]
            "
        >
          {/* Luxury Blue Glow */}
          <div
            className="
                absolute
                inset-0
                -z-10
                overflow-hidden
              "
          >
            <div
              className="
                  absolute
                  left-1/2
                  top-0
                  h-40
                  w-96
                  -translate-x-1/2
                  rounded-full
                  bg-blue-300/20
                  blur-3xl
                "
            />

            <div
              className="
                  absolute
                  -right-10
                  top-0
                  h-32
                  w-32
                  rounded-full
                  bg-blue-200/20
                  blur-2xl
                "
            />

            <div
              className="
                  absolute
                  -left-10
                  bottom-0
                  h-32
                  w-32
                  rounded-full
                  bg-sky-200/20
                  blur-2xl
                "
            />
          </div>

          <div className="flex min-h-[88px] items-center justify-between px-6 lg:px-10">
            {/* Logo */}
            <Link
              href="/"
              className="
                  flex
                  flex-col
                  leading-none
                  select-none
                "
            >
              <span
                className="
                    text-lg
                    md:text-xl
                    lg:text-2xl
                    font-semibold
                    tracking-[-0.04em]
                    text-[#0F172A]
                  "
              >
                Interior Flame
              </span>

              <span
                className="
                    mt-1
                    font-[var(--font-accent)]
                    text-sm
                    md:text-base
                    italic
                    text-[#2563EB]
                  "
              >
                By Dia
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                      group
                      relative
                      text-[15px]
                      font-medium
                      tracking-wide
                      text-[#64748B]
                      transition-all
                      duration-300
                      hover:text-[#2563EB]
                    "
                >
                  {link.name}

                  <span
                    className="
                        absolute
                        left-1/2
                        -bottom-2
                        h-[2px]
                        w-0
                        -translate-x-1/2
                        rounded-full
                        bg-gradient-to-r
                        from-blue-400
                        to-blue-600
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Link
                href="/custom-order"
                className="
                    rounded-full
                    border
                    border-blue-200
                    bg-white/80
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-[#2563EB]
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-blue-400
                    hover:bg-blue-50
                    hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)]
                  "
              >
                Start Order
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="
                  flex
                  md:hidden
                  items-center
                  justify-center
                  rounded-xl
                  p-2
                  text-[#0F172A]
                  transition
                  hover:bg-blue-50
                "
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`
                md:hidden
                overflow-hidden
                transition-all
                duration-500
                ease-in-out
                ${
                  isOpen
                    ? "max-h-[350px] border-t border-blue-100/60"
                    : "max-h-0"
                }
              `}
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                      rounded-xl
                      px-4
                      py-3
                      text-[#64748B]
                      transition-all
                      hover:bg-blue-50
                      hover:text-[#2563EB]
                    "
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/custom-order"
                onClick={() => setIsOpen(false)}
                className="
                    mt-3
                    rounded-xl
                    bg-[#2563EB]
                    px-4
                    py-3
                    text-center
                    text-sm
                    font-medium
                    text-white
                    shadow-[0_10px_30px_rgba(37,99,235,0.25)]
                  "
              >
                Start Order
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
