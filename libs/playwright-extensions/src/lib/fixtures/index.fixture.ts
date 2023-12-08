import { test as base } from '@playwright/test';
import { PlaywrightExtensionsPage } from '../pages';

export type PlaywrightExtensions = {
  playwrightExtensions: PlaywrightExtensionsPage;
};

export const playwrightExtensions = base.extend<PlaywrightExtensions>({
  playwrightExtensions: async ({ page }, use) => {
    const playwrightExtensions = new PlaywrightExtensionsPage(page);
    await use(playwrightExtensions);
  },
});
