import { combineReducers } from '@reduxjs/toolkit';

import { productsReducer } from './products/products.slice';
import { categoriesReducer } from './categories/categories.slice';

export const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});
