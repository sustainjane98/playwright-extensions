import { Locator, expect } from '@playwright/test';
import playwrightExtensions from 'playwright-extensions';
import { TestIds } from 'test-ids';

const test = playwrightExtensions;

test.describe('Wait For Extensions Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.describe('Text', () => {
    let subHeadline: Locator;

    test.beforeEach(({ page }) => {
      subHeadline = page.getByText('Test124');
    });

    test('Wait For Timeout without soft error with testId, should fail', async ({
      playwrightExtensions,
    }) => {
      test.fail();

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        5000
      );

      expect(headlineExists).toBe(true);
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error with testId', async ({
      playwrightExtensions,
    }) => {
      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        12000
      );

      expect(headlineExists).toBe(true);
      expect(await subHeadline.count()).toBe(1);
    });
  });

  test.describe('Alt Tag', () => {
    let imgTag: Locator;

    test.beforeEach(({ page }) => {
      imgTag = page.getByAltText('test1234');
    });

    test('Wait For Timeout without soft error with testId, should fail', async ({
      playwrightExtensions,
    }) => {
      test.fail();

      const imgTagExists = await playwrightExtensions.waitForTimeout(
        imgTag,
        5000
      );

      expect(imgTagExists).toBe(true);
      expect(await imgTag.count()).toBe(1);
    });

    test('Wait For Timeout without soft error with testId', async ({
      playwrightExtensions,
    }) => {
      const imgTagExists = await playwrightExtensions.waitForTimeout(
        imgTag,
        12000
      );

      expect(imgTagExists).toBe(true);
      expect(await imgTag.count()).toBe(1);
    });
  });

  test.describe('TestIds', () => {
    test('Wait For Timeout without soft error with testId, should fail', async ({
      playwrightExtensions,
      page,
    }) => {
      test.fail();
      const subHeadline = page.getByTestId(TestIds.WAIT_FOR_TIMEOUT);

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        5000
      );

      expect(headlineExists).toBe(true);
      expect(await subHeadline.count()).toBe(1);
    });

    test('Wait For Timeout without soft error with testId', async ({
      playwrightExtensions,
      page,
    }) => {
      const subHeadline = page.getByTestId(TestIds.WAIT_FOR_TIMEOUT);

      const headlineExists = await playwrightExtensions.waitForTimeout(
        subHeadline,
        12000
      );

      expect(headlineExists).toBe(true);
      expect(await subHeadline.count()).toBe(1);
    });
  });
});
