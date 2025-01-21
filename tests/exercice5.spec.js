// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

test('Create a complete flow of white label', async ({}) => {
  const browser = await chromium.launch({
    args: ["--use-fake-device-for-media-stream",
          "--use-fake-ui-for-media-stream",
          `--use-file-for-fake-video-capture=${  path.join(__dirname,'..','assets','whitelabel.mjpeg')}`]
  });
  const page = await browser.newPage();
  await page.goto('https://white-label.btl-dto.com');

  //Create a complete flow of the analysis
 
});


