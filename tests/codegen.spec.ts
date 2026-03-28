import { test, expect } from '@playwright/test';

test('code', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByText('Name: Email: Phone:').click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('test@yopmail.com');
});