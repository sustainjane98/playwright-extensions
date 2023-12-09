import { ElementHandle, Locator, Page } from '@playwright/test';
import { WaitForResults } from '../..';
import CircuitBreaker from 'opossum';

export class WaitForExtensionsPage {
  constructor(private page: Page) {}

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
    return await this.waitForLocatorsTimeout({
      locators: [this.page.locator(selector)],
      timeout,
    });
  }

  /**
   * Waits for a selector disappear for a specific timeout, continues execution without error afterwards.
   *
   * ```ts
   * const accountButton = await playwrightExtensions.waitForSelectorNotExistTimeout('*[data-testid="account-login-button"]', 2500);
   *
   * if (!accountButton) {
   *  // Add Testlogic for handling AccountButton disappear here
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForSelectorNotExistTimeout(
    selector: string,
    timeout: number
  ) {
    return await this.waitForLocatorsTimeout({
      locators: [this.page.locator(selector)],
      timeout,
      shouldExist: false,
    });
  }

  private async waitForLocatorsTimeout(options: {
    locators: Locator[];
    timeout: number;
    shouldExist?: boolean;
    attribute?: { key: keyof CSSStyleDeclaration; value: string | null };
  }) {
    const { locators, timeout } = options;
    const shouldExist = options?.shouldExist ?? true;
    const attribute = options?.attribute;

    try {
      return await new CircuitBreaker(
        async () => {
          while (true) {
            const elements = (
              await Promise.all(
                locators.map(async (locator) => await locator.elementHandles())
              )
            ).flat();

            const filteredElements: typeof elements = [];

            for (const element of elements) {
              if (
                (shouldExist && (await element.isVisible())) ||
                !shouldExist
              ) {
                const getCSSProperty = async (
                  key: keyof CSSStyleDeclaration
                ) => {
                  return await element.evaluate(
                    (element, [key]) => {
                      return window.getComputedStyle(element as Element)?.[key];
                    },
                    [key]
                  );
                };

                if (
                  (attribute &&
                    (await getCSSProperty(attribute?.key)) ===
                      attribute?.value) ||
                  !attribute
                ) {
                  filteredElements.push(element);
                }
              }
            }

            if (
              (shouldExist &&
                filteredElements &&
                filteredElements.length >= 1) ||
              (!shouldExist && (filteredElements?.length ?? 0) === 0)
            ) {
              if (shouldExist) return new WaitForResults(filteredElements);
              return WaitForResults.NOT_EXISTS;
            }

            elements.forEach(async (elem) => await elem.dispose());
          }
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

  /**
   * Waits for a locator disappear for a specific timeout, continues execution without error afterwards.
   *
   * ```ts
   * const accountButtonExists = await playwrightExtensions.waitForNotExistTimeout(this.page.getByTestId("account-login-button"), 2500);
   *
   * if (!accountButtonExists) {
   *  // Add Testlogic for handling AccountButton disappear here
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForNotINDOMTimeout(locator: Locator, timeout: number) {
    return await this.waitForLocatorsTimeout({
      locators: [locator],
      timeout,
      shouldExist: false,
    });
  }

  /**
   * Waits for a set of locators if all become hidden in a specific timeout, continues execution without error afterwards.
   *
   * ```ts
   *
   * const subHeadline = page.locator('html').locator('body').getByText('Test124');
   *
   * const elementsExists = await playwrightExtensions.waitForAnyNotExistTimeout(
        [subHeadline, page.locator('div.notExist')],
        6000
      );
   *
   * if (!elementsExists) {
   *  // Add Testlogic for handling when Elements become hidden
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForAnyNotInDOMTimeout(locators: Locator[], timeout: number) {
    return await this.waitForLocatorsTimeout({
      locators,
      timeout,
      shouldExist: false,
    });
  }

  /**
   * Waits for a locator attribute having a specific value in a specific timeout, continues execution without error afterwards.
   *
   * ```ts
   * const accountButtonIsFlex = await playwrightExtensions.waitForTimeout(this.page.getByTestId("account-login-button"), 2500, {key: "display", value: "flex"});
   *
   * if (accountButtonIsFlex) {
   *  // Add Testlogic for handling AccountButton here
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForAttributeChangeTimeout(
    locator: Locator,
    timeout: number,
    attribute: {
      key: keyof CSSStyleDeclaration;
      value: string | null;
    }
  ) {
    return await this.waitForLocatorsTimeout({
      locators: [locator],
      timeout,
      attribute,
    });
  }
}
