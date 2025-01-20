import { test as setup, expect} from '@playwright/test';
import { generateTOTP } from '../../tools/generate-totp.js';

const authFile = './.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto(process.env.BACKOFFICE_URL || 'http://localhost:3000');
  await page.getByPlaceholder('Type your email').fill('admin@mail.com');
  await page.getByPlaceholder('Type the password').fill('secret');
  await page.getByRole('button', { name: 'Login' }).click();
  const totp = generateTOTP() || '';
  await page.getByLabel('Character 1.').fill(totp[0]);
  await page.getByLabel('Character 2.').fill(totp[1]);
  await page.getByLabel('Character 3.').fill(totp[2]);
  await page.getByLabel('Character 4.').fill(totp[3]);
  await page.getByLabel('Character 5.').fill(totp[4]);
  await page.getByLabel('Character 6.').fill(totp[5]);
  await page.getByRole('button', { name: 'Login' }).click();
  // As now the page is reloading, we wait until the breadcrumb is visible
  // The selection of getByLabel can be done becaue we have an aria-label="breadcrumb" in the component
  await expect(page.getByLabel('breadcrumb')).toBeVisible();
  const el = await page.getByLabel('breadcrumb');
  const elli = await el.getByRole('listitem');
  const html = await elli.innerHTML();
  expect(html).toContain('Analyses');
  await page.context().storageState({ path: authFile }); // Save the state
});