async function openUrl(url) {
  browser.url(url);
  browser.maximizeWindow();
}

async function doClick(element) {
  await element.waitForDisplayed();
  await element.click();
}

async function doSetValue(element, value) {
  await element.waitForDisplayed();
  await element.setValue(value);
}

async function doGetAttribute(element, attributeValue) {
  await element.waitForDisplayed();
  return await element.getAttribute(attributeValue);
}

async function doWaitUntilAttributeEquals(
  element,
  attributeValue,
  attributeText
) {
  browser.waitUntil(async function () {
    (await element.getAttribute(attributeValue)) === attributeText,
      {
        timeout: 500000,
        timeoutMsg: "Value did not match",
      };
  });
}

module.exports = {
  openUrl,
  doClick,
  doSetValue,
  doGetAttribute,
  doWaitUntilAttributeEquals,
};
