import { modalLoginType, MODAL_DETAIL_VIEW, MODAL_LOGIN_ACTION, MODAL_SIGNIN_ACTION } from "../action-type"

export const modalLogin = (state) =>{
    const {show} = modalLoginType(MODAL_LOGIN_ACTION);
    return function(dispatch) {
        dispatch({
            type: show,
            show : state
        });
    }


}

export const modalSignIn = (state) =>{
    const {show} = modalLoginType(MODAL_SIGNIN_ACTION);
    return function(dispatch) {
        dispatch({
            type: show,
            show : state
        });
    }


}


export const modalDetailView = (state,content) =>{
    const {show} = modalLoginType(MODAL_DETAIL_VIEW);
    return function(dispatch) {
        dispatch({
            type: show,
            show : state,
            content: content,
        });
    }


}