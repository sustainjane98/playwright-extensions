import { expect, mergeTests } from '@playwright/test';
import playwrightExtensions from 'playwright-extensions';
import { common } from '@test/pages';

const test = mergeTests(playwrightExtensions, common);

test.describe('Wait for Selectors', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Wait for Selector without soft error', async ({ start, page }) => {
    const selector = 'html body h2';

    await start.waitForSelectorTimeout(selector, 6000);

    start.expectToBeDefined();
    start.checkTheExecutionTime();
    expect(page.locator(selector)).toBeDefined();
  });
});
