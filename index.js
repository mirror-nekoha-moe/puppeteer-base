const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const fs = require('fs');
const path = require('path');

(async () => {
  puppeteer.use(StealthPlugin());

  const browser = await puppeteer.launch({ headless: false, userDataDir: './puppeteer_profile' });
})();
