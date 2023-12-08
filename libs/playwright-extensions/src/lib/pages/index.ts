import { Page } from '@playwright/test';
import { WaitForExtensionsPage } from './wait-for.extensions.page';

export class PlaywrightExtensionsPage extends WaitForExtensionsPage {
  constructor(page: Page, testId: string) {
    super(page, testId);
  }
}
