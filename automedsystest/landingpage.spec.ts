import { test, expect } from "@playwright/test";
import { LoginPage, PatientChartPage} from './pages';
import dotenv from 'dotenv';  // Correct import

// Load environment variables from .env file
dotenv.config();

// login.test.ts

test.describe('Login Test', () => {
  let loginPage: LoginPage;
  let patientchartPage: PatientChartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    // Navigate to the login page before each test
    await page.goto('https://qa-ehrpm.automedsys.net');
  });

  test('Login and Verify URL', async ({ page }) => {
    // Define credentials dynamically from environment variables 
    const username = "deji+2@automedsys.com"
    const password = 'P@rfect2';
    const practiceId ='aal20201001';

    // Perform login
    patientchartPage = await loginPage.login(username, password, practiceId);

    // Verify the current URL matches the expected URL
    await page.waitForLoadState('load');
    const actualUrl = page.url();
    const expectedUrl = 'https://qa-ehrpm.automedsys.net/';
    console.log(`Actual URL: ${actualUrl}`);
    console.log(`Page Title: ${await page.title()}`);
    expect(actualUrl).toBe(expectedUrl);
  });
});
