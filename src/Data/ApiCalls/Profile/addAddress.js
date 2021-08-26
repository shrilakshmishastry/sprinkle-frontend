import axios from "axios";
import { api } from "../../../config/api";

async function addAddress(address) {
    const url = `${api.root}${api["add-address"]}`;
    try{
        const result = axios.post(url,{
            address: address
        })
        return result;
    }catch(e){
        return e;
    }

}

export {addAddress};