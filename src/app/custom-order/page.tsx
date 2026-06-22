import React from "react";
import CustomOrderHero from "./section/CustomOrderHero";
import CustomOrderForm from "./section/CustomOrderForm";
import { Toaster } from "react-hot-toast";
import CustomOrderFAQ from "./section/CustomOrderFAQ";

export default function page() {
  return (
    <>
      <Toaster position="top-right" />
      <CustomOrderHero />
      <CustomOrderForm />
      <CustomOrderFAQ />
    </>
  );
}
