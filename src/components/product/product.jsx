import { useDispatch , useSelector} from 'react-redux';

import { ProductContainer, FooterContainer } from './product.styles';

const Product = ({ product }) => {
    const { name, imageUrl, price } = product;
 
    const cartItems = []
    const dispatch = useDispatch()

    const addCartItem = (product) => {

    }

    return (
        <ProductContainer>
            <img src={imageUrl} alt={name}
            />
            <FooterContainer>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </FooterContainer>
            <button onClick={ () => addCartItem (product)}
            >
                Add to cart
            </button>
        </ProductContainer>
    )
}

export default Product

