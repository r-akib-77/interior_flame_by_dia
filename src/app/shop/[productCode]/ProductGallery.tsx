"use client";

import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
  productCode?: string;
  productName?: string;
};

export default function ProductGallery({
  images,
  productCode,
  productName,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          md:rounded-[36px]
          border
          border-blue-100
          bg-white
          shadow-[0_20px_60px_rgba(15,23,42,0.08)]
        "
      >
        <Image
          src={selectedImage}
          alt={productName || "Product"}
          width={1000}
          height={1000}
          priority
          className="
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-[1.02]
          "
        />

        {productCode && (
          <div
            className="
              absolute
              left-3
              top-3
              md:left-5
              md:top-5
              rounded-full
              bg-white/95
              px-3
              py-1.5
              md:px-4
              md:py-2
              text-xs
              md:text-sm
              font-medium
              text-blue-700
              shadow-lg
              backdrop-blur
            "
          >
            {productCode}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="mt-3 grid grid-cols-4 gap-2 md:mt-4 md:gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`
              overflow-hidden
              rounded-lg
              md:rounded-2xl
              border-2
              transition-all
              duration-300
              hover:scale-[1.03]
              ${
                selectedImage === image
                  ? "border-blue-500 shadow-md"
                  : "border-blue-100"
              }
            `}
          >
            <Image
              src={image}
              alt={`${productName || "Product"} ${index + 1}`}
              width={250}
              height={250}
              className="
                aspect-square
                w-full
                object-cover
              "
            />
          </button>
        ))}
      </div>
    </div>
  );
}
