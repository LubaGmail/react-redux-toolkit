export const selectIsCartOpen = state => {
    return state.cart.isCartOpen;
}
export const selectCartItems = state => {
    return state.cart.cartItems;
}
export const selectCartTotalCost = state => {
    let cartItems = [...state.cart.cartItems];
    let totalCost = cartItems.reduce((acc, el) => {
        acc = acc + el.price * el.quantity;
        return acc;
    }, 0)
    return totalCost;
}
export const selectCartTotalCount = state => {
    let cartItems = [...state.cart.cartItems];
    let totalCount = cartItems.reduce((acc, el) => {
        acc = acc + el.quantity
        return acc;
    }, 0)
    return totalCount;
}