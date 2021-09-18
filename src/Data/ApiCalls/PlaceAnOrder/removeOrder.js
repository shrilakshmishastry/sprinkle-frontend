import axios from "axios";
import { api } from "../../../config/api";

async function removeOrder(data) {
    const url = `${api.root}${api["remove-order"]}`;
    try{
        const result = await axios.post(url,{
            data:data
        });
        return result;
    }catch(e){
        return e;
    }

}
export default removeOrder;