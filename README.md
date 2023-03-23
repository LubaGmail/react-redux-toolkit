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

How toolkit reducer objects remain immutable?
    Redux Toolkit allows you to "mutate" the state by using the Immer package to create a proxied draft version of the state. You can safely mutate the state variable in your reducer functions because it is a proxy object and not the true state. Behind the scenes, your mutations of the proxy are used to return a fresh copy of the state that reflects your changes.   