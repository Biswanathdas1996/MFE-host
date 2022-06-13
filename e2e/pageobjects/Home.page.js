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
  }

  async addToCart(serial, testText) {
    await expect(await Elements.AddToCardButton(serial)).toBeDisplayed();
    await doClick(await Elements.AddToCardButton(serial));
    ExpectChai(await Elements.cartIconBandage.getText()).to.equal(testText);
    await browser.pause(2000);
  }
}

module.exports = new HomePage();
