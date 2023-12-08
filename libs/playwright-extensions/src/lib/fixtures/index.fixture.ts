import { test as base } from '@playwright/test';
import { PlaywrightExtensionsPage } from '../pages';

export type PlaywrightExtensions = {
  playwrightExtensions: PlaywrightExtensionsPage;
};

export const playwrightExtensions = base.extend<PlaywrightExtensions>({
  playwrightExtensions: async ({ page, testIdAttribute }, use) => {
    const playwrightExtensions = new PlaywrightExtensionsPage(
      page,
      testIdAttribute
    );
    await use(playwrightExtensions);
  },
});
