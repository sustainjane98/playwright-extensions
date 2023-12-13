import { test as base } from '@playwright/test';
import { StartPage } from '../pages/start.page';
import { PlaywrightExtensionsPage } from 'playwright-extensions';

export type CommonFixtures = {
  start: StartPage;
  waitingBeforeStart: null;
};

export const common = base.extend<CommonFixtures>({
  start: async ({ page }, use) => {
    const startPage = new StartPage(page);
    await use(startPage);
  },
  waitingBeforeStart: async ({page}, use)=>{
    await page.goto("/")
    const pe = new PlaywrightExtensionsPage(page);
    await pe.waitForMultipleTimeout([page.locator("div.notExist"), page.locator("div.notExist2")], 6000)
    await page.goto("/")
    await use(null);

  }
});
