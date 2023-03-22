import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProductsList from '../../components/products/products-list.jsx';
import { getAllProducts } from '../../utils/firebase/firebase';
import { setProducts } from '../../store/products/products.slice.js';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async() => {
      const products = await getAllProducts();
      dispatch(setProducts(products));
    }  
    getData();
  
  }, [dispatch])

  return (
    <>
       <ProductsList />
    </>
     
  );
}

export default Home
