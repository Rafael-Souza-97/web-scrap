const productsService = require('../services/meli.service');

const getMeliProductsBySearch = async (req, res) => {
  try {
    const { q } = req.query;

    const productsResult = await productsService.getMeliProductsBySearch(q);
    
    if (!productsResult) {
      return res.status(500).json({ message: 'Something went wrong' });
    }
  
    return res.status(200).json(productsResult);
  } catch (error) {
    console.log(error);

    return res.status(404).json({ message: 'These products does not exist' });
  }
};

module.exports = {
  getMeliProductsBySearch,
};

