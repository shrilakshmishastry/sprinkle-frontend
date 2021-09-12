import { addToCartItems, getCart, removeCartItem, updateCartItem } from "../../Data/ApiCalls/Cart/cart";
import { cartActionTypeCreator, CART_ACTION } from "../../redux/action-type";

export function getCartItem() {
    const {initial} = cartActionTypeCreator(CART_ACTION);
    return async function (dispatch) {

        const result = await getCart();
        console.log(result);
        if(result && result.status === 200 ){
            const item = result.data.length > 0 ?  result.data[0].item : [];
            const qty = [];
            for(let i =0;i<item.length;i++){
                qty.push(item[i].qty);
            }
            dispatch(   {
                type: initial,
                payload:{ item , qty}
            });
        }
    }
}


export function addToCart(item) {
    const {add} = cartActionTypeCreator(CART_ACTION);
    return async function(dispatch) {
        const qty = 1;
        item["qty"] = 1;
        const result = await addToCartItems(item);
        dispatch(   {
            type: add,
            payload:{ item , qty:1}
        });
}
}


export function removeFromCart(item,qty) {
    const {remove} = cartActionTypeCreator(CART_ACTION);
    return  async function(dispatch) {

        const result = await removeCartItem(item);

        if(result && result.status === 200){
            const {data} = result;

            const items = data.item;

            const item = items.length > 0 ?  items : [];

            const qty = [];
            for(let i =0;i<item.length;i++){
                qty.push(item[i].qty);
            }
             dispatch({
            type: remove,
            payload : {item,qty},
        });
        }

    }
}

export function updateCart(item,qty) {
    const {update} = cartActionTypeCreator(CART_ACTION);
    return async  function(dispatch) {
        item["qty"] = qty;
        const result = await updateCartItem(item);
        if(result && result.status === 200){
            const {data} = result;

            const items = data.item;

            const item = items.length > 0 ?  items : [];

            const qty = [];
            for(let i =0;i<item.length;i++){
                qty.push(item[i].qty);
            }
             dispatch({
            type: update,
            payload : {item,qty},
        });
        }
    }
}


export function clearCart() {
    const {remove} = cartActionTypeCreator(CART_ACTION);
    return function(dispatch) {
        dispatch({
            type: remove,
            payload: {
                item:[],
                qty:[]}
        });
    }
}
