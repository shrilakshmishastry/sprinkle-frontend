import axios from 'axios';
import { api } from '../../../config/api';

async function signInHandler(data) {
    const url = `${api.root}${api.signup}`;
    try{
        const result = await axios.post(url,{data});
        return result;
    }catch(e){
        return e;
    }
}

export {
    signInHandler
};