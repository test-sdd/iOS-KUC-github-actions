// config when testing locally
// process.env.DOMAIN = 'test.cybozu.com'
// process.env.USERNAME = 'test'
// process.env.PASSWORD = 'test'

const appID = 717;

describe('Index', () => {
  before(async () => {
    browser.url(`https://${process.env.DOMAIN}/k/m/${appID}/`);
    // const localSettingForDisableWelcomeInfo = 'window.localStorage.setItem("gaia.1::com.cybozu.kintone.mobile.LocalSetting", \'{"v2NavigationPanelButtonTooltipDisplayed":true,"v2WelcomeDialogDisplayed":true}\')';
    // browser.executeScript(localSettingForDisableWelcomeInfo, [])
    browser.$("div.form-username-slash input[name='username']").setValue(`${process.env.USERNAME}`);
    browser.$("div.form-password-slash input[name='password']").setValue(`${process.env.PASSWORD}`);
    browser.$("input.login-button").click();
    browser.pause(5000);
    browser.$("button.gaia-mobile-v2-ui-welcomedialog-close-button").click();
    browser.pause(3000)
    browser.$("button.gaia-mobile-v2-ui-tooltip-closebutton").click();
    browser.pause(1000)
  });

  it('should save some screenshots', () => {
    // Save a full page screenshot
    browser.saveFullPageScreen('index-fullPage', {});
    browser.pause(5000);

    // // Save a full page screenshot with all tab executions
    // browser.saveTabbablePage('index-tabbable', { /* some options, use the same options as for saveFullPageScreen */});
    // browser.pause(5000);
  });

  it('should compare successful with a baseline', () => {
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('index-fullPage', {})).toEqual(0);
    browser.pause(5000);

    // // Check a full page screenshot with all tab executions
    // expect(browser.checkTabbablePage('index-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
    // browser.pause(5000);
  });
});

describe('Create', () => {
  before(() => {
    browser.url(`https://${process.env.DOMAIN}/k/m/${appID}/`);
    $(".gaia-mobile-v2-app-indextoolbar-addrecord-border").click();
    browser.pause(5000);
  });

  it('should save some screenshots', () => {
    browser.saveFullPageScreen('Create-fullPage', {});
    browser.pause(5000);

    // browser.saveTabbablePage('Create-tabbable', { /* some options, use the same options as for saveFullPageScreen */});
    // browser.pause(5000);
  });

  it('should compare successful with a baseline', () => {
    expect(browser.checkFullPageScreen('Create-fullPage', {})).toEqual(0);
    browser.pause(5000);

    // expect(browser.checkTabbablePage('Create-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
    // browser.pause(5000);
  });
});

describe('Detail', () => {
  before(() => {
    browser.url(`https://${process.env.DOMAIN}/k/m/${appID}/show?record=1&prev=0&next=0&view=20`);
    browser.pause(5000);
  });

  it('should save some screenshots', () => {
    browser.saveFullPageScreen('Detail-fullPage', {});
    browser.pause(5000);

    // browser.saveTabbablePage('Detail-tabbable', { /* some options, use the same options as for saveFullPageScreen */});
    // browser.pause(5000);
  });

  it('should compare successful with a baseline', () => {
    expect(browser.checkFullPageScreen('Detail-fullPage', {})).toEqual(0);
    browser.pause(5000);

    // expect(browser.checkTabbablePage('Detail-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
    // browser.pause(5000);
  });
});

describe('Edit', () => {
  before(() => {
    browser.url(`https://${process.env.DOMAIN}/k/m/${appID}/show?record=1&prev=0&next=0&view=20`);
    $('.gaia-mobile-v2-app-record-showtoolbar-editrecord-border').click();
    browser.pause(5000);
  });

  it('should save some screenshots', () => {
    browser.saveFullPageScreen('Edit-fullPage', {});
    browser.pause(5000);

    // browser.saveTabbablePage('Edit-tabbable', { /* some options, use the same options as for saveFullPageScreen */});
    // browser.pause(5000);
  });

  it('should compare successful with a baseline', () => {
    expect(browser.checkFullPageScreen('Edit-fullPage', {})).toEqual(0);
    browser.pause(5000);

    // expect(browser.checkTabbablePage('Edit-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
    // browser.pause(5000);
  });
});