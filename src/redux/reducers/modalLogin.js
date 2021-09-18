import { modalLoginType, MODAL_DETAIL_VIEW, MODAL_LOGIN_ACTION, MODAL_SIGNIN_ACTION } from "../action-type";

const initialState = {
    show : false
};

const initialStateDetailedView = {
    show: false,
    content : {}
};

const modalLogin = (state = initialState,action) =>{
    const {show} = modalLoginType(MODAL_LOGIN_ACTION);
    switch(action.type){
        case(show):{
            return {
                show : action.show
            }
        }
        default:{
            return state;
        }
    }
}

const modalSignin = (state = initialState,action) =>{
    const {show} = modalLoginType(MODAL_SIGNIN_ACTION);
    switch(action.type){
        case(show):{
            return {
                show : action.show
            }
        }
        default:{
            return state;
        }
    }
}

const modalDetailView = (state =  initialStateDetailedView,action) =>{
    const {show} = modalLoginType(MODAL_DETAIL_VIEW);
    switch(action.type){
        case(show):{
            return {
                show : action.show,
                content : action.content
            }
        }
        default:{
            return state;
        }
    }
}



export {
    modalLogin,
    modalSignin,
    modalDetailView
};