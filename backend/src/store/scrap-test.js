// const { scrapingMercadoLivre }= require('./mercado-livre');
const { scrapingBuscape }= require('./buscape');

// scrapingMercadoLivre("ps5").then((result) => {
//   console.log(result);
// });

scrapingBuscape("ps5").then((result) => {
  console.log(result);
});

