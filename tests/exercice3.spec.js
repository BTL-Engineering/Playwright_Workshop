// @ts-check
const { test, expect } = require('@playwright/test');

test('Navigate to Skincare, select a product and check that Details contain text', async ({ page }) => {
  await page.goto('https://international.shiseido.co.jp/');

  // Get the link of Skincare menu and click it

  // Get the link of All skincare and click it

  // Expect page title to contain SKINCARE


  // Get the link of Power Infusing Concentrate and click it

  // Expect page title to contain Power Infusing Concentrate

  // Expect Details to contain 'About 2 months (per recommended amount)' 

});
