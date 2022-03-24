const puppeteer = require('puppeteer');
const url = process.argv[2];
async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const localStorageDATA = await page.evaluate(() => localStorage.getItem("nyt-wordle-state"));
    console.log(localStorageDATA);
    browser.close();
}
run();