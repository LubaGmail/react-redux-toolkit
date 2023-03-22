export const selectProducts = state => {
    return state.products.products;
}

export const selectFeatured = state => {
    const featured = [];
    const products = state.products.products;

    products.forEach((items) => {
        items.forEach(item => {
            if (item.featured) {
                featured.push(item)
            }
        })
    })
    return featured;
}