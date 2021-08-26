import { cartActionTypeCreator, CART_ACTION } from "../action-type";

const initialState ={
    productsAtCart : [],
    qty:[]
};

export default function CheckOut(state = initialState,action){

    const {add,remove,update} = cartActionTypeCreator(CART_ACTION);

    switch(action.type){
        case(add):{
            console.log(state);
            let newState = state;
            newState.productsAtCart.push(action.productsAtCart);
            newState.qty.push(1);
            return  newState;

        }
        case(remove):{
            let newState = state;
            newState.productsAtCart = action.item;
            newState.qty = action.qty;
            return  {
                productsAtCart : action.item,
                qty: action.qty
            };
        }
        case(update) : {
         
            let qty  = state.productsAtCart.map((val,index)=>
                val.id === action.item.id ? action.qty : state.qty[index]
            )

            const newState = state;
            newState.qty = qty;
        return newState;
        }
        default: {
            return state;
        }
    }
}