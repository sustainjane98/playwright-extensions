import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';
// For CI, you may want to set BASE_URL to the deployed application.
const baseURL = process.env['BASE_URL'] || 'http://127.0.0.1:4200';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({ ...nxE2EPreset(__filename, { testDir: './src' }),
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        baseURL,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on',
        testIdAttribute: 'data-testid',
        video: { mode: 'on' },
        screenshot: { mode: 'on' },
    },
    timeout: 60 * 1000,
    workers: '70%',
    reporter: [
        ['list'],
        [
            'html',
            {
                open: 'on-failure',
                outputFolder: '../../dist/.playwright/apps/test-app-e2e/report',
            },
        ],
    ],
    /* Run your local dev server before starting the tests */
    webServer: {
        command: 'npx nx serve test-app',
        url: 'http://127.0.0.1:4200',
        reuseExistingServer: !process.env.CI,
        cwd: workspaceRoot,
    }, projects: [
        { name: "chromium", use: { ...devices["Desktop Chrome"] } },
        { name: "firefox", use: { ...devices["Desktop Firefox"] } },
        { name: "webkit", use: { ...devices["Desktop Safari"] } }
    ] });
