import { createActionType, GET_TOP_PRODUCT_LIST_ACTION} from "../action-type";
const initialState ={
    productsInHomePage : [],
};

export default function HomePage(state = initialState,action){
    const {initial} = createActionType(GET_TOP_PRODUCT_LIST_ACTION);

    switch(action.type){
        case(initial):{
            return { productsInHomePage :action.productsInHomePage };

        }
        default: {
            return state;
        }
    }
}