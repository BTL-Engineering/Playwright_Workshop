// @ts-check
const { test, expect } = require('@playwright/test');

test('Check that we are logged in', async ({ page }) => {
  await page.goto(process.env.BACKOFFICE_URL || '');

  // Check that we are logged in by checking the breadcrumb contains Dashboard


  // Check that the sidebar contains the following items: Market activations, Tenant management, Administrate

});

