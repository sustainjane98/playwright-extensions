import { Locator, Page } from '@playwright/test';
import {  WaitForResults } from '../..';
import { WaitForResultType } from '../types/wait-for-results.type';
import { PlaywrightOptionsExtended } from '../types/playwright-options-extended.type';
import { WAIT_FOR_ALL_RESOLVER } from '../types/wait-for-all-resolver.type';

export class WaitForExtensionsPage {
  constructor(private page: Page) {}

  private async waitForLocatorsTimeout<T extends Locator | Locator[], M extends PlaywrightOptionsExtended>(
    locators: T,
    options?: M,
  ): Promise<WaitForResultType<T, M["state"], WAIT_FOR_ALL_RESOLVER<M>>> {
    const waitFor = options?.waitForAll ?? true;

    type waitForAll = WAIT_FOR_ALL_RESOLVER<M>

    if(options && !options?.state) {
      options = {...options, state: "visible"};
    }

    const isHidden = options?.state === "hidden" || options?.state === "detached"

    try {
          const isArray = Array.isArray(locators);

          if
            (!isArray) {
            const localLocator = locators as Locator;

            await localLocator.waitFor(options);
            return (isHidden ? WaitForResults.NOT_EXISTS(localLocator, !isHidden) : WaitForResults.EXISTS(localLocator as Locator, !isHidden
            )) as WaitForResultType<T, M["state"], waitForAll>;
          }


          const arrayLocator = locators as Locator[];

            const resolvedLocators = arrayLocator.map(async (locator) => {
              await locator.waitFor(options);
              return isHidden ? WaitForResults.NOT_EXISTS(locator, !isHidden) : WaitForResults.EXISTS(locator, !isHidden);
            });


            if(waitFor === false) {
              return (await Promise.any(
                resolvedLocators
              )) as WaitForResultType<T, M["state"], waitForAll>;
            }

            const result = await Promise.all(resolvedLocators);
            return result?.[0] as WaitForResultType<T, M["state"], waitForAll>;

    } catch (err) {
      return WaitForResults.TIMEOUT(!isHidden) as WaitForResultType<T, M["state"], waitForAll>;;
    }
  }

  /**
   * Waits for a selector for a specific timeout, continues execution with a non test blocking error afterwards.
   * You can define the state of the element as well.
   *
   * ```ts
   * const accountButtonIsHidden = (await playwrightExtensions.waitForSelector('*[data-testid="account-login-button"]', {timeout: 2500, state: "hidden"})).isNotExisting();
   *
   * if (accountButtonIsHidden) {
   *  // Add Testlogic for handling accountButtonIsHidden here
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForSelector(
    selector: string,
    options: Omit<PlaywrightOptionsExtended, "waitForAll">
  ) {
    return await this.waitForLocatorsTimeout(
      this.page.locator(selector),
      options
    );
  }

  /**
   * Waits for a locator for a specific timeout, continues execution without error afterwards.
   * You can define the state of the element as well.
   *
   * ```ts
   * const accountButtonDetached = await playwrightExtensions.waitFor(this.page.getByTestId("account-login-button"), {timeout: 2500, state: "detached"}).isNotExisting();
   *
   * if (accountButtonDetached) {
   *  // Add Testlogic for handling accountButton is detached here
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitFor(
    locator: Locator,
    options: Omit<PlaywrightOptionsExtended, "waitForAll">
  ) {
    return await this.waitForLocatorsTimeout(
      locator, options);
  }

  /**
   * Waits for a set of locators if any becomes visible for a specific timeout, continues execution without error afterwards.
   *
   * ```ts
   *
   * const subHeadline = page.locator('html').locator('body').getByText('Test124');
   *
   * const elementsExists = (await playwrightExtensions.waitForTimeout(
        [subHeadline, page.locator('div.notExist')],
        {timeout: 6000, state: "visible", shouldExist: WAIT_FOR.ALL}
      )).isExisting();
   *
   * if (elementsExists) {
   *  // Add Testlogic for handling when Elements exists
   * }
   *
   * // Continue with test execution here
   * ```
   */
  public async waitForMultiple(
    locators: Locator[],
    options: PlaywrightOptionsExtended,
  ) {
   return (await this.waitForLocatorsTimeout(
     locators,
      options
    ));
  }
}
