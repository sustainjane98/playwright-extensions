---
sidebar_position: 1
---

# Tutorial Intro

Let's discover how to get started with **[Playwright](https://playwright.dev/) and Playwright Extensions**.

## Getting Started

Get started by **creating a new Playwright Project and add Playwright Extensions to it**.

Or try **adding Playwright Extensions to a existing with Playwright Project**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 20:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- [Playwright](https://playwright.dev/) latest stable version
- [Playwright Extensions](https://www.npmjs.com/package/playwright-extensions) latest stable version

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
