import { Locator, Page } from '@playwright/test';

export class WaitForExtensionsPage {
  constructor(private page: Page) {}

  public async waitForSelector(selector: string, timeout: number) {
    const currentTime: number = Date.now();

    const result = await this.page.waitForFunction<
      boolean | Element,
      [string, number, number]
    >(
      ([selector, timeout, currentTime]) => {
        const results = document.querySelectorAll(selector);

        if (results.length > 1) {
          throw new Error(
            `Selector ${selector} results to more than one element, please check`
          );
        }

        if (Date.now() - currentTime > timeout) return true;

        if (results) return results?.[0];

        return false;
      },
      [selector, timeout, currentTime]
    );

    return result.asElement();
  }

  public async waitForTimeout(locator: Locator, timeout: number) {
    return !!(await this.waitForSelector(locator.toString(), timeout));
  }
}
