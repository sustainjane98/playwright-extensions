import { test as base } from '@playwright/test';
import { StartPage } from '../pages/start.page';

export type CommonFixtures = {
  start: StartPage;
};

export const common = base.extend<CommonFixtures>({
  start: async ({ page }, use) => {
    const startPage = new StartPage(page);
    await use(startPage);
  },
});
