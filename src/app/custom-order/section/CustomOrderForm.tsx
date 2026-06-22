"use client";

import { Flower2, Sparkles } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";

export default function CustomOrderForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    productType: "",
    budget: "",
    deadline: "",
    vision: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.vision.trim()
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    const message = `

╔════════════════════╗
     INTERIOR FLAME
        BY DIA
╚════════════════════╝

Name:
${form.name}

Email:
${form.email}

Phone:
${form.phone}

Artwork Type:
${form.productType || "Not specified"}

Budget:
${form.budget || "Not specified"}

Deadline:
${form.deadline || "Not specified"}

──────────────

VISION

${form.vision}

──────────────

✦ Handmade Art
✦ Crafted With Care
✦ Made Especially For You

✦Thank you for your interest!<3

`;
    const whatsappNumber = "8801404601580";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="order-form" className="mx-auto max-w-4xl px-4 ">
      <div className="relative mb-16 text-center">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 text-blue-200 -z-10 rotate-[27deg]">
          <Flower2 size={90} />
        </div>

        <div className="relative inline-flex items-center gap-3">
          <div className="h-px w-10 bg-blue-300" />

          <span className="text-xs font-medium uppercase tracking-[0.35em] text-blue-600">
            Custom Artwork Request
          </span>

          <div className="h-px w-10 bg-blue-300" />
        </div>

        <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
          Bring Your
          <span className="block text-blue-700">Vision To Life</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Share your idea and we&apos;ll transform it into a handcrafted piece
          of art made exclusively for you.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="text-blue-300">❀</span>
          <div className="h-px w-14 bg-blue-200" />
          <Sparkles className="h-4 w-4 text-blue-400" />
          <div className="h-px w-14 bg-blue-200" />
          <span className="text-blue-300">❀</span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="
relative
overflow-hidden
space-y-6
rounded-[36px]
border
border-blue-100
bg-white
p-6
md:p-10
shadow-[0_25px_80px_rgba(15,23,42,0.06)]
"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label
              className="
mb-2
block
text-xs
font-medium
uppercase
tracking-[0.25em]
text-slate-500
"
            >
              Name *
            </label>

            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="
w-full
rounded-2xl
border
border-slate-200
bg-white
px-4
py-3
text-slate-700
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"
            />
          </div>

          <div>
            <label
              className="
mb-2
block
text-xs
font-medium
uppercase
tracking-[0.25em]
text-slate-500
"
            >
              Email *
            </label>

            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="
w-full
rounded-2xl
border
border-slate-200
bg-white
px-4
py-3
text-slate-700
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"
            />
          </div>

          <div>
            <label
              className="
mb-2
block
text-xs
font-medium
uppercase
tracking-[0.25em]
text-slate-500
"
            >
              Phone Number *
            </label>

            <input
              type="text"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="
w-full
rounded-2xl
border
border-slate-200
bg-white
px-4
py-3
text-slate-700
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"
            />
          </div>

          <div>
            <label
              className="
mb-2
block
text-xs
font-medium
uppercase
tracking-[0.25em]
text-slate-500
"
            >
              Product Type
            </label>

            <select
              value={form.productType}
              onChange={(e) =>
                setForm({
                  ...form,
                  productType: e.target.value,
                })
              }
              className="
w-full
rounded-2xl
border
border-slate-200
bg-white
px-4
py-3
text-slate-700
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"
            >
              <option value="">Select Product</option>
              <option>Canvas Painting</option>
              <option>Embroidery Hoop</option>
              <option>Tote Bag</option>
              <option>Hand Painted Jacket</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label
              className="
mb-2
block
text-xs
font-medium
uppercase
tracking-[0.25em]
text-slate-500
"
            >
              Budget
            </label>

            <input
              type="text"
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className="
w-full
rounded-2xl
border
border-slate-200
bg-white
px-4
py-3
text-slate-700
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"
            />
          </div>

          <div>
            <label
              className="
mb-2
block
text-xs
font-medium
uppercase
tracking-[0.25em]
text-slate-500
"
            >
              Deadline
            </label>

            <input
              type="date"
              value={form.deadline}
              onChange={(e) => setForm({ ...form, deadline: e.target.value })}
              className="
w-full
rounded-2xl
border
border-slate-200
bg-white
px-4
py-3
text-slate-700
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"
            />
          </div>
        </div>

        <div>
          <label
            className="
mb-2
block
text-xs
font-medium
uppercase
tracking-[0.25em]
text-slate-500
"
          >
            Tell Us Your Vision *
          </label>

          <textarea
            required
            rows={6}
            value={form.vision}
            onChange={(e) => setForm({ ...form, vision: e.target.value })}
            className="
w-full
rounded-2xl
border
border-slate-200
bg-white
px-4
py-3
text-slate-700
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-4
focus:ring-blue-100
"
            placeholder="Describe your dream artwork..."
          />
        </div>

        <button
          type="submit"
          className="
    group
    relative
    flex
    w-full
    items-center
    justify-center
    gap-3
    overflow-hidden
    rounded-2xl
    bg-[#25D366]
    px-8
    py-4
    font-medium
    text-white
    shadow-[0_20px_50px_rgba(37,211,102,0.25)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_25px_60px_rgba(37,211,102,0.35)]
  "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

          <FaWhatsapp size={22} />

          <span>Submit Order via WhatsApp</span>
        </button>
        <p className="text-center text-sm text-slate-500">
          ✦ Your details will open directly in WhatsApp for quick communication.
        </p>
      </form>
    </section>
  );
}
