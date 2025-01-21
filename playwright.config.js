// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  //timeout: 120000,
  //testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // 'off' dont record trace
    // 'on' record trace for every test
    // 'retain-on-failure' record trace for every test, but remove successful test run traces
    // 'on-first-retry' record the trace only when you retry a test for the first time.
    trace: 'on-first-retry',
    /* Run the tests in headless mode. */
    headless: false,
    screenshot: 'off',
    //viewport: { width:2400, height:2000 },
    // 'off' do not record video
    // 'on' record video for every test
    // 'retain-on-failure' record video for every test, but delete all videos of successful test runs.
    // 'on-first-retry' record only when you retry a test for the first time.
    video: 'off',
  },
  
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup', testMatch: /.*\.setup\.js/,
    },
    {
      name: 'exercice1-2',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'exercice3',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: './.auth/user.json',
       },
      dependencies: ['setup'],
    },
    {
      name: 'exercice4',
    },
    {
      name: 'test-examples',
      use: { 
        ...devices['Desktop Chrome']
       }
    }

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});