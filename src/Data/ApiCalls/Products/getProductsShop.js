import { api, createRequest } from "../../../config/api";


async function getProducts() {
    let url = `${api.root}${api["get-item"]}`;
    try{
        const result = await createRequest().get(url);
        return result;
    }catch(e){
        return e;
    }
}

export {
    getProducts
}