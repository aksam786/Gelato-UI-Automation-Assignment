const locators = require('../locators/google.locators.json')
const {expect} =  require('@playwright/test')
class GooglePage{

    constructor(page){
        this.page =  page;
    }

    async fillSearchField(searchText){
        try {
            await expect(await this.page.locator(locators.searchField.css)).toBeVisible();
            await this.page.fill(locators.searchField.css, searchText)
        } catch (error) {
            throw new Error("Error during filling search field" + error)
        }
    }

    async clickSearchButton(){
        try {
            await this.page.waitForSelector(locators.searchButton.xpath);
            await expect(await this.page.locator(locators.searchButton.xpath)).toBeVisible();
            await this.page.locator(locators.searchButton.xpath).click({force: true});
        } catch (error) {
            throw new Error("Error during clicking search button" + error)
        }
    }

    async verifySearchedResult(){
        try {
            await this.page.locator(locators.searchedItem.css).click();
            await this.page.waitForTimeout(5000);
            await expect(await this.page).toHaveURL('https://www.amazon.com/')
        } catch (error) {
            throw new Error("Error during verifying search results" + error)
        }
    }

    async clickIAmFeelingLucky(){
        try {
            await expect(await this.page.locator(locators.feelingLuckyButton.css).last()).toBeVisible();
            await this.page.locator(locators.feelingLuckyButton.css).last().click();
            await this.page.waitForTimeout(8000);
            await expect(await this.page).toHaveURL('https://www.google.com/doodles')
        } catch (error) {
            throw new Error("Error during clicking feeling lucky button" + error)
        }
    }

    async openDoodle(){
        try {
            await expect(await this.page.locator(locators.selectedDoodle.xpath)).toBeVisible();
            await this.page.locator(locators.selectedDoodle.xpath).click();
            await this.page.waitForTimeout(5000);
            await expect(await this.page).toHaveURL('https://www.google.com/doodles/lydia-tin-ha-sums-77th-birthday')
        } catch (error) {
            throw new Error("Error during opening a doodle" + error)
        }
    }

    async clickImages(){
        try {
            await expect(await this.page.locator(locators.ImagesButton.xpath)).toBeVisible();
            await this.page.locator(locators.ImagesButton.xpath).click();
            await this.page.waitForTimeout(3000);
            await expect(await this.page.locator('[alt="Google Images"]')).toBeVisible();
        } catch (error) {
            throw new Error("Error during clicking Images Button" + error)
        }
    }

    async clickImageSearchButton(){
        try {
            await expect(await this.page.locator(locators.searchImageButton.css)).toBeVisible();
            await this.page.locator(locators.searchImageButton.css).click();
        } catch (error) {
            throw new Error("Error during clicking image search button" + error)
        }
    }

    async openImage(){
        try {
            await this.page.locator(locators.searchedImage.xpath).click();
        } catch (error) {
            throw new Error("Error during clicking Images Button" + error)
        }
    }

    async clickGoogleAppsButton(){
        try {
            await expect(await this.page.locator(locators.googleAppsButton.css)).toBeVisible();
            await this.page.locator(locators.googleAppsButton.css).click();
            await this.page.waitForTimeout(3000);
        } catch (error) {
            throw new Error("Error during clicking google apps" + error)
        }
    }

    async openGoogleEarthApp(){
        try {
            const googleEarthApp = await this.page.frameLocator("[name='app']").locator(locators.googleEarth.css);
            await googleEarthApp.click()
            await this.page.waitForTimeout(3000);
            await expect(await this.page).toHaveURL('https://earth.google.com/web/');
        } catch (error) {
            throw new Error("Error during opening google earth\n" + error)
        }
    }

    async openGmail(){
        try {
            await this.page.click(locators.gmailSignInButton.css);
            await expect(await this.page.url()).toContain('https://accounts.google.com/')
        } catch (error) {
            throw new Error("Error during opening gmail\n" + error)
        }
    }

    async doGmailLogin(email, password){
        try {
            await this.page.fill(locators.email.css, email);
            await this.page.locator(locators.nextButton.xpath).click()
            await this.page.waitForTimeout(3000)
            await this.page.fill(locators.password.css, password);
            await this.page.locator(locators.nextButton.xpath).click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error("Error during gmail login\n" + error)
        }
    }

}

module.exports = {GooglePage}