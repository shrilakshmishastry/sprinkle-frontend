import axios from "axios";
import { api } from "../../../config/api";

async function placeAnOrder(data) {
    const url = `${api.root}${api["place-an-order"]}`;
    try{
        const result = await axios.post(url,{
            data:data
        });
        console.log(result);
        return result;
    }catch(e){
        return e;
    }

}
export default placeAnOrder;