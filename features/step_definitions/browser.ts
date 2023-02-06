import { Builder, WebDriver } from "selenium-webdriver";

export class SingletonDriver {
  private static instance: WebDriver;

  static getInstance(): WebDriver {
    if (!SingletonDriver.instance) {
      SingletonDriver.instance = new Builder().forBrowser("chrome").build();
      SingletonDriver.instance.manage().window().maximize();
    }
    return SingletonDriver.instance;
  }
}
