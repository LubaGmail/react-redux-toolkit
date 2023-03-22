import { combineReducers } from '@reduxjs/toolkit';

import { productsReducer } from './products/products.slice';
import { categoriesReducer } from './categories/categories.slice';
import { cartReducer } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
