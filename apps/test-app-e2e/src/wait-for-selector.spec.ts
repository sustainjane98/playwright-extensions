import { expect, mergeTests } from '@playwright/test';
import {playwrightExtensions} from 'playwright-extensions';
import { common } from '@test/pages';

const test = mergeTests(playwrightExtensions, common);

test.describe('Wait for Selectors', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Wait for Selector without soft error', async ({ start, page }) => {
    const selector = 'html body h2';

    await start.waitForSelector(selector, {timeout: 6000});

    await start.expectToExisting();
    start.checkTheExecutionTime();
    await expect(page.locator(selector)).toBeDefined();
  });
});
