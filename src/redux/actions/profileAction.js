import { createActionType, GET_PROFILE_ACTION } from "../action-type";

export function getProfile(type,userInfo){
    return {
        type : type,
        userInfo: userInfo
    }
}

export const  getProfileInitialData = (dispatch) => {

    const {initial} = createActionType(GET_PROFILE_ACTION);
  dispatch(getProfile(initial,{
        "id": 1,
        "name" : "shri",
        "email" : "shri@gmail.com",
        "phoneNumber" : null,
        "address":[ {
            "addFirstLine": "",
            "addSecondLine":"",
            "city" : "",
            "state" :"",
            "postalCode": null,
        }],
    },));

}