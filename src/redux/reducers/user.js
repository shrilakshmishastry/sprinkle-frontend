import { createActionType, GET_PROFILE_ACTION } from "../action-type";
const initialState ={
      userInfo: {
          "id": null,
          "name" : "",
          "email" : "",
          "phoneNumber" : null,
          "address":[ {
              "addFirstLine": "",
              "addSecondLine":"",
              "city" : "",
              "state" :"",
              "postalCode": null,
          }],
      },
};

export default function User(state = initialState,action){
    const {initial} = createActionType(GET_PROFILE_ACTION);
    switch(action.type){
        case( initial  ):{
            let newState = action.userInfo;
            return {userInfo : newState};
        }
        default: {
            return state;
        }
    }
}