import { api,createRequest } from '../../../config/api';

async function signInHandler(data) {
    const url = `${api.root}${api.signup}`;
    try{
        const result = await createRequest().post(url,{data});
        return result;
    }catch(e){
        return e;
    }
}

export {
    signInHandler
};