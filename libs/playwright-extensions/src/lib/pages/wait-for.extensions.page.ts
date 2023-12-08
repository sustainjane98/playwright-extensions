import { Locator, Page } from '@playwright/test';
import { resolveCSSSelector } from '../helpers/resolve-css-selector.helper';

export class WaitForExtensionsPage {
  constructor(private page: Page, private testId: string) {}

  /**
   * Waits for a selector for a specific timeout, continues execution without error afterwards.
   *
   * ```ts
   * const accountButton = await playwrightExtensions.waitForSelectorTimeout('*[data-testid="account-login-button"]', 5000);
   *
   * if (accountButton) {
   *  // Add Testlogic for handling AccountButton here
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForSelectorTimeout(selector: string, timeout: number) {
    const startTime = Date.now();

    let isRunning = true;

    do {
      const element = await this.page.$$(
        resolveCSSSelector(selector, this.testId)
      );

      if (Date.now() - startTime > timeout) {
        isRunning = false;
        return null;
      }

      if (element && element.length === 1) {
        return element?.[0];
      }
    } while (isRunning);

    throw new Error('Something went wrong, while waiting for selector');
  }

  /**
   * Waits for a selector for a specific timeout, continues execution with a non test blocking error afterwards.
   *
   * ```ts
   * const accountButton = await playwrightExtensions.waitForSelectorTimeoutSoftError('*[data-testid="account-login-button"]', 5000);
   *
   * if (accountButton) {
   *  // Add Testlogic for handling AccountButton here
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForSelectorTimeoutSoftError(
    selector: string,
    timeout: number
  ) {
    try {
      return await this.page.waitForSelector(selector, { timeout });
    } catch (err) {
      return null;
    }
  }

  /**
   * Waits for a locator for a specific timeout, continues execution with a non test blocking error afterwards.
   *
   * ```ts
   * const accountButtonExists = await playwrightExtensions.waitForTimeoutSoftError(this.page.getByTestId("account-login-button"), 5000);
   *
   * if (accountButtonExists) {
   *  // Add Testlogic for handling AccountButton here
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForTimeoutSoftError(locator: Locator, timeout: number) {
    try {
      await locator.waitFor({ timeout });
      return true;
    } catch (err) {
      return false;
    }
  }

  /**
   * Waits for a locator for a specific timeout, continues execution without error afterwards.
   *
   * ```ts
   * const accountButtonExists = await playwrightExtensions.waitForTimeout(this.page.getByTestId("account-login-button"), 5000);
   *
   * if (accountButtonExists) {
   *  // Add Testlogic for handling AccountButton here
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForTimeout(locator: Locator, timeout: number) {
    const startTime = Date.now();

    let isRunning = true;

    do {
      const element = await locator.elementHandles();

      if (Date.now() - startTime > timeout) {
        isRunning = false;
        return false;
      }

      if (element && element.length === 1) {
        return true;
      }
    } while (isRunning);

    throw new Error('Something went wrong, while waiting for selector');
  }
}
