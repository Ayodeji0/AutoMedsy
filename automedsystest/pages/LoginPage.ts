import { Page } from '@playwright/test';
import { PatientChartPage } from './PatientChartPage';

export class LoginPage {
  private page: Page;

  // Locators
  private usernameField = '#Username';
  private passwordField = '#Password';
  private practiceIdField = '#PracticeRefNumber';
  private loginButton = '//span[normalize-space()="Log in"]';

  constructor(page: Page) {
    this.page = page;
  }

  // Method to fill the username
  async fillUsername(username: string): Promise<void> {
    await this.page.fill(this.usernameField, username);
  }

  // Method to fill the password
  async fillPassword(password: string): Promise<void> {
    await this.page.fill(this.passwordField, password);
  }

  // Method to fill the practice ID
  async fillPracticeId(practiceId: string): Promise<void> {
    await this.page.fill(this.practiceIdField, practiceId);
  }

  // Method to click the login button
  async clickLoginButton(): Promise<void> {
    await this.page.click(this.loginButton);
  }

  // Complete login method
  async login(username: string, password: string, practiceId: string): Promise<PatientChartPage > {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.fillPracticeId(practiceId);
    await this.clickLoginButton();
    // await this.page.waitForURL('');

    // Return a new instance of PatientChartPage, passing the Page object
    return new PatientChartPage(this.page);
  }
}
