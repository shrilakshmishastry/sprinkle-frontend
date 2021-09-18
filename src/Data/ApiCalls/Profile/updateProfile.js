import { api, createRequest } from "../../../config/api";

async function updateProfile(userData) {
    const url = `${api.root}${api["update-profile"]}`;
    try {

        const result = await createRequest().post(url, {
            userData
        });
        return result;
    } catch (e) {
        return e;
    }


}
export { updateProfile };