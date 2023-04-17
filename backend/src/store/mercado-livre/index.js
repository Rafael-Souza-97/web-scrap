const pup = require('puppeteer');
const { URL_MERCADO_LIVRE } = require('../../constants/url');

const NUMBER_OF_PRODUCTS = 5;

const scrapingMercadoLivre = async (searchParam) => {
  let productCounter = 1;
  const productList = [];

  const browser = await pup.launch();
  const page = await browser.newPage();
  await page.goto(URL_MERCADO_LIVRE);
  await page.waitForSelector('.nav-search-input');

  await page.type('.nav-search-input', searchParam);

  await Promise.all([
    page.waitForNavigation(),
    page.click('.nav-search-btn'),
  ])

  const links = await page.$$eval('.ui-search-result__image > a', el => el
    .map(link => link.href));

  for(const link of links) {
    if (productCounter > NUMBER_OF_PRODUCTS) continue;
    await page.goto(link);
    await page.waitForSelector('.ui-pdp-title');

    const title = await page
      .$eval('.ui-pdp-title', element => element.innerText);

    const prices = await page.evaluate(() => {
      const metaTag = document.querySelector('meta[itemprop="price"]');
      return metaTag.getAttribute('content');
    });
    
    const imgUrl = await page.evaluate(() => {
      const img = document.querySelector('.ui-pdp-gallery__figure .ui-pdp-image');
      return img.getAttribute('src');
    });

    const category = await page.evaluate(() => {
      const categoryLinks = document.querySelectorAll('.andes-breadcrumb__link');
      switch (categoryLinks.length) {
        case 1:
          return categoryLinks[0].innerText;
        case 2:
          return categoryLinks[1].innerText;
        case 3:
          return categoryLinks[2].innerText;
        default:
          return null;
      }
    });

    const description = await page
      .$eval('.ui-pdp-description__content', element => element.innerText);
  
    const seller = await page.evaluate(() => {
      const sellerElem = document.querySelector('.ui-pdp-seller__link-trigger');
      if (sellerElem) {
        return sellerElem.innerText.trim();
      }
      return null;
    });

    const obj = {};
    obj.store = 'meli';
    obj.search = searchParam;
    (category ? obj.category = category : '');   
    obj.title = title;
    obj.price = prices;
    (seller ? obj.seller = seller : '');
    obj.img = imgUrl;
    obj.url = link;
    obj.description = description;

    productList.push(obj);
    productCounter += 1;
  }

  await browser.close();
  return productList;
}

module.exports = { scrapingMercadoLivre };
