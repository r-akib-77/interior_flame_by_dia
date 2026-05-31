"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ShoppingBag, SlidersHorizontal } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Luxury Painted Tote",
    category: "Luxury",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Golden Floral Canvas",
    category: "Canvas",
    price: "$240",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Luxury Embroidery Hoop",
    category: "Embroidery",
    price: "$95",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    name: "Minimal Artistic Decor",
    category: "Decor",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    name: "Custom Fashion Artwork",
    category: "Luxury",
    price: "$210",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    name: "Premium Abstract Painting",
    category: "Canvas",
    price: "$320",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 7,
    name: "Elegant Wall Frame",
    category: "Decor",
    price: "$170",
    image:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 8,
    name: "Luxury Handbag Art",
    category: "Luxury",
    price: "$260",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 9,
    name: "Modern Artistic Canvas",
    category: "Canvas",
    price: "$350",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 10,
    name: "Luxury Flower Embroidery",
    category: "Embroidery",
    price: "$110",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 11,
    name: "Handcrafted Decorative Art",
    category: "Decor",
    price: "$190",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 12,
    name: "Designer Tote Collection",
    category: "Luxury",
    price: "$145",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200&auto=format&fit=crop",
  },
];

const filters = ["All", "Luxury", "Canvas", "Embroidery", "Decor"];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  const mobileRows = [
    filteredProducts.slice(0, 4),
    filteredProducts.slice(4, 8),
    filteredProducts.slice(8, 12),
  ];

  return (
    <main className="relative overflow-hidden bg-[#050505] py-20 text-white">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute left-[-100px] top-[-100px] h-[380px] w-[380px] rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="absolute bottom-[-120px] right-[-100px] h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[160px]" />

      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,215,0,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.25)_1px,transparent_1px)] bg-[size:90px_90px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HERO ================= */}

        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-yellow-400">
            Curated Luxury Collection
          </p>

          <h1 className="font-serif text-4xl leading-tight sm:text-6xl">
            Explore Our
            <span className="mt-2 block italic text-yellow-400">
              Artistic Creations
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
            Discover handcrafted luxury artwork, custom painted fashion,
            timeless decor, and emotionally crafted artistic pieces.
          </p>
        </div>

        {/* ================= FILTERS ================= */}

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.25em] transition duration-300 sm:px-5 sm:py-3 sm:text-xs ${
                activeFilter === filter
                  ? "border-yellow-500/30 bg-yellow-500/15 text-yellow-400"
                  : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-yellow-500/20 hover:text-white"
              }`}
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />

              <span>{filter}</span>
            </button>
          ))}
        </div>

        {/* ================= MOBILE VIEW ================= */}

        <div className="mt-12 space-y-4 lg:hidden">
          {mobileRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
            >
              {row.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ))}
        </div>

        {/* ================= DESKTOP VIEW ================= */}

        <div className="mt-16 hidden lg:grid lg:grid-cols-4 lg:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="group relative min-w-[155px] max-w-[155px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0b0b0b] transition duration-500 hover:border-yellow-500/20 sm:min-w-[220px] sm:max-w-[220px] lg:min-w-0 lg:max-w-none">
      {/* IMAGE */}

      <div className="relative h-[150px] overflow-hidden sm:h-[220px] lg:h-[260px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        {/* CATEGORY */}

        <div className="absolute left-2 top-2 rounded-full border border-yellow-500/20 bg-black/60 px-2 py-1 text-[7px] uppercase tracking-[0.15em] text-yellow-400 backdrop-blur-xl sm:left-3 sm:top-3 sm:px-3 sm:text-[8px] lg:px-4 lg:py-2 lg:text-[10px]">
          {product.category}
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-3 sm:p-4 lg:p-5">
        <h3 className="line-clamp-1 font-serif text-[12px] leading-snug text-white sm:text-[15px] lg:text-xl">
          {product.name}
        </h3>

        <div className="mt-2 flex flex-col gap-2 sm:mt-3 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm font-semibold text-yellow-400 sm:text-base lg:text-lg">
            {product.price}
          </p>

          <Link
            href="/cart"
            className="flex h-8 items-center justify-center gap-1 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2 text-[7px] uppercase tracking-[0.12em] text-yellow-400 transition duration-300 hover:bg-yellow-500/20 sm:h-9 sm:px-3 sm:text-[8px] lg:h-auto lg:gap-2 lg:px-4 lg:py-2 lg:text-[10px]"
          >
            <ShoppingBag className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4" />

            <span>Add To Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
