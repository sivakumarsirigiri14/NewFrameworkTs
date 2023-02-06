import {Before, After, setDefaultTimeout, AfterAll, Status, AfterStep} from "@cucumber/cucumber";
import { WebDriver } from "selenium-webdriver";
import { SingletonDriver } from "./browser";
import { LoginPage } from "../page_objects/login-page";

setDefaultTimeout(60 * 1000);

let driver: WebDriver;
driver = SingletonDriver.getInstance();

let pageObject = new LoginPage(driver);

Before(async () => {
  await pageObject.navigateToHomePage();
});

AfterAll(async () => {
  await pageObject.closeBrowser();
});

AfterStep(async function (scenario) {
  //if(scenario.result.status===Status.FAILED) {
    let screenShot = await driver.takeScreenshot();
    let image = Buffer.alloc(screenShot.length, screenShot, 'base64');
    this.attach(image, 'image/png');
  //}
});