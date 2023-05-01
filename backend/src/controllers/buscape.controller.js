const productsService = require('../services/buscape.service');

const getBuscapeProductsBySearch = async (req, res) => {
  try {
    const { q } = req.query;

    const productsResult = await productsService.getBuscapeProductsBySearch(q);
    
    if (!productsResult) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  
    return res.status(200).json(productsResult);
  } catch (error) {
    console.log(error);

    return res.status(404).json({ message: 'Não foi possível encontrar este produto no momento.' });
  }
};

module.exports = {
  getBuscapeProductsBySearch,
};

