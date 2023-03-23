import { useDispatch, useSelector } from 'react-redux'

import { setIsCartOpen } from '../../store/cart/cart.slice';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
    const dispatch = useDispatch();

    const toggleCartOpen = () => {
        dispatch(setIsCartOpen());
    }

    return (
        <CartIconContainer onClick={toggleCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>0</ItemCount>
        </CartIconContainer>   
      
    )
}

export default CartIcon