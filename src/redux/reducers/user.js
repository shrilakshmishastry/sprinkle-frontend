import { emptyUserData } from "../../Data/UserProfile/emptyUserData";
import { cartActionTypeCreator, GET_PROFILE_ACTION } from "../action-type";
const initialState ={
      userInfo: emptyUserData,
};

export default function User(state = initialState,action){
    const {add,remove} = cartActionTypeCreator(GET_PROFILE_ACTION);
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
        default: {
            return state;
        }
    }
}