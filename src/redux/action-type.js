export  const GET_PROFILE_ACTION = "GET_PROFILE";
export const GET_TOP_PRODUCT_LIST_ACTION ="GET_TOP_PRODUCT";
export const CART_ACTION = "CART_ACTION";

export function cartActionTypeCreator(type) {
    return {
        add : type + "add",
        remove : type + "remove"
    };
}

export function createActionType(type){
    return {
        initial: type,
    }
}