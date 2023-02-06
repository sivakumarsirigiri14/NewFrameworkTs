import { Given, When, Then } from "@cucumber/cucumber";
import { SingletonDriver } from "./browser";
import { WebDriver } from "selenium-webdriver";
import { LoginPage } from "../page_objects/login-page";
let driver: WebDriver;

driver = SingletonDriver.getInstance();
let pageObject = new LoginPage(driver);

Given(/^I navigate to the login page$/, async function () {
  await pageObject.acceptCookies();
  await pageObject.clickJourneyPlanner();
});

Then(/^I should see login page$/, async function () {

});