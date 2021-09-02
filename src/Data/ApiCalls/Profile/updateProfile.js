import { api, createRequest } from "../../../config/api";

async function updateProfile(userData) {
    const url = `${api.root}${api["update-profile"]}`;
    try {
        const result = createRequest().post(url, {
            userData
        });
        console.log(result);
        return result;
    } catch (e) {
        return e;
    }


}
export { updateProfile };