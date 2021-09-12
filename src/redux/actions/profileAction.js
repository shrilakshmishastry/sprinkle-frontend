// import { removeProfile } from "../../config/api";
import { getProfileData } from "../../Data/ApiCalls/Profile/getProfile";
import { updateProfile } from "../../Data/ApiCalls/Profile/updateProfile";
import { emptyUserData } from "../../Data/UserProfile/emptyUserData";
import { cartActionTypeCreator, GET_PROFILE_ACTION } from "../action-type";


export const  getProfileInitialData = () => {

    const {add} = cartActionTypeCreator(GET_PROFILE_ACTION);


    return async function(dispatch){

            const result = await getProfileData();

            if(result === "Error"){
                dispatch({
                    type:add,
                    payload: emptyUserData
                });
            }else{

                dispatch({
                    type:add,
                    payload: result.data.info
                });
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


export const updateProfileAction = (userInfo,callBack) =>{
    const {update} = cartActionTypeCreator(GET_PROFILE_ACTION);

    return async function(dispatch){

            const result = await updateProfile(userInfo);

            if(result && result.status === 200){
                 window.localStorage.clear();
                const data = result.data;

                window.localStorage.setItem('access-token',data["access-token"]);
                dispatch(
                {
                    type: update,
                    payload: data.info,
                }
            );

            }if(result.response
                && result.response.status === 500
                && result.response.data
                && result.response.data.message
                ){
                callBack(result.response.data.message)
            }

    }
}