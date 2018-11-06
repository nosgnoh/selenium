require('selenium-webdriver/testing');
var config = require('../configs/config');
var Page = require('../pages/base');
var page;
describe('Test on Chrome : ', function () {
    this.timeout(config.TIMEOUT_LOAD_PAGE);
    beforeEach(function () {
        page = new Page(config.CHROME_BROWSER);
        page.visit(config.URL);
    });

    afterEach(function () {
        page.quit();
    });

    it('Test chrome 1', function () {
        return page.find('#myTabContent');
    });

    it('Test chrome 2', function () {
        return page.find('#myTabContent2');
    });

    it('Test chrome 3', function () {
        return page.find('#myTabContent');
    });
});