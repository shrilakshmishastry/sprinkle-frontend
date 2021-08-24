import axios from "axios";
import { api } from "../../config/api";

async function addAddressCall(address,user) {
    try{
        const result = axios.post(`${api.root}${api.addAddressCall}`);
        return result;
    }catch(e){
        return e;
    }
}

export { addAddressCall };