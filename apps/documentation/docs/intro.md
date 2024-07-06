---
sidebar_position: 1
---

# Quickstart

Let's discover how to get started with **[Playwright](https://playwright.dev/) and Playwright Extensions**.

## Getting Started

Get started by **creating a new Playwright Project and add Playwright Extensions to it**.

Or try **adding Playwright Extensions to a existing with Playwright Project**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 20:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- [Playwright](https://playwright.dev/) latest stable version
- [Playwright Extensions](https://www.npmjs.com/package/playwright-extensions) latest stable version

## Start using Playwright Extensions

If you want to use the Playwright Extensions functions you first have to import the playwrightExtensions [Fixture](https://playwright.dev/docs/test-fixtures).

:information_source: **Recommendation**: When using multiple Fixtures together with Playwright Extensions, we recommend utilizing the `mergeTests` function. This approach ensures that your tests are seamlessly integrated and managed, providing a more efficient and organized testing environment.

```js
import { Locator, mergeTests } from "@playwright/test";
import { playwrightExtensions, WaitForResultType } from "playwright-extensions";

const test = mergeTests(playwrightExtensions);
```

## Using the provided Functions

This chapter show how you should use the Functions Provided by Playwright-Extensions on a simple example.

```js
import { Locator, mergeTests } from "@playwright/test";
import { playwrightExtensions, WaitForResultType } from "playwright-extensions";

const test = mergeTests(playwrightExtensions);

test.describe(("Playwright Extensions example")=> {
  test("Sample use of Playwright Extensions", ({playwrightExtensions, page})=> {
    const selector = 'html body h2';

    await start.waitForSelector(selector, {timeout: 6000});

    await start.expectToExisting();
    start.checkTheExecutionTime();
    await expect(page.locator(selector)).toBeDefined();
  })
})
```
