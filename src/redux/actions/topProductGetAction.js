import { getTopProducts } from "../../Data/ApiCalls/Products/getTopProduct.js";
import {createActionType, GET_TOP_PRODUCT_LIST_ACTION  } from "../action-type.js";

const getProductListOfHome = ()=>{
    const {initial} = createActionType(GET_TOP_PRODUCT_LIST_ACTION);
    return async function(dispatch) {
        try{
            const result = await getTopProducts();
            dispatch({
                type: initial,
                productsInHomePage: result.data
            });
        }catch(e){
            dispatch({
                type: initial,
                productsInHomePage: []
            });
        }
    }
};
export {
    getProductListOfHome
};