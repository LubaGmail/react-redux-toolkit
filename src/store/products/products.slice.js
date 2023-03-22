import { createSlice } from '@reduxjs/toolkit';

const INITIAL_PRODUCTS_STATE = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_PRODUCTS_STATE,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
    }
});

export const { setProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
