import { expect, test } from '@playwright/test';

// beforeEach hook is used to perform same action before each test case
test.beforeEach(async ({ page }) => {
  // opens basePage
  await page.goto('/');
});

test('Home page contains "Playwright" text', async ({ page }) => {
  // Expect a title to contain a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('"Get Started" link redirects to Intro page', async ({ page }) => {
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
