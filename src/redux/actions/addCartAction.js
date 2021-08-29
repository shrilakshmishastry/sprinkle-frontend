import { cartActionTypeCreator, CART_ACTION } from "../../redux/action-type";

export function addToCart(item) {
    const {add} = cartActionTypeCreator(CART_ACTION);
    return  function(dispatch) {
        dispatch(   {
            type: add,
            payload:{ item , qty:1}
        });
}
}


export function removeFromCart(item,qty) {
    const {remove} = cartActionTypeCreator(CART_ACTION);
    return function(dispatch) {

        dispatch({
            type: remove,
            payload : {item,qty},
        });
    }
}

export function updateCart(item,qty) {
    const {update} = cartActionTypeCreator(CART_ACTION);
    return function(dispatch) {

        dispatch({
            type: update,
            payload :{item,qty},
        });
    }
}

