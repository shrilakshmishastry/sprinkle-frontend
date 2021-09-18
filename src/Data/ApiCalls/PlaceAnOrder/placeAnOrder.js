import { api, createRequest } from "../../../config/api";

async function placeAnOrder(data) {
    const url = `${api.root}${api["place-an-order"]}`;
    try{
        const result = await createRequest().post(url,{
            data:data
        });
        return result.data;
    }catch(e){

        console.log(e.response.data.e.message);
        return e.response.data.e.message;
    }

}
export default placeAnOrder;