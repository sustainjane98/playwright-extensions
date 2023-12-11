export class WaitForResults<T> {
  public constructor(private value: T, private shouldExist: boolean = true) {}

  getValue(): T {
    return this.value;
  }

  isExisting(): boolean {
    return (
      (this.shouldExist &&
        !this.isTimeouted() &&
        this.value !== 'NOT_EXISTS') ||
      (!this.shouldExist && this.isTimeouted())
    );
  }

  isNotExisting() {
    return (
      this.value === 'NOT_EXISTS' || (this.shouldExist && this.isTimeouted())
    );
  }

  isTimeouted() {
    return this.value === 'TIMEOUT';
  }

  static TIMEOUT = new WaitForResults('TIMEOUT');
  static NOT_EXISTS = new WaitForResults('NOT_EXISTS');
}
