import { useEffect, useState } from 'react';
import Product from './interfaces/Products';
import { randomStringFromArray, productsArr } from './components/RandomProducts';
import { getAllProducts } from './utils/fetchAllProducts';
import { getMeliProducts } from './utils/fetchMeliProducts';
import { getBuscapeProducts } from './utils/fetchBuscapeProducts';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { SelectChangeEvent } from "@mui/material";
import Loading from './components/Loading';
import './App.css';
import ProductNotFound from './components/ProductNotFound';

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedStore, setSelectedStore] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showDescription, setShowDescription] = useState<number | null>(null);

  function handleClick(index: number) {
    setShowDescription(index);
  }

  function handleClose() {
    setShowDescription(null);
  }

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedStore(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      const randomString = randomStringFromArray(productsArr);
      const data = await getAllProducts(randomString);
      setProducts(data);
    };
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    let data: Product[] = [];
    if (selectedStore === 'Todas') {
      data = await getAllProducts(searchTerm);
    } else if (selectedStore === 'Mercado Livre') {
      data = await getMeliProducts(searchTerm);
    } else if (selectedStore === 'Buscape') {
      data = await getBuscapeProducts(searchTerm);
    }
    setProducts(data);
    setLoading(false);
  };

  return (
    <div className="container mx-auto py-8">
      <div className='flex justify-center'>
        <h1 className='text-lg sm:text-3xl md:text-5xl text-gray-400 m-10 md:mb-14 text-center tech'> Web Scrap </h1>
      </div>
      <form onSubmit={ handleSubmit } className='flex justify-center flex-wrap mb-10'>
        <div className='flex justify-center m-3'>
          <FormControl className='max-w-sm sm:max-w-md md:max-w-lg'>
            <InputLabel id="demo-simple-select-label">Selecione a Loja</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedStore}
              label="Selecione a Loja"
              className='w-72 sm:w-80'
              onChange={ handleChange }
              required
            >
              <MenuItem value="Mercado Livre">Mercado Livre</MenuItem>
              <MenuItem value="Buscape">Buscape</MenuItem>
              <MenuItem value="Todas">Todas</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='flex justify-center m-3'>
          <TextField
            type="text"
            placeholder="Nome do produto"
            value={ searchTerm }
            name="name"
            id="outlined-basic"
            label="Digite o nome do produto"
            variant="outlined"
            onChange={({ target }) => setSearchTerm(target.value)}
            className="w-full sm:w-64 lg:w-80 xl:w-96 mr-4 sm:mr-0"
            required
          />
          <button
            type="submit"
            className="w-24 py-4 px-4 text-white bg-gray-800 hover:bg-black hover:bg-corBotaoHover focus:outline-none right-rounded"
          >
            Buscar
          </button>
        </div>
      </form>

      <div  className={products.length ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8" : "flex justify-center"}>
        {loading ? (
          <Loading />
        ) : (
          products.length ? (
            products.map((product, index) => (
              <div key={ product.id } className="flex flex-col items-center bg-white rounded-lg p-5 text-center product-card cursor-pointer">
                <div className="flex">
                  <img
                    src={ product.img }
                    alt={ product.title }
                    className="w-full rounded-t-lg rounded-2xl h-48 max-w-full object-contain product-card-img"
                  />
                  { product.description ? (
                    <BsFillInfoCircleFill
                      size={24}
                      className="cursor-pointer"
                      onClick={() => handleClick(index)}
                    /> ) : null 
                  }
                  { showDescription === index && (
                    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 z-50">
                      <div className="modal-container">
                        <button onClick={ handleClose } className="bg-red-500 text-white rounded-full px-3 py-1 close-button">X</button>
                        <p className="p-2">{product.title}</p>
                        <p className="p-5">{product.description}</p>
                      </div>
                    </div>
                  )}
                </div>
                   
                <h3 className="text-sm font-bold max-w-full break-words mb-10">{product.title}</h3>
                <p className="text-gray-700 mb-10">{parseFloat(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>

                <a href={ product.url } target="_blank">
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg m-6">Ir à loja</button>
                </a>
              </div>
            ))
          ) : (
            <ProductNotFound />
          )
        )}
      </div>
    </div>
  );  
}

export default App;
