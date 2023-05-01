const Buscape = require('../models/Buscape');
const { scrapingBuscape } = require('../store/buscape/index');

const getBuscapeProductsBySearch = async (userSearch) => {
  const existingProducts = await Buscape.findAll({
    where: {
      search: userSearch,
    },
  });

  if (existingProducts.length > 0) {
    return existingProducts;
  } else {
    'chegou no else do service'
    const productList = await scrapingBuscape(userSearch);

    if (!productList) return 'Nenhum produto encontrado';

    const newProducts = await Promise.all(productList.map(async (product) => {
      const newProduct = await Buscape.create({
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
  getBuscapeProductsBySearch,
};
