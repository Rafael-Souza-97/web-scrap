const pup = require('puppeteer');
const { URL_BUSCAPE } = require('../../constants/url');

const NUMBER_OF_PRODUCTS = 5;

const scrapingBuscape = async (searchParam) => {
  let productCounter = 1;
  const productList = [];

  const browser = await pup.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(URL_BUSCAPE);
  await page.waitForSelector('.AutoCompleteStyle_input__HG105');

  await page.type('.AutoCompleteStyle_input__HG105', searchParam);

  await Promise.all([
    page.waitForNavigation(),
    page.click('.AutoCompleteStyle_submitButton__GkxPO'),
  ])

  const links = await page.$$eval('.SearchCard_ProductCard_Inner__7JhKb', el => el
    .map(link => link.href).filter(link => !link.includes('lead')));

  await page.goto(links[0]);
  await page.waitForSelector('.Title_Name__qQvSr');

  const buscapeLinks = await page.$$eval('.OfferCTA_CTA__VfjYx > a', el => el
  .map(link => link.href));

  const prices = await page.$$eval('.OfferPrice_InCash__MePNu', elements => {
    return elements.map(element => {
      const priceText = element.innerText;
      const numericPrice = parseFloat(priceText.match(/\d+\.\d+/)[0]);
      return numericPrice;
    });
  });

  const seller = await page.$$eval('.OfferMerchant_Name__f_ADg', elements => {
    return elements.map(element => element.innerText);
  });

  const productImages = await page.$$eval('.OfferImage_ImageWrapper__MQSN6 img', images => {
    return images.map(img => img.getAttribute('src'));
  });
  
  for (let index = 0; index < buscapeLinks.length; index += 1) {
    if (productCounter > NUMBER_OF_PRODUCTS) continue;
  
    const title = await page.$eval('.Title_Name__qQvSr', element => element.innerText);

    const category = await page.$eval('.Text_MobileParagraphXs__sLf1r', element => element.innerText);
  
    const obj = {};
    obj.store = 'buscape';
    obj.search = searchParam;
    (category ? obj.category = category : '');  
    obj.title = title;
    obj.price = prices[index];
    (seller ? obj.seller = seller[index] : '');
    obj.img = productImages[index];
    obj.url = buscapeLinks[index];
  
    productList.push(obj);
    productCounter += 1;
  }

  await browser.close();
  return productList;
}

module.exports = { scrapingBuscape };
