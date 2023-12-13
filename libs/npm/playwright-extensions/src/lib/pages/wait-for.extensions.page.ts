import { Locator, Page, expect } from '@playwright/test';
import { WaitForResults } from '../..';
import { Exist } from '../enums/exist.enum';

export type WaitForResultType<T> = T extends Array<Locator>
  ? WaitForResults<Locator>[] | WaitForResults<string> | WaitForResults<Locator>
  : T extends Locator
  ? WaitForResults<Locator> | WaitForResults<string>
  : never;

export class WaitForExtensionsPage {
  constructor(private page: Page) {}

  private async waitForLocatorsTimeout<T extends Locator | Locator[]>(options: {
    locators: T;
    timeout: number;
    shouldExist?: Exist;
  }): Promise<WaitForResultType<T>> {
    const { locators, timeout } = options;
    const shouldExist = options?.shouldExist ?? Exist.ANY_OR_ONE_EXIST;
    try {
          const isArray = Array.isArray(locators);

          if (
            (!isArray && shouldExist === Exist.ANY_OR_ONE_EXIST) ||
            shouldExist === Exist.ALL_OR_ONE_EXIST
          ) {
            const localLocator = locators as Locator;

            await localLocator.waitFor({state: "visible", timeout});
            return new WaitForResults(
              localLocator as Locator
            ) as WaitForResultType<T>;
          }

          if (!isArray && shouldExist === Exist.ALL_OR_ONE_NOT_EXIST) {
            const localLocator = locators as Locator;

            await localLocator.waitFor({state: "hidden", timeout});
            return WaitForResults.NOT_EXISTS as WaitForResultType<T>;
          }

          const arrayLocator = locators as Locator[];

          if (isArray && shouldExist === Exist.ANY_OR_ONE_EXIST) {
            const resolvedLocators = arrayLocator.map(async (locator) => {
              await locator.waitFor({state: "visible", timeout});
              return new WaitForResults(locator);
            });
            return (await Promise.any(
              resolvedLocators
            )) as WaitForResultType<T>;
          }

          if (isArray && (shouldExist as Exist) === Exist.ALL_OR_ONE_EXIST) {
            const resolvedLocators = locators.map(async (locator) => {
              await locator.waitFor({timeout, state: "visible"});
              return new WaitForResults(locator);
            });
            return (await Promise.all(
              resolvedLocators
            )) as WaitForResultType<T>;
          }

          const resolvedLocators = arrayLocator.map(async (locator) => {
            await locator.waitFor({timeout, state: "hidden"});
            return WaitForResults.NOT_EXISTS;
          });

          const result = await Promise.all(resolvedLocators);
          return result?.[0] as WaitForResultType<T>;

    } catch (err) {
      return WaitForResults.TIMEOUT as WaitForResultType<T>;
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
      locators: this.page.locator(selector),
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
      locators: locator,
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
