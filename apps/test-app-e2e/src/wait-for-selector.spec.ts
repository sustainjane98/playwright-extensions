import { expect } from '@playwright/test';
import playwrightExtensions from 'libs/npm/playwright-extensions/src';

const test = playwrightExtensions;

test.describe('Wait for Selectors', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Wait for Selector without soft error', async ({
    playwrightExtensions,
    page,
  }) => {
    const startTime = performance.now();

    const subHeadline = await playwrightExtensions.waitForSelectorTimeout(
      'html body h2',
      6000
    );
    const executionTime = performance.now() - startTime;

    expect(subHeadline).toBeDefined();
    expect(executionTime).toBeLessThanOrEqual(6000);
    expect(page.locator('html body h2')).toBeDefined();
  });
});
