// import { removeProfile } from "../../config/api";
import { cartActionTypeCreator, GET_PROFILE_ACTION } from "../action-type";

export function getProfile(type,userInfo){
    return {
        type : type,
        userInfo: userInfo
    }
}

export const  getProfileInitialData = (dispatch,data) => {
    const {add} = cartActionTypeCreator(GET_PROFILE_ACTION);
  dispatch(getProfile(add,data,));
}

export const removeProfileData = (dispatch,data) =>{
    const {remove} = cartActionTypeCreator(GET_PROFILE_ACTION);
    try{
        // removeProfile(data);
        dispatch(getProfile(remove,{}))
    }catch(e){
        console.error(e);
    }
}