import { test, expect } from '@playwright/test'

test.describe('all my tests', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html')
    })

    test.afterAll(async ({page}) => {
        await page.close()
    })

    test('login', async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html')
        await page.close()
    })

    test('homepage', async ({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html')
        await page.close()
    })

    test('logout', async ({ page }) => {

    })

})