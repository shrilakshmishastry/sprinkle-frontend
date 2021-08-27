import axios from "axios";
import { api } from "../../../config/api";

async function updateProfile(userData) {
    const url = `${api.root}${api["update-profile"]}`;
    try {
        const result = axios.post(url, {
            userData
        });
        return result;
    } catch (e) {
        return e;
    }


}
export { updateProfile };