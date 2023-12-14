import { Locator } from "@playwright/test";

export class WaitForResults<T extends Locator | null, M extends boolean = boolean> {
  private constructor(private _value: null | T = null, private _status: "NOT_EXISTS" | "EXISTS" | "TIMEOUT", private shouldExist: boolean | M = true) {
  }

  get value(): T | null {
    return this?._value;
  }

  get status() {
    return this._status;
  }

  isExisting(options?: M extends false ? {includeTimeout: boolean} : undefined): boolean {
    if(options?.includeTimeout)
    return (
      (this.shouldExist &&
        !this.isTimeouted() &&
        this.status !== 'NOT_EXISTS') ||
      (!this.shouldExist && this.isTimeouted())
    );

    return this.status !== 'NOT_EXISTS' && !this.isTimeouted()
  }

  isNotExisting(options?: M extends true ? {includeTimeout: boolean} : undefined) {

    if(options?.includeTimeout)
    return (
      this.status === 'NOT_EXISTS' || (this.shouldExist && this.isTimeouted())
    );

    return this.status === 'NOT_EXISTS';
  }

  isTimeouted() {
    return this.status === 'TIMEOUT';
  }

  static EXISTS = (locator: Locator , shouldExist: boolean)=> new WaitForResults(locator, 'EXISTS', shouldExist);
  static TIMEOUT = (shouldExist: boolean)=> new WaitForResults(null, 'TIMEOUT', shouldExist);
  static NOT_EXISTS =  (locator: Locator, shouldExist: boolean)=> new WaitForResults(locator, 'NOT_EXISTS', shouldExist);
}
