import { defineConfig, devices } from '@playwright/test';
// import { config } from 'dotenv';
// config()

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    // forbidOnly: !!process.env.CI,
    // retries: process.env.CI ? 2 : 0,
    // workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        {
            name: 'Microsoft Edge',
            use: { ...devices['Desktop Edge'] },
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },

        /* Test against mobile viewports. */
        {
          name: 'Mobile Chrome',
          use: { ...devices['Pixel 5'] },
        },
        {
          name: 'Mobile Safari',
          use: { ...devices['iPhone 12'] },
        },
    ],
});
