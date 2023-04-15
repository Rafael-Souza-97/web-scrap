const { scrapingMercadoLivre }= require('./stores/mercado-livre');

scrapingMercadoLivre("ps5").then((result) => {
  console.log(result);
});
