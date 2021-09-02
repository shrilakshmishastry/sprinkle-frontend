// import { removeProfile } from "../../config/api";
import { loginHandler } from "../../Data/ApiCalls/Login/login";
import { addAddress } from "../../Data/ApiCalls/Profile/addAddress";
import { getProfileData } from "../../Data/ApiCalls/Profile/getProfile";
import { updateProfile } from "../../Data/ApiCalls/Profile/updateProfile";
import { emptyUserData } from "../../Data/UserProfile/emptyUserData";
import { cartActionTypeCreator, GET_PROFILE_ACTION } from "../action-type";


export const  getProfileInitialData = () => {

    const {add} = cartActionTypeCreator(GET_PROFILE_ACTION);
    console.log("hello");
    return async function(dispatch){
        try{
            const result = await getProfileData();
            console.log(result);
            if(result.status === 204){
                dispatch({
                    type:add,
                    payload: emptyUserData
                });
            }else{
                console.log("success");
                dispatch({
                    type:add,
                    payload: result.data.info
                });
            }

        }catch(e){
            console.log(e);
            //ask what I should do?
        }
    }

}



export const  signUpAction = () => {

    const {add} = cartActionTypeCreator(GET_PROFILE_ACTION);
    return function(dispatch){

    }

}




export const removeProfileData = (data) =>{
    const {remove} = cartActionTypeCreator(GET_PROFILE_ACTION);
    console.log(data);
    return async function (dispatch) {
        try{
            // removeProfile(data);
            dispatch({
                type: remove,
                payload: emptyUserData
            })
        }catch(e){
            console.error(e);
        }
    }

}

export const addNewAddress = (address) =>{
    const {update} = cartActionTypeCreator(GET_PROFILE_ACTION);

    return async function(dispatch){
        try{
            // const result = await addAddress();

            dispatch(
                {
                    type: update,
                    payload: address,
                }
            );

        }catch(e){
            //what to do here?
            console.error(e);
        }
    }
}

export const updateProfileAction = (userInfo) =>{
    const {update} = cartActionTypeCreator(GET_PROFILE_ACTION);

    return async function(dispatch){
        try{
            const result = await updateProfile(userInfo);
            dispatch(
                {
                    type: update,
                    payload: result.data.info,
                }
            );

        }catch(e){
            //what to do here?
            console.error(e);
        }
    }
}