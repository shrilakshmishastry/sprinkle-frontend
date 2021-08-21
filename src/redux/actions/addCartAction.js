export function addToCart(item,type) {
    return {
        type: type,
        productsAtCart: item
    };
}

