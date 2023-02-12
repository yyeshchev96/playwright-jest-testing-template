/**
 * This is main configuration file for your Playwright project.
 *
 * Playwright has two levels of configuration:
 *  - Global config
 *  - Local config
 *
 * This file represents GLOBAL configuration - settings which should by applied to all tests
 * In addition, you can add or even override configuration options directly in the test file.
 *
 * For details, see https://playwright.dev/docs/test-configuration#local-configuration
 */

import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* Relative path to test directory */
  testDir: './tests',

  /**
   * Template for snaptshots which are generated as part of the Visual Testing by:
   * - toHaveScreenshot()
   * - toMatchSnapshot()
   *
   * See https://playwright.dev/docs/next/api/class-testproject#test-project-snapshot-path-template
   */
  snapshotPathTemplate:
    '{testDir}/__snapshots__/{testFilePath}/{platform}/{projectName}/{arg}{ext}',

  /* Maximum time one test can run for. */
  timeout: 60 * 1000,

  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10 * 1000,

    /* Custom settings for visual testing which is based on image comparison */
    toHaveScreenshot: { maxDiffPixelRatio: 0.05, threshold: 0.2 },
    toMatchSnapshot: { maxDiffPixelRatio: 0.05, threshold: 0.2 },
  },

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Run browser in a headless mode (without window) */
    headless: true,

    /* Browser window size */
    viewport: { width: 1280, height: 720 },

    /* Ignore HTTPS errors */
    ignoreHTTPSErrors: true,

    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 5000,

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://playwright.dev/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    /* Test against branded browsers. */
    // {
    //   name: 'Google Chrome',
    //   use: { channel: 'chrome' },
    // },
    // {
    //   name: 'Microsoft Edge',
    //   use: { channel: 'msedge' },
    // },

    /* NOTE: To use the values below, don't forget to import "devices" from '@playwright/test' */
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

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
    // }
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
});
