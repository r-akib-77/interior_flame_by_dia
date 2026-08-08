import React from 'react';

export type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  image: string;
  images?: string[];
  style: string[];
  fabrics: string[];
  type: string;
  stitchType: string;
  createdAt: string;
  
  // Additional fields for compatibility if needed
  tagline?: string;
  longDescription?: string;
  category?: string;
  imageUrl?: string;
  gallery?: string[];
  features?: string[];
};

export type JournalArticle = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
};

export type FilterState = {
  style: string[];
  fabrics: string[];
  type: string[];
  stitchType: string[];
};

export type SortOption = 'newest' | 'price-low' | 'price-high';
