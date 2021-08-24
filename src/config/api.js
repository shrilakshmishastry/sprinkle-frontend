import axios from "axios";
const api = {
    "root": " http://localhost:3600",
    "profile": "/user-info",
    "top-products": "/top-products",
    "get-item": "/products-list",
    "login" : "/login",
    "add-address" : "/address"
};

// function to fetch  user data initally

async function getProfileData() {
    try {
        const result = await axios.get(api.root.concat(api.profile));
        return result;
    }
    catch (e) {
        console.log(e);
        throw console.error(e);
    }

}

// function to fetch top products

async function getTopProducts() {
    try {
        const result = await axios.get(api.root.concat(api["top-products"]));

        return result;
    } catch (e) {
        console.log(e);
        throw console.error(e);
    }
}


// function to get products for shop
async function getItem(id, qty, pack_of) {
    let queryStr = api["get-item"] + "?id=" + id + "&qty=" + qty + "&pack_of=" + pack_of;
    try {
        const result = await axios.get(api.root.concat(queryStr));
        console.log(result);
        return result;
    } catch (e) {
        throw console.error(e);
    }
}

// function to logout user

async function removeProfile(userData) {
    try{
        const result = await axios.post(api.root.concat(api.profile),userData)
        return result;

    }catch(e){
        throw console.error(e);
    }
}

// function to handle login

async function loginHandler(email,password) {
    const url = api.root + api.login;
    try{
        const result = await axios.post(url,{email,password});
        return result;
    }catch(e){
        return e;
    }
}

export {
    api,
    getProfileData,
    getTopProducts,
    getItem,
    removeProfile,
    loginHandler
};