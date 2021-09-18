import { api, createRequest } from "../../../config/api";

 async function getCart(){
    const url = `${api.root}${api.cart}`;
    try{
        const result = await createRequest().get(url);
        return result;
    }catch(e){
        return e;
    }
}

async function addToCartItems(item,qty) {
    const url = `${api.root}${api.cart}`;
    try{
        const result = await createRequest().post(url,{
            item
        });
        return result;
    }catch(e){

        return e;
    }
}

async function updateCartItem(item) {
    const url = `${api.root}${api.cart}/${item._id}`;
    try{
        const result = await createRequest().post(url,{
            item
        });
        return result;
    }catch(e){
        return e;
    }
}

async function removeCartItem(item) {
    const url = `${api.root}${api.cart}/${item._id}`;
    try{
        const result = await createRequest().delete(url,{
            item
        });
        return result;
    }catch(e){
        return e;
    }
}

export {
    getCart,
    addToCartItems,
    updateCartItem,
    removeCartItem
};