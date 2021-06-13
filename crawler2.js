const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

await page.goto('https://vnexpress.net/phap-luat');

let data = await page.waitForSelector('body > section.section.section_topstory.section_topstory_folder > div > div > div > div > div > div > ul > li:nth-child(1) > h3 > a');

const textContent = await page.evaluate(
    () => Array.from(
      document.querySelectorAll('a[href]'),
      a => a.getAttribute('href')
    )
  );

console.log(textContent); 

browser.close();
})();