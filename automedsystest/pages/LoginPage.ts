import { Page } from 'playwright';


export class LoginPage {
  private page: Page;
  private usernameField = '//input[@id="Username"]';
  private passwordField = '//input[@id="Password"]';
  private practiceIdField = '//input[@id="PracticeRefNumber"]';
  private loginButton = '//span[normalize-space()="Log in"]';

  constructor(page: Page) {
    this.page = page;
  }

  // Method to fill the username
  async fillUsername(username: string) {
    await this.page.fill(this.usernameField, username);
  }

  // Method to fill the password
  async fillPassword(password: string) {
    await this.page.fill(this.passwordField, password);
  }

  // Method to fill the practice ID
  async fillPracticeId(practiceId: string) {
    await this.page.fill(this.practiceIdField, practiceId);
  }

  // Method to click the login button
  async clickLoginButton() {
    await this.page.click(this.loginButton);
  }

  // Complete login method
  async login(username: string, password: string, practiceId: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.fillPracticeId(practiceId);
    await this.clickLoginButton();
  }
}
