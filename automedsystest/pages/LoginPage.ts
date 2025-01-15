import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private usernameField = "#Username";
  private passwordField = "#Password";
  private practiceIdField = "#PracticeRefNumber";
  private loginButton = "//span[normalize-space()='Log in']";

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async login(username: string, password: string, practiceId: string): Promise<void> {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.fill(this.practiceIdField, practiceId);
    await this.page.click(this.loginButton);
  }
}