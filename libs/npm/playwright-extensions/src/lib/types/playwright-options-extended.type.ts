import { Locator } from "@playwright/test";

export type PlaywrightOptionsExtended<STATE extends Required<Parameters<Locator["waitFor"]>>[0]["state"] = Required<Parameters<Locator["waitFor"]>>[0]["state"], WAIT_FOR_ALL extends boolean = true> = Omit<Required<Parameters<Locator["waitFor"]>>[0], "state"> & {
  state?: STATE,
  waitForAll?: boolean
};
