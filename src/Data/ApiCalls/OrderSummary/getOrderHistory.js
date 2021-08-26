import axios from "axios";
import { api } from "../../../config/api";

const getOrderHistory = async(userInfo) =>{
    // need to send user info
    // I guess cookie can be used to predict user
    let url = `${api.root}${api["order-details"]}`;
    try{
        const result = await axios.get(url);
        return result;
    }catch(e){
        return e;
    }
}
export default getOrderHistory;