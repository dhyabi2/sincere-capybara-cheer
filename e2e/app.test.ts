import { test, expect } from '@playwright/test';

test('app is running', async ({ page }) => {
  await page.goto('http://localhost:8081');
  
  // Wait for the page to be loaded
  await page.waitForLoadState('networkidle');
  
  // Check if the page is accessible
  const status = await page.evaluate(() => document.readyState);
  expect(status).toBe('complete');
});
