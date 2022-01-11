import React from "react";
import ProductList from "productReact/ProductList";

export const Home = ({ cartCount }) => {
  return (
    <>
      <ProductList cartCount={cartCount} />
    </>
  );
};
