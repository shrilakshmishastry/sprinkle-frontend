import { createActionType, GET_TOP_PRODUCT_LIST_ACTION } from "../action-type"

export function topProducts(type,productsInHomePage){
    return{
        type : type,
        productsInHomePage : productsInHomePage
    };
}

export const getTopProductList = (dispatch,productsInHomePage) =>{
    const {initial} = createActionType(GET_TOP_PRODUCT_LIST_ACTION);
    dispatch(topProducts(initial,productsInHomePage));

}