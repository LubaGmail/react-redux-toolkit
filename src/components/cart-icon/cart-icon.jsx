import { useDispatch, useSelector } from 'react-redux'

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
    const dispatch = useDispatch()

    const toggleCartOpen = () => {

    }

    return (
        <CartIconContainer onClick={toggleCartOpen} >
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>0</ItemCount>
        </CartIconContainer>   
      
    )
}

export default CartIcon