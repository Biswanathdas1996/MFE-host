import React from "react";
import ProductList from "productReact/ProductList";
import ProductBanner from "productReact/ProductBanner";

export const Home = ({ cartCount }) => {
  return (
    <>
      <ProductBanner />
      <ProductList cartCount={cartCount} />
    </>
  );
};
