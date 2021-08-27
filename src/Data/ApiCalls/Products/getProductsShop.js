import { api } from "../../../config/api";
import axios from "axios";

async function getProducts() {
    let url = `${api.root}${api["get-item"]}`;
    try{
        const result = axios.get(url);
        return result;
    }catch(e){
        return e;
    }
}

export {
    getProducts
}