import { Locator, expect } from '@playwright/test';
import { common } from '@test/pages';
import { TestIds } from '@test/ids';

const test = common;

test.describe('Wait For Extensions Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Combined Locators', () => {
    let subHeadline: Locator | null = null;

    test.beforeEach(({ page }) => {
      subHeadline = page.locator('html').locator('body').getByText('Test124');
    });

    test('Wait for any of two subHeadlines Timeout', async ({
      start,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForAnyTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );

      await start.expectToExisting();
      start.checkTheExecutionTime();
      await expect(subHeadline).toHaveCount(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      start,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForTimeout(subHeadline, 2500);

      await start.expectToTimeout();
      start.checkTheExecutionTime();
      await expect(subHeadline).toHaveCount(0);
    });

    test('Wait For Timeout without soft error', async ({ start }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForTimeout(subHeadline, 6000);

      start.expectToExisting();
      start.checkTheExecutionTime();
      await expect(subHeadline).toHaveCount(1);
    });
  });

  test.describe('TestIds (not visible)', () => {
    let subHeadline: Locator | null = null;

    test.beforeEach(({ page }) => {
      subHeadline = page.getByTestId(TestIds.WAIT_FOR_DISAPPEAR);
    });

    test('Wait for any of two subHeadlines Timeout', async ({
      start,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForAnyNotInDOMTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );

      await start.expectToNotExisting();
      start.checkTheExecutionTime();
      await expect(subHeadline).toBeHidden();
      await expect(subHeadline).toHaveCount(0);
    });

    test('Wait For Timeout without soft error', async ({ start }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForNotINDOMTimeout(subHeadline, 6000);

      await start.expectToNotExisting();
      start.checkTheExecutionTime();
      await expect(subHeadline).toBeHidden();
      await expect(subHeadline).toHaveCount(0);
    });
  });

  test.describe('Title', () => {
    let subHeadline: Locator | null = null;

    test.beforeEach(({ page }) => {
      subHeadline = page.getByTitle('Subheadline');
    });

    test('Wait for any of two subHeadlines Timeout', async ({
      start,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForAnyTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      start,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForTimeout(subHeadline, 2500);

      await start.expectToTimeout();
      start.checkTheExecutionTime();
      await expect(subHeadline).toHaveCount(0);
    });

    test('Wait For Timeout without soft error', async ({ start }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForTimeout(subHeadline, 6000);

      await start.expectToExisting();
      start.checkTheExecutionTime();
      await expect(subHeadline).toHaveCount(1);
    });
  });

  test.describe('Label', () => {
    let input: Locator | null = null;
    test.beforeEach(({ page }) => {
      input = page.getByLabel('test123');
    });

    test('Wait for any of two inputs Timeout', async ({ start, page }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!input) return;

      await start.waitForAnyTimeout(
        [input, page.locator('div.notExist')],
        6000
      );

      await start.expectToExisting();
      start.checkTheExecutionTime();
      await expect(input).toHaveCount(1);
      await expect(page.locator('div.notExist')).toHaveCount(0);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      start,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!input) return;

      test.fail();

      await start.waitForTimeout(input, 2500);

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await input.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({ start }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!input) return;

      await start.waitForTimeout(input, 6000);

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await input.count()).toBe(1);
    });
  });

  test.describe('Placeholder', () => {
    let input: Locator | null = null;
    test.beforeEach(({ page }) => {
      input = page.getByPlaceholder('test123@gmnx.de');
    });

    test('Wait for any of two inputs Timeout', async ({ start, page }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!input) return;

      await start.waitForAnyTimeout(
        [input, page.locator('div.notExist')],
        6000
      );

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await input.count()).toBe(1);
      await expect(page.locator('div.notExist')).toHaveCount(0);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      start,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!input) return;

      test.fail();

      await start.waitForTimeout(input, 2500);

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await input.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({ start }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!input) return;

      await start.waitForTimeout(input, 6000);

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await input.count()).toBe(1);
    });
  });

  test.describe('Text', () => {
    let subHeadline: Locator | null = null;

    test.beforeEach(({ page }) => {
      subHeadline = page.getByText('Test124');
    });

    test('Wait for any of two subHeadlines Timeout', async ({
      start,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForAnyTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      start,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      test.fail();

      await start.waitForTimeout(subHeadline, 2500);

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({ start }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForTimeout(subHeadline, 6000);

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await subHeadline.count()).toBe(1);
    });
  });

  test.describe('Role', () => {
    let subHeadline: Locator | null = null;

    test.beforeEach(({ page }) => {
      subHeadline = page.getByRole('heading', { name: 'Test124' });
    });

    test('Wait for any of two subHeadlines Timeout', async ({
      start,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForAnyTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      start,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      test.fail();

      await start.waitForTimeout(subHeadline, 2500);

      await start.expectToExisting();
      await start.checkTheExecutionTime();
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({ start }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForTimeout(subHeadline, 6000);

      await start.expectToExisting();
      await start.checkTheExecutionTime();
      expect(await subHeadline.count()).toBe(1);
    });
  });

  test.describe('Alt Tag', () => {
    let imgTag: Locator | null = null;

    test.beforeEach(({ page }) => {
      imgTag = page.getByAltText('test1234');
    });

    test('Wait for any of two inputs Timeout', async ({ start, page }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!imgTag) return;

      await start.waitForAnyTimeout(
        [imgTag, page.locator('div.notExist')],
        6000
      );

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await imgTag.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      start,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!imgTag) return;

      test.fail();

      await start.waitForTimeout(imgTag, 2500);

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await imgTag.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({ start }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!imgTag) return;

      await start.waitForTimeout(imgTag, 6000);

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await imgTag.count()).toBe(1);
    });
  });

  test.describe('TestIds', () => {
    let subHeadline: Locator | null = null;

    test.beforeEach(({ page }) => {
      subHeadline = page.getByTestId(TestIds.WAIT_FOR_TIMEOUT);
    });

    test('Wait for any of two subHeadlines Timeout', async ({
      start,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForAnyTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      start,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      test.fail();

      await start.waitForTimeout(subHeadline, 2500);

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({ start }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      await start.waitForTimeout(subHeadline, 6000);

      await start.expectToExisting();
      start.checkTheExecutionTime();
      expect(await subHeadline.count()).toBe(1);
    });
  });
});
