require('selenium-webdriver/testing');
var config = require('../configs/config');
var Page = require('../pages/base');
var page;
describe('Test on Firefox : ', function () {
    this.timeout(config.TIMEOUT_LOAD_PAGE);
    beforeEach(function () {
        page = new Page(config.FIREFOX_BROWSER);
        page.visit(config.URL);
    });

    afterEach(function () {
        page.quit();
    });

    it('Test firefox 1', function () {
        return page.find('#myTabContent');
    });

    it('Test firefox 2', function () {
        return page.find('#myTabContent2');
    });

    it('Test firefox 3', function () {
        return page.find('#myTabContent');
    });
});