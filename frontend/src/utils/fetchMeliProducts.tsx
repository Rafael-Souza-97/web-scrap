import axios from 'axios';
import Product from '../interfaces/Products';

const getMeliProducts = async (query: string): Promise<Product[]> => {
  try {
    const response = await axios.get(`http://localhost:3001/meli?q=${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getMeliProducts };