import { cartActionTypeCreator, CART_ACTION } from "../../redux/action-type";

export function addToCart(item) {
    const {add} = cartActionTypeCreator(CART_ACTION);
    return  function(dispatch) {
        dispatch(   {
            type: add,
            productsAtCart: item
        });
}
}


export function removeFromCart(item,qty) {
    const {remove} = cartActionTypeCreator(CART_ACTION);
    return function(dispatch) {

        dispatch({
            type: remove,
            item :item,
            qty: qty,
        });
    }
}

export function updateCart(item,qty) {
    const {update} = cartActionTypeCreator(CART_ACTION);
    return function(dispatch) {

        dispatch({
            type: update,
            item :item,
            qty: qty,
        });
    }
}

