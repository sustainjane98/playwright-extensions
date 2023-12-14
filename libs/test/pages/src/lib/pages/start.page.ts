import { Locator, Page, expect } from '@playwright/test';
import {
  PlaywrightExtensionsPage,
  WaitForResults,
} from 'playwright-extensions';

export class StartPage {
  private element:
    | WaitForResults<Locator>
    | WaitForResults<Locator>[]
    | WaitForResults<null>
    | null = null;
  private executionTime: number = 0;
  private duration: number = 0;

  private readonly playwrightExtensions = new PlaywrightExtensionsPage(
    this.page
  );

  constructor(private page: Page) {}

  public async expectToExisting() {
    const isArray = Array.isArray(this.element);

    if (this.element === null) {
      throw new Error('Element is null, please check code');
    }

    if (isArray)
      for (const element of this.element as WaitForResults<Locator>[]) {
        expect(element?.isExisting()).toBe(true);
      }

    expect((this.element as WaitForResults<Locator>)?.isExisting()).toBe(true);
  }

  public async expectToNotExisting() {
    const isArray = Array.isArray(this.element);

    if (this.element === null) {
      throw new Error('Element is null, please check code');
    }

    if (isArray)
      for (const element of this.element as WaitForResults<Locator>[]) {
        expect(element?.isNotExisting()).toBe(true);
      }

    expect((this.element as WaitForResults<Locator>)?.isNotExisting()).toBe(
      true
    );
  }

  public async expectToTimeout() {
    if (this.element === null) {
      throw new Error('Element is null, please check code');
    }

    const isArray = Array.isArray(this.element);

    if (isArray) {
      throw new Error("Element shouldn't be an array when timeouted");
    }

    expect((this.element as WaitForResults<Locator>)?.isTimeouted()).toBe(true);
  }

  public checkTheExecutionTime() {
    const additionalDuration = 500;

    expect(this.executionTime).toBeLessThanOrEqual(
      this.duration + additionalDuration
    );
  }

  public async waitForSelector(
    selector: string,
    options: Parameters<typeof this.playwrightExtensions.waitForSelector>[1]
  ) {
    this.duration = options?.timeout ?? 0;

    await this.measureTime(async () => {
      this.element = await this.playwrightExtensions.waitForSelector(
        selector,
        options
      );
    });
  }

  public async waitForMultipleTimeout(
    locators: Locator[],
    options: Parameters<typeof this.playwrightExtensions.waitForMultiple>[1]
  ) {
    this.duration = options?.timeout ?? 0;

    await this.measureTime(async () => {
      this.element = await this.playwrightExtensions.waitForMultiple(
        locators,
        options
      );
    });
  }

  public async waitFor(
    locator: Locator,
    options: Parameters<typeof this.playwrightExtensions.waitFor>[1]
  ) {
    this.duration = options?.timeout ?? 0;

    await this.measureTime(async () => {
      this.element = await this.playwrightExtensions.waitFor(
        locator,
        options
      );
    });
  }

  private async measureTime(callback: () => Promise<void>) {
    const startTime = performance.now();
    await callback();
    this.executionTime = performance.now() - startTime;
  }
}
