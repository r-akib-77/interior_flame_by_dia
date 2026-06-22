"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Search, Eye } from "lucide-react";
import { products } from "./data/data";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  desc: string;
  productCode: string;
  price: string;
  image: string;
};

export default function ShopProducts() {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const q = search.toLowerCase();

      return (
        product.name.toLowerCase().includes(q) ||
        product.desc.toLowerCase().includes(q) ||
        product.productCode.toLowerCase().includes(q)
      );
    });
  }, [search]);

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-10 bg-blue-300" />

            <span className="text-xs uppercase tracking-[0.35em] text-blue-600">
              Our Collection
            </span>

            <div className="h-px w-10 bg-blue-300" />
          </div>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-6xl">
            Shop Our
            <span className="text-blue-700"> Artworks</span>
          </h2>
        </div>

        {/* Search */}
        <div className="mx-auto mb-10 max-w-xl">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search by name, description or product code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-blue-100
                bg-white
                py-4
                pl-12
                pr-4
                outline-none
                transition
                focus:border-blue-500
              "
            />
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="
    group
    overflow-hidden
    rounded-[28px]
    border
    border-blue-100
    bg-white
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-2
    hover:shadow-xl
  "
            >
              {/* Image */}
              <div className="relative">
                <div
                  className="
        absolute
        left-3
        top-3
        z-10
        rounded-full
        bg-white/95
        px-3
        py-1
        text-[10px]
        font-semibold
        tracking-wider
        text-blue-700
        shadow
      "
                >
                  {product.productCode}
                </div>

                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex h-[115px] flex-col p-4">
                <h3 className="line-clamp-2 min-h-[42px] text-sm font-semibold text-slate-900 md:text-base">
                  {product.name}
                </h3>

                <div className="mt-auto flex items-center justify-between gap-2">
                  <p className="shrink-0 text-base font-bold text-blue-700 md:text-lg">
                    ৳{product.price}
                  </p>

                  <Link
                    href={`/shop/${product.productCode}`}
                    className="
    flex
    shrink-0
    items-center
    justify-center
    rounded-xl
    border
    border-blue-100
    bg-blue-50
    p-2.5
    text-blue-700
    transition-all
    hover:bg-blue-100
  "
                  >
                    <Eye size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            No products found.
          </div>
        )}
      </div>
    </section>
  );
}
