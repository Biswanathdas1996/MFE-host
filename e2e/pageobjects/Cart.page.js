const {
  doClick,
  doSetValue,
  doGetAttribute,
  doWaitUntilAttributeEquals,
} = require("../utils/BaseFunctions");
const ExpectChai = require("chai").expect;
const Elements = require("../Elements/index");

class CartPage {
  async goToCart() {
    await expect(await Elements.cartIcon).toBeDisplayed();
    await doClick(await Elements.cartIcon);
    await browser.pause(6000);
    ExpectChai(await browser.getUrl()).to.include("/cart");
  }

  async deleteCartItem() {
    await doClick(await Elements.deleteButton(1));
    await browser.pause(6000);
    ExpectChai(await Elements.cartIconBandage.getText()).to.equal("1");
    await browser.pause(6000);
  }
}

module.exports = new CartPage();
