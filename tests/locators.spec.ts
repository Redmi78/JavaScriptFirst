// tests/example.spec.ts
import { test, expect } from '@playwright/test';

test('locatorsPractice', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
  await page.getByLabel("Check me out if you Love IceCreams!").click()
  await page.getByLabel("Gender").selectOption("Female")
  await page.getByLabel("Employed").check()
await page.getByRole("button",{name:'submit'}).click()
const messgae =await page.getByText(" The Form has been submitted successfully!").isVisible()
expect(messgae).toBeTruthy()

});