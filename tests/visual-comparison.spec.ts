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
 *
 *    npm i && npx playwright install && npx playwright test --update-snapshots
 *
 */

import { expect, test } from '@playwright/test';

test('Compare web-page with golden', async ({ page }) => {
  /**
   * Take a page screenshot and compare it to golden image
   *
   * NOTE: If your page has scroll it will capture only current viewport
   * For full-page screenshot please see a corresponding example `
   */

  await page.goto('/');
  await expect(page).toHaveScreenshot('playwright-home-page.png');
});

test('Capture UI element by Locator and compare with golden', async ({ page }) => {
  await page.goto('/');

  // get UI element using simple locator
  const getStartedBtn = await page.getByRole('link', { name: 'Get started' });
  await expect(getStartedBtn).toHaveScreenshot('get-started-btn.png');
});

test('Extract and compare Text or Arbitrary Binary data with golden', async ({ page }) => {
  /**
   * To compare text or arbitrary binary data you should use `toMatchSnapshot` method
   *
   * NOTE: It can be used for image comparison as well, but it's not recommended
   */

  await page.goto('/');
  expect(await page.textContent('.hero__title')).toMatchSnapshot('playwright-banner-text.txt');
});

test('Capture full-page screenshot and compare with golden', async ({ page }) => {
  /**
   * Playwright screenshot() method has a property to make full-page screeshot
   * Since any image can be represented as a Binary data,
   * we can use that and compare our element using toMatchSnapshot()
   */
  await page.goto('/');

  // save full-page screenshot into a buffer
  const fullPageImageBuffer = await page.screenshot({ fullPage: true });
  // compare using toMatchSnapshot
  expect(fullPageImageBuffer).toMatchSnapshot('playwright-landing-full-page.png');
});
