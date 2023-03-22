import { combineReducers } from '@reduxjs/toolkit';

import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { productsReducer } from './products/products.slice';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartReducer,
  products: productsReducer
});
