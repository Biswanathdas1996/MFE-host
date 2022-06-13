// npx wdio run ./wdio.conf.js
const HomePage = require("../pageobjects/Home.page");
const CartPage = require("../pageobjects/Cart.page");
const { openUrl } = require("../utils/BaseFunctions");

const CartTestData = require("../DataSets/cart");

describe("MFE application", function () {
  it("Open page", async function () {
    openUrl("/");
    expect(browser).toHaveAttrContaining(
      "Micro Frontend (POC) - Biswanath Das"
    );
  });

  it("Verify product", async function () {
    await HomePage.verifyProducts();
  });

  it("Test add to cart", async function () {
    await HomePage.addToCart(1, "1");
    await HomePage.addToCart(2, "2");
  });

  it("Navigate to cart", async function () {
    await CartPage.goToCart();
  });

  it("Delete Item from cart", async function () {
    await CartPage.deleteCartItem();
  });
});
