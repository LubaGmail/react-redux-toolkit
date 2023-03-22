import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

import CartItem from '../cart-item/cart-item'
import { selectCart } from '../../store/cart/cart.selector'
import { CART_ACTION_TYPES } from "../../store/cart/cart.types"

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems
} from './cart-dropdown.styles';

const CartDropdown = () => {
    // cartItems: [] 
    const { cartItems } = useSelector(selectCart)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({
            type: CART_ACTION_TYPES.SET_IS_CART_OPEN
        });
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.map((el) => (
                        <li key={el.id}>
                            <CartItem item={el} />
                        </li>
                    ))
                } 
                {
                    cartItems.length === 0 && 
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>

            <button onClick={handleClick}>          
                GO TO CHECKOUT
            </button>

        </CartDropdownContainer>
    )
}

export default CartDropdown

