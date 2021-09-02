import axios from "axios";
const api = {
    "root": " http://localhost:5000",
    "profile": "/user-info",
    "top-products": "/top-products",
    "get-item": "/products",
    "login" : "/login",
    "signup" :"/signup",
    "add-address" : "/address",
    "place-an-order" : "/order-summary",
    "order-details" : "/order-summary",
    "remove-order" : "/order-summary",
    "update-profile":"/user-info"
};

export function createRequest(){
    const accessToken = window.localStorage.getItem("access-token");
    const instance = axios.create();
    console.log(accessToken);
    if(accessToken){
        instance.defaults.headers.common['Authorization'] = accessToken;
    }

    return instance;
}

export {
    api,
};