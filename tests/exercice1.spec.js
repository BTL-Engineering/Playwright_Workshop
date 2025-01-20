// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://international.shiseido.co.jp/');

  // Expect the title "to contain" SHISEIDO.
});