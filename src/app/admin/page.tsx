"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";

import Image from "next/image";

import { ImagePlus, Trash2, Save } from "lucide-react";

const categories = [
  "Exhibition",
  "Painting",
  "Wedding Customised Frames",
  "Handpainted Attire",
  "Accessories",
  "Texture & Collage Works",
];

export default function AdminPage() {
  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");

  const [price, setPrice] = useState("");

  const [category, setCategory] = useState("Exhibition");

  const [image, setImage] = useState<string | null>(null);

  const [products, setProducts] = useState<any[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
  };

  const handleAddProduct = () => {
    if (!title || !desc || !price || !image) return;

    const newProduct = {
      id: Date.now(),
      title,
      desc,
      price,
      category,
      image,
    };

    setProducts([newProduct, ...products]);

    setTitle("");
    setDesc("");
    setPrice("");
    setCategory("Exhibition");
    setImage(null);
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] py-20 text-white">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[#050505]" />

      <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="absolute bottom-[-160px] right-[-120px] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[170px]" />

      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,215,0,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.25)_1px,transparent_1px)] bg-[size:90px_90px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HERO ================= */}

        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-yellow-400">
            Admin Dashboard
          </p>

          <h1 className="font-serif text-4xl leading-tight sm:text-6xl">
            Upload New
            <span className="mt-2 block italic text-yellow-400">
              Artistic Product
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
            Add handcrafted artistic creations, paintings, customized frames,
            accessories, and luxury products.
          </p>
        </div>

        {/* ================= FORM ================= */}

        <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-3xl">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-2">
            {/* LEFT SIDE */}

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-yellow-400">
                Product Details
              </p>

              <div className="mt-8 space-y-5">
                {/* TITLE */}

                <div>
                  <label className="mb-3 block text-sm text-zinc-300">
                    Product Title
                  </label>

                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter product title"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-yellow-500/30"
                  />
                </div>

                {/* DESCRIPTION */}

                <div>
                  <label className="mb-3 block text-sm text-zinc-300">
                    Product Description
                  </label>

                  <textarea
                    rows={5}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Write product description..."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-yellow-500/30"
                  />
                </div>

                {/* PRICE */}

                <div>
                  <label className="mb-3 block text-sm text-zinc-300">
                    Product Price
                  </label>

                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="$199"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-yellow-500/30"
                  />
                </div>

                {/* CATEGORY */}

                <div>
                  <label className="mb-3 block text-sm text-zinc-300">
                    Category
                  </label>

                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none transition duration-300 focus:border-yellow-500/30"
                  >
                    {categories.map((item) => (
                      <option key={item} value={item} className="bg-[#050505]">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-yellow-400">
                Upload Product Image
              </p>

              {/* IMAGE UPLOAD */}

              <label className="group relative mt-8 flex h-[320px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[30px] border border-dashed border-white/10 bg-black/30 transition duration-500 hover:border-yellow-500/30">
                {image ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                ) : (
                  <div className="relative z-10 text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10">
                      <ImagePlus className="h-8 w-8 text-yellow-400" />
                    </div>

                    <p className="mt-6 text-sm text-zinc-300">
                      Click to upload image
                    </p>

                    <p className="mt-2 text-xs text-zinc-500">PNG, JPG, WEBP</p>
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {/* BUTTON */}

              <button
                onClick={handleAddProduct}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-8 py-4 text-sm uppercase tracking-[0.2em] text-yellow-400 transition duration-300 hover:bg-yellow-500/20"
              >
                <Save className="h-4 w-4" />
                Upload Product
              </button>
            </div>
          </div>
        </div>

        {/* ================= PRODUCTS ================= */}

        <div className="mt-20">
          <div className="flex items-center gap-6">
            <h2 className="font-serif text-3xl text-white">
              Uploaded Products
            </h2>

            <div className="h-px flex-1 bg-gradient-to-r from-yellow-400/30 to-transparent" />
          </div>

          {products.length === 0 ? (
            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-10 text-center text-zinc-500">
              No products uploaded yet.
            </div>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b0b]"
                >
                  {/* IMAGE */}

                  <div className="relative h-[260px] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full border border-yellow-500/20 bg-black/60 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-yellow-400 backdrop-blur-xl">
                      {product.category}
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="p-5">
                    <h3 className="font-serif text-xl text-white">
                      {product.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {product.desc}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <p className="text-lg font-semibold text-yellow-400">
                        {product.price}
                      </p>

                      <button
                        onClick={() => handleDelete(product.id)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-red-400 transition duration-300 hover:bg-red-500/20"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
