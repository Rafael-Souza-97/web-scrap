import axios from 'axios';
import Product from '../interfaces/Products';

const getAllProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await axios.get(`http://localhost:3001/allproducts?q=${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getAllProducts };