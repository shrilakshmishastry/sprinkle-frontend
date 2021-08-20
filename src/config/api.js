import axios from "axios";
const api = {
    "root": " http://localhost:3600",
    "profile": "/user-info",
    "top-products": "/top-products",
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


export {
    api,
    getProfileData,
    getTopProducts
};