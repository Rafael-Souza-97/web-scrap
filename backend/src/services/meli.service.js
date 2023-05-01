const Meli = require('../models/Meli');
const { scrapingMercadoLivre } = require('../store/mercado-livre/index');

const getMeliProductsBySearch = async (userSearch) => {
  const existingProducts = await Meli.findAll({
    where: {
      search: userSearch,
    },
  });

  if (existingProducts.length > 0) {
    return existingProducts;
  } else {
    const productList = await scrapingMercadoLivre(userSearch);

    if (!productList) return 'Nenhum produto encontrado';

    const newProducts = await Promise.all(productList.map(async (product) => {
      const newProduct = await Meli.create({
        store: product.store,
        search: userSearch,
        title: product.title,
        price: product.price,
        category: product.category,
        seller: product.seller,
        img: product.img,
        url: product.url,
        description: product.description,
      });
      return newProduct;
    }));

    return newProducts;
  }
}
module.exports = {
  getMeliProductsBySearch,
};
