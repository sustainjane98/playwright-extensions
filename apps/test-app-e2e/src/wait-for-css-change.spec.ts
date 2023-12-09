import { Locator, expect } from '@playwright/test';
import { TestIds } from '@test/ids';
import { common } from '@test/pages';

const test = common;

test.describe('Wait For CSS Property Change', () => {
  let element: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    element = page.getByTestId(TestIds.WAIT_FOR_CSS_CHANGE);
  });

  test('Wait for element change visibility', async ({ start }) => {
    await start.waitForAttributeChangeTimeout(element, 6000, {
      key: 'visibility',
      value: 'hidden',
    });

    await start.expectToExisting();
    start.checkTheExecutionTime();
    await expect(element).toHaveCount(1);
  });
});
