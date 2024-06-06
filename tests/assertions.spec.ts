import { test, Page, expect } from '@playwright/test'

test('assertions demo', async ({page}) => {
    await page.goto("https://kitchen.applitools.com/")
    await page.pause()
    //assertions
    //element present or not
    await expect(page.locator("getByRole('link', { name: 'Alert' })")).toHaveCount(1)
    //can check all attributes such as class or any element attribute
    // can check add customer assertions and soft assertions
    // visual validation with screenshot
    await expect(page).toHaveScreenshot()
})