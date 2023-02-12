/** 
 * If your CI uses other OS, you can generate a snapshot using docker image: 
 * 
 * docker run --rm --network host -v $(pwd):/work/ -w /work/ \
 * -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash
*/
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
  await expect(page.locator('css=.hero__title')).toHaveScreenshot(
    'playwright-banner.png'
  );
});
