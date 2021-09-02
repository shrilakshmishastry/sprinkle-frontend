import { api, createRequest } from "../../../config/api";


async function getProfileData() {
    let url = `${api.root}${api.profile}`;
    try {
        const result = await createRequest().get(url);
        return result;
    }
    catch (e) {
        return e;
    }

}

export {
    getProfileData
};
