"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue-100 bg-[#F8F8FF]">
      {/* Decorative Flowers */}
      <div className="absolute left-0 top-0 opacity-10">
        <svg
          width="220"
          height="220"
          viewBox="0 0 100 100"
          fill="currentColor"
          className="text-blue-400"
        >
          <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 opacity-10">
        <svg
          width="260"
          height="260"
          viewBox="0 0 100 100"
          fill="currentColor"
          className="text-blue-400"
        >
          <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-4xl text-slate-900">
              Interior Flame
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[0.4em] text-blue-600">
              By Dia
            </p>

            <p className="mt-8 max-w-md leading-8 text-slate-600">
              Handcrafted artistic creations blending luxury, emotion, and
              timeless elegance through custom paintings, embroidered pieces,
              and soulful decor.
            </p>

            {/* Socials */}
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <FaFacebookMessenger size={18} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-blue-300" />

              <h3 className="text-xs uppercase tracking-[0.35em] text-blue-700">
                Navigation
              </h3>
            </div>

            <div className="mt-8 flex flex-col gap-4 text-slate-600">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/custom-order">Custom Orders</Link>
              <Link href="/about">About Artist</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-blue-300" />

              <h3 className="text-xs uppercase tracking-[0.35em] text-blue-700">
                Contact
              </h3>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 text-slate-700">
                    interiorflame046@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Studio
                  </p>

                  <p className="mt-1 text-slate-700">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-blue-100 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-slate-500">
              © 2026 Interior Flame By Dia. All rights reserved.
            </p>

            <p className="text-sm text-slate-500">
              Crafted with
              <span className="mx-2 text-blue-600">♥</span>
              by Habiba Dia
            </p>

            <p className="text-xs uppercase tracking-[0.3em] text-blue-700">
              Developed by Vertexora Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
