// @ts-check
const { test, expect } = require('@playwright/test');

test('Create a new Product, remove it and check that is removed', async ({ page }) => {
  await page.goto(process.env.BACKOFFICE_URL || '');

  // Select the Test tenant from the test group inside the tenants dropdown.


  // Navigate to products section


  // Create a new product


  // check that the url has no more /new


  // Delete the product


  // Check that we are navigated to the list and that the product is not in the list anymore


});
