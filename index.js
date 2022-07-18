const browserObject = require('./browser');
const scraperController = require('./pageController');

let browserInstace = browserObject.startBrowser();

scraperController(browserInstace);