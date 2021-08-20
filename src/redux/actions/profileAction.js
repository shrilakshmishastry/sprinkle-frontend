import { createActionType, GET_PROFILE_ACTION } from "../action-type";

export function getProfile(type,userInfo){
    return {
        type : type,
        userInfo: userInfo
    }
}

export const  getProfileInitialData = (dispatch,data) => {

    const {initial} = createActionType(GET_PROFILE_ACTION);
  dispatch(getProfile(initial,data,));

}