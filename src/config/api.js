import axios from "axios";
const api = {
    "root": " http://localhost:3600",
    "profile": "/user-info",
    "top-products": "/top-products",
    "get-item": "/products-list"
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

async function getItem(id, qty, pack_of) {
    let queryStr = api["get-item"] + "?id=" + id + "&qty=" + qty + "&pack_of=" + pack_of;
    try {
        const result = await axios.get(api.root.concat(queryStr));
        console.log(result);
    } catch (e) {
        throw console.error(e);
    }
}



export {
    api,
    getProfileData,
    getTopProducts,
    getItem
};