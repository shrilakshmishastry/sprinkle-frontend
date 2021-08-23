import { cartActionTypeCreator, GET_PROFILE_ACTION } from "../action-type";
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
    const {add,remove} = cartActionTypeCreator(GET_PROFILE_ACTION);
    switch(action.type){
        case( add ):{
            let newState = action.userInfo;
            return {userInfo : newState};
        }
        case(remove):{
            return {userInfo :  {
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
            },}
        }
        default: {
            return state;
        }
    }
}