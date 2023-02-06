import { Builder, WebDriver, By, until, WebElement } from "selenium-webdriver";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {

  constructor(driver: WebDriver) {
    super(driver);
  }

  private readonly ButtonJourneyPlanner = By.css("#mainnav > div.top-row > div > div:nth-child(2) > ul > li.plan-journey > a");
  private readonly AcceptCookies = By.id("CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll");

  async clickJourneyPlanner() {
    await this.clickOnElement(this.ButtonJourneyPlanner);
  }

  async acceptCookies() {
    await this.clickOnElement(this.AcceptCookies);
  }
}
