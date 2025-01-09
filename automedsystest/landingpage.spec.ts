import { test, expect } from "@playwright/test";
import { LoginPage } from './pages';

// login.test.ts

test('Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to the login page
  await page.goto('https://qa-ehrpm.automedsys.net/');

  // Define credentials
  const username = process.env.USERNAME || '';
  const password = process.env.PASSWORD || '';
  const practiceId = process.env.PRACTICE_ID || '';

  // Call the login method with the correct parameters
  await loginPage.login(username, password, practiceId);
}); // <-- This closing brace was missing

  
    