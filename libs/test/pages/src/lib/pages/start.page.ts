import { ElementHandle, Locator, Page, expect } from '@playwright/test';
import { PlaywrightExtensionsPage } from 'playwright-extensions';

export class StartPage {
  private element: ElementHandle<Node>[] | null | boolean = null;
  private executionTime: number = 0;
  private duration: number = 0;

  private readonly playwrightExtensions = new PlaywrightExtensionsPage(
    this.page
  );

  constructor(private page: Page) {}

  public async expectToBeDefined() {
    expect(this.element).toBeDefined();
  }

  public async expectToBeTrue() {
    expect(this.element).toBe(true);
  }

  public checkTheExecutionTime() {
    expect(this.executionTime).toBeLessThanOrEqual(this.duration);
  }

  public async waitForSelectorTimeout(selector: string, timeout: number) {
    this.duration = timeout;

    this.element = await this.playwrightExtensions.waitForSelectorTimeout(
      selector,
      timeout
    );
  }

  public async waitForAnyTimeout(locators: Locator[], timeout: number) {
    this.duration = timeout;

    this.element = await this.playwrightExtensions.waitForAnyTimeout(
      locators,
      timeout
    );
  }

  public async waitForTimeout(locator: Locator, timeout: number) {
    this.duration = timeout;

    this.element = await this.playwrightExtensions.waitForTimeout(
      locator,
      timeout
    );
  }
}
