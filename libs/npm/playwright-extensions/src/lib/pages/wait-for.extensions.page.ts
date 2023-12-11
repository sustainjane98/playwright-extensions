import { Locator, Page, expect } from '@playwright/test';
import { WaitForResults } from '../..';
import CircuitBreaker from 'opossum';
import { Exist } from '../enums/exist.enum';

export class WaitForExtensionsPage {
  constructor(private page: Page) {}

  private async waitForLocatorsTimeout(options: {
    locators: Locator[];
    timeout: number;
    shouldExist?: Exist;
  }) {
    const { locators, timeout } = options;
    const shouldExist = options?.shouldExist ?? Exist.ANY_OR_ONE_EXIST;
    try {
      return await new CircuitBreaker(
        async () => {
          if (shouldExist === Exist.ANY_OR_ONE_EXIST) {
            const resolvedLocators = locators.map(async (locator) => {
              await locator.waitFor();
              return new WaitForResults(locator);
            });
            return await Promise.any(resolvedLocators);
          }

          if (shouldExist === Exist.ALL_OR_ONE_EXIST) {
            const resolvedLocators = locators.map(async (locator) => {
              await locator.waitFor();
              return new WaitForResults(locator);
            });
            return await Promise.all(resolvedLocators);
          }

          const resolvedLocators = locators.map(async (locator) => {
            await expect.soft(locator).toBeHidden({ timeout: timeout });
            return WaitForResults.NOT_EXISTS;
          });

          const result = await Promise.all(resolvedLocators);
          return result?.[0];
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
  public async waitForSelectorTimeout(
    selector: string,
    timeout: number,
    shouldExist?: Exist
  ) {
    return await this.waitForLocatorsTimeout({
      locators: [this.page.locator(selector)],
      timeout,
      shouldExist,
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
  public async waitForTimeout(
    locator: Locator,
    timeout: number,
    shouldExist?: Exist
  ) {
    return await this.waitForLocatorsTimeout({
      locators: [locator],
      timeout,
      shouldExist,
    });
  }

  /**
   * Waits for a set of locators if any becomes visible for a specific timeout, continues execution without error afterwards.
   *
   * ```ts
   *
   * const subHeadline = page.locator('html').locator('body').getByText('Test124');
   *
   * const elementsExists = await playwrightExtensions.waitForMultipleTimeout(
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
  public async waitForMultipleTimeout(
    locators: Locator[],
    timeout: number,
    shouldExist?: Exist
  ) {
    return await this.waitForLocatorsTimeout({
      locators,
      timeout,
      shouldExist,
    });
  }
}
