export class WaitForResults<T> {
  public constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }

  isResult(): boolean {
    return this.value !== 'TIMEOUT' && this.value !== 'NOT_EXISTS';
  }

  isNotExisting(): boolean {
    return this.value === 'NOT_EXISTS';
  }

  static TIMEOUT = new WaitForResults('TIMEOUT');
  static NOT_EXISTS = new WaitForResults('NOT_EXISTS');
}
