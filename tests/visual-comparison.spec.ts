import { expect, test } from '@playwright/test';

test('Playwright banner matches with the snapshot', async ({ page }) => {
  // open base page
  await page.goto('https://playwright.dev/');

  // get header image and compare it with a golden screenshot
  await expect(page.locator('css=.hero__title')).toHaveScreenshot(
    'playwright-banner.png',
    { maxDiffPixels: 100 }
  );
});
