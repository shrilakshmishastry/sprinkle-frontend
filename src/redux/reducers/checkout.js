import { cartActionTypeCreator, CART_ACTION } from "../action-type";

const initialState ={
    productsAtCart : [],
};

export default function CheckOut(state = initialState,action){
    const {add,remove} = cartActionTypeCreator(CART_ACTION);

    switch(action.type){
        case(add):{
            let newState = state;
            newState.productsAtCart.push(action.productsAtCart);
            return newState;

        }
        case(remove):{
            break;
        }
        default: {
            return state;
        }
    }
}