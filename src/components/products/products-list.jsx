import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectFeatured } from '../../store/products/products.selector';
import Product from '../product/product';

import { ProductsContainer, Logo } from './products-list.styles';

const ProductsList = () => {
  const featuredArr = useSelector(selectFeatured);
  
  return (
    <>
      <Logo>
        <Link to='/shop'>Shop Now!</Link>
      </Logo>

      <ProductsContainer>
        {
          featuredArr.map(el => (
            <li key={el.id}>
              <Product product={el} />
            </li>
          ))
        }
      </ProductsContainer>
    </>
    
  );
}

export default ProductsList;
