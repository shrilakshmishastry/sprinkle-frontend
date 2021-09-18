import { createActionType, PRODUCT_ACTION } from "../action-type";

const initialState ={
    productsList : [],
};

export default function Products(state = initialState,action){
    const {initial} = createActionType(PRODUCT_ACTION);
    switch(action.type){
        case(initial):{
            return {
                productsList : action.products
            };
        }
        default: {
            return state;
        }
    }
}