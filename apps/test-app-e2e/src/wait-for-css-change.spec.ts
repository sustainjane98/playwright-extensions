import { Locator, expect } from '@playwright/test';
import { TestIds } from '@test/ids';
import { common } from '@test/pages';

const test = common;

test.describe('Wait For CSS Property Change', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Wait for element change visibility', async ({ start, page }) => {
    const element = page.getByTestId(TestIds.WAIT_FOR_CSS_CHANGE);

    await start.waitForAttributeChangeTimeout(element, 6000, {
      key: 'visibility',
      value: 'hidden',
    });

    await start.expectToExisting();
    start.checkTheExecutionTime();
    await expect(element).toHaveCount(1);
  });

  test('Wait for element change backgroundColor', async ({ start, page }) => {
    const element = page.getByTestId(TestIds.WAIT_FOR_CSS_CHANGE_COLOR);

    await start.waitForAttributeChangeTimeout(element, 6000, {
      key: 'backgroundColor',
      value: '#fff',
    });

    await start.expectToExisting();
    start.checkTheExecutionTime();
    await expect(element).toHaveCount(1);
  });
});
