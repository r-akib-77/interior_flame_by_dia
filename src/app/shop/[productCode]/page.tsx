import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../data/data";
import { FaWhatsapp } from "react-icons/fa";
import ProductGallery from "./ProductGallery";

export const runtime = "edge";

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    productCode: string;
  }>;
}) {
  const { productCode } = await params;
  const product = products.find((p) => p.productCode === productCode);

  if (!product) {
    notFound();
  }

  return (
    <section className="relative overflow-hidden bg-[#F8F8FF] px-4 py-10">
      {/* ================= Elegant Decorative Elements ================= */}

      {/* Soft Glow Top Left */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />

      {/* Soft Glow Bottom Right */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-100/30 blur-3xl" />

      {/* Small Watermark Flower */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015]">
        <svg
          width="220"
          height="220"
          viewBox="0 0 100 100"
          fill="currentColor"
          className="text-blue-300"
        >
          <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
        </svg>
      </div>

      {/* Top Left Flower */}
      <div className="pointer-events-none absolute left-0 top-10 text-blue-200">
        <svg width="140" height="140" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
        </svg>
      </div>

      {/* Bottom Right Flower */}
      <div className="pointer-events-none absolute bottom-0 right-0 text-blue-200">
        <svg width="180" height="180" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
        </svg>
      </div>

      {/* Decorative Circles */}
      <div className="pointer-events-none absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full border border-blue-100" />

      <div className="pointer-events-none absolute bottom-10 right-10 h-48 w-48 rounded-full border border-blue-100" />

      {/* Luxury Sparkles */}
      <div className="pointer-events-none absolute left-[15%] top-[18%] text-blue-200 text-xl">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[12%] top-[22%] text-blue-200 text-2xl">
        ✧
      </div>

      <div className="pointer-events-none absolute left-[20%] bottom-[20%] text-blue-200 text-xl">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[18%] bottom-[18%] text-blue-200 text-xl">
        ✧
      </div>

      {/* Floral Accents */}
      <div className="pointer-events-none absolute left-[8%] top-[60%] text-blue-200 text-2xl">
        ❀
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[55%] text-blue-200 text-2xl">
        ❀
      </div>

      {/* Tiny Dots */}
      <div className="pointer-events-none absolute left-20 top-40 h-2 w-2 rounded-full bg-blue-300" />
      <div className="pointer-events-none absolute left-28 top-48 h-1.5 w-1.5 rounded-full bg-blue-300" />
      <div className="pointer-events-none absolute left-36 top-42 h-2 w-2 rounded-full bg-blue-200" />

      <div className="pointer-events-none absolute right-24 bottom-44 h-2 w-2 rounded-full bg-blue-300" />
      <div className="pointer-events-none absolute right-32 bottom-52 h-1.5 w-1.5 rounded-full bg-blue-300" />
      <div className="pointer-events-none absolute right-16 bottom-48 h-2 w-2 rounded-full bg-blue-200" />

      {/* Botanical Leaf */}
      <div className="pointer-events-none absolute right-6 top-1/3 text-blue-200 opacity-60">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path
            d="M20 80C60 60 80 40 80 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M45 45C60 40 70 30 75 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M30 65C45 60 55 50 60 35"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-slate-500 transition-colors hover:text-blue-600"
            >
              Home
            </Link>

            <span className="text-slate-300">/</span>

            <Link
              href="/shop"
              className="text-slate-500 transition-colors hover:text-blue-600"
            >
              Shop
            </Link>

            <span className="text-slate-300">/</span>

            <span className="font-medium text-slate-900">
              {product.productCode}
            </span>
          </nav>

          {/* Back Button */}
          <Link
            href="/shop"
            className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-blue-100
      bg-gradient-to-r
      from-blue-50
      to-white
      px-4
      py-2
      text-sm
      font-medium
      text-blue-700
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:shadow-md
    "
          >
            ← Back to Shop
          </Link>
        </div>
        <div className="grid gap-14 lg:grid-cols-2">
          {/* IMAGE */}
          <ProductGallery
            images={product.images}
            productCode={product.productCode}
            productName={product.name}
          />

          {/* CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Handmade Artwork
            </div>

            {/* Title */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              {product.name}
            </h1>

            {/* Decorative Line */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-12 bg-blue-300" />
              <span className="text-blue-400">✦</span>
              <div className="h-px w-20 bg-blue-100" />
            </div>

            {/* Description */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                Description
              </p>

              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {product.desc}
              </p>
            </div>

            {/* Details Card */}
            <div className="mt-10 rounded-[32px] border border-blue-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Product Details
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Product Name</span>

                  <span className="font-medium text-slate-900">
                    {product.name}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Product Code</span>

                  <span className="font-medium text-slate-900">
                    {product.productCode}
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b border-slate-100 pb-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-slate-500">Category</span>

                  <span className="text-sm font-medium text-slate-900 sm:text-right">
                    {product.category}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Availability</span>

                  <div
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                      product.stock === "In Stock"
                        ? "bg-green-100 text-green-700"
                        : product.stock === "Made To Order"
                          ? "bg-blue-100 text-blue-700"
                          : product.stock === "Custom Order Only"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.stock}
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <p className="font-semibold text-slate-900">✦ Handmade</p>

                <p className="mt-1 text-sm text-slate-600">
                  Carefully crafted by hand.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <p className="font-semibold text-slate-900">
                  ✦ Premium Quality
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  Professional materials and finish.
                </p>
              </div>
            </div>

            {/* Price Card */}
            <div className="mt-10 rounded-[32px] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                Price
              </p>

              <p className="mt-3 text-5xl font-bold text-blue-700">
                {product.price}
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Each artwork is handcrafted with attention to detail and
                artistic excellence.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/8801404601580?text=Hi, I'm interested in ${product.name} (${product.productCode})`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-[#25D366]
                  px-8
                  py-4
                  font-medium
                  text-white
                  shadow-lg
                  transition-all
                  hover:-translate-y-1
                "
              >
                <FaWhatsapp size={20} />
                Order via WhatsApp
              </a>

              <Link
                href="/custom-order"
                className="
                  rounded-2xl
                  border
                  border-blue-100
                  bg-white
                  px-8
                  py-4
                  text-center
                  font-medium
                  text-slate-700
                  transition-all
                  hover:bg-blue-50
                "
              >
                Request Custom Version
              </Link>
            </div>

            {/* Footer Note */}
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              Every piece is handcrafted and may feature subtle artistic
              variations, making your artwork uniquely yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
