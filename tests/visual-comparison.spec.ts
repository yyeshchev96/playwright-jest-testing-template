import { expect, test } from '@playwright/test';

test.use({
  viewport: {
    width: 1280,
    height: 720
  }
});

test('Playwright banner matches with the snapshot', async ({ page }) => {
  // open base page
  await page.goto('https://playwright.dev/');

  // get header image and compare it with a golden screenshot
  expect(await page.locator('css=.hero__title').screenshot()).toMatchSnapshot(
    'playwright-banner.png'
  );
});
