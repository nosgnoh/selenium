require('chromedriver');
require('geckodriver');
require('mocha');
var config = require('../configs/config');
var webdriver = require('selenium-webdriver'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    should = chai.should(),
    By = webdriver.By,
    until = webdriver.until;
chai.use(chaiAsPromised);

var Page = function (browser) {
    this.driver = new webdriver.Builder().forBrowser(browser).build();
    var driver = this.driver;

    this.visit = function (theUrl) {
        return driver.get(theUrl);
    }

    this.quit = function () {
        return driver.quit();
    }

    this.find = function (elm) {
        driver.wait(until.elementLocated(By.css(elm)), config.TIMEOUT_LOAD_CONTENT);
        return driver.findElement(By.css(elm));
    }

    this.findAll = function () {
        driver.wait(until.elementLocated(By.css(elm)), config.TIMEOUT_LOAD_CONTENT);
        return driver.findElements(By.css(elm));
    }

    this.write = function (elm, text) {
        return this.find(elm).sendKeys(text);
    }
}

module.exports = Page;