type Product = {
  id: number;
  name: string;
  desc: string;
  productCode: string;
  price: string;
  category: string;
  stock: string;
  images: string[];
};

// stock:
// "In Stock"
// "Made To Order"
// "Custom Order Only"
// "Sold Out"

export const products: Product[] = [
  {
    id: 1,
    name: "Custom Embroidery Hoop",
    desc: "Luxury handmade embroidery hoop personalized with names, dates, quotes, and floral embroidery.",
    productCode: "IFD-001",
    price: "1,500",
    category: "Wedding Customised Frames",
    stock: "Made To Order",
    images: [
      "/products/product-1.jpg",
      "/products/product-1.jpg",
      "/products/product-1.jpg",
      "/products/product-1.jpg",
    ],
  },

  {
    id: 2,
    name: "Hand Painted Tote Bag",
    desc: "Premium hand-painted tote bag crafted with artistic details and durable materials.",
    productCode: "IFD-002",
    price: "2,200",
    category: "Accessories",
    stock: "Custom Order Only",
    images: [
      "/products/product-2.jpg",
      "/products/product-2.jpg",
      "/products/product-2.jpg",
      "/products/product-2.jpg",
    ],
  },

  {
    id: 3,
    name: "Canvas Wall Art",
    desc: "Luxury canvas artwork designed to elevate your home, office, or studio space.",
    productCode: "IFD-003",
    price: "4,500",
    category: "Painting",
    stock: "In Stock",
    images: [
      "/products/product-3.jpg",
      "/products/product-3.jpg",
      "/products/product-3.jpg",
      "/products/product-3.jpg",
    ],
  },

  {
    id: 4,
    name: "Custom Jacket Painting",
    desc: "Hand-painted wearable art created exclusively for your style and personality.",
    productCode: "IFD-004",
    price: "5,500",
    category: "Handpainted Attire",
    stock: "Sold Out",
    images: [
      "/products/product-4.jpg",
      "/products/product-4.jpg",
      "/products/product-4.jpg",
      "/products/product-4.jpg",
    ],
  },

  {
    id: 5,
    name: "Abstract Texture Artwork",
    desc: "Premium mixed-media artwork featuring texture, layering, and modern artistic techniques.",
    productCode: "IFD-005",
    price: "3,800",
    category: "Texture & Collage Works",
    stock: "Made To Order",
    images: [
      "/products/product-5.jpg",
      "/products/product-5.jpg",
      "/products/product-5.jpg",
      "/products/product-5.jpg",
    ],
  },

  {
    id: 6,
    name: "Exhibition Collection Piece",
    desc: "Exclusive exhibition artwork showcasing contemporary artistic expression.",
    productCode: "IFD-006",
    price: "8,500",
    category: "Exhibition",
    stock: "In Stock",
    images: [
      "/products/product-6.jpg",
      "/products/product-6.jpg",
      "/products/product-6.jpg",
      "/products/product-6.jpg",
    ],
  },

  {
    id: 7,
    name: "Wedding Memory Frame",
    desc: "Custom wedding frame preserving your most precious memories through handcrafted art.",
    productCode: "IFD-007",
    price: "2,900",
    category: "Wedding Customised Frames",
    stock: "Custom Order Only",
    images: [
      "/products/product-7.jpg",
      "/products/product-7.jpg",
      "/products/product-7.jpg",
      "/products/product-7.jpg",
    ],
  },

  {
    id: 8,
    name: "Luxury Floral Painting",
    desc: "Elegant floral painting inspired by nature, crafted with premium art materials.",
    productCode: "IFD-008",
    price: "6,200",
    category: "Painting",
    stock: "In Stock",
    images: [
      "/products/product-8.jpg",
      "/products/product-8.jpg",
      "/products/product-8.jpg",
      "/products/product-8.jpg",
    ],
  },
];
