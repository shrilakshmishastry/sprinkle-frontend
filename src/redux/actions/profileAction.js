// import { removeProfile } from "../../config/api";
import { loginHandler } from "../../Data/ApiCalls/Login/login";
import { addAddress } from "../../Data/ApiCalls/Profile/addAddress";
import { getProfileData } from "../../Data/ApiCalls/Profile/getProfile";
import { updateProfile } from "../../Data/ApiCalls/Profile/updateProfile";
import { emptyUserData } from "../../Data/UserProfile/emptyUserData";
import { cartActionTypeCreator, GET_PROFILE_ACTION } from "../action-type";


export const  getProfileInitialData = () => {
    const {add} = cartActionTypeCreator(GET_PROFILE_ACTION);
    return async function(dispatch){
        try{
            const result = await getProfileData();

            dispatch({
                type:add,
                userInfo: result.data
            });
        }catch(e){
            //ask what I should do?
        }
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
                userInfo: emptyUserData
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
                    address: address,
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
            // const result = await updateProfile(userInfo);
            dispatch(
                {
                    type: update,
                    userInfo: userInfo,
                }
            );

        }catch(e){
            //what to do here?
            console.error(e);
        }
    }
}