import { emptyUserData } from "../../Data/UserProfile/emptyUserData";
import { cartActionTypeCreator, GET_PROFILE_ACTION } from "../action-type";

const initialState ={
      userInfo: emptyUserData,
};

export default function User(state = initialState,action){
    const {add,remove,update} = cartActionTypeCreator(GET_PROFILE_ACTION);
    switch(action.type){
        case( add ):{
            let newState = action.userInfo;
            return {userInfo : newState};
        }
        case(remove):{
            return {
                userInfo :  emptyUserData
            }
        }
        case(update):{

            let newState = state;
            if(action.address){
                newState.userInfo.address.push(action.address);
            }
            if(action.userInfo){

                let userInfo = action.userInfo;
                console.log(userInfo);
                newState.userInfo.name = userInfo.name;
                newState.userInfo.email = userInfo.email;
                newState.userInfo.phoneNumber = userInfo.phoneNumber;
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}