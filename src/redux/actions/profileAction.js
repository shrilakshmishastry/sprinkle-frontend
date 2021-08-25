// import { removeProfile } from "../../config/api";
import { getProfileData } from "../../Data/ApiCalls/Profile/getProfile";
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