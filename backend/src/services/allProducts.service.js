const AllProducts = require('../models/AllProducts');
const { scrapingAll } = require('../store/all/index');

const getAllProductsProductsBySearch = async (userSearch) => {
  const existingProducts = await AllProducts.findAll({
    where: {
      search: userSearch,
    },
  });

  if (existingProducts.length > 0) {
    return existingProducts;
  } else {
    'chegou no else do service'
    const productList = await scrapingAll(userSearch);

    if (!productList) return 'Nenhum produto encontrado';

    const newProducts = await Promise.all(productList.map(async (product) => {
      const newProduct = await AllProducts.create({
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
  getAllProductsProductsBySearch,
};
