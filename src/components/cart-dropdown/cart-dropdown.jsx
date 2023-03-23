import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

import CartItem from '../cart-item/cart-item'

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems
} from './cart-dropdown.styles';

const CartDropdown = () => {
    // cartItems: [] 
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cartItems = [];
    const handleClick = () => {
 
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

