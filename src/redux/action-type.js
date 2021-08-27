export  const GET_PROFILE_ACTION = "GET_PROFILE";
export const MODAL_LOGIN_ACTION = "MODAL_LOGIN";
export const MODAL_SIGNIN_ACTION = "MODAL_SOGNIN_ACTION"
export const GET_TOP_PRODUCT_LIST_ACTION ="GET_TOP_PRODUCT";
export const CART_ACTION = "CART_ACTION";
export const PRODUCT_ACTION = "PRODUCT_ACTION";

export function cartActionTypeCreator(type) {
    return {
        add : type + "add",
        remove : type + "remove",
        update: type + "update",
    };
}

export function createActionType(type){
    return {
        initial: type,
    }
}

export function modalLoginType(type) {
    return{
        show :type
    }
}