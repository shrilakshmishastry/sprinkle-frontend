import axios from 'axios';
import { api } from '../../../config/api';

async function loginHandler(email,password) {
    const url = `${api.root}${api.login}`;
    try{
        const result = await axios.post(url,{email,password});
        return result;
    }catch(e){
        return e;
    }
}

export {
    loginHandler
};