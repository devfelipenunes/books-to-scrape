const pageScraper = require('./pageScraper');
const fs = require('fs')

async function scrapeAll(browserInstance){
    let browser;
    try{
		browser = await browserInstance;
		let scrapedData = {};
		scrapedData['Travel'] = await pageScraper.scraper(browser, 'Travel');
		scrapedData['HistoricalFiction'] = await pageScraper.scraper(browser, 'Historical Fiction');
		scrapedData['Mystery'] = await pageScraper.scraper(browser, 'Mystery');
		await browser.close();
        fs.writeFileSync("data.json", JSON.stringify(scrapedData), 'utf8', function(err){
            if(err){
                return console.log(err)
            }
            console.log("Os dados foram copiados e salvos com sucesso! Visualize-os em './data.json'");
        })
		console.log(scrapedData)
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

module.exports = (browserInstance) => scrapeAll(browserInstance)