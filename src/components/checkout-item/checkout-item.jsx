import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import { addCartItem, subtractCartItem, removeCartItem } from "../../store/cart/cart.slice"

import { ImageContainer, ClickableSpan, ClickableTd } from './checkout-item.styles'

const CheckoutItem = ({ item }) => {
   
    const { name, imageUrl, price, quantity } = item

    const dispatch = useDispatch()

    const quantityRef = useRef()
  
    const onSubtractQuantity = () => {
        let x = parseInt( (quantityRef.current.innerText).toString() )
        if  (!(x < 2) ) {
            dispatch(subtractCartItem(item))
        }
    }
    
    const onAddQuantity = () => {
        dispatch(addCartItem(item))
    }

    const handleRemoveItem = () => {
        dispatch(removeCartItem(item))
    }

    return (
        <>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <td>{name}</td>
            <td >
                <ClickableSpan onClick={onSubtractQuantity}>  &#10094; </ClickableSpan>
                <span ref={quantityRef}>{quantity}</span>
                <ClickableSpan onClick={onAddQuantity}>  &#10095; </ClickableSpan>
            </td>
            <td>${price}</td>
            <ClickableTd  onClick={handleRemoveItem}>
                <span>&#10005;</span>
            </ClickableTd>  
        </>
    )
}

export default CheckoutItem