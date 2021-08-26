import { api } from "../../../config/api";
import axios from 'axios';

async function getProfileData() {
    let url = `${api.root}${api.profile}`;
    try {
        const result = await axios.get(url);
        return result;
    }
    catch (e) {
        return e;
    }

}

export {
    getProfileData
};
