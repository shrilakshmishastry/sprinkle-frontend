import { api, createRequest } from '../../../config/api';

async function loginHandler(email,password) {
    const url = `${api.root}${api.login}`;
    try{
        const result = await createRequest().post(url,{email,password});
        window.localStorage.setItem("access-token", result.data.accessToken);
        return "success";
    }catch(e){
        return e.response.data;
    }
}

export {
    loginHandler
};