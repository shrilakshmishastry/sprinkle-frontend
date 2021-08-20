export  const GET_PROFILE_ACTION = "GET_PROFILE";
export const GET_TOP_PRODUCT_LIST_ACTION ="GET_TOP_PRODUCT";


export function createActionType(type){
    return {
        initial: type,
    }
}