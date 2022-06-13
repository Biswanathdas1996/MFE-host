const {
  doClick,
  doSetValue,
  doGetAttribute,
  doWaitUntilAttributeEquals,
} = require("../utils/BaseFunctions");
const ExpectChai = require("chai").expect;
const Elements = require("../Elements/index");

class HomePage {
  async verifyProducts() {
    await expect(await Elements.getProductCard(1)).toBeDisplayed();
    await browser.pause(6000);
  }

  async addToCart() {
    await expect(await Elements.firstAddToCardButton).toBeDisplayed();
    await doClick(await Elements.AddToCardButton(1));
    ExpectChai(await Elements.cartIconBandage.getText()).to.equal("1");
    await browser.pause(6000);
    await doClick(await Elements.AddToCardButton(2));
    await browser.pause(6000);
    ExpectChai(await Elements.cartIconBandage.getText()).to.equal("2");
  }
}

module.exports = new HomePage();
