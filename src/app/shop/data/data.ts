type Product = {
  id: number;
  name: string;
  desc: string;
  productCode: string;
  price: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Custom Embroidery Hoop",
    desc: "Luxury handmade embroidery hoop.",
    productCode: "IFD-001",
    price: "৳1,500",
    category: "Embroidery",
    image: "/products/product-1.jpg",
  },
  {
    id: 2,
    name: "Hand Painted Tote Bag",
    desc: "Premium custom painted tote bag.",
    productCode: "IFD-002",
    price: "৳2,200",
    category: "Embroidery",

    image: "/products/product-2.jpg",
  },
  {
    id: 3,
    name: "Canvas Wall Art",
    desc: "Luxury canvas artwork.",
    productCode: "IFD-003",
    price: "৳4,500",
    category: "Hand Painted",

    image: "/products/product-3.jpg",
  },
  {
    id: 4,
    name: "Custom Jacket Painting",
    desc: "Hand painted wearable art.",
    productCode: "IFD-004",
    category: "Hand Painted",
    price: "5,500",
    image: "/products/product-4.jpg",
  },
  {
    id: 5,
    name: "Custom Embroidery Hoop",
    desc: "Luxury handmade embroidery hoop.",
    productCode: "IFD-001",
    price: "1,500",
    category: "Embroidery",
    image: "/products/product-1.jpg",
  },
  {
    id: 6,
    name: "Hand Painted Tote Bag",
    desc: "Premium custom painted tote bag.",
    productCode: "IFD-002",
    price: "2,200",
    category: "Embroidery",

    image: "/products/product-2.jpg",
  },
  {
    id: 7,
    name: "Canvas Wall Art",
    desc: "Luxury canvas artwork.",
    productCode: "IFD-003",
    price: "4,500",
    category: "Hand Painted",

    image: "/products/product-3.jpg",
  },
  {
    id: 8,
    name: "Custom Jacket Painting",
    desc: "Hand painted wearable art.",
    productCode: "IFD-004",
    category: "Hand Painted",
    price: "5,500",
    image: "/products/product-4.jpg",
  },
];
