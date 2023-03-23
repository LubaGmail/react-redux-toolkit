import { useSelector, useDispatch } from 'react-redux'

import CheckoutItem from '../checkout-item/checkout-item'

import { CheckoutContainer } from "./checkout-list.styles"

const CheckoutList = () => {
    const cartItems = []
    const totalCost = 0
    const dispatch = useDispatch()

    const clearCart = () => {
       
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
                            <td colSpan={4}>${totalCost}</td>
                        </tr>
                    </tfoot>
                </table>

                <button onClick={clearCart} disabled={cartItems.length === 0} >
                    Clear Cart 
                </button>
            </CheckoutContainer>
        </>
    )
}

export default CheckoutList