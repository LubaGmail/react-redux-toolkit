import { useDispatch , useSelector} from 'react-redux';

import { addCartItem } from '../../store/cart/cart.slice';

import { ProductContainer, FooterContainer } from './product.styles';

const Product = ({ product }) => {
    const { name, imageUrl, price } = product;
 
    const dispatch = useDispatch()

    const addItemToCart = (product) => {
        dispatch(addCartItem(product))
    }

    return (
        <ProductContainer>
            <img src={imageUrl} alt={name}
            />
            <FooterContainer>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </FooterContainer>
            <button onClick={ () => addItemToCart (product)}
            >
                Add to cart
            </button>
        </ProductContainer>
    )
}

export default Product

