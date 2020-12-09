var exec = require('child_process').exec, child;


// import { expect } from 'chai';
describe.only('Index', () => {
  before(async () => {
​
    browser.url(`https://${process.env.DOMAIN}/k/m/717/`);
    // const localSettingForDisableWelcomeInfo = 'window.localStorage.setItem("gaia.1::com.cybozu.kintone.mobile.LocalSetting", \'{"v2NavigationPanelButtonTooltipDisplayed":true,"v2WelcomeDialogDisplayed":true}\')';
    // browser.executeScript(localSettingForDisableWelcomeInfo, [])
    browser.$("div.form-username-slash input[name='username']").setValue(`${process.env.USERNAME}`);
    browser.$("div.form-password-slash input[name='password']").setValue(`${process.env.PASSWORD}`);
    browser.$("input.login-button").click();
    // browser.pause(5000);
    // browser.$("button.gaia-mobile-v2-ui-welcomedialog-close-button").click();
    // browser.pause(5000)
    // browser.$("button.gaia-mobile-v2-ui-tooltip-closebutton").click();
    browser.pause(5000)
  });
​
  it('should save some screenshots', () => {
​
    // Save a full page screenshot
    browser.saveFullPageScreen('index-fullPage', { /* some options */});
    browser.pause(5000);
    // Save a full page screenshot with all tab executions
    browser.saveTabbablePage('index-tabbable', { /* some options, use the same options as for saveFullPageScreen */});
    browser.pause(5000);
  });
​
  it('should compare successful with a baseline', () => {
​
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('index-fullPage', { /* some options */})).toEqual(0);
    browser.pause(5000);
    // Check a full page screenshot with all tab executions
    expect(browser.checkTabbablePage('index-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
    browser.pause(5000);
  });
});
​
​
describe('Create', () => {
  before(() => {
    browser.url(`https://${process.env.DOMAIN}/k/m/717/`);
    $(".gaia-mobile-v2-app-indextoolbar-addrecord-border").click();
    browser.pause(5000);
  });
​
  it('should save some screenshots', () => {
​
    // Save a full page screenshot
    browser.saveFullPageScreen('Create-fullPage', { /* some options */});
    browser.pause(5000);
    // Save a full page screenshot with all tab executions
    browser.saveTabbablePage('Create-tabbable', { /* some options, use the same options as for saveFullPageScreen */});
    browser.pause(5000);
  });
​
  it('should compare successful with a baseline', () => {
​
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('Create-fullPage', { /* some options */})).toEqual(0);
    browser.pause(5000);
    // Check a full page screenshot with all tab executions
    expect(browser.checkTabbablePage('Create-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
    browser.pause(5000);
  });
});
​
describe('Detail', () => {
  before(() => {
    browser.url(`https://${process.env.DOMAIN}/k/m/717/show#record=1`);
    browser.pause(5000);
  });
​
  it('should save some screenshots', () => {
​
    // Save a full page screenshot
    browser.saveFullPageScreen('Detail-fullPage', { /* some options */});
    browser.pause(5000);
    // Save a full page screenshot with all tab executions
    browser.saveTabbablePage('Detail-tabbable', { /* some options, use the same options as for saveFullPageScreen */});
    browser.pause(5000);
  });
​
  it('should compare successful with a baseline', () => {
​
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('Detail-fullPage', { /* some options */})).toEqual(0);
    browser.pause(5000);
    // Check a full page screenshot with all tab executions
    expect(browser.checkTabbablePage('Detail-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
    browser.pause(5000);
  });
});
​
describe('Edit', () => {
  before(() => {
    browser.url(`https://${process.env.DOMAIN}/k/m/717/show?record=1&prev=0&next=0&view=20`);
    $('.gaia-mobile-v2-app-record-showtoolbar-editrecord-border').click();
    browser.pause(5000);
  });
​
  it('should save some screenshots', () => {
​
    // Save a full page screenshot
    browser.saveFullPageScreen('Edit-fullPage', { /* some options */});
    browser.pause(5000);
    // Save a full page screenshot with all tab executions
    browser.saveTabbablePage('Edit-tabbable', { /* some options, use the same options as for saveFullPageScreen */});
    browser.pause(5000);
  });
​
  it('should compare successful with a baseline', () => {
​
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('Edit-fullPage', { /* some options */})).toEqual(0);
    browser.pause(5000);
    // Check a full page screenshot with all tab executions
    expect(browser.checkTabbablePage('Edit-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
    browser.pause(5000);
  });
});
