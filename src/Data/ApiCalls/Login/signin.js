import { api, createRequest } from '../../../config/api';

async function signInHandler(data) {
    const url = `${api.root}${api.signup}`;
    try {
        const result = await createRequest().post(url, { data });
        window.localStorage.setItem("access-token", result.data.accessToken);
        return "success";
    } catch (e) {
        console.log(e);
        return e.response.data;
    }
}

export {
    signInHandler
};