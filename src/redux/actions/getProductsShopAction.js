import { getProducts } from "../../Data/ApiCalls/Products/getProductsShop";
import { createActionType, PRODUCT_ACTION } from "../action-type";

function getProductsShop(){
    const {initial} = createActionType(PRODUCT_ACTION);
    return async function (dispatch) {
        try{
            const result = await getProducts();
            dispatch({
                type: initial,
                products: result.data
            });

        }catch(e){

        }
    }
}

export {
    getProductsShop
};