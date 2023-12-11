import { Locator, Page, expect } from '@playwright/test';
import {
  PlaywrightExtensionsPage,
  WaitForResults,
} from 'playwright-extensions';

export class StartPage {
  private element: WaitForResults<string | Locator> | null = null;
  private executionTime: number = 0;
  private duration: number = 0;

  private readonly playwrightExtensions = new PlaywrightExtensionsPage(
    this.page
  );

  constructor(private page: Page) {}

  public async expectToExisting() {
    expect(this.element?.isResult()).toBe(true);
  }

  public async expectToNotExisting() {
    expect(this.element).toBe(WaitForResults.NOT_EXISTS);
  }

  public async expectToTimeout() {
    expect(this.element).toBe(WaitForResults.TIMEOUT);
  }

  public checkTheExecutionTime() {
    const additionalDuration = 500;

    expect(this.executionTime).toBeLessThanOrEqual(
      this.duration + additionalDuration
    );
  }

  public async waitForSelectorTimeout(selector: string, timeout: number) {
    this.duration = timeout;

    await this.measureTime(async () => {
      this.element = await this.playwrightExtensions.waitForSelectorTimeout(
        selector,
        timeout
      );
    });
  }

  public async waitForAnyTimeout(locators: Locator[], timeout: number) {
    this.duration = timeout;

    await this.measureTime(async () => {
      this.element = await this.playwrightExtensions.waitForAnyTimeout(
        locators,
        timeout
      );
    });
  }

  public async waitForTimeout(locator: Locator, timeout: number) {
    this.duration = timeout;

    await this.measureTime(async () => {
      this.element = await this.playwrightExtensions.waitForTimeout(
        locator,
        timeout
      );
    });
  }

  private async measureTime(callback: () => Promise<void>) {
    const startTime = performance.now();
    await callback();
    this.executionTime = performance.now() - startTime;
  }
}
