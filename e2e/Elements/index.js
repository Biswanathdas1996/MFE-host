class Elements {
  async inputByPlaceHolder(value) {
    return $(`input[placeholder='${value}']`);
  }

  async AddToCardButton(index) {
    return $(`(//button[text()=' Add to cart'])[${index}]`);
  }

  async getProductCard(index) {
    return $(`(//div[contains(@class,'MuiGrid-root MuiGrid-item')])[${index}]`);
  }

  get firstAddToCardButton() {
    return $("(//button[text()=' Add to cart'])[1]");
  }

  get cartIconBandage() {
    return $(
      `//span[contains(@class,'MuiBadge-anchorOriginTopRightRectangular')]`
    );
  }
  get cartIcon() {
    return $(`svg[data-testid="ShoppingCartIcon"]`);
  }
  async deleteButton(index) {
    return $(`(//button[text()='Delete'])[${index}]`);
  }
}

module.exports = new Elements();
