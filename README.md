Setup
    npx create-react-app react-store-reducers
        npm i sass      npm i react-router-dom      npm i firebase
        npm i styled-components   npm i redux-logger  
        npm i @reduxjs/toolkit
    npm start           localhost:3000

Redux
    Single Point of Truth
    index.js    <Provider store={store}>

from Redux to @redux/toolkit
    store.js
        replace createStore with createSlice
    root-reducer.js
        add productsReducer to combinedReducers
    store/products
        replace products.reducer and products.type with products.slice

    