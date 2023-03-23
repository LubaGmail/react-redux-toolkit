import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CART_STATE = {
    isCartOpen: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_CART_STATE,
    reducers: {
        setIsCartOpen(state, action) {
            state.isCartOpen = !state.isCartOpen
        }
    }
});

export const { setIsCartOpen } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;


