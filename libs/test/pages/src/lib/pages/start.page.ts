import { Locator, Page, expect } from '@playwright/test';
import {
  Exist,
  PlaywrightExtensionsPage,
  WaitForResults,
} from 'playwright-extensions';

export class StartPage {
  private element:
    | WaitForResults<Locator>
    | WaitForResults<Locator>[]
    | WaitForResults<string>
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
