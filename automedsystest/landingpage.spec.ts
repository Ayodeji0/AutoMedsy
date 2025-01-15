import { test, expect } from '@playwright/test'; // Make sure the testing library is imported
import { LoginPage } from './pages'; // 
require('dotenv').config();


test('Login and validate dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to the login page
  const appUrl = process.env.APP_URL || 'https://qa-ehrpm.automedsys.net/';
  await loginPage.navigateTo(appUrl);

  // Expect a title "to contain" a substring
  await expect(page).toHaveTitle(/Practice Manager/);

  // Perform login using environment variables
  const username =  'deji+2@automedsys.com';
  const password = process.env.PASSWORD || '';
  const practiceId = process.env.PRACTICE_ID || '';
  await loginPage.login(username, password, practiceId);

  // Assert successful login by checking for the dashboard URL and specific element
  const dashboardUrl = process.env.DASHBOARD_URL || 'https://qa-ehrpm.automedsys.net/dashboard';
  await expect(page).toHaveURL(dashboardUrl, { timeout: 10000 });
});
