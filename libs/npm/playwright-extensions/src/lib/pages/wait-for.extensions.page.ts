import { Locator, Page } from '@playwright/test';

export class WaitForExtensionsPage {
  constructor(private page: Page, private testId: string) {}

  /**
   * Waits for a selector for a specific timeout, continues execution without error afterwards.
   *
   * ```ts
   * const accountButton = await playwrightExtensions.waitForSelectorTimeout('*[data-testid="account-login-button"]', 2500);
   *
   * if (accountButton) {
   *  // Add Testlogic for handling AccountButton here
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForSelectorTimeout(selector: string, timeout: number) {
    return await this.waitForLocatorsTimeout(
      [this.page.locator(selector)],
      timeout
    );
  }

  private async waitForLocatorsTimeout(
    locators: Awaited<ReturnType<(typeof this.page)['locator']>>[],
    timeout: number
  ) {
    const startTime = Date.now();

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (Date.now() - startTime > timeout) {
        return null;
      }
      const elements = (
        await Promise.all(
          locators.map(async (locator) => await locator.elementHandles())
        )
      )
        .flat()
        .filter(async (element) => {
          return await element.isVisible();
        });

      if (elements && elements.length >= 1) {
        return elements;
      }
      // eslint-disable-next-line no-constant-condition
    }

    throw new Error('Something went wrong, while waiting for selector');
  }

  /**
   * Waits for a selector for a specific timeout, continues execution with a non test blocking error afterwards.
   *
   * ```ts
   * const accountButton = await playwrightExtensions.waitForSelectorTimeoutSoftError('*[data-testid="account-login-button"]', 2500);
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
   * const accountButtonExists = await playwrightExtensions.waitForTimeoutSoftError(this.page.getByTestId("account-login-button"), 2500);
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
   * const accountButtonExists = await playwrightExtensions.waitForTimeout(this.page.getByTestId("account-login-button"), 2500);
   *
   * if (accountButtonExists) {
   *  // Add Testlogic for handling AccountButton here
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForTimeout(locator: Locator, timeout: number) {
    return !!(await this.waitForLocatorsTimeout([locator], timeout));
  }

  public async waitForAnyTimeout(locators: Locator[], timeout: number) {
    return await this.waitForLocatorsTimeout(locators, timeout);
  }
}
