import { Locator, expect } from '@playwright/test';
import playwrightExtensions from 'libs/npm/playwright-extensions/src';
import { TestIds } from 'libs/test/testids/src';

const test = playwrightExtensions;

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
      playwrightExtensions,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForAnyTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBeDefined();
      expect(executionTime).toBeLessThanOrEqual(6000);
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      test.fail();

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        2500
      );
      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBe(true);
      expect(executionTime).toBeLessThanOrEqual(2500);
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        6000
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBe(true);
      expect(executionTime).toBeLessThanOrEqual(6000);
      await expect(subHeadline).toHaveCount(1);
    });
  });

  test.describe('Title', () => {
    let subHeadline: Locator | null = null;

    test.beforeEach(({ page }) => {
      subHeadline = page.getByTitle('Subheadline');
    });

    test('Wait for any of two subHeadlines Timeout', async ({
      playwrightExtensions,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForAnyTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBeDefined();
      expect(executionTime).toBeLessThanOrEqual(6000);
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      test.fail();

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        2500
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBe(true);
      expect(executionTime).toBeLessThanOrEqual(2500);
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        6000
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBe(true);
      expect(executionTime).toBeLessThanOrEqual(6000);
      expect(await subHeadline.count()).toBe(1);
    });
  });

  test.describe('Label', () => {
    let input: Locator | null = null;
    test.beforeEach(({ page }) => {
      input = page.getByLabel('test123');
    });

    test('Wait for any of two inputs Timeout', async ({
      playwrightExtensions,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!input) return;

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForAnyTimeout(
        [input, page.locator('div.notExist')],
        6000
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBeDefined();
      expect(executionTime).toBeLessThanOrEqual(6000);
      expect(await input.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!input) return;

      test.fail();

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        input,
        2500
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBe(true);
      expect(executionTime).toBeLessThanOrEqual(2500);
      expect(await input.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!input) return;

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        input,
        6000
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBe(true);
      expect(executionTime).toBeLessThanOrEqual(6000);
      expect(await input.count()).toBe(1);
    });
  });

  test.describe('Placeholder', () => {
    let input: Locator | null = null;
    test.beforeEach(({ page }) => {
      input = page.getByPlaceholder('test123@gmnx.de');
    });

    test('Wait for any of two inputs Timeout', async ({
      playwrightExtensions,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!input) return;

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForAnyTimeout(
        [input, page.locator('div.notExist')],
        6000
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBeDefined();
      expect(executionTime).toBeLessThanOrEqual(6000);
      expect(await input.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!input) return;

      test.fail();

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        input,
        2500
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBe(true);
      expect(executionTime).toBeLessThanOrEqual(2500);
      expect(await input.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!input) return;

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        input,
        6000
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBe(true);
      expect(executionTime).toBeLessThanOrEqual(6000);
      expect(await input.count()).toBe(1);
    });
  });

  test.describe('Text', () => {
    let subHeadline: Locator | null = null;

    test.beforeEach(({ page }) => {
      subHeadline = page.getByText('Test124');
    });

    test('Wait for any of two subHeadlines Timeout', async ({
      playwrightExtensions,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForAnyTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBeDefined();
      expect(executionTime).toBeLessThanOrEqual(6000);
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      test.fail();

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        2500
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBe(true);
      expect(executionTime).toBeLessThanOrEqual(2500);
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        6000
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBe(true);
      expect(executionTime).toBeLessThanOrEqual(6000);
      expect(await subHeadline.count()).toBe(1);
    });
  });

  test.describe('Role', () => {
    let subHeadline: Locator | null = null;

    test.beforeEach(({ page }) => {
      subHeadline = page.getByRole('heading', { name: 'Test124' });
    });

    test('Wait for any of two subHeadlines Timeout', async ({
      playwrightExtensions,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      const startTime = performance.now();

      const headlineExists = await playwrightExtensions.waitForAnyTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );

      const executionTime = performance.now() - startTime;

      expect(headlineExists).toBeDefined();
      expect(executionTime).toBeLessThanOrEqual(6000);
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      test.fail();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        2500
      );

      expect(headlineExists).toBe(true);
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        6000
      );

      expect(headlineExists).toBe(true);
      expect(await subHeadline.count()).toBe(1);
    });
  });

  test.describe('Alt Tag', () => {
    let imgTag: Locator | null = null;

    test.beforeEach(({ page }) => {
      imgTag = page.getByAltText('test1234');
    });

    test('Wait for any of two inputs Timeout', async ({
      playwrightExtensions,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!imgTag) return;

      const headlineExists = await playwrightExtensions.waitForAnyTimeout(
        [imgTag, page.locator('div.notExist')],
        6000
      );

      expect(headlineExists).toBeDefined();
      expect(await imgTag.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!imgTag) return;

      test.fail();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        imgTag,
        2500
      );

      expect(headlineExists).toBe(true);
      expect(await imgTag.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!imgTag) return;

      const headlineExists = await playwrightExtensions.waitForTimeout(
        imgTag,
        6000
      );

      expect(headlineExists).toBe(true);
      expect(await imgTag.count()).toBe(1);
    });
  });

  test.describe('TestIds', () => {
    let subHeadline: Locator | null = null;

    test.beforeEach(({ page }) => {
      subHeadline = page.getByTestId(TestIds.WAIT_FOR_TIMEOUT);
    });

    test('Wait for any of two subHeadlines Timeout', async ({
      playwrightExtensions,
      page,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      const headlineExists = await playwrightExtensions.waitForAnyTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );

      expect(headlineExists).toBeDefined();
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error, should fail', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      test.fail();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        2500
      );

      expect(headlineExists).toBe(true);
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error', async ({
      playwrightExtensions,
    }) => {
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (!subHeadline) return;

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        6000
      );

      expect(headlineExists).toBe(true);
      expect(await subHeadline.count()).toBe(1);
    });
  });
});
