// product schema =>

// type Product = {
//   id: number;
//   name: string;
//   desc: string;
//   productCode: string;
//   price: string;
//   image: string;
//   category: string;
//   stock: string;
// };
// {
//   name: "Custom Jacket Painting",
//   desc: "Hand painted wearable art.",
//   productCode: "IFD-004",
//   category: "Handpainted Attire",
//   stock: "In Stock",
//   price: "5500",
//   images: [
//     "/products/product-4-1.jpg",
//     "/products/product-4-2.jpg",
//     "/products/product-4-3.jpg",
//     "/products/product-4-4.jpg"
//   ]
// }

"use client";

import { useEffect, useState } from "react";
import { Upload, Package } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function AdminProductsPage() {
  const [form, setForm] = useState({
    name: "",
    desc: "",
    category: "",
    price: "",
    stock: "In Stock",
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const [productCode, setProductCode] = useState("");

  useEffect(() => {
    setProductCode("IFD-" + crypto.randomUUID().slice(0, 8).toUpperCase());
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    const urls = files.slice(0, 4).map((file) => URL.createObjectURL(file));

    setImagePreviews(urls);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...form,
      productCode,
      images: imagePreviews,
    };
    console.log(payload);

    toast.success("Product Ready To Save");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Product Management
          </h1>

          <p className="mt-2 text-slate-500">
            Add new products to Interior Flame By Dia
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* Preview Card */}
          <div className="rounded-[32px] border border-blue-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Package className="text-blue-600" />
              <h2 className="font-semibold text-slate-900">Product Preview</h2>
            </div>

            <div className="mt-6">
              <div className="grid grid-cols-2 gap-3">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="
        aspect-square
        overflow-hidden
        rounded-2xl
        border
        border-slate-100
        bg-slate-50
      "
                  >
                    {imagePreviews[index] ? (
                      <Image
                        src={imagePreviews[index]}
                        alt={`Preview ${index + 1}`}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-slate-400">
                        Image {index + 1}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {productCode}
                </span>

                <h3 className="mt-3 text-xl font-bold text-slate-900">
                  {form.name || "Product Name"}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {form.category || "Category"}
                </p>

                <p className="mt-4 text-2xl font-bold text-blue-700">
                  {form.price || "৳0"}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-blue-100 bg-white p-8 shadow-sm"
          >
            <div className="grid gap-6">
              {/* Product Code */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Product Code
                </label>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 font-semibold text-blue-700">
                  {productCode}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Product Name
                </label>

                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Description
                </label>

                <textarea
                  rows={5}
                  value={form.desc}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      desc: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Category
                </label>

                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      category: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="">Select Category</option>
                  <option>Exhibition</option>
                  <option>Painting</option>
                  <option>Wedding Customised Frames</option>
                  <option>Handpaintined Attire</option>
                  <option>Accessories</option>
                  <option>Texture& Collage works</option>
                </select>
              </div>

              {/* stock  */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Stock Status
                </label>

                <select
                  value={form.stock}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      stock: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                >
                  <option value="">Select Status</option>

                  <option value="In Stock">In Stock</option>
                  <option value="Made To Order">Made To Order</option>
                  <option value="Custom Order Only">Custom Order Only</option>
                  <option value="Sold Out">Sold Out</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Price
                </label>

                <input
                  type="number"
                  value={form.price}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      price: e.target.value,
                    })
                  }
                  placeholder="5,500"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Product Image
                </label>

                <label className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 p-8 text-blue-700 transition hover:bg-blue-100">
                  <Upload size={22} />

                  <span>Upload Up To 4 Images</span>

                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  rounded-2xl
                  bg-blue-600
                  px-6
                  py-4
                  font-medium
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
