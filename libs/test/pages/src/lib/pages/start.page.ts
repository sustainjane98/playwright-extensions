import { Locator, Page, expect } from '@playwright/test';
import {
  Exist,
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
    expect(this.element?.isExisting()).toBe(true);
  }

  public async expectToNotExisting() {
    expect(this.element?.isNotExisting()).toBe(true);
  }

  public async expectToTimeout() {
    expect(this.element?.isTimeouted()).toBe(true);
  }

  public checkTheExecutionTime() {
    const additionalDuration = 500;

    expect(this.executionTime).toBeLessThanOrEqual(
      this.duration + additionalDuration
    );
  }

  public async waitForSelectorTimeout(
    selector: string,
    timeout: number,
    shouldExist?: Exist
  ) {
    this.duration = timeout;

    await this.measureTime(async () => {
      this.element = await this.playwrightExtensions.waitForSelectorTimeout(
        selector,
        timeout,
        shouldExist
      );
    });
  }

  public async waitForMultipleTimeout(
    locators: Locator[],
    timeout: number,
    shouldExist?: Exist
  ) {
    this.duration = timeout;

    await this.measureTime(async () => {
      this.element = await this.playwrightExtensions.waitForMultipleTimeout(
        locators,
        timeout,
        shouldExist
      );
    });
  }

  public async waitForTimeout(
    locator: Locator,
    timeout: number,
    shouldExist?: Exist
  ) {
    this.duration = timeout;

    await this.measureTime(async () => {
      this.element = await this.playwrightExtensions.waitForTimeout(
        locator,
        timeout,
        shouldExist
      );
    });
  }

  private async measureTime(callback: () => Promise<void>) {
    const startTime = performance.now();
    await callback();
    this.executionTime = performance.now() - startTime;
  }
}
