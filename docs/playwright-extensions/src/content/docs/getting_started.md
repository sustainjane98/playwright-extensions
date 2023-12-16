---
title: Getting started
description: A guide in my new Starlight docs site.
---

Integrate into Your Code:
You can use the Playwright Extensions Library in your code by importing it. Add the following line at the beginning of your JavaScript or TypeScript file:

```javascript
const { mergeTests } = require('@playwright/test');
const { playwrightExtensions } = require('playwright-extensions');

const test = playwrightExtensions;
//or if you use multiple fixtures in your tests
const test = mergeTests(playwrightExtensions, ...);

test.describe("Example Tests", ()=> {

  test.beforeEach(async ({page})=> {
    await page.goto("/");
  })

  test("Wait 5000ms for Element to appear", async ({page, playwrightExtensions})=>{

    const exampleElement = await page.getByTestId("example");

    const result = await playwrightExtensions.waitFor(exampleElement, {timeout: 5000});


    if(result.isExisting()) {
      // Do something when exampleElement exists
    }

    if(result.isTimeout()) {
      // Do something when exampleElement is timeouted
    }
    
  })

})

```

Or if you're using TypeScript:

```javascript
import { mergeTests } from '@playwright/test';
import { playwrightExtensions } from 'playwright-extensions';

const test = playwrightExtensions;
//or if you use multiple fixtures in your tests
const test = mergeTests(playwrightExtensions, ...);

test.describe("Example Tests", ()=> {

  test.beforeEach(async ({page})=> {
    await page.goto("/");
  })

  test("Wait 5000ms for Element to appear", async ({page, playwrightExtensions})=>{

    const exampleElement = await page.getByTestId("example");

    const result = await playwrightExtensions.waitFor(exampleElement, {timeout: 5000});


    if(result.isExisting()) {
      // Do something when exampleElement exists
    }

    if(result.isTimeout()) {
      // Do something when exampleElement is timeouted
    }
    
  })

})

```

Using Extensions:
After integrating the library, you can use extensions by calling the relevant functions provided by the Playwright Extensions Library.

Sample Code:
Here's a simple example of how to use a Playwright extension:

javascript
Copy code
const { extend, runWithExtensions } = require('playwright-extensions');

// Define an extension
extend('myExtension', (context, options) => {
    // Add your extension logic here
});

// Run code with the extension
runWithExtensions(async ({ browser, page }) => {
    // Your Playwright code here
});
Modify the example to suit your requirements.

These steps should help you successfully integrate the Playwright Extensions Library into your project. Keep in mind that the exact steps may vary based on your project structure and requirements. For additional information or assistance, refer to the official Playwright documentation: Playwright Documentation.
