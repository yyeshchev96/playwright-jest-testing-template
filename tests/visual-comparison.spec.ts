/**
 * Example of Visual Tests using Playwright image comparison capabilities
 * Details: https://playwright.dev/docs/test-snapshots
 *
 * NOTES:
 * To generate /update snapshots, use the following command:
 *
 *    npx playwright test --update-snapshots
 *
 * If your CI uses other OS, you can generate a snapshot using docker image:
 *
 *    docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.30.0-focal /bin/bash
 *    npm ci && npx playwright install && npx playwright test --update-snapshots
 *
 */

import { expect, test } from '@playwright/test';

test('Playwright landing page screenshot matches with the golden', async ({ page }) => {
  await page.goto('/');

  // make a screenshot and compare it to golden image
  await expect(page).toHaveScreenshot('playwright-home-page.png');
});

test('Playwright banner matches with the snapshot', async ({ page }) => {
  await page.goto('/');

  // get header element and compare it to golden image
  expect(await page.locator('css=.hero__title').screenshot()).toMatchSnapshot(
    'playwright-banner.png'
  );
});
