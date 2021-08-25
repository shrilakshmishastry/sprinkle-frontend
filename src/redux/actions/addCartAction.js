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


export function removeFromCart(item) {
    const {remove} = cartActionTypeCreator(CART_ACTION);
    return function(dispatch) {

        dispatch({
            type: remove,
            item :item
        });
    }
}

