import { Locator } from "@playwright/test";
import { WAIT_FOR } from "../enums/wait-for.enum";

export type PlaywrightOptionsExtended<STATE extends Required<Parameters<Locator["waitFor"]>>[0]["state"] = Required<Parameters<Locator["waitFor"]>>[0]["state"], WAIT_FOR_MULTIPLE extends WAIT_FOR = WAIT_FOR> = Omit<Required<Parameters<Locator["waitFor"]>>[0], "state"> & {
  state?: STATE,
  waitForAll?: boolean
};
