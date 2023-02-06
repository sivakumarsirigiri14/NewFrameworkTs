import {
  Builder,
  WebDriver,
  By,
  until,
  WebElement,
  Locator,
} from "selenium-webdriver";
const variables = require("../../config.json");

export class BasePage {
  protected driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  public async navigateToHomePage(): Promise<void> {
    await this.driver.get(variables.homeUrl);
  }

  public async closeBrowser(): Promise<void> {
    await this.driver.close();
  }

  public async fetchElement(locator: Locator): Promise<WebElement> {
    let element = await this.driver.findElement(locator);
    return element;
  }

  public async waitForElementToBeDisplayedOnThePage(
    element: WebElement
  ): Promise<boolean> {
    await this.driver.wait(until.elementIsVisible(element), 5000);
    if (await element.isDisplayed()) {
      return true;
    } else {
      return false;
    }
  }

  public async clickOnElement(locator: Locator): Promise<void> {
    let element = await this.fetchElement(locator);
    await element.click();
  }
}
