"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomOrderFAQ() {
  const faqs = [
    {
      question: "How long does a custom order take?",
      answer:
        "Most custom orders take between 7–21 days depending on the complexity, materials, and current order volume.",
    },

    {
      question: "Can I request revisions?",
      answer:
        "Absolutely. During the design discussion stage, we'll work closely together to ensure your artwork reflects your vision.",
    },
    {
      question: "How do I send inspiration photos?",
      answer:
        "You can describe your idea in the custom order form and send reference images directly through WhatsApp after submitting.",
    },
    {
      question: "What products can be customized?",
      answer:
        "Custom paintings, embroidered hoops, tote bags, apparel, jackets, gifts, home décor pieces, and special commissioned artwork.",
    },
    {
      question: "Do I need to pay before the artwork starts?",
      answer:
        "A partial advance payment may be required to confirm your custom order, depending on the project scope.",
    },
  ];

  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-28">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-10 text-blue-50">
        <svg width="180" height="180" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
        </svg>
      </div>

      <div className="absolute right-0 bottom-0 text-blue-50">
        <svg width="220" height="220" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 15C56 32 68 44 85 50C68 56 56 68 50 85C44 68 32 56 15 50C32 44 44 32 50 15Z" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-3">
            <span className="text-blue-400">✦</span>

            <div className="h-px w-10 bg-blue-300" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-blue-600">
              Frequently Asked Questions
            </span>

            <div className="h-px w-10 bg-blue-300" />

            <span className="text-blue-400">✦</span>
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-6xl">
            Questions Before
            <span className="text-blue-700"> Ordering?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Everything you need to know before commissioning your custom
            handcrafted artwork.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-blue-100
        bg-white
        shadow-sm
        transition-all
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          px-6
          py-5
          text-left
        "
      >
        <h3 className="pr-4 text-lg font-semibold text-slate-900">
          {question}
        </h3>

        <ChevronDown
          className={`h-5 w-5 text-blue-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-blue-50 px-6 py-5">
            <p className="leading-relaxed text-slate-600">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
