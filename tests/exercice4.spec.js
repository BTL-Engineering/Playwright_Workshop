// @ts-check
const { test, expect } = require('@playwright/test');

test('Navigate to Skincare, select a product and click shop now and assert that the popup is open and Americas is visible', async ({ page }) => {
  await page.goto('https://international.shiseido.co.jp/');

  // Get the link of Skincare menu and click it

  // Get the link of All skincare and click it

  // Expect page title to contain Skincare


  // Get the link of Power Infusing Concentrate and click it

  // Expect page title to contain Power Infusing Concentrate

  // click shop now
  
  // Expect popup to be visible
  
  // Expect Americas to be visible

});
