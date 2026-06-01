"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";

import Link from "next/link";

import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

const cartItems = [
  {
    id: 1,
    name: "Luxury Painted Tote",
    category: "Handpainted Attire",
    price: 120,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Golden Floral Canvas",
    category: "Painting",
    price: 240,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Wedding Customised Frame",
    category: "Wedding Customised Frames",
    price: 180,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
];

const subtotal = cartItems.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0,
);

const shipping = 20;

const total = subtotal + shipping;

export default function CartPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] py-20 text-white">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="absolute bottom-[-120px] right-[-120px] h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-[170px]" />

      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,215,0,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.25)_1px,transparent_1px)] bg-[size:90px_90px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HERO ================= */}

        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-yellow-400">
            Luxury Checkout
          </p>

          <h1 className="font-serif text-4xl leading-tight sm:text-6xl">
            Your
            <span className="mt-2 block italic text-yellow-400">
              Shopping Cart
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
            Review your handcrafted luxury creations before proceeding to
            checkout.
          </p>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.5fr_0.7fr]">
          {/* ================= CART ITEMS ================= */}

          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl transition duration-500 hover:border-yellow-500/20"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* IMAGE */}

                  <div className="relative h-[220px] w-full overflow-hidden sm:h-auto sm:w-[240px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full border border-yellow-500/20 bg-black/60 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-yellow-400 backdrop-blur-xl">
                      {item.category}
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="flex flex-1 flex-col justify-between p-5 sm:p-7">
                    <div>
                      <h2 className="font-serif text-2xl text-white">
                        {item.name}
                      </h2>

                      <p className="mt-4 text-sm leading-7 text-zinc-400">
                        Premium handcrafted artistic luxury piece designed with
                        emotional elegance and timeless detailing.
                      </p>
                    </div>

                    {/* BOTTOM */}

                    <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      {/* QUANTITY */}

                      <div className="flex w-fit items-center rounded-full border border-white/10 bg-black/30">
                        <button className="flex h-10 w-10 items-center justify-center text-zinc-400 transition duration-300 hover:text-yellow-400">
                          <Minus className="h-4 w-4" />
                        </button>

                        <span className="min-w-[40px] text-center text-sm text-white">
                          {item.quantity}
                        </span>

                        <button className="flex h-10 w-10 items-center justify-center text-zinc-400 transition duration-300 hover:text-yellow-400">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      {/* PRICE + DELETE */}

                      <div className="flex items-center gap-5">
                        <p className="text-xl font-semibold text-yellow-400">
                          ${item.price}
                        </p>

                        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-red-400 transition duration-300 hover:bg-red-500/20">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= SUMMARY ================= */}

          <div className="h-fit overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-3xl lg:sticky lg:top-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10">
                <ShoppingBag className="h-5 w-5 text-yellow-400" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-400">
                  Order Summary
                </p>

                <h2 className="mt-1 font-serif text-2xl text-white">
                  Checkout
                </h2>
              </div>
            </div>

            {/* LINES */}

            <div className="mt-8 space-y-5">
              <div className="flex items-center justify-between text-sm text-zinc-400">
                <span>Subtotal</span>

                <span className="text-white">${subtotal}</span>
              </div>

              <div className="flex items-center justify-between text-sm text-zinc-400">
                <span>Shipping</span>

                <span className="text-white">${shipping}</span>
              </div>

              <div className="h-px bg-gradient-to-r from-yellow-400/30 to-transparent" />

              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.2em] text-zinc-300">
                  Total
                </span>

                <span className="text-3xl font-semibold text-yellow-400">
                  ${total}
                </span>
              </div>
            </div>

            {/* BUTTON */}

            <Link
              href="/checkout"
              className="group mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-sm uppercase tracking-[0.2em] text-yellow-400 transition duration-500 hover:bg-yellow-500/20"
            >
              <span>Proceed To Checkout</span>

              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
            </Link>

            {/* EXTRA */}

            <p className="mt-6 text-center text-xs leading-6 text-zinc-500">
              Secure luxury checkout experience with handcrafted artistic care.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
