const pup = require('puppeteer');

const URL_MERCADO_LIVRE = "https://www.mercadolivre.com.br/";

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

  // executa o document.querySelectorAll
  const links = await page.$$eval('.ui-search-result__image > a', el => el
    .map(link => link.href));

  for(const link of links) {
    if (productCounter === 6) continue;
    await page.goto(link);
    await page.waitForSelector('.ui-pdp-title');

    const title = await page
      .$eval('.ui-pdp-title', element => element.innerText);
  
      const prices = await page.$$eval('.andes-money-amount__fraction', elements => elements.map(element => element.innerText));
      const currentPrice = prices[1];
  
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
    obj.title = title;
    obj.price = currentPrice;
    (category ? obj.category = category : '');
    (seller ? obj.seller = seller : '');
    obj.description = description;
    obj.link = link;

    productList.push(obj);
    productCounter += 1;
  }

  await browser.close();

  return productList;
}

module.exports = { scrapingMercadoLivre };

// scrapeMercadoLivre("geladeira frost").then((result) => {
//   console.log(result);
// });