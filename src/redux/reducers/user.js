import { emptyUserData } from "../../Data/UserProfile/emptyUserData";
import { cartActionTypeCreator, GET_PROFILE_ACTION } from "../action-type";

const initialState ={
      userInfo: emptyUserData,
};

export default function User(state = initialState,action){
    const {add,remove,update} = cartActionTypeCreator(GET_PROFILE_ACTION);
    switch(action.type){
        case( add ):{
            const userInfo = action.payload;
            const newState = {...state,userInfo};
            return newState;
        }
        case(remove):{
            const newState = { ...state,userInfo:emptyUserData};
            return newState;
        }
        case(update):{
            const userInfo = action.payload;
            const newState ={ ...state,userInfo};
            return newState;
        }
        default: {
            return state;
        }
    }
}