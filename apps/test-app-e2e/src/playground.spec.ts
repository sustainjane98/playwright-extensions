/* eslint-disable playwright/expect-expect */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable playwright/no-skipped-test */
import { Locator, mergeTests } from "@playwright/test";
import { playwrightExtensions, WaitForResultType } from "playwright-extensions/dist";

const test = mergeTests(playwrightExtensions);


test.describe("Playground", ()=>{

  test.skip("Play with return types", async ({playwrightExtensions, page})=>{
    const divElem = page.locator("div");

   const result = await playwrightExtensions.waitForMultiple([divElem], {timeout: 5000, waitForAll: false});

   type result = typeof result;

   type ex = WaitForResultType<Locator[], "visible", false>

  })


});
