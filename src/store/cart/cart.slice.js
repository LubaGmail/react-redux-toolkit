import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CART_STATE = {
    isCartOpen: false,
    cartItems: []
}

const addItemToCart = ([...updatedItems], { ...updatedItem }) => {
    let existingItem = updatedItems.find(el => el.id === updatedItem.id)
    if (!existingItem) {
        updatedItem.quantity = 1
        updatedItems.push(updatedItem)
    } else {
        updatedItems = updatedItems.map(el => {
            if (el.id === updatedItem.id) {
                el.quantity++
            } 
            return el
        })
    }
        
    return updatedItems
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_CART_STATE,
    reducers: {
        setIsCartOpen(state, action) {
            state.isCartOpen = !state.isCartOpen
        },
        addCartItem(state, action) {
            let updatedItems = addItemToCart(state.cartItems, action.payload)
            state.cartItems = updatedItems;
        },
        clearCart(state, action) {
            state.cartItems = [];
        }
    }
});

export const { setIsCartOpen, addCartItem, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;


