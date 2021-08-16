const initialState ={
      userInfo: {
          "name" : "",
          "email" : "",
          "phoneNumber" : null,
          "address": {
              "addFirstLine": "",
              "addSecondLine":"",
              "city" : "",
              "state" :"",
              "postalCode": null,
          },
      },
};

export default function User(state = initialState,action){
    switch(action.type){
        default: {
            return state;
        }
    }
}