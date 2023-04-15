const { scrapingMercadoLivre }= require('./stores/mercado-livre');

scrapingMercadoLivre("tv lg").then((result) => {
  console.log(result);
});
