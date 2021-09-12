import { cartActionTypeCreator, CART_ACTION } from "../action-type";

const initialState ={
    productsAtCart : [],
    qty:[]
};

export default function CheckOut(state = initialState,action){

    const {initial,add,remove,update} = cartActionTypeCreator(CART_ACTION);

    switch(action.type){
        case(initial):{

            const newState = {
                productsAtCart:action.payload.item,
                qty:action.payload.qty
            };

            return  newState;

        }
        case(add):{

            const newState = {...state,
                productsAtCart:[...state.productsAtCart,action.payload.item],
                qty:[ ...state.qty,action.payload.qty ]
            };

            return  newState;

        }
        case(remove):{
            let newState = {...state,
                productsAtCart:action.payload.item,
                qty: action.payload.qty
            };
            return  newState;
        }
        case(update) : {
            const newState = {
                ...state,
                productsAtCart: action.payload.item,
                qty: action.payload.qty
            };
        return newState;
        }
        default: {
            return state;
        }
    }
}