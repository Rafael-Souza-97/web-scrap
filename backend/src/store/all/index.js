const pup = require('puppeteer');
const { scrapingBuscape } = require('../buscape/index');
const { scrapingMercadoLivre } = require('../mercado-livre/index');

const scrapingAll = async (searchParam) => {
  const buscapeList = await scrapingBuscape(searchParam);
  const meliList = await scrapingMercadoLivre(searchParam);

  const result = buscapeList.concat(meliList);

  return result;
}

module.exports = { scrapingAll };
