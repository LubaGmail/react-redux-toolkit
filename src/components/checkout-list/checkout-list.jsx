import { useSelector, useDispatch } from 'react-redux'

import CheckoutItem from '../checkout-item/checkout-item';
import { selectCartItems, selectCartTotalCost } from '../../store/cart/cart.selectors';
import { clearCart } from '../../store/cart/cart.slice';

import { CheckoutContainer } from "./checkout-list.styles"

const CheckoutList = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotalCost = useSelector(selectCartTotalCost)
    const dispatch = useDispatch()

    const onClearCart = () => {
       dispatch(clearCart())
    }
    
    return (
        <>
            <CheckoutContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>    
                    <tbody>
                        { cartItems.map(el => (
                            <tr key={el.id}>
                                <CheckoutItem item={el} />
                            </tr>
                        )) }    
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={2}>Total Cost: </th>
                            <td colSpan={4}>${cartTotalCost}</td>
                        </tr>
                    </tfoot>
                </table>

                <button onClick={onClearCart} disabled={cartItems.length === 0} >
                    Clear Cart 
                </button>
            </CheckoutContainer>
        </>
    )
}

export default CheckoutList