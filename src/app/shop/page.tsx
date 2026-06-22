"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Search, Eye } from "lucide-react";
import { products } from "./data/data";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
const categories = [
  "All",
  "Exhibition",
  "Painting",
  "Wedding Customised Frames",
  "Handpainted Attire",
  "Accessories",
  "Texture & Collage Works",
];

// type Product = {
//   id: number;
//   name: string;
//   desc: string;
//   productCode: string;
//   price: string;
//   category: string;
//   stock: string;
//   image: string;
// };

export default function ShopProducts() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const q = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(q) ||
        product.desc.toLowerCase().includes(q) ||
        product.productCode.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);
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

        {/* Category Filters */}
        <div className="mb-10 flex justify-center">
          <motion.button
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => setShowFilters(true)}
            className="
    flex
    items-center
    gap-2
    rounded-2xl
    border
    border-blue-100
    bg-white
    px-5
    py-3
    text-sm
    font-medium
    text-slate-700
    shadow-sm
    transition-all
    hover:bg-blue-50
  "
          >
            ⚙️ Filter Products
          </motion.button>
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
                    src={product.images[0]}
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
                    <span className="font-black">৳</span> {product.price}
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

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/30
        backdrop-blur-md
        p-4
      "
            onClick={() => setShowFilters(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 40,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
                filter: "blur(4px)",
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="
          relative
          w-full
          max-w-md
          overflow-hidden
          rounded-[36px]
          border
          border-white/40
          bg-white/95
          p-7
          shadow-[0_40px_120px_rgba(15,23,42,0.18)]
          backdrop-blur-xl
        "
            >
              {/* Glow */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/20 blur-3xl" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-slate-900">
                  Filter Products
                </h3>

                <button
                  onClick={() => setShowFilters(false)}
                  className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-slate-50
              text-xl
              text-slate-500
              transition
              hover:bg-slate-100
            "
                >
                  ×
                </button>
              </div>

              {/* Categories */}
              <div className="mt-6 flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.35,
                    }}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowFilters(false);
                    }}
                    className={`
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                transition-all
                ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "border border-blue-100 bg-white text-slate-600 hover:bg-blue-50"
                }
              `}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Clear Filter */}
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setShowFilters(false);
                }}
                className="
            mt-6
            w-full
            rounded-2xl
            border
            border-red-100
            bg-red-50
            py-3
            font-medium
            text-red-600
            transition
            hover:bg-red-100
          "
              >
                Clear Filter
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
