import { cartActionTypeCreator, CART_ACTION } from "../action-type";

const initialState ={
    productsAtCart : [],
    qty:[]
};

export default function CheckOut(state = initialState,action){

    const {add,remove,update} = cartActionTypeCreator(CART_ACTION);

    switch(action.type){
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

            let qty  = state.productsAtCart.map((val,index)=>
                val.id === action.payload.item.id ? action.payload.qty : state.qty[index]
            )

            const newState = {...state,qty:qty};
        return newState;
        }
        default: {
            return state;
        }
    }
}