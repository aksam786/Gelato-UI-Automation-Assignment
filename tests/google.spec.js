const {GooglePage} = require('../pages/google.page');
const {test} = require('@playwright/test')

test.describe("google test cases", async() =>{
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.google.com");
  });
  test("Scenario - Search On Google - search and verify", async({page}) => {
    let googlePageObj =  new GooglePage(page);
    await googlePageObj.fillSearchField("amazon");
    await googlePageObj.clickSearchButton();
    await googlePageObj.verifySearchedResult();
  })

  test("Scenario - Doodles On Google - open and verify doodles", async({page}) => {
    let googlePageObj =  new GooglePage(page);
    await googlePageObj.clickIAmFeelingLucky();
    await googlePageObj.openDoodle();
  })

  test("Scenario - Images On Google - search and verify image search", async({page}) => {
    let googlePageObj =  new GooglePage(page);
    await googlePageObj.clickImages();
    await googlePageObj.fillSearchField("Gelato Company");
    await googlePageObj.clickImageSearchButton();
    await googlePageObj.openImage();
  })

  test("Scenario - Google Apps - open and verify google earth app", async({page}) => {
    let googlePageObj =  new GooglePage(page);
    await googlePageObj.clickGoogleAppsButton();
    await googlePageObj.openGoogleEarthApp();
  })

  test("Scenario - Gmail", async({page}) => {
    let googlePageObj =  new GooglePage(page);
    await googlePageObj.openGmail();
  })
})