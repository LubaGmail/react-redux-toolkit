import { useDispatch, useSelector } from 'react-redux'

import { setIsCartOpen } from '../../store/cart/cart.slice';
import { selectCartTotalCount } from '../../store/cart/cart.selectors';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartTotalCount = useSelector(selectCartTotalCount);

    const toggleCartOpen = () => {
        dispatch(setIsCartOpen());
    }

    return (
        <CartIconContainer onClick={toggleCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartTotalCount}</ItemCount>
        </CartIconContainer>   
      
    )
}

export default CartIcon