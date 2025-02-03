// @ts-check
const { test, expect } = require('@playwright/test');

test('Navigate to Skincare', async ({ page }) => {
  await page.goto('https://international.shiseido.co.jp/');

  // Get the link of Skincare menu and click it

  // Get the link of All skincare and click it

  // Expect page title to contain SKINCARE
});
