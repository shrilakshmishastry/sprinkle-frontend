const initialState ={
    productsAtCart : [],
    totalAmount: null,
    deliveryAddress: {
        "addFirstLine": "",
        "addSecondLine":"",
        "city" : "",
        "state" :"",
        "postalCode": null,
    },
    phoneNumber: null,
    name: "",
};

export default function CheckOut(state = initialState,action){
    switch(action.type){
        default: {
            return state;
        }
    }
}