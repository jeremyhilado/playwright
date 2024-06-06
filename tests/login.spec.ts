import {test , expect} from '@playwright/test'

test('demo login test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')
    await page.locator("getByPlaceholder('Enter your username')").fill('Raghav')
    await page.locator("getByPlaceholder('Enter your password')").fill('1234')
    await page.waitForSelector('text=Sign in', {timeout: 5000})
    await page.locator("getByPlaceholder('Enter your password')").click()
    await page.locator("text=ACME").isVisible()
})

test('demo login test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
})

test.only('demo login test 3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').press('ControlOrMeta+a');
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.goto('https://admin-demo.nopcommerce.com/login');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').press('ControlOrMeta+a');
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await page.pause()
})