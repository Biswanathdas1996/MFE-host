import React from "react";
import Cart from "cartReact/Cart";

export const CartPage = ({ cartCount }) => {
  return (
    <>
      <Cart cartCount={cartCount} />
    </>
  );
};
