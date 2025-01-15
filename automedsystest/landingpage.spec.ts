import { test, expect } from '@playwright/test'; 
import { LoginPage } from './pages'; 

test.describe('Login and Dashboard Validation', () => {
  let loginPage;
  let appUrl;
  
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    
    // Set the app URL before each test
    appUrl = process.env.APP_URL || 'https://qa-ehrpm.automedsys.net/';
    await page.goto(appUrl, { waitUntil: 'load' });
  });

  test('Login and validate dashboard', async ({ page }) => {
    // Expect a title "to contain" a substring
    await expect(page).toHaveTitle(/Practice Manager/);

    // Perform login using environment variables
    const username = 'deji+2@automedsys.com'; // Replace with your actual username
    const password = "P@rfect2";
    const practiceId = "bdw20211001" ;
    await loginPage.login(username, password, practiceId);

    // Assert successful login by checking for the dashboard URL and specific element
    const dashboardUrl = process.env.DASHBOARD_URL || 'https://qa-ehrpm.automedsys.net/dashboard';
    await expect(page).toHaveURL(dashboardUrl, { timeout: 10000 });
  });
});
