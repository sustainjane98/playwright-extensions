import { Locator, Page, expect } from '@playwright/test';
import { WaitForResults } from '../..';
import CircuitBreaker from 'opossum';

export class WaitForExtensionsPage {
  constructor(private page: Page) {}

  private async waitForLocatorsTimeout(options: {
    locators: Locator[];
    timeout: number;
    shouldExist?: boolean;
  }) {
    const { locators, timeout } = options;
    const shouldExist = options?.shouldExist ?? true;
    try {
      return await new CircuitBreaker(
        async () => {
          if (shouldExist)
            return await Promise.any(
              locators.map(async (locator) => {
                await locator.waitFor();
                return new WaitForResults(locator);
              })
            );

          return await Promise.any(
            locators.map(async (locator) => {
              await expect.soft(locator).toHaveCount(0, { timeout });
              return WaitForResults.NOT_EXISTS;
            })
          );
        },
        { timeout }
      ).fire();
    } catch (err) {
      return WaitForResults.TIMEOUT;
    }
  }

  /**
   * Waits for a selector for a specific timeout, continues execution with a non test blocking error afterwards.
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
    return await this.waitForLocatorsTimeout({
      locators: [this.page.locator(selector)],
      timeout,
    });
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
    return await this.waitForLocatorsTimeout({ locators: [locator], timeout });
  }

  /**
   * Waits for a set of locators if any becomes visible for a specific timeout, continues execution without error afterwards.
   *
   * ```ts
   *
   * const subHeadline = page.locator('html').locator('body').getByText('Test124');
   *
   * const elementsExists = await playwrightExtensions.waitForAnyTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );
   *
   * if (elementsExists) {
   *  // Add Testlogic for handling when Elements exists
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForAnyTimeout(locators: Locator[], timeout: number) {
    return await this.waitForLocatorsTimeout({ locators, timeout });
  }
}
